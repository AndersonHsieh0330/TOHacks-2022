import "./ActivityInput.css";
import React from "react";
import SearchIcon from "../../assets/icons/Search.png";
import axios from "axios";

const getActivity = ({ category, setActivity, setSubmitted }) => {
  axios({
    method: "GET",
    url: "http://localhost:8080/api/activity?category",
    data: {
      category: category,
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

const ActivityInput = ({ category, handleRequest }) => {
  return (
    <div id="InputContainer">
      <input
        id="ActivityInput"
        placeholder="Input Activity"
        type="text"
      ></input>
      <img id="SearchBTN" src={SearchIcon} onClick={getActivity} />
    </div>
  );
};

export default ActivityInput;
