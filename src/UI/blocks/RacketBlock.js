import React from "react";
import {Button, useMediaQuery} from "@mui/material";
import {NavLink} from "react-router-dom";

function RacketBlock() {
    const matches480 = useMediaQuery('(min-width:480px)')
    return (
        <div className={'racket gradient_block'}>
            <div className={'racket__width main_flex'} style={{alignItems: 'center'}}>
                <div className={'racket__block'}>
                    <h1  className={'racket__h'}>
                        Стартуємо на першій космічній!
                    </h1>
                    <p className={'racket__p'}>
                        Твій найкращий крипто порадник, який допоможе розібратися у темі "крипто інвестиції" та зробити твої перші кроки, крім того, покаже всю найновішу інформацію про курси крипто валют
                    </p>
                    <div className={'racket__btn'}>
                        <Button variant={'contained'}>
                            <NavLink to="/blog" style={{color: 'white'}}>Дізнайся більше</NavLink>
                        </Button>
                    </div>
                </div>
                <div className={'racket__block'}>
                    <img src={'img/orbit.png'} alt={'img'} width={matches480?'100%': '60%'}/>
                </div>
            </div>
        </div>
    );
}

export default RacketBlock
