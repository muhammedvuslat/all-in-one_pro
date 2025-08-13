// Main application component, provides routing and basic layout.
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./layouts/Customer/SideBar";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Account from "./pages/Account";
import { ToastContainer } from "react-toastify";
import { useTheme } from "./features/ThemeContext";

// Main application component
function App() {
  const { theme } = useTheme();

  return (
    <div className="App">
      {/* Sidebar component */}

      <SideBar />
      <div className="main-content">
        {/* Application routing routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="customers" element={<Customer />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        theme={theme}
      />
    </div>
  );
}

export default App;
