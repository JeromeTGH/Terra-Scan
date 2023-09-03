import { tblBlocks, tblValidators } from "../../application/AppData";
import { tblCorrespondanceMessages } from "../../application/AppParams";
import { FCDclient } from "../../fcd/FCDclient";
import { BlockInfo } from "../../fcd/classes/BlockInfo";


export const getBlockInfo = async (blockNum) => {
    
    // Interroge le FCD, seulement si ce bloc n'a pas déjà été téléchargé en mémoire, précédemment
    if(!tblBlocks[blockNum.toString()] || !tblBlocks[blockNum.toString()].txs) {

        // Récupération du singleton de la classe FCDclient
        const fcd = FCDclient.getSingleton();

        // Récupération des infos concernant le block recherché
        const rawBlockInfo = await fcd.tendermint.getBlockInfos(blockNum).catch(handleError);
        if(rawBlockInfo) {
            const blockInfo = BlockInfo.extractFromTendermintBlockInfos(rawBlockInfo);    

            // Analyse/synthèse des transactions de ce block
            const tblTxs = [];
            for(const tx of blockInfo.txs) {

                // Description de la transaction (type : MsgDelegate, MsgSend, ..., sinon Multiple...)
                const tx_type = (tx.tx.value.msg.length === 1 ?
                            tx.tx.value.msg[0].type.split('/')[1]
                            : 'Multiple (' + tx.tx.value.msg.length + ' messages)');

                // Détermination des "from" et "to", récupération d'autres infos "intéressantes" dans la foulée
                let tx_from_account = '';
                let tx_from_name = '';
                let tx_from_valoper = '';
                let tx_to_account = '';
                let tx_to_name = '';
                let tx_to_valoper = '';
                let proposal_id = '';
                let vote_choice = '';
                let tx_description = '';
                if(tx_type.includes("Msg")) {
                    tx_description = tblCorrespondanceMessages[tx_type] ? tblCorrespondanceMessages[tx_type] : tx_type;
                    switch (tx_type) {
                        case 'MsgSend':
                            tx_from_account = tx.tx.value.msg[0].value.from_address;
                            tx_to_account = tx.tx.value.msg[0].value.to_address;
                            break;
                        case 'MsgDelegate':
                            tx_from_account = tx.tx.value.msg[0].value.delegator_address;
                            tx_to_valoper = tx.tx.value.msg[0].value.validator_address;
                            tx_to_name = tblValidators[tx_to_valoper] ? tblValidators[tx_to_valoper].description_moniker : 'unknown';
                            break;
                        case 'MsgUndelegate':
                            tx_from_valoper = tx.tx.value.msg[0].value.validator_address;
                            tx_from_name = tblValidators[tx_from_valoper] ? tblValidators[tx_from_valoper].description_moniker : 'unknown';
                            tx_to_account = tx.tx.value.msg[0].value.delegator_address;
                            break;
                        case 'MsgTransfer':
                            tx_from_account = tx.tx.value.msg[0].value.sender;
                            tx_to_account = tx.tx.value.msg[0].value.receiver;
                            break;
                        case 'MsgBeginRedelegate':
                            tx_from_account = tx.tx.value.msg[0].value.delegator_address;
                            tx_to_valoper = tx.tx.value.msg[0].value.validator_dst_address;
                            tx_to_name = tblValidators[tx_to_valoper] ? tblValidators[tx_to_valoper].description_moniker : 'unknown';
                            break;
                        case 'MsgVote':
                            tx_from_account = tx.tx.value.msg[0].value.voter;
                            proposal_id = tx.tx.value.msg[0].value.proposal_id;
                            vote_choice = tx.tx.value.msg[0].value.option;
                            break;
                        case 'MsgWithdrawDelegatorReward':          // variance 'MsgWithdrawDelegationReward' trouvée dans bloc #9106141 et 13492618, par exemple
                        case 'MsgWithdrawDelegationReward':
                            tx_from_valoper = tx.tx.value.msg[0].value.validator_address;
                            tx_from_name = tblValidators[tx_from_valoper] ? tblValidators[tx_from_valoper].description_moniker : 'unknown';
                            tx_from_account = tblValidators[tx_from_valoper] ? tblValidators[tx_from_valoper].terra1_account_address : 'unknown';
                            tx_to_account = tx.tx.value.msg[0].value.delegator_address;
                            break;
                        case 'MsgWithdrawValidatorCommission':
                            tx_from_valoper = tx.tx.value.msg[0].value.validator_address;
                            tx_from_name = tblValidators[tx_from_valoper] ? tblValidators[tx_from_valoper].description_moniker : 'unknown';
                            tx_from_account = tblValidators[tx_from_valoper] ? tblValidators[tx_from_valoper].terra1_account_address : 'unknown';
                            tx_to_valoper = tx_from_valoper;
                            tx_to_name = tx_from_name;
                            tx_to_account = tx_from_account;
                            break;
                        case 'MsgAggregateExchangeRateVote':
                            break;
                        case 'MsgAggregateExchangeRatePrevote':
                            break;
                        case 'MsgExecuteContract':
                            break;
                        case 'MsgSubmitProposal':
                            break;
                        case 'MsgDeposit':
                            break;
                        case 'MsgFundCommunityPool':
                            break;
                        case 'MsgUpdateClient':
                            break;
                        case 'MsgAcknowledgement':
                            break;
                        case 'MsgExecAuthorized':
                            break;
                        case 'MsgInstantiateContract':
                            break;
                        case 'MsgUnjail':
                            break;
                        default:
                            break;
                    }
                }


                // Renseignement validateur, s'il s'agit de son compte (côté sender ou receiver)
                if(tx_from_valoper === '') {
                    const isSenderValidatorAccount = Object.entries(tblValidators).find(lg => lg[1].terra1_account_address === tx_from_account);
                    if(isSenderValidatorAccount) {
                        tx_from_name = isSenderValidatorAccount[1].description_moniker;
                        tx_from_valoper = isSenderValidatorAccount[0];
                    }
                }
                if(tx_to_valoper === '') {
                    const isReceiverValidatorAccount = Object.entries(tblValidators).find(lg => lg[1].terra1_account_address === tx_to_account);
                    if(isReceiverValidatorAccount) {
                        tx_to_name = isReceiverValidatorAccount[1].description_moniker;
                        tx_to_valoper = isReceiverValidatorAccount[0];
                    }
                }


                // Création d'un objet représentant la synthèse de cette transaction
                const objTx = {
                    'tx_hash': tx.txhash,
                    'tx_status': tx.code,
                    'tx_type': tx_type,
                    'tx_description': tx_description,
                    'tx_from_account': tx_from_account,
                    'tx_from_name': tx_from_name,
                    'tx_from_valoper': tx_from_valoper,
                    'tx_to_account': tx_to_account,
                    'tx_to_name': tx_to_name,
                    'tx_to_valoper': tx_to_valoper,
                    'proposal_id': proposal_id,
                    'vote_choice': vote_choice
                }
                tblTxs.push(objTx);
            }


            // Structure :
            //      tblBlocks["height"] = {
            //          nb_tx,
            //          validator_moniker,
            //          validator_address,
            //          datetime,
            //          optional txs [] of {
            //              tx_hash,
            //              tx_status,
            //              tx_type,
            //              tx_description,
            //              tx_from_account,
            //              tx_from_name,
            //              tx_from_valoper,
            //              tx_to_account,
            //              tx_to_name,
            //              tx_to_valoper,
            //              proposal_id,
            //              vote_choice
            //          }
            //      }
            tblBlocks[blockNum.toString()] = {
                'nb_tx': blockInfo.txs.length,
                'validator_moniker': blockInfo.proposer.moniker,
                'validator_address': blockInfo.proposer.operatorAddress,
                'datetime': blockInfo.timestamp,
                'txs': tblTxs
            }
        } else
            return { "erreur": "Failed to fetch [block " +  + "] ..." }
    }


    // Envoie du "block height" recherché, pour signifier qu'il n'y a pas eu d'erreur
    return blockNum;
}


const handleError = (err) => {
    if(err.response && err.response.data)
        console.warn("err.response.data", err.response.data);
    else
        console.warn("err", err);
}