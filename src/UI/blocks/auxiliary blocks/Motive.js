import React from "react";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

function Motive() {
    return (
        <div className={'motive__gradient'}>
            <div className={'motive'}>
                <h2 className={'motive__h'}>Ми допоможемо вам скоріше опанувати всією необхідною інформацією</h2>
                <div className={'motive__flex motive__btn'}>
                    <Button variant={'contained'}>
                        <NavLink to="/blog" style={{fontWeight: 'bold',color: 'black'}}>
                            Давай розпочнемо
                        </NavLink>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Motive
