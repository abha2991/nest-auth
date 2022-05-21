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




import React, {useState} from 'react';
import Header from "../Header";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import useCardDetails from '../../api/useCardDetails'
import {useEffect} from 'react';
import useProfileApi from '../../api/useProfileApi'
import useLogoutApi from '../../api/useLogoutApi'
//img
import back from "../img/back.png";
import next from "../img/next.png";
import Banner from "../img/c60feb2bfd5c1a10cf164d8eb7b20b9b-247-13536 1.png";
import Wedding from "../img/Wedding.png";
import Engagement from "../img/Engagement.png";
import Birthday from "../img/Birthday.png";
import SaveTheDate from "../img/Save the date.png";
import Wedding1 from "../img/3 1.png";

import one011 from "../img/one-011.png";
import {useNavigate} from 'react-router';
import useLogoutApi from '../../api/useLogoutApi';

const Home = () => {
const navigate=useNavigate();
    const {
        isLoading, isSuccess,
        isError,
        data
    } = useCardDetails()
    //console.log({data})
    const { data: profile, status } = useProfileApi()
    async function EditCard(id){



        if(status==="success")
        {
            navigate(`/TryCard?id=${id}`)
        }

        else
        {
            navigate(`/login?id=${id}`)
        }

    }
    const [casedetail, setCasedetail] = React.useState([]);

    const CaseTypeOptions = async (e) => {
        const res = await fetch(`http://localhost:3001/api/cardetails/cardetails`);

        const casedetail = await res.json();
        setCasedetail(casedetail);

    };
    useEffect(() => {
        CaseTypeOptions();
    }, []);

    //console.log({casedetail})

    const options = {
    loop: true,
    items: 4,
    margin: 20,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [
      `<img src='${back}' class='back-btn' />`,
      `<img src='${next}' alt='next' class='next-btn' />`,
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      }
    }
  };
  const options1 = {
    loop: true,
    items: 1,
    margin: 20,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
    nav: false

  };
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
  };


    const[cardInfo,setCardInfo]=useState();
    const getCardsOfUser= async (e) => {


        const res = await fetch(`http://localhost:3001/api/cardetails/cardetails`,{
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },

        });


        const data= await res.json();

        console.log({data})

        setCardInfo(data)


        // setPaymentStatus(data.PaymentStatus)

    };
    useEffect(() => {
        getCardsOfUser();
    }, []);


