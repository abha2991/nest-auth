// import React from "react";
// import Header from "../Header";
// import OwlCarousel from 'react-owl-carousel2';
// import 'react-owl-carousel2/lib/styles.css';
// import 'react-owl-carousel2/src/owl.theme.default.css';
//
// import back from "../img/back.png";
// import next from "../img/next.png";
// import Banner from "../img/c60feb2bfd5c1a10cf164d8eb7b20b9b-247-13536 1.png";
// import Wedding from "../img/Wedding.png";
// import Engagement from "../img/Engagement.png";
// import Birthday from "../img/Birthday.png";
// import SaveTheDate from "../img/Save the date.png";
// import Wedding1 from "../img/3 1.png";
// import Wedding2 from "../img/page1 1.png";
// import Wedding3 from "../img/girl 1.png";
//
// const Home=()=>{
//
//   const options = {
//     loop: true,
//     items: 4,
//     margin: 20,
//     rewind: true,
//     autoplay: true,
//     autoplayTimeout: 2000,
//     autoplayHoverPause: true,
//     dots: false,
//     nav: true,
//     navText: [
//       `<img src='${back}' class='back-btn' />`,
//       `<img src='${next}' alt='next' class='next-btn' />`,
//     ],
//     responsive: {
//       0: {
//         items:1,
//       },
//       768: {
//         items:3,
//       },
//       992: {
//         items:4,
//       }
//     }
//   };
//     const options1 = {
//         loop: true,
//         items: 1,
//         margin: 20,
//         rewind: true,
//         autoplay: true,
//         autoplayTimeout: 2000,
//         autoplayHoverPause: true,
//         dots: true,
//         nav: false
//
//     };
//
//   return(
//       <>
//         <Header/>
//         <div className="container">
//            <OwlCarousel className='owl-carousel owl-theme banner-carousel' options={options1}>
//     <div className='item'>
//     <div className="banner-box">
//     <div className="row pt-5">
//             <div className="col-md-4">
//                 <div className="d-flex justify-content-md-end text-white">
//                 <h3>Shop Wedding <br/>
//                     Invitation<br/>
//                     E-Cards</h3>
//                 </div>
//             </div>
//             <div className="col-md-8">
//                 <img src={Banner} className="img-fluid" />
//             </div>
//             </div>
//             </div>
//     </div>
//     <div className='item'>
//     <div className="banner-box">
//     <div className="row pt-5">
//             <div className="col-md-4">
//                 <div className="d-flex justify-content-md-end text-white">
//                 <h3>Shop Wedding <br/>
//                     Invitation<br/>
//                     E-Cards</h3>
//                 </div>
//             </div>
//             <div className="col-md-8">
//                 <img src={Banner} className="img-fluid" />
//             </div>
//             </div>
//             </div>
//     </div>
//     <div className='item'>
//     <div className="banner-box">
//     <div className="row pt-5">
//             <div className="col-md-4">
//                 <div className="d-flex justify-content-md-end text-white">
//                 <h3>Shop Wedding <br/>
//                     Invitation<br/>
//                     E-Cards</h3>
//                 </div>
//             </div>
//             <div className="col-md-8">
//                 <img src={Banner} className="img-fluid" />
//             </div>
//             </div>
//             </div>
//     </div>
//     <div className='item'>
//     <div className="banner-box">
//     <div className="row pt-5">
//             <div className="col-md-4">
//                 <div className="d-flex justify-content-md-end text-white">
//                 <h3>Shop Wedding <br/>
//                     Invitation<br/>
//                     E-Cards</h3>
//                 </div>
//             </div>
//             <div className="col-md-8">
//                 <img src={Banner} className="img-fluid" />
//             </div>
//             </div>
//             </div>
//     </div>
//     <div className='item'>
//     <div className="banner-box">
//     <div className="row pt-5">
//             <div className="col-md-4">
//                 <div className="d-flex justify-content-md-end text-white">
//                 <h3>Shop Wedding <br/>
//                     Invitation<br/>
//                     E-Cards</h3>
//                 </div>
//             </div>
//             <div className="col-md-8">
//                 <img src={Banner} className="img-fluid" />
//             </div>
//             </div>
//             </div>
//     </div>
//     <div className='item'>
//     <div className="banner-box">
//     <div className="row pt-5">
//             <div className="col-md-4">
//                 <div className="d-flex justify-content-md-end text-white">
//                 <h3>Shop Wedding <br/>
//                     Invitation<br/>
//                     E-Cards</h3>
//                 </div>
//             </div>
//             <div className="col-md-8">
//                 <img src={Banner} className="img-fluid" />
//             </div>
//             </div>
//             </div>
//     </div>
//
// </OwlCarousel>
//
//             <div className="d-flex justify-content-between mt-5">
//             <h4>Categories</h4>
//             <a href="#" style={{color:"#9505F9",textDecoration:"none",fontWeight:"bold"}}>See All</a>
//             </div>
//             <div className="row">
//                 <div className="col-md-3 text-center">
//                     <a href="#" style={{textDecoration:"none"}}>
//                     <img src={Wedding} className="img-fluid" />
//                     <h6 style={{color:"#000"}}>Wedding</h6>
//                     </a>
//                 </div>
//                 <div className="col-md-3 text-center">
//                     <a href="#" style={{textDecoration:"none"}}>
//                     <img src={Engagement} className="img-fluid"/>
//                     <h6 style={{color:"#000"}}>Engagement</h6>
//                     </a>
//                 </div>
//                 <div className="col-md-3 text-center">
//                     <a href="#" style={{textDecoration:"none"}}>
//                     <img src={Birthday} className="img-fluid"/>
//                     <h6 style={{color:"#000"}}>Birthday</h6>
//                     </a>
//                 </div>
//                 <div className="col-md-3 text-center">
//                 <a href="#" style={{textDecoration:"none"}}>
//                     <img src={SaveTheDate} className="img-fluid"/>
//                     <h6 style={{color:"#000"}}>Save the date</h6>
//                     </a>
//                 </div>
//             </div>
//             <div className="d-flex justify-content-between mt-5">
//             <h4>Wedding Invitations</h4>
//             <a href="#" style={{color:"#9505F9",textDecoration:"none",fontWeight:"bold"}}>See All</a>
//             </div>
//             <div className="row">
// <OwlCarousel className='owl-carousel owl-theme wedding-carousel' options={options}>
//     <div className='item'>
//         <div className="wedding-box">
//         <a href="#">
//             <img src={Wedding1}/>
//         </a>
//         <div className="inner">
//         <div className="triangle-right"></div>
//             <h4>4</h4>
//             <p>Pages</p>
//         </div>
//         <strong><span>₹1,200</span></strong>
//             <del>₹1,500</del>
//         </div>
//     </div>
//     <div className='item'>
//     <div className="wedding-box">
//         <a href="#">
//             <img src={Wedding2}/>
//         </a>
//         <div className="inner">
//         <div className="triangle-right"></div>
//             <h4>4</h4>
//             <p>Pages</p>
//         </div>
//         <strong><span>₹1,200</span></strong>
//             <del>₹1,500</del>
//         </div>
//     </div>
//     <div className='item'>
//     <div className="wedding-box">
//         <a href="#">
//             <img src={Wedding3}/>
//         </a>
//         <div className="inner">
//         <div className="triangle-right"></div>
//             <h4>4</h4>
//             <p>Pages</p>
//         </div>
//         <strong><span>₹1,200</span></strong>
//             <del>₹1,500</del>
//         </div>
//     </div>
//     <div className='item'>
//     <div className="wedding-box">
//         <a href="#">
//             <img src={Wedding1}/>
//         </a>
//         <div className="inner">
//         <div className="triangle-right"></div>
//             <h4>4</h4>
//             <p>Pages</p>
//         </div>
//         <strong><span>₹1,200</span></strong>
//             <del>₹1,500</del>
//         </div>
//     </div>
//     <div className='item'>
//     <div className="wedding-box">
//         <a href="#">
//             <img src={Wedding2}/>
//         </a>
//         <div className="inner">
//         <div className="triangle-right"></div>
//             <h4>4</h4>
//             <p>Pages</p>
//         </div>
//         <strong><span>₹1,200</span></strong>
//             <del>₹1,500</del>
//         </div>
//     </div>
//     <div className='item'>
//     <div className="wedding-box">
//         <a href="#">
//             <img src={Wedding3}/>
//         </a>
//         <div className="inner">
//         <div className="triangle-right"></div>
//             <h4>4</h4>
//             <p>Pages</p>
//         </div>
//         <strong><span>₹1,200</span></strong>
//             <del>₹1,500</del>
//         </div>
//     </div>
//
// </OwlCarousel>
//             </div>
//             <div className="d-flex justify-content-between mt-5">
//             <h4>Engagement Invitations</h4>
//             <a href="#" style={{color:"#9505F9",textDecoration:"none",fontWeight:"bold"}}>See All</a>
//             </div>
//             <div className="row">
// <OwlCarousel className='owl-carousel owl-theme wedding-carousel' options={options}>
//     <div className='item'>
//         <div className="wedding-box">
//         <a href="#">
//             <img src={Wedding1}/>
//         </a>
//         <div className="inner">
//         <div className="triangle-right"></div>
//             <h4>4</h4>
//             <p>Pages</p>
//         </div>
//         <strong><span>₹1,200</span></strong>
//             <del>₹1,500</del>
//         </div>
//     </div>
//     <div className='item'>
//     <div className="wedding-box">
//         <a href="#">
//             <img src={Wedding2}/>
//         </a>
//         <div className="inner">
//         <div className="triangle-right"></div>
//             <h4>4</h4>
//             <p>Pages</p>
//         </div>
//         <strong><span>₹1,200</span></strong>
//             <del>₹1,500</del>
//         </div>
//     </div>
//     <div className='item'>
//     <div className="wedding-box">
//         <a href="#">
//             <img src={Wedding3}/>
//         </a>
//         <div className="inner">
//         <div className="triangle-right"></div>
//             <h4>4</h4>
//             <p>Pages</p>
//         </div>
//         <strong><span>₹1,200</span></strong>
//             <del>₹1,500</del>
//         </div>
//     </div>
//     <div className='item'>
//     <div className="wedding-box">
//         <a href="#">
//             <img src={Wedding1}/>
//         </a>
//         <div className="inner">
//         <div className="triangle-right"></div>
//             <h4>4</h4>
//             <p>Pages</p>
//         </div>
//         <strong><span>₹1,200</span></strong>
//             <del>₹1,500</del>
//         </div>
//     </div>
//     <div className='item'>
//     <div className="wedding-box">
//         <a href="#">
//             <img src={Wedding2}/>
//         </a>
//         <div className="inner">
//         <div className="triangle-right"></div>
//             <h4>4</h4>
//             <p>Pages</p>
//         </div>
//         <strong><span>₹1,200</span></strong>
//             <del>₹1,500</del>
//         </div>
//     </div>
//     <div className='item'>
//     <div className="wedding-box">
//         <a href="#">
//             <img src={Wedding3}/>
//         </a>
//         <div className="inner">
//         <div className="triangle-right"></div>
//             <h4>4</h4>
//             <p>Pages</p>
//         </div>
//         <strong><span>₹1,200</span></strong>
//             <del>₹1,500</del>
//         </div>
//     </div>
//
// </OwlCarousel>
//             </div>
//         </div>
//         </>
//   )
// }
//
// export default Home

