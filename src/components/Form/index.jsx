import React from 'react';
import './form.scss';
import Input from './Input';
import { useRecoilValue } from 'recoil';
import { atomCardNumber, atomCardName } from "../../state/atom"

export default function Form() {

    const cardNumber = useRecoilValue(atomCardNumber);
    const cardName = useRecoilValue(atomCardName);

    return(
        <div className="container__form">
            <div className="row">
                <div className="col-12">
                    <Input
                        label="Card Number"
                        id="card_number"                
                        name="card_number"
                        type="tel"
                        maxLength="19"
                        value={ cardNumber }
                    />
                </div>

                <div className="col-12">
                    <Input
                        label="Name"
                        id="card_name"                
                        name="card_name"
                        type="text"
                        maxLength="30"
                        value={ cardName }
                    />
                </div>

                <div className="col-4">
                    <Input
                        label="Month"
                        id="card_month"                
                        name="card_month"
                        type="text"
                        maxLength="2"
                    />
                </div>

                <div className="col-4">
                    <Input
                        label="Year"
                        id="card_year"                
                        name="card_year"
                        type="text"
                        maxLength="2"
                    />
                </div>

                <div className="col-4">
                    <Input
                        label="CVV"
                        id="card_cvv"                
                        name="card_cvv"
                        type="tel"
                        maxLength="3"
                    />
                </div>
            </div>
        </div>
    )
}

