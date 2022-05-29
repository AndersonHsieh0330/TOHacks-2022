import "./Snowyday.css";
import React, { useState } from "react";
import SnowyDayIWould from "../../../assets/imgs/snowyday/I.png";
import SnowyDayUWould from "../../../assets/imgs/snowyday/you.png";
import SnowBackground from "../../../assets/imgs/snowyday/snowbackground.png";
import ActivityInput from "../../../components/ActivityInput/ActivityInput.js";
import SearchIcon from "../../../assets/icons/Search.png";
import axios from "axios";
import TryAgainBTN from "../../../assets/imgs/tryagainbtn.png";

const Snowyday = () => {
  const [userInputActivity, updateUserInputActivity] = useState("");
  const [hasSumbitted, setSubmitted] = useState(false);
  const [activity, setActivity] = useState("");
  const putActivity = (value) => {
    axios({
      method: "POST",
      url: "http://localhost:8080/api/activity",
      data: {
        category: "Snow",
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
        category: "Snow",
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
    <div id="SnowyContainer">
      <img src={SnowyDayIWould} className="OnWhatDayWouldIDoWhat" />
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
        <img src={SnowyDayUWould} className="OnWhatDayWouldUDoWhat" />
      ) : (
        <img
          src={SnowyDayUWould}
          className="OnWhatDayWouldUDoWhatPlaceHolder"
        />
      )}

      {hasSumbitted ? (
        <div className="ActivitySuggestionText">{activity}</div>
      ) : (
        <div className="ActivitySuggestionTextPlaceHolder">{"holdplace"}</div>
      )}

      <img src={SnowBackground} id="SnowyDayBackground" />
      {hasSumbitted ? (
        <img src={TryAgainBTN} id="TryAgainBTN" onClick={() => getActivity()} />
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Snowyday;
