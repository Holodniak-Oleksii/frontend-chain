import React from "react";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

function Banner({text, header, direction, button, special , img, link}) {
    if(direction === true){
    return (
        <div className={'banner__flex'}>
            <div className={'banner__center'}>
                <div className={"banner__noise"}>
                    <img src={img} style={{borderRadius: '20px'}} alt={'img'} width={"100%"}/>
                </div>
            </div>
            <div className={'banner__center banner__pad'}>
                <div className={'banner__col'}>
                    <h1 className={'banner__h'}>{header}</h1>
                    <p className={'banner__p'}>
                            <span className={'span_yellow'}>{special}</span>
                        {text}
                    </p>
                    <div className={'banner__btn'}>
                        <Button variant={'contained'}>
                            <NavLink to={link} style={{color: 'white'}}>
                                {button}
                            </NavLink>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );}else {
        return(
        <div className={'banner__flex reverse'}>
            <div className={'banner__center banner__pad'}>
                <div className={'banner__col'}>
                    <h1 className={'banner__h'}>{header}</h1>
                    <p className={'banner__p'}>
                        {text}
                        <span className={'span_yellow'}>{special}</span>
                    </p>
                    <div className={'banner__btn'}>
                        <Button variant={'contained'}>
                            <NavLink to={link} style={{color: 'white'}}>
                                {button}
                            </NavLink>
                        </Button>
                    </div>
                </div>
            </div>
            <div className={'banner__center'}>
                <div className={"banner__noise"}>
                    <img src={img} style={{borderRadius: '20px'}} alt={'img'} width={"100%"}/>
                </div>
            </div>
        </div>
        )
    }
}

export default Banner
