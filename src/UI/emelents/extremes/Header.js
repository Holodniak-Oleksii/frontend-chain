import React, {useContext} from "react";
import {AppBar, Button, useMediaQuery, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import ModalAuth from "../forms/ModalAuth";
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";
import {AccountCircle, Logout} from "@mui/icons-material";
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

function Header({position = 'absolute', AuthVisible, backgroundColor = 'transparent', path ='/img/logo.png'}) {

    const matches1250 = useMediaQuery('(min-width:1250px)')
    const matches1000 = useMediaQuery('(min-width:1000px)')
    const matches860 = useMediaQuery('(min-width:860px)')

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
       setAnchorEl(event.currentTarget);
    };
    const auth = useContext(AuthContext)

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const logoutHandler = async () =>{
        try {
            auth.logout()
        }catch (e){}
    }
    const authData = JSON.parse(localStorage.getItem('userData'))

    if(AuthVisible === false) {
        return (
            <AppBar position={position} sx={{backgroundColor: backgroundColor, padding: matches860?'0 10%':'0%'}}>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <IconButton>
                            <NavLink to="/">
                                <img alt={"img"} src={path} width={'50px'}/>
                            </NavLink>
                        </IconButton>
                    </div>
                    <Typography component="div" sx={{
                        width: matches1250 ?'45%': matches1000 ? '60%': '70%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontWeight: 'lighter'
                    }}>
                        <div><NavLink to="/blog" style={{color: 'white'}}>Навчальна інформація</NavLink></div>
                        <div><NavLink to="/courses" style={{color: 'white'}}>Курси валют</NavLink></div>
                        <div><NavLink to="/contact" style={{color: 'white'}}>Зворотній зв'язок</NavLink></div>
                    </Typography>
                    <div>
                        <Button onClick={handleOpen} variant="contained" style={{
                            fontWeight: 'bold',
                            backgroundColor: '#c3d21c',
                            marginLeft: '10px',
                            color: 'black'
                        }}>Увійти</Button>
                        <ModalAuth handleClose={handleClose} open={open}/>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }else {
        return (
            <AppBar position={position} sx={{backgroundColor: backgroundColor, padding: matches860?'0 10%':'0%'}}>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <IconButton>
                            <NavLink to="/">
                                <img alt={"img"} src={path} width={'50px'}/>
                            </NavLink>
                        </IconButton>
                    </div>
                    <Typography component="div" sx={{
                        width: matches1250 ?'55%': matches1000 ? '65%': '75%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontWeight: 'lighter'
                    }}>
                        <div><NavLink to="/blog" style={{color: 'white'}}>Навчальна інформація</NavLink></div>
                        <div><NavLink to="/courses" style={{color: 'white'}}>Курси валют</NavLink></div>
                        <div><NavLink to="/trade" style={{color: 'white'}}>Трейдити</NavLink></div>
                        <div><NavLink to="/contact" style={{color: 'white'}}>Зворотній зв'язок</NavLink></div>
                    </Typography>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            >
                            <AccountCircle sx={{fontSize: '40px', color: 'gold'}} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            sx={{
                                '& .MuiPaper-root': {
                                    backgroundColor: '#222',
                                },
                            }}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleCloseMenu}>
                            <MenuItem style={{backgroundColor: '#222'}}>
                                <NavLink style={{color: '#ffffff'}} to={"../profile"}>
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <PersonIcon sx={{marginRight: '10px'}}/><div>Профіль</div>
                                    </div>
                                </NavLink>
                            </MenuItem>
                            {authData.role === 'Admin'?
                            <MenuItem style={{backgroundColor: '#222'}}>
                                <NavLink style={{color: '#ffffff'}} to={"../panel"}>
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <AdminPanelSettingsIcon sx={{marginRight: '10px'}}/><div>Адмін Панель</div>
                                    </div>
                                </NavLink>
                            </MenuItem>:''
                            }
                            <MenuItem style={{backgroundColor: '#222'}}>
                                <NavLink style={{color: '#ffffff'}} to={"../watch"}>
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <FeaturedPlayListOutlinedIcon sx={{marginRight: '10px'}}/><div>Спостереження</div>
                                    </div>
                                </NavLink>
                            </MenuItem>
                            <MenuItem style={{backgroundColor: '#222'}} onClick={logoutHandler}>
                                <NavLink style={{color: '#ffffff'}} to={"/"}>
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <Logout sx={{marginRight: '10px'}}/>
                                        <div>Вийти</div>
                                    </div>
                                </NavLink>
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }

}

export default Header
