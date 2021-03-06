// import React from "react";
// import logo from "../img/image 7.png";
// import play from "../img/Group.png";
// import translate from "../img/Group1.png";
// // import { usePopupState } from 'material-ui-popup-state/hooks'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import Logout from '../Logout';
// import useProfileApi from '../../api/useProfileApi'
// import {NavLink} from 'react-router-dom';
//
//
// const Header=()=>{
//
//   const data= useProfileApi()
//   let Status=data.status;
//   if(Status==="success") {
//     return (
//         <div className="container">
//             <nav className="navbar navbar-light bg-light">
//   <div className="d-flex w-100">
//     <div>
//     <a className="navbar-brand" href="./home">
//         <img src={logo} className="img-fluid"/>
//     </a>
//     </div>
//     <div className="w-100 navbar-expand">
//     <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end">
//         <li className="nav-item">
//           <a className="nav-link nav-btn" aria-current="page" href="#">
//               <img src={play}/>
//               Try Our App
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//               <img src={translate}/>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//           <FontAwesomeIcon icon={faMagnifyingGlass}/>
//           </a>
//         </li>
//
//       {/* <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li> */}
//       </ul>
//     </div>
//     <div>
//
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//
//       <span className="navbar-toggler-icon">
//
//       </span>
//     </button>
//     <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
//       <ul>
//         <li>
//           <Logout/>
//         </li>
//       </ul>
//
//     </div>
//     </div>
//   </div>
// </nav>
//         </div>
//
//
//     )
//   }
//   else
//   {
//     return (
//         <div className="container">
//             <nav className="navbar navbar-light bg-light">
//   <div className="d-flex w-100">
//     <div>
//     <a className="navbar-brand" href="./home">
//         <img src={logo} className="img-fluid"/>
//     </a>
//     </div>
//     <div className="w-100 navbar-expand">
//     <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end">
//         <li className="nav-item">
//           <a className="nav-link nav-btn" aria-current="page" href="#">
//               <img src={play}/>
//               Try Our App
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//               <img src={translate}/>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//           <FontAwesomeIcon icon={faMagnifyingGlass}/>
//           </a>
//         </li>
//
//
//       </ul>
//     </div>
//     <div>
//
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//
//       <span className="navbar-toggler-icon">
//
//       </span>
//     </button>
//     <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
//       <ul>
//         <li>
//          <NavLink to="/login">Login</NavLink>
//         </li>
//       </ul>
//
//     </div>
//     </div>
//   </div>
// </nav>
//         </div>
//
//
//     )
//   }
// }
//
// export default Header

import React from 'react'
import logo from '../img/image 7.png'
import play from '../img/Group.png'
import translate from '../img/Group1.png'
// import { usePopupState } from 'material-ui-popup-state/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Logout from '../Logout'
import useProfileApi from '../../api/useProfileApi'
import { NavLink } from 'react-router-dom'

