import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

import Forest from "../../assets/imgs/forest.png";
import DogPark from "../../assets/imgs/Filled_glass.png";
import GoOutsideText from "../../assets/imgs/Go_Outside_text.png";
import WhatUWaitingFor from "../../assets/imgs/what are you waiting for_.png";
import ExploreBTN from "../../assets/imgs/ExploreBTN.png";

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const LandingPage = () => {
  const navigate = useNavigate();
  // 0 => Sunny
  // 1 => Rainy
  // 2 => Cloudy
  // 3 => Windy

  const goToRandomCategory = () => {
    const pageIndex = getRandom(0, 3);
    //push a new link
    console.log(pageIndex);
    let desirePath = "";
    switch (pageIndex) {
      case 0:
        desirePath = "/sunny";
        break;

      case 1:
        desirePath = "/rainy";
        break;

      case 2:
        desirePath = "/nighttime";
        break;

      case 3:
        desirePath = "/snowy";
        break;
    }

    navigate(desirePath);
  };

  return (
    <div id="LandingContentContainer">
      <img id="GoOutSideText" src={GoOutsideText} />
      <div id="ForestContainer">
        <img id="ForestImg" src={Forest} />
        <img id="ForestImg" src={Forest} />
        <img id="ForestImg" src={Forest} />
        <img id="ForestImg" src={Forest} />
        <img id="ForestImg" src={Forest} />
        <img id="ForestImg" src={Forest} />
        <img id="ForestImg" src={Forest} />
      </div>
      <img id="DogParkWithScope" src={DogPark} />
      <img id="WhatUWaitingFor" src={WhatUWaitingFor} />
      <div id="Description">
        We've all stayed at home long enough for COVID 19 and quaratining, as
        summer is finally approaching, we've came up with some activities for
        you to get outside!
      </div>
      <img
        id="ExploreBTN"
        src={ExploreBTN}
        onClick={() => goToRandomCategory()}
      />
    </div>
  );
};

export default LandingPage;
