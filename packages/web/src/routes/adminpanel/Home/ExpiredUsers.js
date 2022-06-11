import React, { useState, useEffect } from "react";
import "../Adminindex.css";
import AdminHeader from "../Header/AdminHeader";

function ExpiredUsers() {
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
  //   setsubexpiredusers(data.array);
  //
  // };
  // useEffect(() => {
  //   Expiredusers();
  // }, []);





  return (
    <>
      {" "}
      <AdminHeader />
      <div className="content-wrapper" style={{ minHeight: "auto" }}>
        <div className="content-header sty-one">
          <h1>Users With Subscription</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <i className="fa fa-angle-right"></i>Users Query
            </li>
          </ol>
        </div>
        <div className="content">
          <div className="card m-t-3">
            <div className="card-body">
              <div className="table-responsive">
                <table
                  id="example1"
                  className="table table-striped table-bordered"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                      <th>Plan</th>

                      <th>Subscription End Date</th>

                    </tr>
                  </thead>
                <tbody>
                    {/*{expiredusers?.map((val, index) => {*/}
                    {/*  return (*/}
                    {/*    <>*/}
                    {/*      <tr>*/}
                    {/*        <td>{val.fullname}</td>*/}
                    {/*        <td>{val.Phone}</td>*/}
                    {/*        <td>{val.email}</td>*/}
                    {/*        <td>{val.Plan}</td>*/}
                    {/*       */}
                    {/*        <td>{val.Enddate}</td>*/}
                    {/*      </tr>*/}
                    {/*        */}
                    {/*    </>*/}
                    {/*  );*/}
                    {/*})}*/}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpiredUsers;
