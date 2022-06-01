import React, {useContext, useEffect, useState} from "react";
import {useHttp} from "../../../hooks/http.hooks";
import {AuthContext} from "../../../context/AuthContext";
import LowAlert from "../alert/LowAlert";

function LoginForm(){
    const {loading, error, request, clearError} = useHttp()
    const auth = useContext(AuthContext)
    const [toastList, setToastList] = useState([]);
    const [form, setForm] = useState({
        email: '', password: ''
    })

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    useEffect(()=>{
        if(error){
            setToastList(toastList.concat(<LowAlert bottom={'-70px'} text={error} key={toastList.length} />));
        }
        clearError()
    }, [error, clearError, toastList])

    const loginHandler = async (e) =>{
        try {
            e.preventDefault()
            const data = await request(`${process.env.REACT_APP_API}/api/auth/login`, 'POST', {...form})
            auth.login(data.token, data.userId, data.role)
        }catch (e){}
    }

    return(
         <>
             {toastList}
             <input className={'input__log'} onChange={changeHandler} type="text" placeholder="Email" name={'email'} id="email"/>
             <input className={'input__log'} onChange={changeHandler} type="password" placeholder="Пароль" name={'password'} id="password"/>
             <button className={'btn__log'} disabled={loading} onClick={loginHandler}>Увійти</button>
         </>
    )
}

export default LoginForm;
