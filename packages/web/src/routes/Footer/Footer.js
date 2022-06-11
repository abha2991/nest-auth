import React from "react";
import logo from "../img/image 7.png";
import play from "../img/googleplay.png";
import $ from "jquery";
import ScrollToTop from '../../components/ScrollToTop';
// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  let currentYear=new Date().getFullYear();
// Back to top button
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//
//       $('.back-to-top').fadeIn('slow');
//     } else {
//       $('.back-to-top').fadeOut('slow');
//     }
//   });
//   $('.back-to-top').click(function () {
//     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
//     return false;
//   });
  return (
      <>
            <footer style={{ backgroundColor: "#051232", color: "#fff" }}>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-3 mb-3">
                            <h4><img src={logo} className="img-fluid" alt="logo" /></h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="col-md-3 mb-3">
                            <h5 className="mb-3">Get Our App</h5>
                            <a href="#">
                                <img src={play} className="img-fluid" alt="Google Play" />
                            </a>
                        </div>
                        <div className="col-md-3 mb-3">
                            <h5>Quick Link</h5>
                            <ul className="text-light footer-list">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-3">
                        <h5>Contact Us</h5>
                        <table className="table text-light table-footer">
                            <tbody>
                            <tr>
                                <td><FontAwesomeIcon icon={faLocationDot} /></td>
                                <td>Gurugram, Haryana - 122102</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faPhone} /></td>
                                <td><a href="tel:8888888888">8888888888</a></td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faEnvelope} /></td>
                                <td><a href="mailto:example@example.com" target="_blank">example@example.com</a></td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <p className="mb-0">&#169; {currentYear} HeartEnvite. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*<a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><FontAwesomeIcon icon={faArrowUp} /></a>*/}
     <ScrollToTop/>
        </>

  )
}

export default Footer
