import React from "react";
import {useParams} from "react-router-dom";
import ChartTime from "../UI/emelents/charts/ChartTime";
import InfoCoin from "../UI/emelents/coins/InfoCoin";
import Footer from "../UI/emelents/extremes/Footer";
import Header from "../UI/emelents/extremes/Header";
import Hamburger from "../UI/emelents/extremes/Hamburger";
import useMediaQuery from "@mui/material/useMediaQuery";

function CoinPage({AuthVisible}) {
    const { id } = useParams();
    const matches768 = useMediaQuery('(min-width:770px)')

    return (
        <div className={'color_back'}>
            {matches768 ? <Header position={'static'} AuthVisible={AuthVisible}/>: <Hamburger AuthVisible={AuthVisible}/>}
            <div className={'container'}>
                <InfoCoin nameCoin={id}/>
                <ChartTime nameCoin={id}/>
            </div>
            <Footer color={'new-footer-color'}/>
        </div>
    );
}

export default CoinPage
