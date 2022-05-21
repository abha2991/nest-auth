import React,{useState} from "react";
import Header from "../Header";
import * as yup from 'yup'

import Register from '../Register';
//images
import one01 from "../img/one-01.png";
import image6 from "../img/image 6.png";
import FacebookLogo from "../img/1024px-Facebook_Logo_(2019) 1.png";
import girl32 from "../img/girl3 2.png";
import image5 from "../img/image 5.png";
import google from "../img/google (1) 1.png";
import config from '../../config'
import { IRegisterRequest } from '../../types/auth'

import girl1 from "../img/girl 1.png";
import img31 from "../img/3 1.png";
import logo from "../img/image 7.png";

const schema = yup
    .object({
        firstName: yup.string().min(3).max(26).required(),
        lastName: yup.string().min(3).max(26),
        email: yup.string().email().required(),
        password: yup.string().required()
    })
    .required()

// @ts-ignore
const defaultValues= {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}
const Registration=()=>{








    return(
        <>
        <Header/>
        <div className="container">
      <div className="row my-5">
          <div className="col-lg-6">
              <div className="row overflow-hidden" style={{maxHeight:"750px"}}>
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

                  <Register/>
                  {/*<h4>Registration</h4>*/}
                  {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>*/}
                  {/*<form>*/}
                  {/*    <input type="text" name="firstName" className="form-control mb-3" placeholder="First Name"*/}
                  {/*           value={firstName}*/}
                  {/*           onChange={(e) => setfirstName(e.target.value)}/>*/}
                  {/*    <input type="text" name="lastName" className="form-control mb-3" placeholder="Last Name"*/}
                  {/*           value={lastName}*/}
                  {/*           onChange={(e) => setlastName(e.target.value)}/>*/}
                  {/*    <input type="email" name="email" className="form-control mb-3" placeholder="Email ID"*/}
                  {/*           value={email}*/}
                  {/*           onChange={(e) => setemail(e.target.value)}/>*/}
                  {/*    <input type="password" name="password" className="form-control mb-3" placeholder="Password"*/}
                  {/*           value={password}*/}
                  {/*           onChange={(e) => setPassword(e.target.value)}/>*/}
                  {/*    <button type="submit" className="form-control btn btn-primary mb-3" onClick={PostData}>Register</button>*/}
                  {/*</form>*/}
                  {/*<p>Already have an account? <a href="./login" style={{textDecoration:"none"}}>UserLogin Here</a></p>*/}
                  {/*<div className="d-flex justify-content-justify">*/}
                  {/*    <hr style={{width:"100%",marginRight:"10px"}}/>*/}
                  {/*    <p style={{width:"100%",textAlign:"center"}}>or sign in</p>*/}
                  {/*    <hr style={{width:"100%",marginLeft:"10px"}}/>*/}
                  {/*</div>*/}
                  {/*<div className="d-md-flex d-block justify-content-between text-center social-login">*/}
                  {/*    <a href="#">*/}
                  {/*        <img src={google} alt="google" />*/}
                  {/*        Sign in with Google*/}
                  {/*    </a>*/}
                  {/*    <a href="#">*/}
                  {/*        <img src={FacebookLogo} alt="Facebook" />*/}
                  {/*        Sign in with Facebook*/}
                  {/*    </a>*/}
                  {/*</div>*/}
              </div>
          </div>
      </div>
        </div>
            {/*<Register/>*/}
        </>
    )
}

export default Registration
