import React from 'react';

import './App.css'

import { BrowserRouter,  Routes, Route, Link } from "react-router-dom";

import Home from "./components/Static/Home";
import Login from "./components/Login/Login"
import Register from "./components/Login/Registration"



function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
<Route index element={<Home />} />

         <Route path="Login" element={<Login />}/>
         <Route path="Register" element={<Register />}/>


        </Routes>
         </BrowserRouter>
      </>
  );
}

export default App;
