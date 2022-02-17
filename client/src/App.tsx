import React from 'react';

import './App.css'

import { BrowserRouter,  Routes, Route, Link } from "react-router-dom";
import FaceBookLogin from "./components/Login/FaceBookLogin";
import Home from "./components/Static/Home";
import Login from "./components/Login/Login"



function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
<Route index element={<Home />} />
        <Route path="FaceBookLogin" element={<FaceBookLogin />}/>
         <Route path="Login" element={<Login />}/>

        </Routes>
         </BrowserRouter>
      </>
  );
}

export default App;
