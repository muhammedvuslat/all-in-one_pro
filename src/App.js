import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./layouts/Customer/SideBar";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Cari from "./pages/Cari";

function App() {
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
      </div>
    </>
  );
}

export default App;
