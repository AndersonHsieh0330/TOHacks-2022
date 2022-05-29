import "./Nighttime.css";
import NighttimeIWould from "../../../assets/imgs/nighttime/I.png";
import NighttimeUWould from "../../../assets/imgs/nighttime/U.png";
import TelescopeBackground from "../../../assets/imgs/nighttime/Telescope.png";
import ActivityInput from "../../../components/ActivityInput/ActivityInput.js";

const Nighttime = () => {
  return (
    <div id="NighttimeContainer">
      <img src={NighttimeIWould} className="OnWhatDayWouldIDoWhat" />
      <ActivityInput category="sunny" />
      <img src={NighttimeUWould} className="OnWhatDayWouldUDoWhat" />
      <div className="ActivitySuggestionText">output</div>

      <img src={TelescopeBackground} id="TelescopeBackground" />
    </div>
  );
};

export default Nighttime;
