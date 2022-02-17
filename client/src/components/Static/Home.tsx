

import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h2>Login</h2>


  <ul>
    <Link to="/Login"><li>Login</li></Link>
    <Link to="/FaceBookLogin"><li>Login With Facebook</li></Link>

    <li>Login With Google</li>
  </ul>



  </>
  );
}

export default Home;