import useLogoutApi from '../../api/useLogoutApi'
import { useNavigate } from 'react-router'
import $ from 'jquery'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')
  // console.log(window.location.href)
  // console.log({ splitLocation })
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('header').addClass('sticky-top')
    } else {
      $('header').removeClass('sticky-top')
    }
  })

  //   $(function(){
  //
  //     var url = window.location.href;
  //
  //     $("#navbarSupportedContent a").each(function() {
  //       // checks if its the same on the address bar
  //       if(url == (this.href)) {
  //         $(this).closest("li").addClass("active");
  //       }
  //     });
  //   });
  // console.log({pathname})

  const { data: profile, status } = useProfileApi()
  const { mutateAsync } = useLogoutApi()

  const navigate = useNavigate()
  const handleLogout = () => {
    mutateAsync()
    navigate('/home')
  }

  if (status === 'success') {
    return (
      <>
        {/*      <div className="container">*/}
        {/*      <nav className="navbar navbar-light bg-light">*/}
        {/*  <div className="w-100 d-flex align-items-center">*/}
        {/*    <div className="w-100">*/}
        {/*    <a className="navbar-brand" href="./">*/}
        {/*    <img src={logo} className="img-fluid" alt="logo"/>*/}
        {/*    </a>*/}
        {/*    </div>*/}

        {/*    <div className="w-100 navbar-expand">*/}
        {/*    <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end align-items-center">*/}
        {/*        <li className="nav-item d-sm-block d-none">*/}
        {/*          <a className="nav-link nav-btn" aria-current="page" href="#">*/}
        {/*              <img src={play} alt="play store"/>*/}
        {/*              Try Our App*/}
        {/*          </a>*/}
        {/*        </li>*/}
        {/*      /!* <li className="nav-item">*/}
        {/*          <a className="nav-link" href="#">*/}
        {/*              <img src={translate} alt="translate" />*/}
        {/*          </a>*/}
        {/*        </li> *!/*/}
        {/*      <li className="nav-item">*/}
        {/*          <a className="nav-link" href="#">*/}
        {/*          <FontAwesomeIcon icon={faMagnifyingGlass} />*/}
        {/*          </a>*/}
        {/*        </li>*/}
        {/*      </ul>*/}
        {/*    </div>*/}
        {/*      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">*/}
        {/*      <span className="navbar-toggler-icon"></span>*/}
        {/*    </button>*/}
        {/*    </div>*/}

        {/*    <div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
        {/*      <ul className="navbar-nav me-auto mb-2 mb-lg-0">*/}
        {/*        <li className="nav-item">*/}
        {/*          <a className="nav-link" aria-current="page" href="/drafts">My Drafts</a>*/}
        {/*        </li>*/}
        {/*        <li className="nav-item">*/}
        {/*          <a className="nav-link" href="/purchased">My Purchases</a>*/}
        {/*        </li>*/}
        {/*        /!*<li className="nav-item">*!/*/}
        {/*        /!*  <a className="nav-link" href="#">Favourites</a>*!/*/}
        {/*        /!*</li>*!/*/}
        {/*        /!*<li className="nav-item">*!/*/}
        {/*        /!*  <a className="nav-link" href="#">FAQ</a>*!/*/}
        {/*        /!*</li>*!/*/}
        {/*        <li className="nav-item">*/}
        {/*          <a className="nav-link" href="#">Contact Us</a>*/}
        {/*        </li>*/}
        {/*        <li className="nav-item">*/}
        {/*          <a className="nav-link" href="#">About Us</a>*/}
        {/*        </li>*/}
        {/*        <li className="nav-item">*/}
        {/*          <a className="nav-link" href="#">Privacy Policy</a>*/}
        {/*        </li>*/}
        {/*        <li className="nav-item">*/}
        {/*          <a className="nav-link" style={{cursor:"pointer"}} onClick={()=>handleLogout()}>Logout</a>*/}
        {/*        </li>*/}
        {/*        <li className="nav-item d-sm-none d-block">*/}
        {/*          <a className="nav-link nav-btn" aria-current="page" href="#">*/}
        {/*              <img src={play} alt="play store"/>*/}
        {/*              Try Our App*/}
        {/*          </a>*/}
        {/*        </li>*/}
        {/*      </ul>*/}
        {/*    </div>*/}
        {/*</nav>*/}
        {/*</div>*/}

        {/*       <hr/>*/}

        <header style={{ background: '#FF3767' }}>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="./">
                <img src={logo} className="img-fluid" alt="logo" />
              </a>

              {/* <div className="w-100 navbar-expand">
              <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end align-items-center">
                <li className="nav-item d-sm-block d-none">
                  <a className="nav-link nav-btn" aria-current="page" href="#">
                    <img src={play} alt="play store" />
                    Try Our App
                  </a>
                </li>
              </ul>
            </div> */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className={splitLocation[1] === 'drafts' ? 'active' : ''}>
                    <a className="nav-link" aria-current="page" href="/drafts">
                      My Drafts
                    </a>
                  </li>
                  <li className={splitLocation[1] === 'purchased' ? 'active' : ''}>
                    <a className="nav-link" href="/purchased">
                      My Cards
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Design Your Card
                    </a>
                  </li>
                  {/*<li className="nav-item">*/}
                  {/*  <a className="nav-link" href="#">*/}
                  {/*    Contact Us*/}
                  {/*  </a>*/}
                  {/*</li>*/}
                  {/*<li className="nav-item">*/}
                  {/*  <a className="nav-link" href="#">*/}
                  {/*    About Us*/}
                  {/*  </a>*/}
                  {/*</li>*/}
                  {/*<li className={splitLocation[1] === 'privacy' ? 'active' : ''}>*/}
                  {/*  <a className="nav-link" href="/privacy">*/}
                  {/*    Privacy Policy*/}
                  {/*  </a>*/}
                  {/*</li>*/}
                  <li className="nav-item">
                    <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => handleLogout()}>
                      Logout
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-btn" aria-current="page" href="#">
                      {/* <img src={play} alt="play store" /> */}
                      {/* <FontAwesomeIcon icon={faGooglePlay} /> */}
                      <i className="fa-brands fa-google-play"></i>
                      Try Our App
                    </a>
                  </li>
                </ul>
              </div>

              {/*<div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
              {/*  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">*/}
              {/*    <li >*/}
              {/*      <a className="nav-link"  aria-current="page" href="/drafts">My Drafts</a>*/}
              {/*    </li>*/}
              {/*    <li >*/}
              {/*      <a className="nav-link" href="/purchased">My Purchases</a>*/}
              {/*    </li>*/}

              {/*    <li className="nav-item">*/}
              {/*      <a className="nav-link" href="#">Contact Us</a>*/}
              {/*    </li>*/}
              {/*    <li className="nav-item">*/}
              {/*      <a className="nav-link" href="#">About Us</a>*/}
              {/*    </li>*/}
              {/*    <li className="nav-item">*/}
              {/*      <a className="nav-link" href="#">Privacy Policy</a>*/}
              {/*    </li>*/}
              {/*    <li className="nav-item">*/}
              {/*      <a className="nav-link" style={{cursor:"pointer"}} onClick={()=>handleLogout()}>Logout</a>*/}
              {/*    </li>*/}
              {/*    <li className="nav-item">*/}
              {/*    <a className="nav-link nav-btn" aria-current="page" href="#">*/}
              {/*          /!* <img src={play} alt="play store" /> *!/*/}
              {/*      /!* <FontAwesomeIcon icon={faGooglePlay} /> *!/*/}
              {/*      <i className="fa-brands fa-google-play"></i>*/}
              {/*          Try Our App*/}
              {/*        </a>*/}
              {/*    </li>*/}
              {/*  </ul>*/}
              {/*</div>*/}
            </nav>
          </div>
        </header>
      </>
    )
  } else {
    return (
      <>
        <header style={{ background: '#FF3767' }}>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="./">
                <img src={logo} className="img-fluid" alt="logo" />
              </a>

              {/* <div className="w-100 navbar-expand">
              <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end align-items-center">
                <li className="nav-item d-sm-block d-none">
                  <a className="nav-link nav-btn" aria-current="page" href="#">
                    <img src={play} alt="play store" />
                    Try Our App
                  </a>
                </li>
              </ul>
            </div> */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  {/*<li className="nav-item">*/}
                  {/*  <a className="nav-link" aria-current="page" href="#">My Drafts</a>*/}
                  {/*</li>*/}
                  {/*<li className="nav-item">*/}
                  {/*  <a className="nav-link" href="#">My Purchases</a>*/}
                  {/*</li>*/}
                  {/*<li className="nav-item">*/}
                  {/*  <a className="nav-link" href="#">Favourites</a>*/}
                  {/*</li>*/}
                  {/*<li className="nav-item">*/}
                  {/*  <a className="nav-link" href="#">FAQ</a>*/}
                  {/*</li>*/}
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact Us
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Categories
                    </a>
                  </li>
                  {/*<li className="nav-item">*/}
                  {/*  <a className="nav-link" href="#">*/}
                  {/*    About Us*/}
                  {/*  </a>*/}
                  {/*</li>*/}
                  {/*<li className={splitLocation[1] === 'privacy' ? 'active' : ''}>*/}
                  {/*  <a className="nav-link" href="/privacy">*/}
                  {/*    Privacy Policy*/}
                  {/*  </a>*/}
                  {/*</li>*/}
                  <li className={splitLocation[1] === 'login' ? 'active' : ''}>
                    <a className="nav-link" href="/login">
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-btn" aria-current="page" href="#">
                      {/* <img src={play} alt="play store" /> */}
                      {/* <FontAwesomeIcon icon={faGooglePlay} /> */}
                      <i className="fa-brands fa-google-play"></i>
                      Try Our App
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </>
    )
  }
}

export default Header
