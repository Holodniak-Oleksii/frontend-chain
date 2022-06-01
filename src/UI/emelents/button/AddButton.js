import React, {useContext, useEffect, useState} from "react";
import {Button} from "@mui/material";
import {useParams} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";
import {useHttp} from "../../../hooks/http.hooks";
import ErrorAlert from "../alert/ErrorAlert";

const AddButton = ({style}) => {
    const auth = useContext(AuthContext)
    const {request, error, clearError} = useHttp()
    const [toastList, setToastList] = useState([]);
    const { id } = useParams();

    const handlerClick = async () => {
        try {
            await request(`${process.env.REACT_APP_API}/api/watch/add-item`, 'POST', {name: id}, {
                'Authorization': `Bearer ${auth.token}`
            })
            setToastList(toastList.concat(<ErrorAlert key={toastList.length} text={"Успішно додано"}/>));
        }catch (e) {}
    }

    useEffect(()=>{
        if(error){
            setToastList(toastList.concat(<ErrorAlert key={toastList.length} text={error}/>));
        }
        clearError()
    }, [error,toastList, clearError])

    return(
        <div>
            {toastList}
            <Button onClick={handlerClick} style={style}  variant="outlined">Додати у відстеження</Button>
        </div>
    )
};
export default AddButton;
