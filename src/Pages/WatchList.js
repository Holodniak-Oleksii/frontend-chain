import React, {useCallback, useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthContext";
import axios from "axios";
import getInfoForList from "../Utils/getInfoForList";
import Header from "../UI/emelents/extremes/Header";
import CustomPaginationActionsTable from "../UI/emelents/table/CryptoTable";
import Hamburger from "../UI/emelents/extremes/Hamburger";
import useMediaQuery from "@mui/material/useMediaQuery";

const availableList = []
getInfoForList(250,availableList)

function WatchList({AuthVisible}) {
    const matches768 = useMediaQuery('(min-width:770px)')
    const [userCoins, setCoins] = useState([])
    const token = useContext(AuthContext)
    let result = []
    const [loading, setLoading] = useState(true)

    const getUserCoins = useCallback( async () => {
        try {
            axios.get(`${process.env.REACT_APP_API}/api/watch/all`,  {
                headers:{
                    'Authorization': `Bearer ${token.token}`
                }}).then(res => {
                setCoins(res.data)
                setLoading(false)
            })
        }catch (e) {}
    }, [token])

    useEffect(()=>{
        getUserCoins()
    }, [getUserCoins])

    availableList.map((el) => {
        userCoins.map((cur)=>{
            if(el.id === cur.name){
                result.push(
                    {
                        'id': el.id,
                        'name': el.name,
                        'symbol': el.symbol,
                        'price': el.price,
                        'img': el.img,
                        'total_volume': el.total_volume,
                        'price_change_percentage_1h_in_currency': el.price_change_percentage_1h_in_currency,
                        'sparkline_in_7d': el.sparkline_in_7d,
                        'idx': cur._id
                    })
            }
        })
    })
    const styleCellNormalHead = {
        color: '#fff' ,backgroundColor: '#181818', fontWeight:'bold', fontFamily: 'Tahoma', height: '30px', borderBottom: 0
    }

    const styleCellNormal = {
        color: '#fff', borderColor: 'rgb(72,71,71)', borderBottom: 0
    }

    return(
        <div style={{backgroundColor:'#121212', minHeight: '100vh'}}>
            <div className="container" style={{display: 'flex', flexDirection: 'column'}}>
                {matches768 ? <Header AuthVisible={AuthVisible}/>: <Hamburger AuthVisible={AuthVisible}/>}
                <div style={{marginTop: '100px' }}>
                    <CustomPaginationActionsTable width={'20%'} size={'150px'} styleCellNormalHead={styleCellNormalHead} styleCellNormal={styleCellNormal} rows={result} flag={true} loading={loading} />
                </div>
            </div>
        </div>
    )
}

export default WatchList
