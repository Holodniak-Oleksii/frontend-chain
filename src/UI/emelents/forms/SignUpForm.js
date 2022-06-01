import React, {useContext, useEffect, useState} from "react";
import {useHttp} from "../../../hooks/http.hooks";
import {AuthContext} from "../../../context/AuthContext";
import LowAlert from "../alert/LowAlert";

function SingUpForm(){
    const {loading, error, request, clearError} = useHttp()
    const auth = useContext(AuthContext)

    const [toastLists, setToastLists] = useState([]);
    const [form, setForm] = useState({
        name:'', email: '', password: '', confirm: ''
    })

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    useEffect(()=>{
        if(error){
            setToastLists(toastLists.concat(<LowAlert bottom={'-20px'} text={error} key={toastLists.length} />));
        }
        clearError()
    }, [error, clearError, toastLists])

    const registerHandler = async (e) =>{
        try {
            e.preventDefault()
            const data = await request(`${process.env.REACT_APP_API}/api/auth/register`, 'POST', {...form})
            auth.login(data.token, data.userId, data.role)
        }catch (e){}
    }
    return(
        <div>
            {toastLists}
            <input className={'input__log'} type="text" placeholder="Ім'я"
                   onChange={changeHandler}
                   name="name"/>
            <input className={'input__log'} type="text" placeholder="Email"
                   onChange={changeHandler}
                   name="email"/>
            <input className={'input__log'} type="password" placeholder="Пароль"
                   onChange={changeHandler}
                   name="password"/>
            <input className={'input__log'} type="password" placeholder="Підтвердити пароль"
                   onChange={changeHandler}
                   name="confirm"/>
            <button className={'btn__log'} disabled={loading} onClick={registerHandler}>Зареєструватися</button>
        </div>
    )
}

export default SingUpForm;
