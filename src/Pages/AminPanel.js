import React, {useContext, useEffect, useState} from "react";
import Header from "../UI/emelents/extremes/Header";
import AdminTable from "../UI/emelents/table/AdminTable";
import {AuthContext} from "../context/AuthContext";
import axios from "axios";
import Hamburger from "../UI/emelents/extremes/Hamburger";
import useMediaQuery from "@mui/material/useMediaQuery";

function AminPanel({AuthVisible}) {
    const matches768 = useMediaQuery('(min-width:770px)')

    const [userList, setUsers] = useState([])
    const token = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}/api/auth/user-list`,  {
            headers:{
                'Authorization': `Bearer ${token.token}`
            }})
            .then(res => {
                return res.data
            }).then(data => {
            setUsers(data)
            setLoading(false)
        })
    }, [])

    if(!loading){
        return (
            <div className={'color_back'} style={{height: '100vh'}}>
                {matches768 ? <Header AuthVisible={AuthVisible}/>: <Hamburger AuthVisible={AuthVisible}/>}
                <div className={'container admin'}>
                    <AdminTable loading={loading} rows={userList}/>
                </div>
            </div>
        );
    }
}

export default AminPanel