import React, { useState, useRef } from 'react'
import Header from '../Header'
import OwlCarousel from 'react-owl-carousel2'
import 'react-owl-carousel2/lib/styles.css'
import 'react-owl-carousel2/src/owl.theme.default.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import useCardDetails from '../../api/useCardDetails'
import { useEffect } from 'react'
import useProfileApi from '../../api/useProfileApi'
import useLogoutApi from '../../api/useLogoutApi'

import Carousel1 from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
//img
import back from '../img/back.png'
import next from '../img/next.png'
import Banner from '../img/c60feb2bfd5c1a10cf164d8eb7b20b9b-247-13536 1.png'
import Wedding from '../img/Wedding.png'
import Engagement from '../img/Engagement.png'
import Birthday from '../img/Birthday.png'
import SaveTheDate from '../img/Save the date.png'
import Wedding1 from '../img/3 1.png'
import card5 from '../img/42241481.png'
import one011 from '../img/one-011.png'
import { useNavigate } from 'react-router'
import card1 from '../img/Wedding/AnamikaCard1.jpeg'
import card2 from '../img/Wedding/AnamikaCard2.jpeg'
import card3 from '../img/Wedding/AnamikaCard3.jpeg'
import useLogoutApi from '../../api/useLogoutApi'
import Fancybox from '../../fancybox'
import Footer from '../Footer'
import ScrollToTop from '../../components/ScrollToTop'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const Home = () => {
  // function getScrollParent(node) {
  //
  //     if (node == null) {
  //         console.log("null")
  //         return null;
  //     }
  //
  //     if (node.scrollHeight > node.clientHeight) {
  //         console.log(node.scrollTop)
  //         return node;
  //     } else {
  //         console.log(node.parentNode)
  //         return getScrollParent(node.parentNode);
  //     }
  // }

  // const span = document.querySelector('span')
  // const scrollable = getScrollParent(span)
  // console.log("scrollable "+scrollable)
  //
  // document.addEventListener("DOMContentLoaded", function() {
  //     document.addEventListener("scroll", function() {
  //         getProgress('div');
  //     });

  //     function getProgress(node) {
  //         if (node == null) {
  //             console.log("null")
  //             return null;
  //         }
  //
  //         if (node.scrollHeight > node.clientHeight) {
  //             console.log({node})
  //             return node;
  //         } else {
  //             console.log(node.parentNode)
  //             return getProgress(node.parentNode);
  //         }
  //
  //     }
  // });

  const navigate = useNavigate()
  const { isLoading, isSuccess, isError, data } = useCardDetails()
  //console.log({data})
  const { data: profile, status } = useProfileApi()
  async function EditCard(id) {
    if (status === 'success') {
      // navigate(`/TryCard?id=${id}`)
      navigate(`/card${id}?id=${id}`)
    } else {
      navigate(`/login?id=${id}`)
    }
  }
  const [casedetail, setCasedetail] = React.useState([])

  const CaseTypeOptions = async (e) => {
    const res = await fetch(`http://localhost:3001/api/cardetails/cardetails`)

    const casedetail = await res.json()
    //console.log(casedetail)
    setCasedetail(casedetail)
  }
  useEffect(() => {
    CaseTypeOptions()
  }, [])

  //console.log({casedetail})

  const options = {
    loop: true,
    items: 4,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [`<img src='${back}' class='back-btn' />`, `<img src='${next}' alt='next' class='next-btn' />`],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  }
  const options1 = {
    loop: true,
    items: 1,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
    nav: false
  }
  const options2 = {
    loop: true,
    center: true,
    items: 2,
    margin: 20,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
    nav: false
  }

  const options3 = {
    loop: true,
    center: true,
    margin: 20,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
    nav: true,
    navText: [`<img src='${back}' class='back-btn' />`, `<img src='${next}' alt='next' class='next-btn' />`],
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 5
      }
    }
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  const [cardInfo, setCardInfo] = useState()
  const getCardsOfUser = async (e) => {
    const res = await fetch(`http://localhost:3001/api/cardetails/cardetails`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()

    setCardInfo(data)

    // setPaymentStatus(data.PaymentStatus)
  }
  useEffect(() => {
    getCardsOfUser()
  }, [])

  const [customizeCardData, setCustomizeCardData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    event: '',
    description: ''
  })

  const handleInputs = (e) => {
    const name = e.target.name
    const value = e.target.value
    setCustomizeCardData({ ...customizeCardData, [name]: value })
  }
  const CustomizedInformation = async (e) => {
    const res = await fetch(`http://localhost:3001/api/customizecardsquery`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: customizeCardData.name,
        email: customizeCardData.email,
        phoneNumber: customizeCardData.phoneNumber,
        event: customizeCardData.event,
        description: customizeCardData.description
      })
    })

    const data = await res.json()
    console.log({ data })
    if (data.status === 'success') {
      window.alert('Submitted Successfully')
    } else {
      window.alert(data.message)
    }

    // setPaymentStatus(data.PaymentStatus)
  }

  //console.log({ cardInfo })

  let url = '../img/'

  return (
    <>
      <Header />

      {/*<OwlCarousel className='owl-carousel owl-theme banner-carousel' options={options1}>*/}
      <Carousel className="mt-0">
        <div className="item">
          <div className="banner-box">
            <div className="row pt-5">
              <div className="col-md-4">
                <div className="d-flex justify-content-md-end text-white">
                  <h3>
                    Shop Wedding <br />
                    Invitation
                    <br />
                    E-Cards
                  </h3>
                </div>
              </div>
              <div className="col-md-8">
                <img src={Banner} className="img-fluid" alt="banner" />
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="banner-box">
            <div className="row pt-5">
              <div className="col-md-4">
                <div className="d-flex justify-content-md-end text-white">
                  <h3>
                    Shop Wedding <br />
                    Invitation
                    <br />
                    E-Cards
                  </h3>
                </div>
              </div>
              <div className="col-md-8">
                <img src={Banner} className="img-fluid" alt="banner" />
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="banner-box">
            <div className="row pt-5">
              <div className="col-md-4">
                <div className="d-flex justify-content-md-end text-white">
                  <h3>
                    Shop Wedding <br />
                    Invitation
                    <br />
                    E-Cards
                  </h3>
                </div>
              </div>
              <div className="col-md-8">
                <img src={Banner} className="img-fluid" alt="banner" />
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="banner-box">
            <div className="row pt-5">
              <div className="col-md-4">
                <div className="d-flex justify-content-md-end text-white">
                  <h3>
                    Shop Wedding <br />
                    Invitation
                    <br />
                    E-Cards
                  </h3>
                </div>
              </div>
              <div className="col-md-8">
                <img src={Banner} className="img-fluid" alt="banner" />
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="banner-box">
            <div className="row pt-5">
              <div className="col-md-4">
                <div className="d-flex justify-content-md-end text-white">
                  <h3>
                    Shop Wedding <br />
                    Invitation
                    <br />
                    E-Cards
                  </h3>
                </div>
              </div>
              <div className="col-md-8">
                <img src={Banner} className="img-fluid" alt="banner" />
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="banner-box">
            <div className="row pt-5">
              <div className="col-md-4">
                <div className="d-flex justify-content-md-end text-white">
                  <h3>
                    Shop Wedding <br />
                    Invitation
                    <br />
                    E-Cards
                  </h3>
                </div>
              </div>
              <div className="col-md-8">
                <img src={Banner} className="img-fluid" alt="banner" />
              </div>
            </div>
          </div>
        </div>

        {/*</OwlCarousel>*/}
      </Carousel>
      <div className="container">
        <div className="my-4">
          {/*<hr/>*/}

          <div className="d-flex justify-content-between">
            <h4>Categories</h4>
            <a href="./card" style={{ color: '#ff3767', textDecoration: 'none', fontWeight: 'bold' }}>
              See All
            </a>
          </div>

          {/*<hr />*/}
        </div>

        <OwlCarousel className="owl-carousel owl-theme category-carousel" options={options3}>
          <div className="item text-center">
            <a href="./card#wedding-videos" style={{ textDecoration: 'none' }}>
              <img src={Wedding} className="img-fluid" alt="Categories" />
              <h6 style={{ color: '#000' }}>Wedding</h6>
            </a>
          </div>

          <div className="item text-center">
            <a href="#" style={{ textDecoration: 'none' }}>
              <img src={Engagement} className="img-fluid" alt="Categories" />
              <h6 style={{ color: '#000' }}>Engagement</h6>
            </a>
          </div>
          <div className="item text-center">
            <a href="#" style={{ textDecoration: 'none' }}>
              <img src={Birthday} className="img-fluid" alt="Categories" />
              <h6 style={{ color: '#000' }}>Birthday</h6>
            </a>
          </div>

          <div className="item text-center">
            <a href="#" style={{ textDecoration: 'none' }}>
              <img src={SaveTheDate} className="img-fluid" alt="Categories" />
              <h6 style={{ color: '#000' }}>Save the date</h6>
            </a>
          </div>
          <div className="item text-center">
            <a href="#" style={{ textDecoration: 'none' }}>
              <img src={Engagement} className="img-fluid" alt="Categories" />
              <h6 style={{ color: '#000' }}>Engagement</h6>
            </a>
          </div>
          <div className="item text-center">
            <a href="#" style={{ textDecoration: 'none' }}>
              <img src={Wedding} className="img-fluid" alt="Categories" />
              <h6 style={{ color: '#000' }}>Wedding</h6>
            </a>
          </div>
        </OwlCarousel>
        <div className="my-4">
          {/*<hr />*/}
          <div className="d-flex justify-content-between">
            <h4>Wedding Invitations</h4>
            <a href="./weddingcards" style={{ color: '#ff3767', textDecoration: 'none', fontWeight: 'bold' }}>
              See All
            </a>
          </div>
          {/*<hr />*/}
        </div>

        <div className="row">
          <Carousel1 responsive={responsive}>
            {casedetail?.map((val, index) => {
              if (val.cardCategory === 'WeddingInvitation') {
                return (
                  <>
                    <div className="col-md-3">
                      <div className="wedding-box">
                        <a href={'#id' + index} data-bs-toggle="modal">
                          <img
                            src={'http://localhost:3001/assets/' + val.cardCategory + '/' + val.cardTemplates[0]}
                            className="img-fluid"
                          />
                        </a>
                        <div className="inner">
                          <div className="triangle-right"></div>
                          <h4>{val.noOfPages}</h4>

                          {val.noOfPages === 1 ? <p>Page</p> : <p>Pages</p>}
                        </div>
                        <div className="price">
                          <strong>
                            <span>₹{val.cardSalePrice}</span>
                          </strong>
                          <del>₹{val.cardTotalPrice}</del>
                        </div>
                        {/*<button onClick={()=>preview(val.id)}>Click</button>*/}
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id={'id' + index}
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                              <FontAwesomeIcon icon={faArrowLeft} />
                              &nbsp;Back
                            </button>
                            <a href="#" style={{ textDecoration: 'none' }}>
                              <FontAwesomeIcon icon={faShareNodes} />
                              &nbsp;Share
                            </a>
                          </div>
                          <div className="modal-body">
                            <Fancybox>
                              {val.noOfPages === 1 ? (
                                val.cardTemplates.map((card1, ind) => {
                                  return (
                                    <>
                                      <div className="item" style={{ textAlign: 'center' }}>
                                        <a
                                          data-fancybox={'#id' + index}
                                          href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                        >
                                          <img
                                            src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                            className="img-fluid"
                                            alt="Invitations"
                                            style={{
                                              maxWidth: '300px',
                                              margin: 'auto'
                                            }}
                                          />
                                        </a>
                                      </div>
                                    </>
                                  )
                                })
                              ) : (
                                <OwlCarousel className="owl-carousel owl-theme wedding-carousel" options={options2}>
                                  {val.cardTemplates.map((card1, ind) => {
                                    return (
                                      <>
                                        <div className="item">
                                          <a
                                            data-fancybox={'#id' + index}
                                            href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                          >
                                            <img
                                              src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                              className="img-fluid"
                                              alt="Invitations"
                                              style={{
                                                maxWidth: '300px',
                                                margin: 'auto'
                                              }}
                                            />
                                          </a>
                                        </div>
                                      </>
                                    )
                                  })}
                                </OwlCarousel>
                              )}
                            </Fancybox>
                          </div>
                          <div className="modal-footer justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="price">
                                <strong>
                                  <span>₹{val.cardSalePrice}</span>
                                </strong>
                                <del>₹{val.cardTotalPrice}</del>
                              </div>
                            </div>
                            <div>
                              <button
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => EditCard(val.id)}
                              >
                                Try This Card
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            })}
          </Carousel1>
        </div>

        <div className="my-4">
          {/*<hr />*/}
          <div className="d-flex justify-content-between">
            <h4>Congratulations</h4>
            <a href="./congratulationscards" style={{ color: '#ff3767', textDecoration: 'none', fontWeight: 'bold' }}>
              See All
            </a>
          </div>
          {/*<hr />*/}
        </div>

        <div className="row">
          {casedetail?.map((val, index) => {
            if (val.cardCategory === 'CongratulationsInvitation') {
              return (
                <>
                  <div className="col-md-3">
                    <div className="wedding-box">
                      <a href={'#id' + index} data-bs-toggle="modal">
                        <img
                          src={'http://localhost:3001/assets/' + val.cardCategory + '/' + val.cardTemplates[0]}
                          className="img-fluid"
                        />
                      </a>
                      <div className="inner">
                        <div className="triangle-right"></div>
                        <h4>{val.noOfPages}</h4>

                        {val.noOfPages === 1 ? <p>Page</p> : <p>Pages</p>}
                      </div>
                      <div className="price">
                        <strong>
                          <span>₹{val.cardSalePrice}</span>
                        </strong>
                        <del>₹{val.cardTotalPrice}</del>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id={'id' + index}
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            &nbsp;Back
                          </button>
                          <a href="#" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faShareNodes} />
                            &nbsp;Share
                          </a>
                        </div>
                        <div className="modal-body">
                          <Fancybox>
                            {val.noOfPages === 1 ? (
                              val.cardTemplates.map((card1, ind) => {
                                return (
                                  <>
                                    <div className="item" style={{ textAlign: 'center' }}>
                                      <a
                                        data-fancybox={'#id' + index}
                                        href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                      >
                                        <img
                                          src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                          className="img-fluid"
                                          alt="Invitations"
                                          style={{
                                            maxWidth: '300px',
                                            margin: 'auto'
                                          }}
                                        />
                                      </a>
                                    </div>
                                  </>
                                )
                              })
                            ) : (
                              <OwlCarousel className="owl-carousel owl-theme wedding-carousel" options={options2}>
                                {val.cardTemplates.map((card1, ind) => {
                                  return (
                                    <>
                                      <div className="item">
                                        <a
                                          data-fancybox={'#id' + index}
                                          href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                        >
                                          <img
                                            src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                            className="img-fluid"
                                            alt="Invitations"
                                            style={{
                                              maxWidth: '300px',
                                              margin: 'auto'
                                            }}
                                          />
                                        </a>
                                      </div>
                                    </>
                                  )
                                })}
                              </OwlCarousel>
                            )}
                          </Fancybox>
                        </div>
                        <div className="modal-footer justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="price">
                              <strong>
                                <span>₹{val.cardSalePrice}</span>
                              </strong>
                              <del>₹{val.cardTotalPrice}</del>
                            </div>
                          </div>
                          <div>
                            <button
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                              onClick={() => EditCard(val.id)}
                            >
                              Try This Card
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          })}
        </div>

        <div className="my-4">
          {/*<hr />*/}
          <div className="d-flex justify-content-between">
            <h4>Anniversary</h4>
            <a href="./anniversarycards" style={{ color: '#ff3767', textDecoration: 'none', fontWeight: 'bold' }}>
              See All
            </a>
          </div>
          {/*<hr />*/}
        </div>

        <div className="row">
          {casedetail?.map((val, index) => {
            if (val.cardCategory === 'AnniversaryInvitation') {
              return (
                <>
                  <div className="col-md-3">
                    <div className="wedding-box">
                      <a href={'#id' + index} data-bs-toggle="modal">
                        <img
                          src={'http://localhost:3001/assets/' + val.cardCategory + '/' + val.cardTemplates[0]}
                          className="img-fluid"
                        />
                      </a>
                      <div className="inner">
                        <div className="triangle-right"></div>
                        <h4>{val.noOfPages}</h4>

                        {val.noOfPages === 1 ? <p>Page</p> : <p>Pages</p>}
                      </div>
                      <div className="price">
                        <strong>
                          <span>₹{val.cardSalePrice}</span>
                        </strong>
                        <del>₹{val.cardTotalPrice}</del>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id={'id' + index}
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            &nbsp;Back
                          </button>
                          <a href="#" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faShareNodes} />
                            &nbsp;Share
                          </a>
                        </div>
                        <div className="modal-body">
                          <Fancybox>
                            {val.noOfPages === 1 ? (
                              val.cardTemplates.map((card1, ind) => {
                                return (
                                  <>
                                    <div className="item" style={{ textAlign: 'center' }}>
                                      <a
                                        data-fancybox={'#id' + index}
                                        href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                      >
                                        <img
                                          src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                          className="img-fluid"
                                          alt="Invitations"
                                          style={{
                                            maxWidth: '300px',
                                            margin: 'auto'
                                          }}
                                        />
                                      </a>
                                    </div>
                                  </>
                                )
                              })
                            ) : (
                              <OwlCarousel className="owl-carousel owl-theme wedding-carousel" options={options2}>
                                {val.cardTemplates.map((card1, ind) => {
                                  return (
                                    <>
                                      <div className="item">
                                        <a
                                          data-fancybox={'#id' + index}
                                          href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                        >
                                          <img
                                            src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                            className="img-fluid"
                                            alt="Invitations"
                                            style={{
                                              maxWidth: '300px',
                                              margin: 'auto'
                                            }}
                                          />
                                        </a>
                                      </div>
                                    </>
                                  )
                                })}
                              </OwlCarousel>
                            )}
                          </Fancybox>
                        </div>
                        <div className="modal-footer justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="price">
                              <strong>
                                <span>₹{val.cardSalePrice}</span>
                              </strong>
                              <del>₹{val.cardTotalPrice}</del>
                            </div>
                          </div>
                          <div>
                            <button
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                              onClick={() => EditCard(val.id)}
                            >
                              Try This Card
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          })}
        </div>

        <div className="my-4">
          {/*<hr />*/}
          <div className="d-flex justify-content-between">
            <h4>Thank You</h4>
            <a href="./thankyoucards" style={{ color: '#ff3767', textDecoration: 'none', fontWeight: 'bold' }}>
              See All
            </a>
          </div>
          {/*<hr />*/}
        </div>

        <div className="row">
          <Carousel1 responsive={responsive}>
            {casedetail?.map((val, index) => {
              if (val.cardCategory === 'ThankYouInvitation') {
                return (
                  <>
                    <div className="col-md-3">
                      <div className="wedding-box">
                        <a href={'#id' + index} data-bs-toggle="modal">
                          <img
                            src={'http://localhost:3001/assets/' + val.cardCategory + '/' + val.cardTemplates[0]}
                            className="img-fluid"
                          />
                        </a>
                        <div className="inner">
                          <div className="triangle-right"></div>
                          <h4>{val.noOfPages}</h4>

                          {val.noOfPages === 1 ? <p>Page</p> : <p>Pages</p>}
                        </div>
                        <div className="price">
                          <strong>
                            <span>₹{val.cardSalePrice}</span>
                          </strong>
                          <del>₹{val.cardTotalPrice}</del>
                        </div>
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id={'id' + index}
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                              <FontAwesomeIcon icon={faArrowLeft} />
                              &nbsp;Back
                            </button>
                            <a href="#" style={{ textDecoration: 'none' }}>
                              <FontAwesomeIcon icon={faShareNodes} />
                              &nbsp;Share
                            </a>
                          </div>
                          <div className="modal-body">
                            <Fancybox>
                              {val.noOfPages === 1 ? (
                                val.cardTemplates.map((card1, ind) => {
                                  return (
                                    <>
                                      <div className="item" style={{ textAlign: 'center' }}>
                                        <a
                                          data-fancybox={'#id' + index}
                                          href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                        >
                                          <img
                                            src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                            className="img-fluid"
                                            alt="Invitations"
                                            style={{
                                              maxWidth: '300px',
                                              margin: 'auto'
                                            }}
                                          />
                                        </a>
                                      </div>
                                    </>
                                  )
                                })
                              ) : (
                                <OwlCarousel className="owl-carousel owl-theme wedding-carousel" options={options2}>
                                  {val.cardTemplates.map((card1, ind) => {
                                    return (
                                      <>
                                        <div className="item">
                                          <a
                                            data-fancybox={'#id' + index}
                                            href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                          >
                                            <img
                                              src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                              className="img-fluid"
                                              alt="Invitations"
                                              style={{
                                                maxWidth: '300px',
                                                margin: 'auto'
                                              }}
                                            />
                                          </a>
                                        </div>
                                      </>
                                    )
                                  })}
                                </OwlCarousel>
                              )}
                            </Fancybox>
                          </div>
                          <div className="modal-footer justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="price">
                                <strong>
                                  <span>₹{val.cardSalePrice}</span>
                                </strong>
                                <del>₹{val.cardTotalPrice}</del>
                              </div>
                            </div>
                            <div>
                              <button
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => EditCard(val.id)}
                              >
                                Try This Card
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            })}
          </Carousel1>
        </div>

        <div className="my-4">
          {/*<hr />*/}
          <div className="d-flex justify-content-between">
            <h4>Miss You</h4>
            <a href="./missyoucards" style={{ color: '#ff3767', textDecoration: 'none', fontWeight: 'bold' }}>
              See All
            </a>
          </div>
          {/*<hr />*/}
        </div>

        <div className="row">
          {casedetail?.map((val, index) => {
            if (val.cardCategory === 'MissYouInvitation') {
              return (
                <>
                  <div className="col-md-3">
                    <div className="wedding-box">
                      <a href={'#id' + index} data-bs-toggle="modal">
                        <img
                          src={'http://localhost:3001/assets/' + val.cardCategory + '/' + val.cardTemplates[0]}
                          className="img-fluid"
                        />
                      </a>
                      <div className="inner">
                        <div className="triangle-right"></div>
                        <h4>{val.noOfPages}</h4>

                        {val.noOfPages === 1 ? <p>Page</p> : <p>Pages</p>}
                      </div>
                      <div className="price">
                        <strong>
                          <span>₹{val.cardSalePrice}</span>
                        </strong>
                        <del>₹{val.cardTotalPrice}</del>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id={'id' + index}
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            &nbsp;Back
                          </button>
                          <a href="#" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faShareNodes} />
                            &nbsp;Share
                          </a>
                        </div>
                        <div className="modal-body">
                          <Fancybox>
                            {val.noOfPages === 1 ? (
                              val.cardTemplates.map((card1, ind) => {
                                return (
                                  <>
                                    <div className="item" style={{ textAlign: 'center' }}>
                                      <a
                                        data-fancybox={'#id' + index}
                                        href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                      >
                                        <img
                                          src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                          className="img-fluid"
                                          alt="Invitations"
                                          style={{
                                            maxWidth: '300px',
                                            margin: 'auto'
                                          }}
                                        />
                                      </a>
                                    </div>
                                  </>
                                )
                              })
                            ) : (
                              <OwlCarousel className="owl-carousel owl-theme wedding-carousel" options={options2}>
                                {val.cardTemplates.map((card1, ind) => {
                                  return (
                                    <>
                                      <div className="item">
                                        <a
                                          data-fancybox={'#id' + index}
                                          href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                        >
                                          <img
                                            src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                            className="img-fluid"
                                            alt="Invitations"
                                            style={{
                                              maxWidth: '300px',
                                              margin: 'auto'
                                            }}
                                          />
                                        </a>
                                      </div>
                                    </>
                                  )
                                })}
                              </OwlCarousel>
                            )}
                          </Fancybox>
                        </div>
                        <div className="modal-footer justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="price">
                              <strong>
                                <span>₹{val.cardSalePrice}</span>
                              </strong>
                              <del>₹{val.cardTotalPrice}</del>
                            </div>
                          </div>
                          <div>
                            <button
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                              onClick={() => EditCard(val.id)}
                            >
                              Try This Card
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          })}
        </div>

        <div className="my-4">
          {/*<hr />*/}
          <div className="d-flex justify-content-between">
            <h4>Get Well Soon</h4>
            <a href="./getwellsooncards" style={{ color: '#ff3767', textDecoration: 'none', fontWeight: 'bold' }}>
              See All
            </a>
          </div>
          {/*<hr />*/}
        </div>

        <div className="row">
          {casedetail?.map((val, index) => {
            if (val.cardCategory === 'GetWellInvitation') {
              return (
                <>
                  <div className="col-md-3">
                    <div className="wedding-box">
                      <a href={'#id' + index} data-bs-toggle="modal">
                        <img
                          src={'http://localhost:3001/assets/' + val.cardCategory + '/' + val.cardTemplates[0]}
                          className="img-fluid"
                        />
                      </a>
                      <div className="inner">
                        <div className="triangle-right"></div>
                        <h4>{val.noOfPages}</h4>

                        {val.noOfPages === 1 ? <p>Page</p> : <p>Pages</p>}
                      </div>
                      <div className="price">
                        <strong>
                          <span>₹{val.cardSalePrice}</span>
                        </strong>
                        <del>₹{val.cardTotalPrice}</del>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id={'id' + index}
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            &nbsp;Back
                          </button>
                          <a href="#" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faShareNodes} />
                            &nbsp;Share
                          </a>
                        </div>
                        <div className="modal-body">
                          <Fancybox>
                            {val.noOfPages === 1 ? (
                              val.cardTemplates.map((card1, ind) => {
                                return (
                                  <>
                                    <div className="item" style={{ textAlign: 'center' }}>
                                      <a
                                        data-fancybox={'#id' + index}
                                        href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                      >
                                        <img
                                          src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                          className="img-fluid"
                                          alt="Invitations"
                                          style={{
                                            maxWidth: '300px',
                                            margin: 'auto'
                                          }}
                                        />
                                      </a>
                                    </div>
                                  </>
                                )
                              })
                            ) : (
                              <OwlCarousel className="owl-carousel owl-theme wedding-carousel" options={options2}>
                                {val.cardTemplates.map((card1, ind) => {
                                  return (
                                    <>
                                      <div className="item">
                                        <a
                                          data-fancybox={'#id' + index}
                                          href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                        >
                                          <img
                                            src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                            className="img-fluid"
                                            alt="Invitations"
                                            style={{
                                              maxWidth: '300px',
                                              margin: 'auto'
                                            }}
                                          />
                                        </a>
                                      </div>
                                    </>
                                  )
                                })}
                              </OwlCarousel>
                            )}
                          </Fancybox>
                        </div>
                        <div className="modal-footer justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="price">
                              <strong>
                                <span>₹{val.cardSalePrice}</span>
                              </strong>
                              <del>₹{val.cardTotalPrice}</del>
                            </div>
                          </div>
                          <div>
                            <button
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                              onClick={() => EditCard(val.id)}
                            >
                              Try This Card
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          })}
        </div>

        <div className="my-4">
          {/*<hr />*/}
          <div className="d-flex justify-content-between">
            <h4>Birth Day</h4>
            <a href="./birthdaycards" style={{ color: '#ff3767', textDecoration: 'none', fontWeight: 'bold' }}>
              See All
            </a>
          </div>
          {/*<hr />*/}
        </div>

        <div className="row">
          {casedetail?.map((val, index) => {
            if (val.cardCategory === 'BirthdayInvitation') {
              return (
                <>
                  <div className="col-md-3">
                    <div className="wedding-box">
                      <a href={'#id' + index} data-bs-toggle="modal">
                        <img
                          src={'http://localhost:3001/assets/' + val.cardCategory + '/' + val.cardTemplates[0]}
                          className="img-fluid"
                        />
                      </a>
                      <div className="inner">
                        <div className="triangle-right"></div>
                        <h4>{val.noOfPages}</h4>

                        {val.noOfPages === 1 ? <p>Page</p> : <p>Pages</p>}
                      </div>
                      <div className="price">
                        <strong>
                          <span>₹{val.cardSalePrice}</span>
                        </strong>
                        <del>₹{val.cardTotalPrice}</del>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id={'id' + index}
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            &nbsp;Back
                          </button>
                          <a href="#" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faShareNodes} />
                            &nbsp;Share
                          </a>
                        </div>
                        <div className="modal-body">
                          <Fancybox>
                            {val.noOfPages === 1 ? (
                              val.cardTemplates.map((card1, ind) => {
                                return (
                                  <>
                                    <div className="item" style={{ textAlign: 'center' }}>
                                      <a
                                        data-fancybox={'#id' + index}
                                        href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                      >
                                        <img
                                          src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                          className="img-fluid"
                                          alt="Invitations"
                                          style={{
                                            maxWidth: '300px',
                                            margin: 'auto'
                                          }}
                                        />
                                      </a>
                                    </div>
                                  </>
                                )
                              })
                            ) : (
                              <OwlCarousel className="owl-carousel owl-theme wedding-carousel" options={options2}>
                                {val.cardTemplates.map((card1, ind) => {
                                  return (
                                    <>
                                      <div className="item">
                                        <a
                                          data-fancybox={'#id' + index}
                                          href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                        >
                                          <img
                                            src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                            className="img-fluid"
                                            alt="Invitations"
                                            style={{
                                              maxWidth: '300px',
                                              margin: 'auto'
                                            }}
                                          />
                                        </a>
                                      </div>
                                    </>
                                  )
                                })}
                              </OwlCarousel>
                            )}
                          </Fancybox>
                        </div>
                        <div className="modal-footer justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="price">
                              <strong>
                                <span>₹{val.cardSalePrice}</span>
                              </strong>
                              <del>₹{val.cardTotalPrice}</del>
                            </div>
                          </div>
                          <div>
                            <button
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                              onClick={() => EditCard(val.id)}
                            >
                              Try This Card
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          })}
        </div>

        <div className="my-4">
          {/*<hr />*/}
          <div className="d-flex justify-content-between">
            <h4>Baby Shower</h4>
            <a href="./babyshowercards" style={{ color: '#ff3767', textDecoration: 'none', fontWeight: 'bold' }}>
              See All
            </a>
          </div>
          {/*<hr />*/}
        </div>

        <div className="row">
          {casedetail?.map((val, index) => {
            if (val.cardCategory === 'BabyShowerInvitation') {
              return (
                <>
                  <div className="col-md-3">
                    <div className="wedding-box">
                      <a href={'#id' + index} data-bs-toggle="modal">
                        <img
                          src={'http://localhost:3001/assets/' + val.cardCategory + '/' + val.cardTemplates[0]}
                          className="img-fluid"
                        />
                      </a>
                      <div className="inner">
                        <div className="triangle-right"></div>
                        <h4>{val.noOfPages}</h4>

                        {val.noOfPages === 1 ? <p>Page</p> : <p>Pages</p>}
                      </div>
                      <div className="price">
                        <strong>
                          <span>₹{val.cardSalePrice}</span>
                        </strong>
                        <del>₹{val.cardTotalPrice}</del>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id={'id' + index}
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            &nbsp;Back
                          </button>
                          <a href="#" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faShareNodes} />
                            &nbsp;Share
                          </a>
                        </div>
                        <div className="modal-body">
                          <Fancybox>
                            {val.noOfPages === 1 ? (
                              val.cardTemplates.map((card1, ind) => {
                                return (
                                  <>
                                    <div className="item" style={{ textAlign: 'center' }}>
                                      <a
                                        data-fancybox={'#id' + index}
                                        href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                      >
                                        <img
                                          src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                          className="img-fluid"
                                          alt="Invitations"
                                          style={{
                                            maxWidth: '300px',
                                            margin: 'auto'
                                          }}
                                        />
                                      </a>
                                    </div>
                                  </>
                                )
                              })
                            ) : (
                              <OwlCarousel className="owl-carousel owl-theme wedding-carousel" options={options2}>
                                {val.cardTemplates.map((card1, ind) => {
                                  return (
                                    <>
                                      <div className="item">
                                        <a
                                          data-fancybox={'#id' + index}
                                          href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                        >
                                          <img
                                            src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                            className="img-fluid"
                                            alt="Invitations"
                                            style={{
                                              maxWidth: '300px',
                                              margin: 'auto'
                                            }}
                                          />
                                        </a>
                                      </div>
                                    </>
                                  )
                                })}
                              </OwlCarousel>
                            )}
                          </Fancybox>
                        </div>
                        <div className="modal-footer justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="price">
                              <strong>
                                <span>₹{val.cardSalePrice}</span>
                              </strong>
                              <del>₹{val.cardTotalPrice}</del>
                            </div>
                          </div>
                          <div>
                            <button
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                              onClick={() => EditCard(val.id)}
                            >
                              Try This Card
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          })}
        </div>

        <div className="my-4">
          {/*<hr />*/}
          <div className="d-flex justify-content-between">
            <h4>Engagement</h4>
            <a href="./engagementcards" style={{ color: '#ff3767', textDecoration: 'none', fontWeight: 'bold' }}>
              See All
            </a>
          </div>
          {/*<hr />*/}
        </div>

        <div className="row">
          {casedetail?.map((val, index) => {
            if (val.cardCategory === 'EngagementInvitation') {
              return (
                <>
                  <div className="col-md-3">
                    <div className="wedding-box">
                      <a href={'#id' + index} data-bs-toggle="modal">
                        <img
                          src={'http://localhost:3001/assets/' + val.cardCategory + '/' + val.cardTemplates[0]}
                          className="img-fluid"
                        />
                      </a>
                      <div className="inner">
                        <div className="triangle-right"></div>
                        <h4>{val.noOfPages}</h4>

                        {val.noOfPages === 1 ? <p>Page</p> : <p>Pages</p>}
                      </div>
                      <div className="price">
                        <strong>
                          <span>₹{val.cardSalePrice}</span>
                        </strong>
                        <del>₹{val.cardTotalPrice}</del>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id={'id' + index}
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            &nbsp;Back
                          </button>
                          <a href="#" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faShareNodes} />
                            &nbsp;Share
                          </a>
                        </div>
                        <div className="modal-body">
                          <Fancybox>
                            {val.noOfPages === 1 ? (
                              val.cardTemplates.map((card1, ind) => {
                                return (
                                  <>
                                    <div className="item" style={{ textAlign: 'center' }}>
                                      <a
                                        data-fancybox={'#id' + index}
                                        href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                      >
                                        <img
                                          src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                          className="img-fluid"
                                          alt="Invitations"
                                          style={{
                                            maxWidth: '300px',
                                            margin: 'auto'
                                          }}
                                        />
                                      </a>
                                    </div>
                                  </>
                                )
                              })
                            ) : (
                              <OwlCarousel className="owl-carousel owl-theme wedding-carousel" options={options2}>
                                {val.cardTemplates.map((card1, ind) => {
                                  return (
                                    <>
                                      <div className="item">
                                        <a
                                          data-fancybox={'#id' + index}
                                          href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                        >
                                          <img
                                            src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                            className="img-fluid"
                                            alt="Invitations"
                                            style={{
                                              maxWidth: '300px',
                                              margin: 'auto'
                                            }}
                                          />
                                        </a>
                                      </div>
                                    </>
                                  )
                                })}
                              </OwlCarousel>
                            )}
                          </Fancybox>
                        </div>
                        <div className="modal-footer justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="price">
                              <strong>
                                <span>₹{val.cardSalePrice}</span>
                              </strong>
                              <del>₹{val.cardTotalPrice}</del>
                            </div>
                          </div>
                          <div>
                            <button
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                              onClick={() => EditCard(val.id)}
                            >
                              Try This Card
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          })}
        </div>

        <div className="my-4">
          {/*<hr />*/}
          <div className="d-flex justify-content-between">
            <h4>Reception</h4>
            <a href="./receptioncards" style={{ color: '#ff3767', textDecoration: 'none', fontWeight: 'bold' }}>
              See All
            </a>
          </div>
          {/*<hr />*/}
        </div>

        <div className="row">
          {casedetail?.map((val, index) => {
            if (val.cardCategory === 'ReceptionInvitation') {
              return (
                <>
                  <div className="col-md-3">
                    <div className="wedding-box">
                      <a href={'#id' + index} data-bs-toggle="modal">
                        <img
                          src={'http://localhost:3001/assets/' + val.cardCategory + '/' + val.cardTemplates[0]}
                          className="img-fluid"
                        />
                      </a>
                      <div className="inner">
                        <div className="triangle-right"></div>
                        <h4>{val.noOfPages}</h4>

                        {val.noOfPages === 1 ? <p>Page</p> : <p>Pages</p>}
                      </div>
                      <div className="price">
                        <strong>
                          <span>₹{val.cardSalePrice}</span>
                        </strong>
                        <del>₹{val.cardTotalPrice}</del>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id={'id' + index}
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            &nbsp;Back
                          </button>
                          <a href="#" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faShareNodes} />
                            &nbsp;Share
                          </a>
                        </div>
                        <div className="modal-body">
                          <Fancybox>
                            {val.noOfPages === 1 ? (
                              val.cardTemplates.map((card1, ind) => {
                                return (
                                  <>
                                    <div className="item" style={{ textAlign: 'center' }}>
                                      <a
                                        data-fancybox={'#id' + index}
                                        href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                      >
                                        <img
                                          src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                          className="img-fluid"
                                          alt="Invitations"
                                          style={{
                                            maxWidth: '300px',
                                            margin: 'auto'
                                          }}
                                        />
                                      </a>
                                    </div>
                                  </>
                                )
                              })
                            ) : (
                              <OwlCarousel className="owl-carousel owl-theme wedding-carousel" options={options2}>
                                {val.cardTemplates.map((card1, ind) => {
                                  return (
                                    <>
                                      <div className="item">
                                        <a
                                          data-fancybox={'#id' + index}
                                          href={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                        >
                                          <img
                                            src={'http://localhost:3001/assets/' + val.cardCategory + '/' + card1}
                                            className="img-fluid"
                                            alt="Invitations"
                                            style={{
                                              maxWidth: '300px',
                                              margin: 'auto'
                                            }}
                                          />
                                        </a>
                                      </div>
                                    </>
                                  )
                                })}
                              </OwlCarousel>
                            )}
                          </Fancybox>
                        </div>
                        <div className="modal-footer justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="price">
                              <strong>
                                <span>₹{val.cardSalePrice}</span>
                              </strong>
                              <del>₹{val.cardTotalPrice}</del>
                            </div>
                          </div>
                          <div>
                            <button
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                              onClick={() => EditCard(val.id)}
                            >
                              Try This Card
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          })}
        </div>

        <div className="card shadow p-5 mb-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3>Customized Card</h3>
              <hr />
            </div>
            <div className="col-md-6">
              <p>
                <strong>Looking for a Designer for a Customised e-card?</strong>
              </p>
              <ul>
                <li>We've got you covered!</li>
                <li>You're Special & your Wedding card needs to be Special too</li>
              </ul>
            </div>
            <div className="col-md-6">
              <p>
                <strong>How it works?</strong>
              </p>
              <ul>
                <li>Get a dedicated Designer for your Wedding/Engagement e-card.</li>
                <li>Delivery within 3 working days.</li>
                <li>Flexible editing & customer support</li>
              </ul>
            </div>
            <div className="col-md-12 text-center">
              <a href="#cardmodal" data-bs-toggle="modal" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop />

      {/* Modal */}

      {/* Modal 2 */}
      <div className="modal fade" id="cardmodal" tabindex="-1" aria-labelledby="cardmodalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="cardmodalLabel">
                Customized Your Card
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/*<form method="post">*/}
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  onChange={handleInputs}
                  value={customizeCardData.name}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="phoneNumber"
                  className="form-control"
                  placeholder="Phone"
                  onChange={handleInputs}
                  value={customizeCardData.phoneNumber}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={handleInputs}
                  value={customizeCardData.email}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="event"
                  className="form-control"
                  placeholder="Event"
                  onChange={handleInputs}
                  value={customizeCardData.event}
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  name="description"
                  className="form-control"
                  placeholder="Description"
                  onChange={handleInputs}
                  value={customizeCardData.description}
                ></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-primary form-control" onClick={CustomizedInformation}>
                  Submit
                </button>
              </div>
              {/*</form>*/}
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default Home
