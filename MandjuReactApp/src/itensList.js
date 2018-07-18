import React from 'react';
import './itensList.css';

export default class ItensList extends React.Component {
    constructor() {
        super();
        this.state = { };
    }

    render() {
        const listItens = this.props.itemName;
        const name = this.props.listName;
        const mB = parseInt(listItens[name][0]);
        const mN = parseInt(listItens[name][1]);
        const mV = parseInt(listItens[name][2]);
        const mVa = parseInt(listItens[name][3]);
        const mAss = parseInt(listItens[name][4]);
        return(
            <div className="list">
                <div className="flexBox flexBox--center">
                    <div>
                        <ul className="list-itens">
                            <li> Moti Branco       :    </li>
                            <li> Moti Nantu         :     </li>
                            <li> Moti Verde         :     </li>
                            <li> Mandju Assado  :  </li>
                            <li> Mandju Vapor    :   </li>
                        </ul>
                    </div>
                    <div>
                        <p> {listItens[name][0]} </p>
                        <p> {listItens[name][1]} </p>
                        <p> {listItens[name][2]} </p>
                        <p> {listItens[name][3]} </p>
                        <p> {listItens[name][4]} </p>
                    </div>
                </div>
                <h1> R$ {(mB + mN + mV + mVa) * 10 + mAss * 12}, 00 </h1>
            </div>
        );
    }
}
