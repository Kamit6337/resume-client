import { useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = "https://aminfo.vercel.app";
  }, [navigate]);

  return null;
}

export default App;
