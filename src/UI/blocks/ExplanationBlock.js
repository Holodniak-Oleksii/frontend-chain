import React from "react";
import {Button} from "@mui/material";
import Step from "./auxiliary blocks/Step";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import {NavLink} from "react-router-dom";

function ExplanationBlock() {
    return (
        <div className={'explanation'}>
            <div className={'explanation__flex explanation__start'} style={{margin: '100px 0'}}>
                <h1 className={'explanation__h'}>Ми допоможемо тобі розібратися у <span className={'span_yellow'}>криптосфері</span></h1>
                <div className={'explanation__btn motive__btn'}>
                    <Button variant={'contained'}>
                        <NavLink to="/blog" style={{color:'black',fontWeight: 'bold'}}>
                            Давай розпочнемо
                        </NavLink>
                    </Button>
                </div>
            </div>
            <div className={'explanation__flex explanation__block'}>
                <Step context={
                    <div className={'explanation__space'}>
                        <div className={'explanation__center'}>
                            <AccountCircleIcon style={{fontSize: '40px'}}/>
                            <span className={'explanation__line'}/>
                            <span className={'circle_span'}>1</span>
                        </div>
                        <h2 className={'explanation__h2'}>Створіть акаунт</h2>
                        <p className={'explanation__p'}>Це твій перший крок для того щоб
                            разом із нами ропочати досліджувати сферу криптовалют,
                            розпочни зараз і створи своє майбутьнє</p>
                    </div>
                }/>
                <Step context={
                    <div className={'explanation__space'}>
                        <div className={'explanation__center'}>
                            <FeaturedPlayListIcon style={{fontSize: '40px'}}/>
                            <span className={'explanation__line'}/>
                            <span className={'circle_span'}>2</span>
                        </div>
                        <h2 className={'explanation__h2'}>Відстежуйте криптовалюти</h2>
                        <p className={'explanation__p'}>Ти маєш можливість переглядати курси понад 200 криптовалют,
                            і додавати їх у власний список для відстеження</p>
                    </div>
                }/>
                <Step context={
                    <div className={'explanation__space'}>
                        <div className={'explanation__center'}>
                            <TravelExploreIcon style={{fontSize: '40px'}}/>
                            <span className={'explanation__line'}/>
                            <span className={'circle_span'}>3</span>
                        </div>
                        <h2 className={'explanation__h2'}>Дізнавайся більше</h2>
                        <p className={'explanation__p'}>Сучасні технології підрозумівають під собою
                            винаходження багато чого нового,
                            і щоб залишатися у темі тобі доведеться вивчати більше) </p>
                    </div>
                }/>
            </div>
        </div>
    );
}

export default ExplanationBlock
