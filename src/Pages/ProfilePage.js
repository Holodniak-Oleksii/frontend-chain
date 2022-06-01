import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "../UI/emelents/extremes/Header";
import HistoryTable from "../UI/emelents/table/HistoryTable";
import PieChart from "../UI/emelents/charts/PieChart";
import useMediaQuery from "@mui/material/useMediaQuery";
import Hamburger from "../UI/emelents/extremes/Hamburger";

function ProfilePage({AuthVisible}) {
    const matches768 = useMediaQuery('(min-width:770px)')
    const matches900 = useMediaQuery('(min-width:979px)')
    const matches600 = useMediaQuery('(min-width:600px)')

    const [history, setHistory] = useState([])
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [load, setLoad] = useState(true)
    const [rang, setRang] = useState([1, 'Самурай'])
    const authData = JSON.parse(localStorage.getItem('userData'))
    function dict_reverse(obj) {
       let new_obj = []
        let rev_obj = Object.keys(obj).reverse();
       let item = 0
        rev_obj.forEach(function(i) {
            new_obj[item] = obj[i];
            item++
        })
        return new_obj;
    }

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}/api/rate/all-history`, {headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authData.token}`
            }})
            .then(res => {
                return res.data
            }).then(data => {
            setHistory(dict_reverse(data))
            setLoading(false)
        })
    }, [])

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}/api/auth/all`, {headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authData.token}`
            }})
            .then(res => {
                return res.data
            }).then(data => {
            setUser(data[0])
            if(+data[0].score >= 11000 && +data[0].score < 20000){
                setRang([2, 'Даймьо'])
            }
            if(+data[0].score >= 20000 && +data[0].score < 30000){
                setRang([3, 'Сьоґун'])
            }
            if(+data[0].score >= 30000){
                setRang([4, 'Тенно'])
            }
            setLoad(false)
        })
    }, [])
    if(!load) {
        return (
            <div className={'color_back'}>
                {matches768 ? <Header AuthVisible={AuthVisible}/>: <Hamburger AuthVisible={AuthVisible}/>}
                <div className={'profile'}>
                    {!matches600?
                        <div className={'profile__text'}>
                            <div className={'profile__item'}>
                                <span className={'profile__login'}>Логін:</span>
                                <span className={'profile__result'}>{user.name}</span>
                            </div>
                            <div className={'profile__item'}>
                                <span className={'profile__login'}>Email:</span>
                                <span className={'profile__result'}>{user.email}</span>
                            </div>
                            <div className={'profile__item'}>
                                <span className={'profile__login'}>Рахунок:</span>
                                <span className={'profile__result'}>{user.score}$</span>
                            </div>
                        </div>:''}
                    <div className={'container profile__flex'}>
                        <div className={'profile__history'}>
                            <PieChart history={history}/>
                        </div>
                        <div className={'profile__info'}>
                            <div className={'profile__container'}>
                                {matches600?
                                <div className={'profile__text'}>
                                    <div className={'profile__item'}>
                                        <span className={'profile__login'}>Логін:</span>
                                        <span className={'profile__result'}>{user.name}</span>
                                    </div>
                                    <div className={'profile__item'}>
                                        <span className={'profile__login'}>Email:</span>
                                        <span className={'profile__result'}>{user.email}</span>
                                    </div>
                                    <div className={'profile__item'}>
                                        <span className={'profile__login'}>Рахунок:</span>
                                        <span className={'profile__result'}>{user.score}$</span>
                                    </div>
                                </div>:''}
                                <div className={'profile__status'}>
                                    <div className={'profile__rang'}>
                                        <img src={`../img/ranges/${rang[0]}.png`} width={'40%'} title={`Ранг: ${rang[0]} - ${rang[1]}`} alt={rang[1]}/>
                                    </div>
                                </div>
                            </div>
                            {matches900?<HistoryTable rows={history} loading={loading}/>:''}
                        </div>
                    </div>
                    {!matches900?<div style={{width: '90%', margin:"auto"}}><HistoryTable rows={history} loading={loading}/></div>:''}
                </div>
            </div>
        );
    }
}

export default ProfilePage
