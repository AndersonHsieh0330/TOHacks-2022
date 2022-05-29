import "./Rainyday.css";
import React, { useState } from "react";
import RainyIWould from "../../../assets/imgs/rainyday/I.png";
import RainyUWould from "../../../assets/imgs/rainyday/U.png";
import RainyBackground from "../../../assets/imgs/rainyday/rainybackground.png";
import SearchIcon from "../../../assets/icons/Search.png";
import axios from "axios";
import TryAgainBTN from "../../../assets/imgs/tryagainbtn.png";

const Rainyday = () => {
  const [userInputActivity, updateUserInputActivity] = useState("");
  const [hasSumbitted, setSubmitted] = useState(false);
  const [activity, setActivity] = useState("");
  const putActivity = (value) => {
    axios({
      method: "POST",
      url: "http://localhost:8080/api/activity",
      data: {
        category: "Rain",
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
        category: "Rain",
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
    <div id="NighttimeContainer">
      <img src={RainyIWould} className="OnWhatDayWouldIDoWhat" />
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
        <img src={RainyUWould} className="OnWhatDayWouldUDoWhat" />
      ) : (
        <img src={RainyUWould} className="OnWhatDayWouldUDoWhatPlaceHolder" />
      )}

      {hasSumbitted ? (
        <div className="ActivitySuggestionText">{activity}</div>
      ) : (
        <div className="ActivitySuggestionTextPlaceHolder">{"holdplace"}</div>
      )}

      <img src={RainyBackground} id="RainyDayBackground" />
      {hasSumbitted ? (
        <img
          src={TryAgainBTN}
          id="TryAgainBTN"
          onClick={() => getActivity()}
          style={{ marginBottom: "-40vh" }}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Rainyday;
