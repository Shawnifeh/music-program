import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Home from "./Home";
import SongPage from "./SongPage";
import InfoPage from "./InfoPage";
import Settings from "./Settings";
import FeedbackPage from "./FeedbackPage";
import LoginPage from "./LoginPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  

  return (
    <div style={{ pointerEvents: user ? "auto" : "none" }}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song/:id" element={<SongPage />} />
        <Route path="/info/:id" element={<InfoPage />} />
        <Route path="/settings/:id" element={<Settings />} />
        <Route path="/feedbackPage" element={<FeedbackPage />} />
      </Routes>
      

      {/* 🔥 LOGIN MODAL OVERLAY (always on top if not logged in) */}
      {!user && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <LoginPage />
          </div>
        </div>
      )}
    </Router>
    </div>
  );
}

export default App;

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  pointerEvents: "auto"
};

const modalStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "300px"
};

