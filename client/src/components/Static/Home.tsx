

import React from 'react';
import { Link } from "react-router-dom";
import GoogleLogin from "../Login/GoogleLogin";
import FaceBookLogin from "../Login/FaceBookLogin";
import Login from "../Login/Login";
import Register from "../Login/Registration"

function Home() {
  return (
    <>
       <div className="container-box center"  >
      <h2>Login</h2>

  </div>
    
  <ul>
    <Link to="/Register"><li>Register</li></Link>
   <Link to="/Login"><li>Login</li></Link>
    <li><FaceBookLogin/></li>
    <li><GoogleLogin/></li>
  </ul>



  </>
  );
}

export default Home;
