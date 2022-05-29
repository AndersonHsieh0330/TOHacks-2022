import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SunnyPage from "./screens/IdeaSubmission/Sunny/Sunnyday.js";
import RainyPage from "./screens/IdeaSubmission/Rainy/Rainyday.js";
import NightTime from "./screens/IdeaSubmission/Nighttime/Nighttime.js";
import SnowyPage from "./screens/IdeaSubmission/Snowy/Snowyday.js";
import LandingPage from "./screens/LandingPage/LandingPage.js";
import NavBar from "./components/NavBar/NavBar.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/sunny" element={<SunnyPage />} />
          <Route path="/nighttime" element={<NightTime />} />
          <Route path="/rainy" element={<RainyPage />} />
          <Route path="/snowy" element={<SnowyPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
