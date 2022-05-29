import react from 'react';
import "./LandingPage.css";
import { NavLink } from "react-router-dom";

import Forest from "../../assets/imgs/forest.png";
import DogPark from "../../assets/imgs/Filled_glass.png";
import GoOutsideText from "../../assets/imgs/Go_Outside_text.png";
import WhatUWaitingFor from "../../assets/imgs/what are you waiting for_.png";
import ExploreBTN from "../../assets/imgs/ExploreBTN.png";


const LandingPage = () => {

    return(
        <div id='LandingContentContainer'>
            <img id ="GoOutSideText"src= {GoOutsideText}/>
            <div id="ForestContainer">
            <img id="ForestImg" src={Forest}/>
            <img id="ForestImg" src={Forest}/>
            <img id="ForestImg" src={Forest}/>
            <img id="ForestImg" src={Forest}/>
            <img id="ForestImg" src={Forest}/>
            <img id="ForestImg" src={Forest}/>
            <img id="ForestImg" src={Forest}/>

            </div>
            <img id="DogParkWithScope"src={DogPark}/>
            <img id = "WhatUWaitingFor" src={WhatUWaitingFor}/>
            <div id="Description">
                We've all stayed at home long enough for COVID 19 and quaratining, as summer is finally approaching, we've came up with some activities for you to get outside!
            </div>
            <NavLink to="/ideas">
            <img id = "ExploreBTN" src={ExploreBTN}/>
            </NavLink>
        </div>
    )
}

export default LandingPage;