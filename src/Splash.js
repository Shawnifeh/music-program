import { useState, useEffect } from "react";
import Home from "./Home";
import "./Splash.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="splash-screen">
        <img
          src="/logo1024.png"
          alt="Music Program"
          className="splash-logo"
        />
      </div>
    );
  }

  return <Home />;
}

export default App;