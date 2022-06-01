import React from 'react'
import LittleChart from "../charts/LittleChart";
import {Skeleton} from "@mui/lab";
import {NavLink} from "react-router-dom";

function FamousCoins({coins, loading}) {
    if(loading) {
        return (
            <Skeleton variant="rectangular"  sx={{ bgcolor: '#1a1a1a' }}
                      width={'100%'} height={'250px'} />
        )
    }
    else {
        return (
            <div className={'famous__grid'}>
                {coins.map((cur, idx) => (
                    <div key={idx} className={'famous__item'}>
                        <NavLink to={`/coins/${cur.id}`} style={{display: 'block', color: 'white'}}>
                            <div className={'famous__block'}>
                                <div className={'famous__img'}>
                                    <img src={cur.img} width={'30px'} height={'30px'} alt={cur.name}/>
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <span className={'famous__span'}>{cur.name}:</span>
                                        <span className={'famous__span'}>{cur.price}$</span>
                                    </div>
                                </div>
                                <div>
                                    {Number(cur.price_change_percentage_1h_in_currency) < 0 ? <div
                                            style={{color: "#F90716"}}>{cur.price_change_percentage_1h_in_currency.toFixed(3)}%</div> :
                                        <div
                                            style={{color: "#00da64"}}>+{cur.price_change_percentage_1h_in_currency.toFixed(3)}%</div>}
                                </div>
                            </div>
                            <div className={'famous__chart'}>
                                <LittleChart prices={cur.sparkline_in_7d.price} color={'yellow'}/>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        );
    }
}

export default FamousCoins;
