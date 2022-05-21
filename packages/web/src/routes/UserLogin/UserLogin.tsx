import React,{useState} from "react";
import Header from "../Header";
import * as yup from 'yup'

import one01 from "../img/one-01.png";
import image6 from "../img/image 6.png";

import girl32 from "../img/girl3 2.png";
import image5 from "../img/image 5.png";
import Login from "../Login"



import girl1 from "../img/girl 1.png";
import img31 from "../img/3 1.png";
import logo from "../img/image 7.png";

const UserLogin=()=>{








  return(
      <>
        <Header/>
        <div className="container">
      <div className="row my-5">
          <div className="col-lg-6">
              <div className="row overflow-hidden" style={{maxHeight:"650px"}}>
                  <div className="col-md-4 col-6 mb-3 overflow-hidden">
                      <img src={one01} className="img-fluid mb-3" alt="gallery" style={{marginTop:"-100px"}}/>
                      <img src={girl32} className="img-fluid mb-3" alt="gallery"/>
                      <img src={one01} className="img-fluid mb-3" alt="gallery"/>
                      <img src={girl32} className="img-fluid mb-3" alt="gallery"/>
                  </div>
                  <div className="col-md-4 col-6 mb-3">
                      <img src={image6} className="img-fluid mb-3" alt="gallery"/>
                      <img src={girl1} className="img-fluid mb-3" alt="gallery"/>
                      <img src={image6} className="img-fluid mb-3" alt="gallery"/>
                      <img src={girl1} className="img-fluid mb-3" alt="gallery"/>
                  </div>
                  <div className="col-md-4 col-6 mb-3 overflow-hidden d-md-block d-none">
                      <img src={img31} className="img-fluid mb-3" alt="gallery" style={{marginTop:"-100px"}}/>
                      <img src={image5} className="img-fluid mb-3" alt="gallery"/>
                      <img src={img31} className="img-fluid mb-3" alt="gallery"/>
                      <img src={image5} className="img-fluid mb-3" alt="gallery"/>
                  </div>
              </div>
          </div>
          <div className="col-lg-6">
              <div className="registration-box">
                  {/*<img src={logo} alt="logo" width={150} className="mb-3"/>*/}

<Login/>

              </div>
          </div>
      </div>
        </div>

        </>
  )
}

export default UserLogin
