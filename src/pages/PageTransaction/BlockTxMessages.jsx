import React from 'react';
import styles from './BlockTxMessages.module.scss';
import { MessageIcon } from '../../application/AppIcons';
import MsgExec from './Msgs/MsgExec';
import MsgSend from './Msgs/MsgSend';
import MsgSwap from './Msgs/MsgSwap';
import MsgVote from './Msgs/MsgVote';
import MsgUnjail from './Msgs/MsgUnjail';
import MsgDeposit from './Msgs/MsgDeposit';
import MsgDelegate from './Msgs/MsgDelegate';
import MsgSwapSend from './Msgs/MsgSwapSend';
import MsgTransfer from './Msgs/MsgTransfer';
import MsgStoreCode from './Msgs/MsgStoreCode';
import MsgClearAdmin from './Msgs/MsgClearAdmin';
import MsgUndelegate from './Msgs/MsgUndelegate';
import MsgUpdateAdmin from './Msgs/MsgUpdateAdmin';
import MsgUpdateClient from './Msgs/MsgUpdateClient';
import MsgSubmitProposal from './Msgs/MsgSubmitProposal';
import MsgAcknowledgement from './Msgs/MsgAcknowledgement';
import MsgBeginRedelegate from './Msgs/MsgBeginRedelegate';
import MsgCreateValidator from './Msgs/MsgCreateValidator';
import MsgExecuteContract from './Msgs/MsgExecuteContract';
import MsgMigrateContract from './Msgs/MsgMigrateContract';
import MsgFundCommunityPool from './Msgs/MsgFundCommunityPool';
import MsgGrantAuthorization from './Msgs/MsgGrantAuthorization';
import MsgSetWithdrawAddress from './Msgs/MsgSetWithdrawAddress';
import MsgInstantiateContract from './Msgs/MsgInstantiateContract';
import MsgModifyWithdrawAddress from './Msgs/MsgModifyWithdrawAddress';
import MsgWithdrawDelegatorReward from './Msgs/MsgWithdrawDelegatorReward';
import MsgAggregateExchangeRateVote from './Msgs/MsgAggregateExchangeRateVote';
import MsgWithdrawValidatorCommission from './Msgs/MsgWithdrawValidatorCommission';
import MsgAggregateExchangeRatePrevote from './Msgs/MsgAggregateExchangeRatePrevote';

const BlockTxMessages = (props) => {

    
    return (
        <div className={"boxContainer " + styles.messagesBlock}>
            <p className="h2like"><MessageIcon /><span>Operation {props.idxElement}/{props.nbElements} : <strong>{props.txMessage['MsgDesc']}</strong></span></p>
            <table className={styles.tblMessages}>
                <tbody>
                    {props.txMessage['MsgType'] === 'MsgSend' ? <MsgSend txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgAggregateExchangeRateVote' ? <MsgAggregateExchangeRateVote txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgAggregateExchangeRatePrevote' ? <MsgAggregateExchangeRatePrevote txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgVote' ? <MsgVote txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgWithdrawDelegatorReward' ||
                     props.txMessage['MsgType'] === 'MsgWithdrawDelegationReward'  ? <MsgWithdrawDelegatorReward txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgWithdrawValidatorCommission' ? <MsgWithdrawValidatorCommission txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgExecuteContract' ? <MsgExecuteContract txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgDelegate' ? <MsgDelegate txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgUndelegate' ? <MsgUndelegate txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgBeginRedelegate' ? <MsgBeginRedelegate txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgSubmitProposal' ? <MsgSubmitProposal txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgDeposit' ? <MsgDeposit txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgFundCommunityPool' ? <MsgFundCommunityPool txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgUpdateClient' ? <MsgUpdateClient txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgAcknowledgement' ? <MsgAcknowledgement txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgExec' ||
                     props.txMessage['MsgType'] === 'MsgExecAuthorized' ? <MsgExec txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgInstantiateContract' ? <MsgInstantiateContract txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgUnjail' ? <MsgUnjail txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgTransfer' ? <MsgTransfer txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgCreateValidator' ? <MsgCreateValidator txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgGrantAuthorization' ||
                     props.txMessage['MsgType'] === 'MsgGrant' ? <MsgGrantAuthorization txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgStoreCode' ? <MsgStoreCode txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgMigrateContract' ? <MsgMigrateContract txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgSetWithdrawAddress' ? <MsgSetWithdrawAddress txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgClearAdmin' ? <MsgClearAdmin txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgModifyWithdrawAddress' ? <MsgModifyWithdrawAddress txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgSwap' ? <MsgSwap txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgUpdateAdmin' ? <MsgUpdateAdmin txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgSwapSend' ? <MsgSwapSend txMessage={props.txMessage} /> : null}
                </tbody>
            </table>
        </div>
    );
};

export default BlockTxMessages;