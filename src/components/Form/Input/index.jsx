import React from 'react';
import { useSetRecoilState } from 'recoil';
import { atomCardNumber, atomCardName, atomCardMonth, atomCardYear, atomCardCvv, atomCardOperator, atomFlip } from "../../../state/atom";
import { mask } from 'remask';

export default function Input(props) {

    var setOperator = useSetRecoilState(
        atomCardOperator
    )
    
    var setNumber = useSetRecoilState(
        atomCardNumber
    )

    var setName = useSetRecoilState(
        atomCardName
    )

    var setMonth = useSetRecoilState(
        atomCardMonth
    )

    var setYear = useSetRecoilState(
        atomCardYear
    )

    var setCvv = useSetRecoilState(
        atomCardCvv
    )

    var setFlip = useSetRecoilState(
        atomFlip
    )

    var changeAction;
    var focusAction;
    var blurAction;

    if(props.name=='card_number'){

        changeAction = (e) => (
            setNumber(
                mask(e.target.value, ['9999 9999 9999 9999']),
                (e.target.value.toString().slice(0,1)==3&&e.target.value.toString().slice(1,2)==7?setOperator('american'):'visa'),
                (e.target.value.toString().slice(0,1)==3&&e.target.value.toString().slice(1,2)!=7?setOperator('dinners'):'visa'),
                (e.target.value.toString().slice(0,1)==4?setOperator('visa'):'visa'),
                (e.target.value.toString().slice(0,1)==5?setOperator('mastercard'):'visa'),
                (e.target.value.toString().slice(0,1)==6&&e.target.value.toString().slice(1,2)=='0'?setOperator('hipercard'):'visa')
            )
        );
        focusAction = (e) => setFlip('');

    }else if(props.name=='card_name'){

        changeAction = (e) => setName(e.target.value);
        focusAction = (e) => setFlip('');

    }else if(props.name=='card_month'){

        changeAction = (e) => setMonth(mask(e.target.value, ['99']));
        focusAction = (e) => setFlip('');

    }else if(props.name=='card_year'){

        changeAction = (e) => setYear(mask(e.target.value, ['99']));
        focusAction = (e) => setFlip('');

    }else if(props.name=='card_cvv'){

        changeAction = (e) => setCvv(mask(e.target.value, ['999']));
        focusAction = (e) => setFlip('flipped');
        blurAction = (e) => setFlip('');

    }

    return(
        <>
            <label htmlFor={ props.id }>{ props.label }</label>

            <input
                type={ props.type }
                name={ props.name }
                id={ props.id }
                value={ props.value }
                maxLength={ props.maxLength }
                placeholder={ props.placeholder }
                onChange={ changeAction }
                onFocus={ focusAction }
                onBlur={ blurAction }
            />
        </>
    )
}
