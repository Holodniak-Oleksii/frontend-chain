import React from "react";
import Banner from "./auxiliary blocks/Banner";
import bannerJSON from "../../content/BannerJSON";

function InformationBlock() {
    return (
        <div className={'banner'}>
            {bannerJSON.map((cur, idx)=>{
                return(
                    <div key={idx} className={'banner__w80'}>
                    <Banner
                        img={cur.img}
                            direction={cur.direction}
                            text={cur.text}
                            button={cur.button}
                            header={cur.header}
                            special={cur.special}
                            link={cur.link}
                    />
                    </div>
                )
            })}
        </div>
    );
}

export default InformationBlock
