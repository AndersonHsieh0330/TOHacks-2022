import "./Snowyday.css";
import SnowyDayIWould from "../../../assets/imgs/snowyday/I.png";
import SnowyDayUWould from "../../../assets/imgs/snowyday/you.png";
import SnowBackground from "../../../assets/imgs/snowyday/snowbackground.png";
import ActivityInput from "../../../components/ActivityInput/ActivityInput.js";

const Snowyday = () => {
  return (
    <div id="SnowyContainer">
      <img src={SnowyDayIWould} className="OnWhatDayWouldIDoWhat" />
      <ActivityInput category="sunny" />
      <img src={SnowyDayUWould} className="OnWhatDayWouldUDoWhat" />
      <div className="ActivitySuggestionText">output</div>

      <img src={SnowBackground} id="SnowyDayBackground" />
    </div>
  );
};
export default Snowyday;
