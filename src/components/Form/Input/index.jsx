import React from 'react';
import { useSetRecoilState } from 'recoil';
import { atomCardNumber, atomCardName, atomCardMonth, atomCardYear, atomCardCvv, atomFlip } from "../../../state/atom";
import { mask } from 'remask';

export default function Input(props) {
    
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

    if(props.name=='card_number'){

        changeAction = (e) => setNumber(mask(e.target.value, ['9999 9999 9999 9999']));
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
                onChange={ changeAction }
                onFocus={ focusAction }
            />
        </>
    )
}
