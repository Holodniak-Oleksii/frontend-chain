import React, {useEffect, useState}  from "react";
import Header from "../UI/emelents/extremes/Header";
import Footer from "../UI/emelents/extremes/Footer";
import CustomPaginationActionsTable from "../UI/emelents/table/CryptoTable";
import axios from "axios";
import FamousCoins from "../UI/emelents/coins/FamousCoins";
import Hamburger from "../UI/emelents/extremes/Hamburger";
import useMediaQuery from "@mui/material/useMediaQuery";

function CoursesPage({AuthVisible}) {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)
    const matches768 = useMediaQuery('(min-width:770px)')
    const matches1024 = useMediaQuery('(min-width:1025px)')
    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h`)
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
    const styleCellNormalHead = {
        color: '#fff' ,backgroundColor: '#3d3c3c', fontWeight:'bold', fontFamily: 'Tahoma', height: '50px', borderBottom: 0
    }

    const styleCellNormal = {
        color: '#fff', borderColor: 'rgb(29 32 39)'
    }
    return (
        <div className={'color_back'}>
            {matches768 ? <Header position={'static'} AuthVisible={AuthVisible}/>: <Hamburger AuthVisible={AuthVisible}/>}
            <div className={'tb'}>
                <FamousCoins coins={coins.slice(0, 12)} loading={loading}/>
                <CustomPaginationActionsTable
                    rows={coins} styleCellNormalHead={styleCellNormalHead}
                    styleCellNormal={styleCellNormal}
                    loading={loading} size={!matches1024? '120px': '100%'}
                />
            </div>
            <Footer color={'new-footer-color'}/>
        </div>
    );
}

export default CoursesPage
