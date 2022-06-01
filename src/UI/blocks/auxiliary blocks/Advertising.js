import React from "react";
import CoinElement from "../../emelents/coins/CoinElement";

function Advertising() {
    return (
        <div className={'advertising__gradient'}>
            <div className={'advertising'}>
                <h2 className={'advertising__h'}>Ми маємо інформацію про 200+ криптовалют світу, з офіційних джерел</h2>
                <div className={'grid_coins'}>
                    <CoinElement text={'BITCOIN'} path={'img/coins/bitcoin.png'}/>
                    <CoinElement text={'ethereum'} path={'img/coins/eth.png'}/>
                    <CoinElement text={'litecoin'} path={'img/coins/litecoin.png'}/>
                    <CoinElement text={'monero'} path={'img/coins/monero.png'}/>
                    <CoinElement text={'ripple'} path={'img/coins/ripple.png'}/>
                    <CoinElement text={'dogecoin'} path={'img/coins/dogecoin.png'}/>
                </div>
            </div>
        </div>
    );
}

export default Advertising
