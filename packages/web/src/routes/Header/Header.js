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


import React from "react";
import logo from "../img/image 7.png";
import play from "../img/Group.png";
import translate from "../img/Group1.png";
// import { usePopupState } from 'material-ui-popup-state/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Logout from '../Logout';
import useProfileApi from '../../api/useProfileApi'
import {NavLink} from 'react-router-dom';
import Logout from '../Logout';
import useLogoutApi from '../../api/useLogoutApi';
import {useNavigate} from 'react-router';

const Header=()=>{
  const { data: profile, status } = useProfileApi()
  const { mutateAsync } = useLogoutApi()


const navigate=useNavigate()
  const handleLogout = () => {

    mutateAsync()
    navigate('/home')
  }

  if(status==="success") {
    return (
        <div className="container">
            <nav className="navbar navbar-light bg-light">
  <div className="d-flex w-100">
    <div>
    <a className="navbar-brand" href="./home">
        <img src={logo} className="img-fluid"/>
    </a>
    </div>
    <div className="w-100 navbar-expand">
    <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end">
        <li className="nav-item">
          <a className="nav-link nav-btn" aria-current="page" href="#">
              <img src={play}/>
              Try Our App
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
              <img src={translate}/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </a>
        </li>

      </ul>
    </div>
    <div>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

      <span className="navbar-toggler-icon">

      </span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   <li className="nav-item">
          {/*<a className="nav-link active" aria-current="page" href="./login">Logout</a>*/}
     {/*<Logout/>*/}


     <button onClick={()=>handleLogout()}>Logout</button>
        </li>
          </ul>
    </div>
    </div>
  </div>
</nav>
        </div>


    )

  }
  else
  {
    return (
        <div className="container">
            <nav className="navbar navbar-light bg-light">
  <div className="d-flex w-100">
    <div>
    <a className="navbar-brand" href="./home">
        <img src={logo} className="img-fluid"/>
    </a>
    </div>
    <div className="w-100 navbar-expand">
    <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end">
        <li className="nav-item">
          <a className="nav-link nav-btn" aria-current="page" href="#">
              <img src={play}/>
              Try Our App
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
              <img src={translate}/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </a>
        </li>


      </ul>
    </div>
    <div>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

      <span className="navbar-toggler-icon">

      </span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="./login">Login</a>

        </li>

          </ul>
    </div>
    </div>
  </div>
</nav>
        </div>


    )
  }

}

export default Header

