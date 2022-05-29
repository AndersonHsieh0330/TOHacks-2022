import "./ActivityInput.css";
import SearchIcon from "../../assets/icons/Search.png";

const ActivityInput = () => {
  return (
    <div id="InputContainer">
      <input
        id="ActivityInput"
        placeholder="Input Activity"
        type="text"
      ></input>
      <img id="SearchBTN" src={SearchIcon} />
    </div>
  );
};

export default ActivityInput;
