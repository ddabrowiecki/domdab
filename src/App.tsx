import "./App.css";
import EngHistory from "./components/EngHistory";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import EngProjects from "./components/EngProjects";
import LanguagePage from "./components/LanguagePage";
import VolunteerPage from "./components/VolunteerPage";
import PreviousCareerPage from "./components/PreviousCareerPage";
import EducationPage from "./components/EducationPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/eng_history" element={<EngHistory />} />
        <Route path="/eng_projects" element={<EngProjects />} />
        <Route path="/previous_career" element={<PreviousCareerPage />} />
        <Route path="/languages" element={<LanguagePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
      </Routes>
    </>
  );
}

export default App;
