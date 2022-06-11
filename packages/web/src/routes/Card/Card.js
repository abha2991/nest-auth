import React from "react";
import Header from "../Header";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
//image
import Wedding3 from "../img/girl 1.png";
import page11 from "../img/page1 1.png";
import img31 from "../img/3 1.png";
import Banner from "../img/c60feb2bfd5c1a10cf164d8eb7b20b9b-247-13536 1.png";
import one011 from "../img/one-011.png";



const Card = () => {



  const options = {
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

  return (
      <>
            <Header />
            <div className="container">
                <div className="row my-5">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="wedding-cards-tab" data-bs-toggle="pill" href="#wedding-cards"  role="tab" aria-controls="wedding-cards" aria-selected="true" >Wedding Cards</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="wedding-videos-tab" data-bs-toggle="pill" href="#wedding-videos"  role="tab" aria-controls="wedding-videos" aria-selected="false">Wedding Videos</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="engagement-cards-tab" data-bs-toggle="pill" data-bs-target="#engagement-cards"  role="tab" aria-controls="engagement-cards" aria-selected="false">Engagement Cards</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="engagement-videos-tab" data-bs-toggle="pill" data-bs-target="#engagement-videos"  role="tab" aria-controls="engagement-videos" aria-selected="false">Engagement Videos</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="mehandi-cards-tab" data-bs-toggle="pill" data-bs-target="#mehandi-cards"  role="tab" aria-controls="mehandi-cards" aria-selected="false">Mehandi Cards</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="haldi-cards-tab" data-bs-toggle="pill" data-bs-target="#haldi-cards"  role="tab" aria-controls="haldi-cards" aria-selected="false">Haldi Cards</button>
                        </li>

                {/*        <li className="nav-item" role="presentation">*/}
                {/*        <a className="nav-link active" id="wedding-cards-tab" data-bs-toggle="pill" href="#wedding-cards" role="tab"*/}
                {/*           aria-controls="v-pills-home" aria-selected="true">Wedding Cards</a></li>*/}
                {/*        <li className="nav-item" role="presentation">*/}
                {/*<a className="nav-link" id="wedding-videos-tab" data-bs-toggle="pill" href="#wedding-videos" role="tab"*/}
                {/*   aria-controls="v-pills-profile" aria-selected="false">Wedding Videos</a></li>*/}
                {/*        <li className="nav-item" role="presentation">*/}
                {/*<a className="nav-link" id="engagement-cards-tab" data-bs-toggle="pill" href="#engagement-cards" role="tab"*/}
                {/*   aria-controls="v-pills-messages" aria-selected="false">Engagement Cards</a></li>*/}
                {/*        <li className="nav-item" role="presentation">*/}
                {/*<a className="nav-link" id="engagement-videos-tab" data-bs-toggle="pill" href="#engagement-videos" role="tab"*/}
                {/*   aria-controls="v-pills-settings" aria-selected="false">Engagement Videos</a></li>*/}
                {/*        <li className="nav-item" role="presentation">*/}
                {/*         <a className="nav-link" id="mehandi-cards-tab" data-bs-toggle="pill" href="#mehandi-cards" role="tab"*/}
                {/*            aria-controls="v-pills-settings" aria-selected="false">Mehandi Cards</a></li>*/}
                {/*        <li className="nav-item" role="presentation">*/}

                {/*  <a className="nav-link" id="haldi-cards-tab" data-bs-toggle="pill" href="#haldi-cards" role="tab"*/}
                {/*     aria-controls="v-pills-settings" aria-selected="false">Haldi Cards</a></li>*/}



                    </ul>

                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="wedding-cards" role="tabpanel" aria-labelledby="wedding-cards-tab">
                            <div className="row">
                                <div className="d-flex justify-content-between my-3">
                                    <h4>Wedding Invitations</h4>
                                    <p>
                                        Sort by:&nbsp;&nbsp;
                                      <select className="btn btn-light" style={{ border: "1px solid #A5A5A5" }}>
                                            <option>Popularity</option>
                                        </select>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                            </div>
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
                            <div className="row mt-5">
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="wedding-videos" role="tabpanel" aria-labelledby="wedding-videos-tab">
                            <div className="row">
                                <div className="d-flex justify-content-between my-3">
                                    <h4>Wedding Invitations</h4>
                                    <p>
                                        Sort by:&nbsp;&nbsp;
                                      <select className="btn btn-light" style={{ border: "1px solid #A5A5A5" }}>
                                            <option>Popularity</option>
                                        </select>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                            </div>
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
                            <div className="row mt-5">
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="engagement-cards" role="tabpanel" aria-labelledby="engagement-cards-tab">
                            <div className="row">
                                <div className="d-flex justify-content-between my-3">
                                    <h4>Wedding Invitations</h4>
                                    <p>
                                        Sort by:&nbsp;&nbsp;
                                      <select className="btn btn-light" style={{ border: "1px solid #A5A5A5" }}>
                                            <option>Popularity</option>
                                        </select>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                      <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                      <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                      <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                            </div>
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
                            <div className="row mt-5">
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
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
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="engagement-videos" role="tabpanel" aria-labelledby="engagement-videos-tab">
                            <div className="row">
                                <div className="d-flex justify-content-between my-3">
                                    <h4>Wedding Invitations</h4>
                                    <p>
                                        Sort by:&nbsp;&nbsp;
                                      <select className="btn btn-light" style={{ border: "1px solid #A5A5A5" }}>
                                            <option>Popularity</option>
                                        </select>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                      <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                            </div>
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
                            <div className="row mt-5">
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="mehandi-cards" role="tabpanel" aria-labelledby="mehandi-cards-tab">
                            <div className="row">
                                <div className="d-flex justify-content-between my-3">
                                    <h4>Wedding Invitations</h4>
                                    <p>
                                        Sort by:&nbsp;&nbsp;
                                      <select className="btn btn-light" style={{ border: "1px solid #A5A5A5" }}>
                                            <option>Popularity</option>
                                        </select>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                            </div>
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
                            <div className="row mt-5">
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="haldi-cards" role="tabpanel" aria-labelledby="haldi-cards-tab">
                            <div className="row">
                                <div className="d-flex justify-content-between my-3">
                                    <h4>Wedding Invitations</h4>
                                    <p>
                                        Sort by:&nbsp;&nbsp;
                                      <select className="btn btn-light" style={{ border: "1px solid #A5A5A5" }}>
                                            <option>Popularity</option>
                                        </select>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                      <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                            </div>
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
                            <div className="row mt-5">
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={Wedding3} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={img31} className="img-fluid" alt="Cards" />
                                        </a>
                                       <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5 ">
                                    <div className="wedding-box">
                                        <a href="#staticBackdrop" data-bs-toggle="modal">
                                            <img src={page11} className="img-fluid" alt="Cards" />
                                        </a>
                                        <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>4</h4>
                                    <p>Pages</p>
                                </div>
                                        <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* Button trigger modal */}
        {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button> */}

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
                            <OwlCarousel className='owl-carousel owl-theme wedding-carousel' options={options}>
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
                                <a href="./edit-card" style={{ background: "#FF3767", color: "#fff", borderRadius: "10px", textDecoration: "none", padding: "10px 20px" }}>Try This Card</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Card
