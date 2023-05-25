import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Video from "./pages/Video/Video";

function App() {
  const router = useLocation();
  console.log(router);
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        {!router.pathname.includes("/video") && <Sidebar />}

        <div className={!router.pathname.includes("/video") && "main-left"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<Video />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
