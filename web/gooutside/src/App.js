import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IdeaSubmissionPage from "./screens/IdeaSubmission/IdeaSubmission.js";
import LandingPage from "./screens/LandingPage/LandingPage.js"
import NavBar from "./components/NavBar/NavBar.js"




function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
      <Routes>
          
            <Route path="/ideas" element={<IdeaSubmissionPage />} />
            <Route
              path="/"
              element={<LandingPage />}
            />
          </Routes>
    </div>
    
    </BrowserRouter>


  );
}

export default App;
