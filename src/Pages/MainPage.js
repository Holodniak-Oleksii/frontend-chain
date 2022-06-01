import React from "react";
import Header from "../UI/emelents/extremes/Header";
import InformationBlock from "../UI/blocks/InformationBlock";
import CarouselBlock from "../UI/blocks/CarrouselBlock";
import RacketBlock from "../UI/blocks/RacketBlock";
import ExplanationBlock from "../UI/blocks/ExplanationBlock";
import Motive from "../UI/blocks/auxiliary blocks/Motive";
import Footer from "../UI/emelents/extremes/Footer";
import Hamburger from "../UI/emelents/extremes/Hamburger";
import {useMediaQuery} from "@mui/material";

function MainPage({AuthVisible}) {
    const matches768 = useMediaQuery('(min-width:770px)')
    return (
        <>
            {matches768 ? <Header AuthVisible={AuthVisible}/>: <Hamburger AuthVisible={AuthVisible}/>}
            <RacketBlock/>
            <CarouselBlock/>
            <InformationBlock/>
            <ExplanationBlock/>
            <Motive/>
            <Footer/>
        </>
    );
}

export default MainPage
