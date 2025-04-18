import Navbar from "./assets/Navbar";
import HomePage from "./assets/HomePage";
import Footer from "./assets/Footer";
import Register from "./assets/Register";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Navigate to="/register" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
