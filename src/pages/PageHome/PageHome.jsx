import React, { useEffect, useState } from 'react';
import OutlinedBox from '../../sharedComponents/OutlinedBox/OutlinedBox';
import { HomeIcon } from '../../application/AppIcons';
import styles from './PageHome.module.scss';
import BlockOverview from './BlockOverview';
import BlockLatestBlocks from './BlockLatestBlocks';
import BlockValidators from './BlockValidators';
import BlockTotalSupplies from './BlockTotalSupplies';


const PageHome = () => {

    // Variables react
    const [datetimeDernierUpdate, setDatetimeDernierUpdate] = useState('...');

    useEffect(() => {
        // Mémorisation de la date/heure de chargement de cette page
        const maDate = Date.now();
        setDatetimeDernierUpdate(new Date(maDate).toLocaleString());
    }, [])


    // Et affichage de la page, au final
    return (
        <div className={styles.homepage}>
            <h1><HomeIcon /><span><strong>Home</strong> (dashboard)</span></h1>
            <p className={styles.datetimeupdate}>→ Last data update : {datetimeDernierUpdate}</p>
            <br />
            <div className={styles.tbl13}>
                <OutlinedBox>
                    <div className={styles.content}>
                        <BlockOverview />
                    </div>
                </OutlinedBox>
                <OutlinedBox>
                    <div className={styles.content}>
                        <BlockLatestBlocks />
                    </div>
                </OutlinedBox>
            </div>
            <div className={styles.tbl31}>
                <OutlinedBox>
                    <div className={styles.content}>
                        <BlockValidators />
                    </div>
                </OutlinedBox>
                <OutlinedBox>
                    <div className={styles.content}>
                        <BlockTotalSupplies />
                    </div>
                </OutlinedBox>
            </div>
        </div>
    );
};

export default PageHome;