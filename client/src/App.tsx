import React from 'react';

import './App.css'

import { BrowserRouter,  Routes, Route, Link } from "react-router-dom";
import FaceBookLogin from "./components/Login/FaceBookLogin";
import Home from "./components/Static/Home";
import Login from "./components/Login/Login"
import Register from "./components/Login/Registration"
import GoogleLogin from "./components/Login/GoogleLogin";


function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
<Route index element={<Home />} />
        <Route path="FaceBookLogin" element={<FaceBookLogin />}/>
         <Route path="Login" element={<Login />}/>
         <Route path="Register" element={<Register />}/>
         <Route path="GoogleLogin" element={<GoogleLogin />}/>

        </Routes>
         </BrowserRouter>
      </>
  );
}

export default App;
