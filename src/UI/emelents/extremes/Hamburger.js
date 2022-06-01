import React, {useContext} from "react";
import {Button} from "@mui/material";
import ModalAuth from "../forms/ModalAuth";
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";
import {Logout} from "@mui/icons-material";
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HomeIcon from '@mui/icons-material/Home';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';

function Hamburger({AuthVisible}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const auth = useContext(AuthContext)
    const authData = JSON.parse(localStorage.getItem('userData'))

    const logoutHandler = async () =>{
        try {
            auth.logout()
        }catch (e){}
    }

    if(AuthVisible === false) {
        return (
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox"/>
                <label className="menu__btn" htmlFor="menu__toggle"><span/></label>
                <ul className="menu__box">
                    <li>
                        <NavLink to="/" className="menu__item">
                            <div className={'menu__block'}>
                                <HomeIcon sx={{marginRight: '10px'}}/>
                                <div>Головна</div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className="menu__item">
                            <div className={'menu__block'}>
                                <AssuredWorkloadIcon sx={{marginRight: '10px'}}/>
                                <div>Навчальна інформація</div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/courses" className="menu__item">
                            <div className={'menu__block'}>
                                <CurrencyBitcoinIcon sx={{marginRight: '10px'}}/>
                                <div>Курси валют</div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="menu__item">
                            <div className={'menu__block'}>
                                <ConnectWithoutContactIcon sx={{marginRight: '10px'}}/>
                                <div>Зворотній зв'язок</div>
                            </div>
                        </NavLink>
                    </li>
                    <div className={'hamburger'}><Button onClick={handleOpen} variant="contained" style={{
                            fontWeight: 'bold',
                            backgroundColor: '#c3d21c',
                            marginLeft: '10px',
                            color: 'black'
                        }}>Увійти</Button>
                        <ModalAuth handleClose={handleClose} open={open}/>
                    </div>
                </ul>
            </div>
        );
    }
    else {
        return (
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox"/>
                <label className="menu__btn" htmlFor="menu__toggle"><span/></label>
                <ul className="menu__box">
                    <li>
                        <NavLink to="/" className="menu__item">
                            <div className={'menu__block'}>
                                <HomeIcon sx={{marginRight: '10px'}}/>
                                <div>Головна</div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" className="menu__item">
                            <div className={'menu__block'}>
                                <PersonIcon sx={{marginRight: '10px'}}/>
                                <div>Профіль</div>
                            </div>
                        </NavLink>
                    </li>
                    {authData.role === 'Admin'?
                        <li>
                            <NavLink className="menu__item" to={"../panel"}>
                                <div className={'menu__block'}>
                                    <AdminPanelSettingsIcon sx={{marginRight: '10px'}}/><div>Адмін Панель</div>
                                </div>
                            </NavLink>
                        </li>:''
                    }
                    <li>
                        <NavLink className="menu__item" to={"../watch"}>
                            <div className={'menu__block'}>
                                <FeaturedPlayListOutlinedIcon sx={{marginRight: '10px'}}/><div>Спостереження</div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="menu__item" to={"../trade"}>
                            <div className={'menu__block'}>
                                <CandlestickChartIcon sx={{marginRight: '10px'}}/><div>Трейдити</div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className="menu__item">
                            <div className={'menu__block'}>
                                <AssuredWorkloadIcon sx={{marginRight: '10px'}}/>
                                <div>Навчальна інформація</div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/courses" className="menu__item">
                            <div className={'menu__block'}>
                                <CurrencyBitcoinIcon sx={{marginRight: '10px'}}/>
                                <div>Курси валют</div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="menu__item">
                            <div className={'menu__block'}>
                                <ConnectWithoutContactIcon sx={{marginRight: '10px'}}/>
                                <div>Зворотній зв'язок</div>
                            </div>
                        </NavLink>
                    </li>
                    <li onClick={logoutHandler}>
                        <div className="menu__item">
                            <div className={'menu__block'}>
                                <Logout sx={{marginRight: '10px'}}/>
                                <div>Вийти</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Hamburger
