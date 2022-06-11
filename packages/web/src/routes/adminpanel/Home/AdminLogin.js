// import React, { useState } from "react";
// import { NavLink, useHistory } from "react-router-dom";

// import Logo from "../../img/law_logo_2-01.png";
// function AdminLogin() {
//   const history = useHistory();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const loginUser = async (e) => {
//     e.preventDefault();
//     const res = await fetch("/admin-signin", {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });
//     const data = await res.json();
//     if (res.status === 400 || !data) {
//       window.alert("Invalid Credentials");
//     } else {
//       await // dispatch({ type: "USER", payload: true });
//       window.alert("Login Successful");
//       history.push("/home-admin");
//     }
//   };

//   return (
//     <div className=" login-page sty1">
//       <div className="login-box login-page sty1">
//         <div className="login-box-body sty1">
//           <div className="login-log">
//             <a href="index">
//               <img src={Logo} alt="" />
//             </a>
//           </div>
//           <p className="login-box-msg">Sign in to start your session</p>
//           <form action="#" method="post">
//             <div className="form-group has-feedback">
//               <input
//                 type="email"
//                 className="form-control sty1"
//                 placeholder="Email"
//                 id="email"
//                 name="email"
//                 aria-describedby="emailHelp"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter email"
//               />
//             </div>
//             <div className="form-group has-feedback">
//               <input
//                 type="password"
//                 className="form-control sty1"
//                 name="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//               />
//             </div>
//             <div>
//               <div className="col-xs-4 m-t-1">
//                 <button
//                   onClick={loginUser}
//                   type="submit"
//                   name="loginsubmit"
//                   className="btn btn-warning btn-block btn-flat"
//                 >
//                   Sign In
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;



import React, { useState } from "react";
import { NavLink} from "react-router-dom";

import Logo from "../img/law_logo_2-01.png";

function AdminLogin() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/admin-signin", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      await // dispatch({ type: "USER", payload: true });
      window.alert("Login Successful");
      // history.push("/home-admin");
    }
  };

  return (
    <div className=" login-page sty1">
      <div className="login-box login-page sty1">
        <div className="login-box-body sty1">
          <div className="login-log">
            <a href="index">
              <img src={Logo} alt="" className="admin-signin-logo" />
            </a>
          </div>
          <p className="login-box-msg" style={{textAlign: 'center'}}>Sign in to start your session</p>
          <form action="#" method="post">
            <div className="form-group has-feedback">
              <input
                type="email"
                className="form-control sty1"
                placeholder="Email"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                className="form-control sty1"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div>
              <div className="col-xs-4 m-t-1">
                <button
                  onClick={loginUser}
                  type="submit"
                  name="loginsubmit"
                  className="btn  btn-block btn-flat"
                  style={{marginTop:"20px",backgroundColor:"#f16232",color:"#fff"}}
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
