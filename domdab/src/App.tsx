import "./App.css";
import EngHistory from "./components/EngHistory";
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
     <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/eng_history" element={<EngHistory/>} />
      </Routes>
    </>
  );
}

export default App;
