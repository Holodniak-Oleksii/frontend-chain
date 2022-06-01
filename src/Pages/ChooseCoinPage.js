import React, {useEffect, useState} from "react";
import Header from "../UI/emelents/extremes/Header";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import Hamburger from "../UI/emelents/extremes/Hamburger";
function ChooseCoinPage({AuthVisible}) {

    const matches768 = useMediaQuery('(min-width:770px)')

    const [coins, setCoins] = useState([])
    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=17&page=1&sparkline=true&price_change_percentage=1h`)
            .then(res => {
                let result = []
                res.data.map((cur) => {
                    if(cur.id !== 'tether' && cur.id !== 'usd-coin' && cur.id !== 'terrausd' && cur.id !== 'binance-usd' && cur.id !== 'staked-ether' && cur.id !== 'wrapped-bitcoin' ) {
                        result.push({
                            'id': cur.id,
                            'symbol': cur.symbol,
                            'img': cur.image,
                        })
                    }
                })
                return result
            }).then(data => {
            setCoins(data)
        })
    }, [])

    return (
        <div className={'currency'}>
            {matches768 ? <Header position={'static'} AuthVisible={AuthVisible}/>: <Hamburger AuthVisible={AuthVisible}/>}
            <div className={'container currency__container'}>
                <div className={'currency__grid'}>
                {coins.map((cur, idx)=>(
                        <div key={idx} className={'currency__item'}>
                            <a href={`/currency/${cur.symbol}`} className={'currency__link'}>
                                <img src={cur.img} alt={cur.id} width={'30%'}/>
                                <span style={{display: 'block', textTransform: 'capitalize', marginLeft: '20px'}}>{cur.id}</span>
                                <span>({cur.symbol.toUpperCase()})</span>
                            </a>
                        </div>
                ))}
                </div>
            </div>
        </div>
    );
}
export default ChooseCoinPage
