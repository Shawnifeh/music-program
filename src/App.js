import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./Home";
import SongPage from "./SongPage";
import InfoPage from "./InfoPage";
import Settings from "./Settings";
import FeedbackPage from "./FeedbackPage";
import Splash from "./Splash";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Splash />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/song/:id" element={<SongPage />} />
          <Route path="/info/:id" element={<InfoPage />} />
          <Route path="/settings/:id" element={<Settings />} />
          <Route path="/feedbackPage" element={<FeedbackPage />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;