import "./Sunnyday.css";
import React, { useState } from "react";
import SunnyDayIWould from "../../../assets/imgs/sunnyday/on a sunny day i would.png";
import SunnyDayUWould from "../../../assets/imgs/sunnyday/On a warm sunny day you could.png";
import BeachBackground from "../../../assets/imgs/sunnyday/beach.png";
import SearchIcon from "../../../assets/icons/Search.png";
import axios from "axios";
import TryAgainBTN from "../../../assets/imgs/tryagainbtn.png";

const Sunnyday = () => {
  const [userInputActivity, updateUserInputActivity] = useState("");
  const [hasSumbitted, setSubmitted] = useState(false);
  const [activity, setActivity] = useState("");
  const putActivity = (value) => {
    axios({
      method: "POST",
      url: "http://localhost:8080/api/activity",
      data: {
        category: "Sun",
        activity: value,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
    });
  };
  const getActivity = () => {
    axios({
      method: "GET",
      url: "http://localhost:8080/api/activity",
      data: {
        category: "Sun",
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response.data.activity);
      setActivity(response.data.activity);
      setSubmitted(true);
    });
  };

  return (
    <div id="SunnyContainer">
      <img src={SunnyDayIWould} className="OnWhatDayWouldIDoWhat" />
      <div id="InputContainer">
        <input
          id="ActivityInput"
          placeholder="Input Activity"
          type="text"
          onChange={(val) => updateUserInputActivity(val)}
        ></input>
        <img
          id="SearchBTN"
          src={SearchIcon}
          onClick={() => {
            putActivity(userInputActivity);
            getActivity();
          }}
        />
      </div>

      {hasSumbitted ? (
        <img src={SunnyDayUWould} className="OnWhatDayWouldUDoWhat" />
      ) : (
        <img
          src={SunnyDayUWould}
          className="OnWhatDayWouldUDoWhatPlaceHolder"
        />
      )}

      {hasSumbitted ? (
        <div className="ActivitySuggestionText">{activity}</div>
      ) : (
        <div className="ActivitySuggestionTextPlaceHolder">{"holdplace"}</div>
      )}

      <img src={BeachBackground} id="SunnyDayBackground" />
      {hasSumbitted ? (
        <img src={TryAgainBTN} id="TryAgainBTN" onClick={() => getActivity()} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Sunnyday;
