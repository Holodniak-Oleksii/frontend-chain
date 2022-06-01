import React, {useEffect, useState} from "react";
import Carousel from "./Сarrousel";
import Skeleton from '@mui/material/Skeleton';
import axios from "axios";

function DoubleCarousel({flag= true}) {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h`)
            .then(res => {
                let result = []
                res.data.map((cur) => {
                    result.push({
                        'id': cur.id,
                        'name': cur.name,
                        'symbol': cur.symbol,
                        'price': cur.current_price,
                        'img': cur.image,
                        'total_volume': cur.total_volume,
                        'price_change_percentage_1h_in_currency': cur.price_change_percentage_1h_in_currency,
                        'sparkline_in_7d': cur.sparkline_in_7d
                    })
                })
                return result
            }).then(data => {
            setCoins(data)
            setLoading(false)
        })
    }, [])


    if(loading){
        return (
            <Skeleton variant="rectangular"  sx={{ bgcolor: '#1a1a1a' }}
                      width={'100%'} height={'250px'} />
        )
    }else {
        if(flag) {
            return (
                <div style={{width: '100%', overflow: 'hidden'}}>
                    <div style={{marginLeft: '-100px'}}>
                        <Carousel trending={coins.slice(0, 9)} direction={'rtl'}/>
                    </div>
                    <div style={{marginRight: '-100px'}}>
                        <Carousel trending={coins.slice(9, 19)} direction={'ltr'}/>
                    </div>
                </div>
            );
        }else {
            return (
                <div style={{width: '100%', overflow: 'hidden'}}>
                    <div style={{marginLeft: '-100px'}}>
                        <Carousel trending={coins.slice(0, 9)} direction={'rtl'}/>
                    </div>
                </div>
            );
        }
    }
}

export default DoubleCarousel
