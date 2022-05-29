import React, { useState } from "react";
import "./IdeaSubmission.css";
import SunnyDayIWould from "../../assets/imgs/sunnyday/on a sunny day i would.png";
import SearchIcon from "../../assets/icons/Search.png";

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const OnWhatDayWouldIDOWhat = (weatherIndex) => {
  switch (weatherIndex) {
    case 0:
      return <img src={SunnyDayIWould} id="OnWhatDayWouldIDoWhat" />;
    case 1:
      return <img src={SunnyDayIWould} id="OnWhatDayWouldIDoWhat" />;
    case 2:
      return <img src={SunnyDayIWould} id="OnWhatDayWouldIDoWhat" />;
    case 3:
      return <img src={SunnyDayIWould} id="OnWhatDayWouldIDoWhat" />;
  }
};

const IdeaSubmission = () => {
  const weather = getRandom(0, 3);
  // 0 => Sunny
  // 1 => Rainy
  // 2 => Cloudy
  // 3 => Windy
  return (
    <div id="IdeasContainer">
      {OnWhatDayWouldIDOWhat(weather)}
      <div id="InputContainer">
        <input
          id="ActivityInput"
          placeholder="Input Activity"
          type="text"
        ></input>
        <img id="SearchBTN" src={SearchIcon} />
      </div>
    </div>
  );
};

export default IdeaSubmission;