console.log({cardInfo})

  return (
      <>
            <Header />
            <div className="container">
                <OwlCarousel className='owl-carousel owl-theme banner-carousel' options={options1}>
                    <div className='item'>
                        <div className="banner-box">
                            <div className="row pt-5">
                                <div className="col-md-4">
                                    <div className="d-flex justify-content-md-end text-white">
                                        <h3>Shop Wedding <br />
                                            Invitation<br />
                                            E-Cards</h3>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <img src={Banner} className="img-fluid" alt="banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="banner-box">
                            <div className="row pt-5">
                                <div className="col-md-4">
                                    <div className="d-flex justify-content-md-end text-white">
                                        <h3>Shop Wedding <br />
                                            Invitation<br />
                                            E-Cards</h3>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <img src={Banner} className="img-fluid" alt="banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="banner-box">
                            <div className="row pt-5">
                                <div className="col-md-4">
                                    <div className="d-flex justify-content-md-end text-white">
                                        <h3>Shop Wedding <br />
                                            Invitation<br />
                                            E-Cards</h3>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <img src={Banner} className="img-fluid" alt="banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="banner-box">
                            <div className="row pt-5">
                                <div className="col-md-4">
                                    <div className="d-flex justify-content-md-end text-white">
                                        <h3>Shop Wedding <br />
                                            Invitation<br />
                                            E-Cards</h3>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <img src={Banner} className="img-fluid" alt="banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="banner-box">
                            <div className="row pt-5">
                                <div className="col-md-4">
                                    <div className="d-flex justify-content-md-end text-white">
                                        <h3>Shop Wedding <br />
                                            Invitation<br />
                                            E-Cards</h3>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <img src={Banner} className="img-fluid" alt="banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="banner-box">
                            <div className="row pt-5">
                                <div className="col-md-4">
                                    <div className="d-flex justify-content-md-end text-white">
                                        <h3>Shop Wedding <br />
                                            Invitation<br />
                                            E-Cards</h3>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <img src={Banner} className="img-fluid" alt="banner" />
                                </div>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>


                <div className="d-flex justify-content-between mt-5">
                    <h4>Categories</h4>
                    <a href="./cards" style={{ color: "#9505F9", textDecoration: "none", fontWeight: "bold" }}>See All</a>
                </div>
                <div className="row">

                    <div className="col-md-3 text-center">
                        <a href="#" style={{ textDecoration: "none" }}>
                            <img src={Wedding} className="img-fluid" alt="Categories" />
                            <h6 style={{ color: "#000" }}>Wedding</h6>
                        </a>
                    </div>

                    <div className="col-md-3 text-center">
                        <a href="#" style={{ textDecoration: "none" }}>
                            <img src={Engagement} className="img-fluid" alt="Categories" />
                            <h6 style={{ color: "#000" }}>Engagement</h6>
                        </a>
                    </div>
                    <div className="col-md-3 text-center">
                        <a href="#" style={{ textDecoration: "none" }}>
                            <img src={Birthday} className="img-fluid" alt="Categories" />
                            <h6 style={{ color: "#000" }}>Birthday</h6>
                        </a>
                    </div>



                    {/*{data.map((val,index)=>{*/}
                    {/*    <div className="col-md-3 text-center">*/}
                    {/*    <a href="#" style={{ textDecoration: "none" }}>*/}
                    {/*        <img src={SaveTheDate} className="img-fluid" alt="Categories" />*/}
                    {/*        <h6 style={{ color: "#000" }}>{val.CardName}</h6>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                    {/*})}*/}
                    <div className="col-md-3 text-center">
                        <a href="#" style={{ textDecoration: "none" }}>
                            <img src={SaveTheDate} className="img-fluid" alt="Categories" />
                            <h6 style={{ color: "#000" }}>Save the date</h6>
                        </a>
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-5">
                    <h4>Wedding Invitations</h4>
                    <a href="./cards" style={{ color: "#9505F9", textDecoration: "none", fontWeight: "bold" }}>See All</a>
                </div>

                <div className="row">
                    <OwlCarousel className='owl-carousel owl-theme wedding-carousel' options={options}>
                        <div className='item'>
                            <div className="wedding-box">
                                <a href="#staticBackdrop" data-bs-toggle="modal">
                                    <img src={Wedding1} className="img-fluid" alt="Invitations" />
                                </a>
                                <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                <strong><span>₹1,200</span></strong>
                                <del>₹1,500</del>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="wedding-box">
                                <a href="#staticBackdrop" data-bs-toggle="modal">
                                    <img src={Wedding1} className="img-fluid" alt="Invitations" />
                                </a>
                                <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                <strong><span>₹1,200</span></strong>
                                <del>₹1,500</del>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="wedding-box">
                                <a href="#staticBackdrop" data-bs-toggle="modal">
                                    <img src={Wedding1} className="img-fluid" alt="Invitations" />
                                </a>
                                <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                <strong><span>₹1,200</span></strong>
                                <del>₹1,500</del>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="wedding-box">
                                <a href="#staticBackdrop" data-bs-toggle="modal">
                                    <img src={Wedding1} className="img-fluid" alt="Invitations" />
                                </a>
                                <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                <strong><span>₹1,200</span></strong>
                                <del>₹1,500</del>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="wedding-box">
                                <a href="#staticBackdrop" data-bs-toggle="modal">
                                    <img src={Wedding1} className="img-fluid" alt="Invitations" />
                                </a>
                                <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                <strong><span>₹1,200</span></strong>
                                <del>₹1,500</del>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="wedding-box">
                                <a href="#staticBackdrop" data-bs-toggle="modal">
                                    <img src={Wedding1} className="img-fluid" alt="Invitations" />
                                </a>
                                <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                <strong><span>₹1,200</span></strong>
                                <del>₹1,500</del>
                            </div>
                        </div>

                    </OwlCarousel>
                </div>
                <div className="d-flex justify-content-between mt-5">
                    <h4>Engagement Invitations</h4>
                    <a href="./cards" style={{ color: "#9505F9", textDecoration: "none", fontWeight: "bold" }}>See All</a>
                </div>
                <div className="row mb-5">
                    <OwlCarousel className='owl-carousel owl-theme wedding-carousel' options={options}>
                    <div className='item'>
                            <div className="wedding-box">
                                <a href="#staticBackdrop" data-bs-toggle="modal">
                                    <img src={Wedding1} className="img-fluid" alt="Invitations" />
                                </a>
                                <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                <strong><span>₹1,200</span></strong>
                                <del>₹1,500</del>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="wedding-box">
                                <a href="#staticBackdrop" data-bs-toggle="modal">
                                    <img src={Wedding1} className="img-fluid" alt="Invitations" />
                                </a>
                                <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                <strong><span>₹1,200</span></strong>
                                <del>₹1,500</del>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="wedding-box">
                                <a href="#staticBackdrop" data-bs-toggle="modal">
                                    <img src={Wedding1} className="img-fluid" alt="Invitations" />
                                </a>
                                <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                <strong><span>₹1,200</span></strong>
                                <del>₹1,500</del>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="wedding-box">
                                <a href="#staticBackdrop" data-bs-toggle="modal">
                                    <img src={Wedding1} className="img-fluid" alt="Invitations" />
                                </a>
                                <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                <strong><span>₹1,200</span></strong>
                                <del>₹1,500</del>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="wedding-box">
                                <a href="#staticBackdrop" data-bs-toggle="modal">
                                    <img src={Wedding1} className="img-fluid" alt="Invitations" />
                                </a>
                                <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                <strong><span>₹1,200</span></strong>
                                <del>₹1,500</del>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="wedding-box">
                                <a href="#staticBackdrop" data-bs-toggle="modal">
                                    <img src={Wedding1} className="img-fluid" alt="Invitations" />
                                </a>
                                <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                <strong><span>₹1,200</span></strong>
                                <del>₹1,500</del>
                            </div>
                        </div>

                    </OwlCarousel>
                </div>
            </div>

        {/* Modal */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                                <FontAwesomeIcon icon={faArrowLeft} />
                              &nbsp;Back
                            </button>
                            <a href="#" style={{ textDecoration: "none" }}>
                                <FontAwesomeIcon icon={faShareNodes} />
                              &nbsp;Share
                            </a>
                        </div>
                        <div className="modal-body">
                            <OwlCarousel className='owl-carousel owl-theme wedding-carousel' options={options2}>
                                <div className='item'>
                                    <img src={one011} className="img-fluid" alt="Invitations" style={{ maxWidth: "300px", margin: "auto" }} />
                                </div>
                                <div className='item'>
                                    <img src={one011} className="img-fluid" alt="Invitations" style={{ maxWidth: "300px", margin: "auto" }} />
                                </div>
                                <div className='item'>
                                    <img src={one011} className="img-fluid" alt="Invitations" style={{ maxWidth: "300px", margin: "auto" }} />
                                </div>

                            </OwlCarousel>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <div className="d-flex align-items-center">
                                <h4>₹1,200</h4>&nbsp;
                              <h6><del>₹1,500</del></h6>
                            </div>
                            <div>

                                {/*<a id="edit-card"*/}
                                {/*   // href="./edit-card" onclick="window.location.href=this.href+'?id='+val;"*/}
                                {/*    onClick={changeHref(1)}*/}
                                {/*   style={{ background: "#FF3767", color: "#fff", borderRadius: "10px", textDecoration: "none", padding: "10px 20px" }}>Try This Card</a>*/}


                                <button onClick={()=>EditCard(4)}
                                        style={{ background: "#FF3767", color: "#fff", borderRadius: "10px", textDecoration: "none", padding: "10px 20px" }}
                                >Try This Card</button>
                            </div>
                        </div>
=

                {/*        {casedetail.map((val,index)=>{*/}
                {/*            <div className="d-flex justify-content-between mt-5">*/}
                {/*    <h4>{val.CardName}</h4>*/}
                {/*     <h4>{val.CardCategory}</h4>*/}
                {/*</div>*/}
                {/*        })}*/}
                    </div>
                </div>
            </div>



        </>
  )
}

export default Home
