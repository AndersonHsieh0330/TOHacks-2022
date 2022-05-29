import "./Rainyday.css";
import RainyIWould from "../../../assets/imgs/rainyday/I.png";
import RainyUWould from "../../../assets/imgs/rainyday/U.png";
import RainyBackground from "../../../assets/imgs/rainyday/rainybackground.png";
import ActivityInput from "../../../components/ActivityInput/ActivityInput.js";

const Rainyday = () => {
  return (
    <div id="NighttimeContainer">
      <img src={RainyIWould} className="OnWhatDayWouldIDoWhat" />
      <ActivityInput category="sunny" />
      <img src={RainyUWould} className="OnWhatDayWouldUDoWhat" />
      <div className="ActivitySuggestionText">output</div>

      <img src={RainyBackground} id="RainyDayBackground" />
    </div>
  );
};

export default Rainyday;
