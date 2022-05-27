
import useProfileApi from '../../api/useProfileApi'
import React, {useEffect, useState} from 'react';
import Header from "../Header";
import OwlCarousel from 'react-owl-carousel2';

import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import card1 from '../img/WhatsApp Image 2022-05-12 at 12.15.41 PM.jpeg';
import {useNavigate} from 'react-router';
import { useNavigate } from 'react-router'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faShareNodes} from '@fortawesome/free-solid-svg-icons';
import Fancybox from '../../fancybox';
import logo from '../img/image 7.png';
const Drafts=()=>{
  const navigate = useNavigate()
  const { data: profile, status } = useProfileApi()
let id=profile?.id ?? ""
  console.log({id,status})

const [cardData,setCardData]=useState();

  const getCardsOfUser = async (e) => {


    const res = await fetch(`http://localhost:3001/api/card1/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },

    });

    const data = await res.json();
console.log(data)
   setCardData(data)


  };
  useEffect(() => {
    getCardsOfUser();
  }, [id]);

console.log(cardData)



  const preview=(id)=>{

    navigate(`/preview?id=${id}`)

  }

  const options2 = {
    loop: true,
    center: true,
    items: 2,
    margin:20,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
    nav: false
  };

  // cardData.map((val,ind)=>{
  //   console.log(val.CardNames[0])
  // })


  // cardData?.map((val)=>{
  //   console.log(val.CardNames
  //   )
  // })




  if (!cardData || status!='success' || cardData.statusCode===404) {
    return (
        <>
       </>
    )
  }

if(cardData && status==="success")
    return (
        <>
        <Header/>


<div className="container">
        <div className="row">
                   {cardData?.map((val, index) => {
                     if(val.PaymentStatus==="PENDING") {
                       return (
                           <>
                     <div className='col-md-3'>

                            <div className="wedding-box">

                                <a href={"#id"+index} data-bs-toggle="modal" style={{position:"relative"}}>
                                  <img src={"http://localhost:3001/generated/" + val.CardNames[0]} className="img-fluid"/>
                                  <div style={{
                                    position: "absolute",
                                    top: "45%",
                                    left: "auto",
                                    right: "auto",
                                    width: "100%",
                                    textAlign: "center",
                                    opacity: "0.2"
                                  }}>
               <img src={logo} style={{maxWidth: "150px", margin: "auto"}}/>
       </div>
                                </a>
                                <div className="inner">
                                    <div className="triangle-right"></div>
                                    <h4>{val.NoOfPages}</h4>
                                    <p>Pages</p>
                                </div>
                                <div className="price"><strong><span>₹{val.CardSalePrice}</span></strong><del>₹{val.CardTotalPrice}</del></div>

                            </div>

                        </div>


                             <div className="modal fade" id={"id"+index} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                           <Fancybox>
                                <OwlCarousel className='owl-carousel owl-theme wedding-carousel' options={options2}>
                                 {val.CardNames.map((card1,ind)=>{
                                   return(
                                       <>
                                    <div className='item'>

                                        <a data-fancybox="gallery" href={"http://localhost:3001/generated/" + card1} style={{position:"relative"}}>
                                            <img src={"http://localhost:3001/generated/" + card1} className="img-fluid" alt="Invitations" style={{ maxWidth: "300px", margin: "auto" }} />
                                          <div style={{
                                            position: "absolute",
                                            top: "45%",
                                            left: "auto",
                                            right: "auto",
                                            width: "100%",
                                            textAlign: "center",
                                            opacity: "0.2"
                                          }}>
               <img src={logo} style={{maxWidth: "150px", margin: "auto"}}/>
       </div>

                                        </a>

                                    </div>
                                    </>
                                   )

                                 })}


                                </OwlCarousel>
                            </Fancybox>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <div className="d-flex align-items-center">
                               <div className="price"><strong><span>₹1,200</span></strong><del>₹1,500</del></div>
                            </div>
                            <div>

                                {/*<a id="edit-card"*/}
                              {/*   // href="./edit-card" onclick="window.location.href=this.href+'?id='+val;"*/}
                              {/*    onClick={changeHref(1)}*/}
                              {/*   style={{ background: "#FF3767", color: "#fff", borderRadius: "10px", textDecoration: "none", padding: "10px 20px" }}>Try This Card</a>*/}


                              <button className="btn btn-primary" onClick={()=>preview(val.id)}

                              >Pay And Download</button>
                            </div>
                        </div>


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
                   })
                   }





                </div>
  </div>
      </>


    )


}
export default Drafts;
