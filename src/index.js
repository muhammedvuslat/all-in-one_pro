//  Entry point of the application, initializes the React application and provides theme and routing.

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./features/ThemeContext";

// Creates the root DOM element for the application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renders the application with theme and routing
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
