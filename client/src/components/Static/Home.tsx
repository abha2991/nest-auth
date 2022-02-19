

import React from 'react';
import { Link } from "react-router-dom";
import Google from "../Login/GoogleLogin";
import FaceBookLogin from "../Login/FaceBookLogin";


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
    <li><Google/></li>
  </ul>



  </>
  );
}

export default Home;
