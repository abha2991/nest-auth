import React, { useState } from "react";
import Logo from "../img/logo.png";
import img1 from "../img/img1.jpg";

import { Link } from "react-router-dom";
import "../Adminindex.css";
import Newssection from "../../Newssection";
function Header() {
  const [logtoggle, setLogtoggle] = useState(false);
  const handlelogToggle = () => {
    setLogtoggle(!logtoggle);
  };
  function ariaExpandedLog(e) {
    return `${logtoggle ? "true" : "false"}`;
  }
  const [toggleState, setToggleState] = useState(1);

  const [isActive, setActive] = useState(true);
  const handleToggle = () => {
    setActive(!isActive);
  };
  const toggleTab = (index) => {
    setToggleState(index);
    console.log("index", index);
  };
  return (
    <>
      <body
        className={
          isActive
            ? "skin-blue sidebar-mini "
            : "skin-blue sidebar-mini sidebar-collapse"
        }
      >
        <div className="wrapper boxed-wrapper">
          <header className="main-header">
            <a href="/" className="logo blue-bg">
              <span className="logo-lg">
                <img src={Logo} alt="" />
              </span>
            </a>
            <nav className="navbar blue-bg navbar-static-top">
              {/* <ul className="nav navbar-nav pull-left" onClick={handleToggle}>
                <li>
                  <i className="fa fa-bars" style={{ marginTop: "19px" }}></i>
                </li>
              </ul> */}
              <div className="pull-left search-box"></div>
              <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                  <li
                    className={
                      logtoggle
                        ? "dropdown user user-menu p-ph-res show"
                        : "dropdown user user-menu p-ph-res"
                    }
                    onClick={handlelogToggle}
                  >
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      style={{ textDecoration: "none" }}
                    >
                      <img src={img1} className="user-image" alt="User Image" />
                      <span className="hidden-xs">Admin</span>
                    </a>
                    <ul
                      className={
                        logtoggle ? "dropdown-menu show" : "dropdown-menu"
                      }
                    >
                      {logtoggle && (
                        <li>
                          <a
                            href="/logout"
                            style={{
                              border: "1px solid #ddd",
                              textDecoration: "none",
                            }}
                          >
                            <i className="fa fa-power-off"></i> Logout
                          </a>
                        </li>
                      )}
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <aside className="main-sidebar">
            <div className="sidebar">
              <ul className="sidebar-menu tree" data-widget="tree">
                {/*<li className="header">Heart Envite</li>*/}
                <li>
                  <Link to="/home-admin" className="span-underline">
                    <i className="fa fa-home"></i> <span>Dashboard</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/registered-users" className="span-underline">
                    <i className="fa fa-list" aria-hidden="true"></i>
                    <span>Registered Users List</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </Link>
                </li>
                <li className="dropdown">
                  {" "}
                  <Link to="/notification-admin" className="span-underline dropdown-toggle" id="card-details" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-flag-checkered"></i>{" "}
                    <span>Card Category</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="card-details" style={{position:"relative!important"}}>
                    <a href="/wedding-cards" className="dropdown-item" >Wedding Cards</a>
                    <a href="/engagement-cards" className="dropdown-item">Engagement Cards</a>
                    <a href="/birthday-cards" className="dropdown-item">Birthday Cards</a>
                    <a href="/reception-cards" className="dropdown-item">Reception Cards</a>
                    <a href="/congratulations-cards" className="dropdown-item">Congratulations Cards</a>
                    <a href="/anniversary-cards" className="dropdown-item">Anniversary Cards</a>
                    <a href="/baby-shower-cards" className="dropdown-item">Baby Shower Cards</a>
                    <a href="/get-well-soon-cards" className="dropdown-item">Get Well Soon Cards</a>
                    <a href="/thank-you-cards" className="dropdown-item">Thank You Cards</a>
                    <a href="/miss-you-cards" className="dropdown-item">Miss You Cards</a>

                  </div>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/all-drafts"
                    className="span-underline"
                  >
                    <i className="fa fa-flag-checkered"></i>{" "}
                    <span>Drafts</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/all-purchased" className="span-underline">
                    <i className="fa fa-search"></i> <span>Purchased</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </Link>
                </li>{" "}
                <li>
                  {" "}
                  <Link to="/enter-card-details" className="span-underline">
                    <i className="fa fa-search"></i>{" "}
                    <span>Enter Card Details</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </Link>
                </li>
                <li className={toggleState === 7 ? "active" : null}>
                  <Link to="/enter-caption-details" className="span-underline">
                    <i className="fa fa-table"></i> <span>Enter Caption Details</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </Link>
                </li>
                <li className={toggleState === 8 ? "active" : null}>
                  <Link to="/users-query" className="span-underline">
                    <i className="fa fa-table"></i> <span>Users Query</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </Link>
                </li>
                <li className={toggleState === 9 ? "active" : null}>
                  <Link to="/" className="span-underline">
                    <i className="fa fa-table"></i> <span>Customize Cards</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </Link>
                </li>

                {/*<li className={toggleState === 10 ? "active" : null}>*/}
                {/*  <Link to="/usersquery" className="span-underline">*/}
                {/*    <i className="fa fa-table"></i> <span>Users Query</span>*/}
                {/*    <span className="pull-right-container">*/}
                {/*      <i className="fa fa-angle-left pull-right"></i>*/}
                {/*    </span>*/}
                {/*  </Link>*/}
                {/*</li>*/}
              </ul>
            </div>
          </aside>
        </div>
      </body>
    </>
  );
}

export default Header;
