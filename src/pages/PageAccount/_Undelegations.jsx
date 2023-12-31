import React, { useEffect, useState } from 'react';
import styles from './_Undelegations.module.scss';
import { getUndelegations } from './getUndelegations';
import { Link } from 'react-router-dom';
import { tblValidators } from '../../application/AppData';
import { expanded_datetime_ago, metEnFormeAmountPartieEntiere, metEnFormeDateTime, retournePartieDecimaleFixed6 } from '../../application/AppUtils';
import StyledBox from '../../sharedComponents/StyledBox';

const Undelegations = (props) => {

    // Variables
    const [isLoading, setIsLoading] = useState(true);
    const [tblUndelegations, setTblUndelegations] = useState();
    const [msgErreur, setMsgErreur] = useState();
    
    const [idxUndelegationToShow, setIdxUndelegationToShow] = useState(0);
    const [tblUndelegation, setTblUndelegation] = useState();


    // Exécution au chargement de ce component, et à chaque changement de "accountAddress"
    useEffect(() => {
        setIsLoading(true);
        setIdxUndelegationToShow(0);
        setTblUndelegation([]);

        // Récupération des undelegations ce compte
        getUndelegations(props.accountAddress).then((res) => {
            if(res['erreur']) {
                setTblUndelegations(null);
                setIsLoading(false);
                setMsgErreur(res['erreur']);
            }
            else {
                if(res) {
                    setTblUndelegation(res[0]);
                }
                setTblUndelegations(res);
                setIsLoading(false);
                setMsgErreur("");
            }
        })
    }, [props.accountAddress])


    // Changement de tableau à afficher
    useEffect(() => {
        if(tblUndelegations)
            setTblUndelegation(tblUndelegations[idxUndelegationToShow])
        // eslint-disable-next-line
    }, [idxUndelegationToShow])


    // Navigation
    const handleClickOnNavigationButtons = (variation) => {
        if(tblUndelegations) {
            if(variation === 1)
                if((idxUndelegationToShow + 1) < tblUndelegations.length)
                    setIdxUndelegationToShow(idxUndelegationToShow + 1);
            if(variation === -1)
                if((idxUndelegationToShow - 1) >= 0)
                    setIdxUndelegationToShow(idxUndelegationToShow - 1);
        }
    }


    // Affichage
    return (
        <StyledBox
            title={tblUndelegations && tblUndelegation ? <>Undelegation {idxUndelegationToShow+1}/{tblUndelegations.length}</> : "Undelegations"}
            color="green"
            showBtnNav="yes"
            onPrevious={() => handleClickOnNavigationButtons(-1)}
            onNext={() => handleClickOnNavigationButtons(1)}
        >
            {msgErreur ?
                <div className="erreur">{msgErreur}</div>
            :
                isLoading ?
                    <div>Loading "undelegations" from blockchain (lcd), please wait ...</div>
                :
                    tblUndelegations && tblUndelegation ?
                        <>
                            <div className={styles.amountAndReleaseInfos}>
                                <div>
                                    <span>There are </span>
                                    <span className='partieEntiere'>{metEnFormeAmountPartieEntiere(tblUndelegation.balance)}</span>
                                    <span className='partieDecimale'>{retournePartieDecimaleFixed6(tblUndelegation.balance)}</span>
                                    <span> LUNC</span>
                                </div>
                                <div>undelegating from validator <Link to={'/validators/' + tblUndelegation.valoperAddress}>{tblUndelegation.valMoniker}</Link> {tblValidators[tblUndelegation.valoperAddress].status !== 'active' ? <span className='jailed'>JAILED</span> : null}</div>
                                <br />
                                <div>They will be <strong>released in {expanded_datetime_ago(tblUndelegation.releaseDatetime, true)}</strong> ({metEnFormeDateTime(tblUndelegation.releaseDatetime)})</div>
                            </div>
                        </>
                    :
                        <div>No undelegation, currently.</div>
            }
        </StyledBox>
    );
};

export default Undelegations;