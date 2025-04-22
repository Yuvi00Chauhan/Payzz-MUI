import Navbar from "./assets/Navbar";
import HomePage from "./assets/HomePage";
import Footer from "./assets/Footer";
import Register from "./assets/Register";
import Account from "./assets/Account";
import About from "./assets/About";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Contact from "./assets/Contact";
import Features from "./assets/Features";
import MobileRecharge from "./assets/MobileRecharge";
import FAQs from "./assets/FAQs";
import DTHrecharge from "./assets/DTHrecharge";
import FASTag from "./assets/FASTagRecharge";
import BroadbandRecharge from "./assets/BroadbandRecharge";
import CableTV from "./assets/CableTV";
import GasBill from "./assets/GasBill";
import ElectricityBill from "./assets/ElectricityBill";
import WaterBill from "./assets/WaterBill";
import Login from "./assets/Login";
function App() {
  
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
  function MainContent() {
    return (
      <div className="App">
       <Navbar  />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Navigate to="/register" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/account" element={<Account/> } />
            <Route path="/about" element={<About/> } />
            <Route path="/contact" element={<Contact/> } />
            <Route path="/feature" element={<Features/> } />
            <Route path="/mobo-recharge" element={<MobileRecharge/> } />
            <Route path="/frequently-asked" element={<FAQs/> } />
            <Route path="/DTH-recharge" element={<DTHrecharge/> } />
            <Route path="/FASTag-recharge" element={<FASTag/> } />
            <Route path="/broadband-recharge" element={<BroadbandRecharge/> } />
            <Route path="/cable-tv-recharge" element={<CableTV/> } />
            <Route path="/gas-bill" element={<GasBill/> } />
            <Route path="/electicity-bill" element={<ElectricityBill/> } />
            <Route path="/water-bill" element={<WaterBill/> } />
            <Route path="/user-auth-login" element={<Login/> } />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
