import React from 'react';
import { Link } from 'react-router-dom';

const MsgWithdrawValidatorCommission = (props) => {
    return (
        <>
            <tr>
                <td>From :</td>
                <td>validator <Link to={"/validators/" + props.txMessage['ValidatorAddress']}>{props.txMessage['ValidatorMoniker']}</Link></td>
            </tr>
            <tr>
                <td>To :</td>
                <td>his validator's account <Link to={"/accounts/" + props.txMessage['ToAddress']}>{props.txMessage['ToAddress']}</Link></td>
            </tr>
            <tr>
                <td>Withdraw commissions :</td>
                <td>{props.txMessage['withdrawCommissions'].map((element, index) => {
                    return <span key={index}>{element}<br /></span>
                })}</td>
            </tr>
        </>
    );
};

export default MsgWithdrawValidatorCommission;