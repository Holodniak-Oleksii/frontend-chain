import React from "react";
import Header from "../UI/emelents/extremes/Header";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import Hamburger from "../UI/emelents/extremes/Hamburger";
import useMediaQuery from "@mui/material/useMediaQuery";
function Page404({AuthVisible}) {
    const matches768 = useMediaQuery('(min-width:770px)')

    return (
        <div  style={{display: 'flex', flexDirection: 'column'}}>
            {matches768 ? <Header AuthVisible={AuthVisible}/>: <Hamburger AuthVisible={AuthVisible}/>}
            <div className={'page404'}>
                <span style={{fontSize: '100px'}}>404</span>
                <div style={{ color: '#ffffff',fontSize: '20px', display:'block', margin: '20px 0'}}>Ууупс! Дану сторінку не знайдено</div>
                <Button  variant={'contained'} style={{backgroundColor: '#FFC60B', borderRadius: '20px'}}>
                    <Link style={{color: 'black'}} to={'/'}> Повренутися на головну</Link>
                </Button>
            </div>
        </div>
    );
}
export default Page404
