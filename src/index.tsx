import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeManager } from "./ThemeManager";
import { BrowserRouter as Router } from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
  <ThemeManager>
    <App />
  </ThemeManager>
  </Router>
);
