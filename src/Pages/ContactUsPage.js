import React, {useEffect, useState} from "react";
import Header from "../UI/emelents/extremes/Header";
import {Button, TextareaAutosize, TextField} from "@mui/material";
import LowAlert from "../UI/emelents/alert/LowAlert";
import {useHttp} from "../hooks/http.hooks";
import useMediaQuery from "@mui/material/useMediaQuery";
import Hamburger from "../UI/emelents/extremes/Hamburger";

function ContactUsPage({AuthVisible}) {
    const matches768 = useMediaQuery('(min-width:770px)')

    const [form, setForm] = useState({
        email: '', name: '', text: ''
    })
    const {loading, error, request, clearError} = useHttp()
    const [toastList, setToastList] = useState([]);
    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const sendHandler = async () => {
        await request(`${process.env.REACT_APP_API}/api/auth/send-me-message`, 'POST', form)
        setForm({
            email: '', name: '', text: ''
        })
        setToastList(toastList.concat(<LowAlert text={'Надіслано'} bottom={'10px'} left={'0'} key={toastList.length} />));
    }
    useEffect(()=>{
        if(error){
            setToastList(toastList.concat(<LowAlert text={error} bottom={'10px'} left={'0'} key={toastList.length} />));
        }
        clearError()
    }, [error, clearError, toastList])

    return (
        <div className={'color_back contact'}>
            {toastList}
            {matches768 ? <Header AuthVisible={AuthVisible}/>: <Hamburger AuthVisible={AuthVisible}/>}
            <div className={'container contact__flex'}>
                <div className={'contact__form'}>
                    <div className={'contact__label'}>Зв'яжіться з нами</div>
                    <TextField
                        onChange={changeHandler}
                        name='name'
                        required
                        value={form.name}
                        id="filled-required"
                        className={'contact__field'}
                        label="Ім'я" variant="standard" />
                    <TextField
                        onChange={changeHandler}
                        name='email'
                        value={form.email}
                        required
                        id="filled-required"
                        className={'contact__field'}
                        label="Email" variant="standard" />
                    <TextareaAutosize
                        onChange={changeHandler}
                        name='text'
                        value={form.text}
                        required
                        placeholder={'Ваше питання'}
                        style={{width: '96%', paddingLeft: '2%', paddingRight: '2%', paddingTop: '10px', height: '100px', resize: 'none', border: '1px solid #8a8585',backgroundColor: 'rgba(255,255,255,0)', color: 'white'}}
                    />
                    <div className={'contact__btn'}>
                        <Button disabled={loading}
                        onClick={sendHandler}
                        >Надіслати</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage
