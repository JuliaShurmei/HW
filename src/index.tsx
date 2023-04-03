import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeManager } from "./ThemeManager";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
  <Router>
  <ThemeManager>
    <App />
  </ThemeManager>
  </Router>
  </Provider>
);
