import React from 'react'
import logo from '../img/image 7.png'
import play from '../img/googleplay.png'
import $ from 'jquery'
import ScrollToTop from '../../components/ScrollToTop'
// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  let currentYear = new Date().getFullYear()
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
      <footer style={{ backgroundColor: '#051232', color: '#fff' }}>
        <div className="container">
          <div className="row py-5">
            <div className="col-md-4 mb-3">
              <h4>
                <img src={logo} className="img-fluid" alt="logo" />
              </h4>
              <p>
                Heart Envite joins forces with creativity to bring you highly artistic invites and make your buying
                experience enjoyable. You'll find a wide range of designer cards in a variety of colours, patterns,
                styles, and sizes to satisfy practically every taste in traditional and modern designs. All traditions
                and cultures are represented in our invitations, including Hindu, Muslim, and Sikh marriages.
              </p>
            </div>
            <div className="col-md-2 mb-3">
              <h5 className="mb-3">Get Our App</h5>
              <a href="#">
                <img src={play} className="img-fluid" alt="Google Play" />
              </a>
            </div>
            <div className="col-md-2 mb-3">
              <h5>Quick Link</h5>
              <ul className="text-light footer-list">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="./privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Contact Us</h5>
              <table className="table text-light table-footer">
                <tbody>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </td>
                    <td>Shivalik Enclave, Sneh Vihar, Sohna Rd, Bhondsi, Gurugram, Haryana 122102</td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon={faPhone} />
                    </td>
                    <td>
                      <a href="tel:0124-2970101">0124-2970101</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </td>
                    <td>
                      <a href="mailto:example@example.com" target="_blank">
                        example@example.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr />
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
      <ScrollToTop />
    </>
  )
}

export default Footer
