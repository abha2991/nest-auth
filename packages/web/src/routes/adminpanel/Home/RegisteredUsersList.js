
import React, { useEffect, useState } from "react";

import "../Adminindex.css";
import AdminHeader from "../Header/AdminHeader";
import useUsersApi from '../../../api/useUsersApi'
import Loading from '../../../components/Loading'
function RegisteredUsersList() {

  const { isLoading, data: users } = useUsersApi()
  const [data, setData] = useState([]);


  const [userdata, setuserData] = useState();
  // const getData = async (e) => {
  //   const res = await fetch(`/userdetails`, {
  //     method: "GET",

  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     //credentials: "include",
  //   });
  //   const data = await res.json();
  //   setData(data);
  //   console.log(data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  // const getUserData = async () => {
  //   const res = await fetch(
  //     `/searchuserdetails?userdata=${userdata}`,
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
  //   setData(data);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getUserData();
  // }, [userdata]);

  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <AdminHeader />{" "}
      <div className="content-header sty-one">
        <h1>Data Tables</h1>
        <ol className="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <i className="fa fa-angle-right"></i>/ Registered Users List
          </li>
        </ol>
      </div>
      <div className="content">
        <div className="card m-t-3">
          <div className="card-body">
            <div className="table-responsive">
              <div className="content-wrapper" style={{ minHeight: "auto" }}>
                <div className="input-group mycasetable-form ">
                  {/*<input*/}
                  {/*  type="text"*/}
                  {/*  className="form-control"*/}
                  {/*  name="userdata"*/}
                  {/*  onChange={(e) => setuserData(e.target.value)}*/}
                  {/*  value={userdata}*/}
                  {/*  id="userdata"*/}
                  {/*  aria-describedby="userdata"*/}
                  {/*  placeholder="Search User"*/}
                  {/*/>*/}
                  {/*<div className="input-group-append">*/}
                  {/*  <button className="form-control">*/}
                  {/*    <i className="fa fa-search" onClick={getUserData}></i>*/}
                  {/*  </button>*/}
                  {/*</div>*/}
                </div>
                <table
                  id="example1"
                  className="table table-bordered table-striped dataTable no-footer"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
<th>Provider</th>
                      <th>UserId</th>
                      <th>Registration Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(users) &&
                      users.map((val, index) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <a href={"/user-information?id=" + val.id +"&email=" +val.email} >{val.firstName} {val.lastName}</a>
                              </td>
                              <td>{val.phoneNumber}</td>
                              <td>{val.email}</td>
<td>{val.provider}</td>
                              <td>{val.id}</td>
                              <td>{new Date(val.createdAt).toDateString()}</td>
                            </tr>
                          </>
                        );
                      })}
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

export default RegisteredUsersList;



