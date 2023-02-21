import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeManager } from "./ThemeManager";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeManager>
    <App />
  </ThemeManager>
);
