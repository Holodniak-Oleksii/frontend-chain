import React, {useEffect, useState} from "react";
import {Button, FormControl, MenuItem, Select, TextField} from "@mui/material";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import axios from "axios";

function TradeForm({add, currency}) {

    const authData = JSON.parse(localStorage.getItem('userData'))
    const [rate, setRate] = useState(10)
    const changeHandler = (event) => {
        if(event.target.value >= 10 && event.target.value <= score){
            setRate(event.target.value)
        }
    }
    const [user, setUser] = React.useState({})
    const [score, setScore] = React.useState(0)
    const [time, setTime] = React.useState(1);

    const handleChange = (event) => {
        setTime(event.target.value);
    };
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}/api/auth/all`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authData.token}`
            }
        })
            .then(res => {
                let rate = []
                res.data.forEach(element => {
                    rate.push({
                        'name': element.name,
                        'score': element.score
                    })
                })
                return rate
            }).then(r=>{
            setUser(r[0])
            setScore(r[0].score)
            console.log(user)
        })
    }, [])
    useEffect(() => {
        subscribe()
    }, [])

    const subscribe = async () => {
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_API}/api/rate/get-messages`)
            setScore(data.message)
            await subscribe()
        } catch (e) {
            setTimeout(() => {
                subscribe()
            }, 500)
        }
    }
    return (
        <div className={"trade__menu"}>
            <div className={'trade__name'}>
                <div className={"trade__account"}>
                    <span className={'trade__cur'}>{user.name}:</span>
                    <span className={'trade__score'}>{+score.toFixed()}$</span>
                </div>
                <div style={{textAlign: 'center'}}>
                    <span className={'trade__cur'} style={{margin: '10px 0'}}>
                        {currency}-USDT
                    </span>
                    <span style={{color: 'rgba(255,255,255,0.44)'}}>реальний час</span>
                </div>
            </div>
            <div className={'trade__field'}>
                <TextField className={'tb__field'}
                           value={rate}
                           onChange={changeHandler}
                           sx={{
                               label: {color: '#575050'},
                               input: {color: 'rgb(255,255,255)', border: 'rgba(255,255,255,0.52)'},
                               fieldset: {borderColor: '#464141'}
                           }} id="outlined-basic" label="Ставка" type={'number'}
                           inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}} variant="outlined"/>
                <FormControl sx={{width: '100%'}}>
                    <Select sx={{
                                    width: '100%',
                                    color: 'white',
                                    label: {color: '#575050'},
                                    input: {color: 'rgb(255,255,255)', border: 'rgba(255,255,255,0.52)'},
                                    fieldset: {borderColor: '#464141'}
                                }}
                            value={time}
                            defaultValue={1}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value={1}>1хв</MenuItem>
                            <MenuItem value={5}>5хв</MenuItem>
                            <MenuItem value={10}>10хв</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={'trade__btn'}>
                <Button color={'success'} variant={'contained'}
                        onClick={()=>{
                            add('#00DA64FF',rate, time)
                            setRate(10)
                        }}
                >
                    <ArrowCircleUpIcon style={{marginRight: '5px'}}/>
                    Вверх +30%
                </Button>
                <Button color={'error'} variant={'contained'}
                        onClick={()=>{
                            add('#ec2626',rate, time)
                            setRate(10)
                        }}
                >
                    <ArrowCircleDownIcon style={{marginRight: '5px'}}/> Вниз +30%</Button>
            </div>
        </div>
    );

}

export default TradeForm
