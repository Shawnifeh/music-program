import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SongPage from "./SongPage";
import './App.css';
import InfoPage from "./InfoPage";
import Settings from "./Settings";
import FeedbackPage from "./FeedbackPage";
import LoginPage from "./LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song/:id" element={<SongPage />} />
        <Route path="/info/:id" element={<InfoPage />} /> 
        <Route path="/settings/:id" element={<Settings />} /> 
        <Route path="/feedbackPage" element={<FeedbackPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </Router>
 );
}

export default App;