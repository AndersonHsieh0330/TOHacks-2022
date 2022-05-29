import "./Nighttime.css";
import React, { useState } from "react";
import NighttimeIWould from "../../../assets/imgs/nighttime/I.png";
import NighttimeUWould from "../../../assets/imgs/nighttime/U.png";
import TelescopeBackground from "../../../assets/imgs/nighttime/Telescope.png";
import SearchIcon from "../../../assets/icons/Search.png";
import axios from "axios";
import TryAgainBTN from "../../../assets/imgs/tryagainbtn.png";

const Nighttime = () => {
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
      <img src={NighttimeIWould} className="OnWhatDayWouldIDoWhat" />
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
        <img src={NighttimeUWould} className="OnWhatDayWouldUDoWhat" />
      ) : (
        <img
          src={NighttimeUWould}
          className="OnWhatDayWouldUDoWhatPlaceHolder"
        />
      )}

      {hasSumbitted ? (
        <div className="ActivitySuggestionText">{activity}</div>
      ) : (
        <div className="ActivitySuggestionTextPlaceHolder">{"holdplace"}</div>
      )}

      <img src={TelescopeBackground} id="TelescopeBackground" />
      {hasSumbitted ? (
        <img
          src={TryAgainBTN}
          id="TryAgainBTN"
          onClick={() => getActivity()}
          style={{ marginBottom: "-20vh" }}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Nighttime;
