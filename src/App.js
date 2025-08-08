import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./layouts/Customer/SideBar";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Cari from "./pages/Cari";
import { ToastContainer } from "react-toastify";

import { useTheme } from "./features/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <div className="App">
        <SideBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="customers" element={<Customer />} />
            <Route path="cari" element={<Cari />} />
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
    </>
  );
}

export default App;
