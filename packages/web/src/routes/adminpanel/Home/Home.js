import React, { useEffect, useState } from "react";
import '../Adminindex.css'
import AdminHeader from '../Header/AdminHeader'
import { Link } from "react-router-dom";


function HomeAdmin() {

  const [countusers, setcountusers] = useState([]);
  const [userswithsubscription, setuserswithsubscription] = useState([]);
  const [userswithnosubscription, setuserswithnosubscription] = useState([]);


  // const getUserCount = async () => {
  //   const res = await fetch(
  //     `/countusers`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //
  //   const data = await res.json();
  //
  //   setcountusers(data);
  //
  // };
  //
  // useEffect(() => {
  //   getUserCount();
  // }, []);



//   const getUserSubscriptionCount = async () => {
//     const res = await fetch(
//       `/countsubscription`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//
//     const data = await res.json();
// //console.log(data)
//   setuserswithsubscription(data.count);
//
//   };
//
//   useEffect(() => {
//     getUserSubscriptionCount();
//   }, []);

//   const getUserNoSubscriptionCount = async () => {
//     const res = await fetch(
//       `/countwithnosubscription`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//
//     const data = await res.json();
// //console.log(data)
// setuserswithnosubscription(data.count);
//
//   };
//
//   useEffect(() => {
//     getUserNoSubscriptionCount();
//   }, []);


  const [expiredusers, setsubexpiredusers] = useState([]);

  // const Expiredusers = async (e) => {
  //   const res = await fetch(`/expiredusers`, {
  //     method: "GET",
  //     credentials: "include",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     //credentials: "include",
  //   });
  //   const data = await res.json();
  //   setsubexpiredusers(data.count);
  //
  // };
  // useEffect(() => {
  //   Expiredusers();
  // }, []);






  return (
    <> <AdminHeader />
      <div className="content-wrapper" style={{ minHeight: "910px" }}>
        <div className="content-header sty-one">
          <h1>CRM Dashboard</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <i className="fa fa-angle-right"></i> CRM Dashboard
            </li>
          </ol>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12 m-b-3">
              <div className="card">
                <div className="card-body box-rounded box-gradient-4">
                  {" "}
                  <span className="info-box-icon bg-transparent">
                    <i className="ti-stats-up text-white"></i>
                  </span>
                  <div className="info-box-content">
                    <h6 className="info-box-text text-white">
                      New Subscriptions
                    </h6>
                    <Link to="/subcription-admin" className="span-underline"> <h1 className="text-white">countusers</h1></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12 m-b-3">
              <div className="card">
                <div className="card-body box-rounded box-gradient-4">
                  {" "}
                  <span className="info-box-icon bg-transparent">
                    <i className="ti-stats-up text-white"></i>
                  </span>
                  <div className="info-box-content">
                    <h6 className="info-box-text text-white">
                     Subscribed Users
                    </h6>
                    <Link to="/subscribed-users" className="span-underline"> <h1 className="text-white">userswithsubscription</h1></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12 m-b-3">
              <div className="card">
                <div className="card-body box-rounded box-gradient-4">
                  {" "}
                  <span className="info-box-icon bg-transparent">
                    <i className="ti-stats-up text-white"></i>
                  </span>
                  <div className="info-box-content">
                    <h6 className="info-box-text text-white">
              UnSubscribed Users
                    </h6>
                    <Link to="/unsubscribed-users" className="span-underline"> <h1 className="text-white">userswithnosubscription</h1></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12 m-b-3">
              <div className="card">
                <div className="card-body box-rounded box-gradient-4">
                  {" "}
                  <span className="info-box-icon bg-transparent">
                    <i className="ti-stats-up text-white"></i>
                  </span>
                  <div className="info-box-content">
                    <h6 className="info-box-text text-white">
              Expired Users
                    </h6>
                    <Link to="/expired-users" className="span-underline"> <h1 className="text-white">expiredusers</h1></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   </>
  );
}

export default HomeAdmin;
