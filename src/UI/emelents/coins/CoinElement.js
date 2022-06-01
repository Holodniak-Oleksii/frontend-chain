import React from 'react'

function CoinElement({text, path}) {

    return (
        <div className={'coin_element'}>
            <img src={path} alt={'img'} width={'40%'}/>
            <p>{text}</p>
        </div>
    );
}

export default CoinElement;
