import React from 'react';
import './card.scss';
import { useRecoilValue } from 'recoil';
import { atomCardNumber, atomCardName, atomCardMonth, atomCardYear, atomCardCvv, atomFlip } from "../../state/atom"

export default function Card() {
    const texture = ['texture_01.jpg','texture_02.jpg','texture_03.jpg','texture_04.jpg'];
    var randomNumber = 3;

    const cardNumber = useRecoilValue(atomCardNumber);
    const cardName = useRecoilValue(atomCardName);
    const cardMonth = useRecoilValue(atomCardMonth);
    const cardYear = useRecoilValue(atomCardYear);
    const cardCvv = useRecoilValue(atomCardCvv);
    const flip = useRecoilValue(atomFlip);

    return(
        <div className="container__card">
            <div className="card">
                <div className={'card__front '+flip} style={{ backgroundImage : 'url(/assets/images/'+texture[randomNumber]+')' }}>
                    <div className="card__header">
                        <div className="d-flex align-items-start justify-content-between flex-wrap">
                            <img src="/assets/images/chip.png" className="card__header_chip" />
                            <img src="/assets/images/visa_logo.png" className="card__header_operator" />
                        </div>
                    </div>
                    <div className="card__number">
                        <span>{ cardNumber.toString().slice(0,1) }</span>
                        <span>{ cardNumber.toString().slice(1,2) }</span>
                        <span>{ cardNumber.toString().slice(2,3) }</span>
                        <span>{ cardNumber.toString().slice(3,4) }</span>
                        <span className="px-2"></span>
                        <span>{ cardNumber.toString().slice(5,6) }</span>
                        <span>{ cardNumber.toString().slice(6,7) }</span>
                        <span>{ cardNumber.toString().slice(7,8) }</span>
                        <span>{ cardNumber.toString().slice(8,9) }</span>
                        <span className="px-2"></span>
                        <span>{ cardNumber.toString().slice(10,11) }</span>
                        <span>{ cardNumber.toString().slice(11,12) }</span>
                        <span>{ cardNumber.toString().slice(12,13) }</span>
                        <span>{ cardNumber.toString().slice(13,14) }</span>
                        <span className="px-2"></span>
                        <span>{ cardNumber.toString().slice(15,16) }</span>
                        <span>{ cardNumber.toString().slice(16,17) }</span>
                        <span>{ cardNumber.toString().slice(17,18) }</span>
                        <span>{ cardNumber.toString().slice(18,19) }</span>
                    </div>

                    <div className="d-flex justify-content-between">
                        <div className="card__name">
                            { cardName }
                        </div>

                        <div className="card__date">
                            { cardMonth }
                            { (cardMonth!=''||cardYear!=''?'/':'') }
                            { cardYear }
                        </div>
                    </div>
                </div>
                <div className={'card__back '+flip} style={{ backgroundImage : 'url(/assets/images/'+texture[randomNumber]+')' }}>
                    <div className="card__black_target"></div>

                    <div className="card__padding pt-4">
                        <div className="card__cvv">
                            { cardCvv }
                        </div>

                        <div className="text-end">
                            <img src="/assets/images/visa_logo.png" className="card__footer_operator" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}