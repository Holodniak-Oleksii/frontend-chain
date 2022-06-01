import React from "react";
import Advertising from "./auxiliary blocks/Advertising";
import DoubleCarousel from "../emelents/carrousel/DoubleCarousel";

function CarouselBlock() {

        return (
            <div>
                <Advertising/>
                <div className={'carrousel__flex padding_side'}>
                    <h1 className={'carrousel__h30'}> Най більш <span style={{color: '#c3d21c'}}> популярні</span> криптовалюти світу</h1>
                    <p className={'carrousel__p'}>Топ найбільш популярних криптомонет, щоб ознайомитися краще із якоюсь монеткою натисни на неї</p>
                </div>
                <DoubleCarousel/>
            </div>
        );
}

export default CarouselBlock
