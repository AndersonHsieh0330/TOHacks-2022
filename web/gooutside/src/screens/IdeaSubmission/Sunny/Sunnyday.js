import "./Sunnyday.css";
import SunnyDayIWould from "../../../assets/imgs/sunnyday/on a sunny day i would.png";
import SunnyDayUWould from "../../../assets/imgs/sunnyday/On a warm sunny day you could.png";
import BeachBackground from "../../../assets/imgs/sunnyday/beach.png";
import ActivityInput from "../../../components/ActivityInput/ActivityInput.js";

const Sunnyday = () => {
  return (
    <div id="SunnyContainer">
      <img src={SunnyDayIWould} className="OnWhatDayWouldIDoWhat" />
      <ActivityInput category="sunny" />
      <img src={SunnyDayUWould} className="OnWhatDayWouldUDoWhat" />
      <div className="ActivitySuggestionText">output</div>

      <img src={BeachBackground} id="SunnyDayBackground" />
    </div>
  );
};

export default Sunnyday;
