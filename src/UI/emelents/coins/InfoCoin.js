import React, {useEffect, useState} from 'react'
import {Skeleton} from "@mui/material";
import axios from "axios";
import AddButton from "../button/AddButton";

function InfoCoin({nameCoin}) {
    const [loading, setLoading] = useState(true)
    const [coin, setCoin] = useState('')
    const [update, setUp] = useState('')
    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${nameCoin}`)
            .then(res => {
                return res.data
            }).then(data => {
                setCoin(data)
                setLoading(false)
                let time = new Date(data.last_updated)
                setUp(`${time.getSeconds()}c. ${time.getMinutes()}хв. ${time.getHours()}год.`)
            })
    }, [nameCoin])
    if(loading) {
        return (
            <Skeleton variant="rectangular"  sx={{ bgcolor: '#1a1a1a', marginBottom: '50px' }} width={'100%'} height={'350px'} />
        )
    }
    else {
        return (
            <div style={{color :'white'}} className={'infoCoin'}>
                <div className={'infoCoin__container'}>
                    <div className={'infoCoin__flex'}>
                        <div className={'infoCoin__flex_coin'}>
                            <div className={'infoCoin__img'}>
                                <img width={'100%'} src={coin.image.large} alt={coin.name}/>
                            </div>
                            <div>
                                <span className={'infoCoin__name'}>{coin.name}</span>
                                <span className={'infoCoin__name'} style={{color:' #9d8c8c', textTransform: 'uppercase'}}>({coin.symbol})</span>
                                <div className={'infoCoin__price'}>${coin.market_data.current_price.usd}</div>
                            </div>
                            <div>
                                {Number(coin.market_data.price_change_percentage_1h_in_currency.usd) < 0 ?
                                    <div className={'infoCoin__red'}>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(3)}%</div>:
                                    <div className={'infoCoin__green'}>+{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(3)}%</div>}
                            </div>
                        </div>
                        <div className={'infoCoin__btn'}>
                            <AddButton />
                        </div>
                    </div>
                    <div className={'infoCoin__grid'}>
                        <div className={'infoCoin__block'}>
                            <span className={'infoCoin__item'}>Категорія</span>
                            <span className={'infoCoin__item'}>{coin.categories[0]}</span>
                        </div>
                        <div className={'infoCoin__block'}>
                            <span className={'infoCoin__item'}>Ринкова капіталізація</span>
                            <span className={'infoCoin__item'}>{coin.market_data.market_cap.usd.toString().slice(0, -6)}M</span>
                        </div>
                        <div className={'infoCoin__block'}>
                            <span className={'infoCoin__item'}>Ранг</span>
                            <span className={'infoCoin__item'}>{coin.coingecko_rank}</span>
                        </div>
                        <div className={'infoCoin__block'}>
                            <span className={'infoCoin__item'}>Дата створення</span>
                            <span className={'infoCoin__item'}>{coin.genesis_date}</span>
                        </div>
                        <div className={'infoCoin__block'}>
                            <span className={'infoCoin__item'}>Алгоритм шифрування</span>
                            <span className={'infoCoin__item'}>{coin.hashing_algorithm}</span>
                        </div>
                        <div className={'infoCoin__block'}>
                            <span className={'infoCoin__item'}>Оцінка ліквідності</span>
                            <span className={'infoCoin__item'}>{coin.liquidity_score}</span>
                        </div>

                        <div className={'infoCoin__block'}>
                            <span className={'infoCoin__item'}>Останнє оновлення</span>
                            <span className={'infoCoin__item'}>{update}</span>
                        </div>
                        <div className={'infoCoin__block'}>
                            <span className={'infoCoin__item'}>Пік за 24год</span>
                            <span className={'infoCoin__item'}>${coin.market_data.high_24h.usd}</span>
                        </div>
                        <div className={'infoCoin__block'}>
                            <span className={'infoCoin__item'}>Просадка за 24год</span>
                            <span className={'infoCoin__item'}>${coin.market_data.low_24h.usd}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoCoin;
