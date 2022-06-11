import useProfileApi from '../../api/useProfileApi'
import React, { useEffect, useState } from 'react'
import Header from '../Header'
import OwlCarousel from 'react-owl-carousel2'
import 'react-owl-carousel2/lib/styles.css'
import 'react-owl-carousel2/src/owl.theme.default.css'
import card1 from '../img/WhatsApp Image 2022-05-12 at 12.15.41 PM.jpeg'
import { useNavigate } from 'react-router'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import Fancybox from '../../fancybox'
import one011 from '../img/one-011.png'
import card2 from '../img/WhatsApp Image 2022-05-12 at 12.15.41 PM (2).jpeg'
import card3 from '../img/WhatsApp Image 2022-05-12 at 12.15.41 PM (1).jpeg'
import Footer from '../Footer'

const Purchased = () => {
  const navigate = useNavigate()
  const { data: profile, status } = useProfileApi()
  let id = profile?.id ?? ''
  console.log({ id, status })

  const [cardData, setCardData] = useState()

  const getCardsOfUser = async (e) => {
    const res = await fetch(`http://localhost:3001/api/card1/${id}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()
    console.log(data)
    setCardData(data)
  }
  useEffect(() => {
    getCardsOfUser()
  }, [id])

  console.log(cardData)

  const preview = (id) => {
    navigate(`/download?id=${id}`)
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

  if (!cardData || status != 'success' || cardData.statusCode === 404) {
    return (
      <>
        <Loading />
      </>
    )
  }

  if (cardData && status === 'success')
    return (
      <>
        <Header />
        <div className="pt-5">
          <h3 className="text-center">My Purchases</h3>
        </div>
        <hr />

        <div className="container">
          <div className="row my-5">
            {cardData?.map((val, index) => {
              if (val.paymentStatus === 'SUCCESS') {
                return (
                  <>
                    <div className="col-md-3">
                      <div className="wedding-box">
                        <a href={'#id' + index} data-bs-toggle="modal">
                          <img src={'http://localhost:3001/generated/' + val.cardNames[0]} className="img-fluid" />
                        </a>
                        <div className="inner">
                          <div className="triangle-right"></div>
                          <h4>{val.noOfPages}</h4>
                          {val.noOfPages === 1 ? <p>Page</p> : <p>Pages</p>}
                        </div>
                        {/*<div className="price"><strong><span>₹{val.CardSalePrice}</span></strong><del>₹{val.CardTotalPrice}</del></div>*/}
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
                                val.cardNames.map((card1, ind) => {
                                  return (
                                    <>
                                      <div className="item">
                                        <a
                                          data-fancybox={'#id' + index}
                                          href={'http://localhost:3001/generated/' + card1}
                                          style={{ position: 'relative' }}
                                        >
                                          <img
                                            src={'http://localhost:3001/generated/' + card1}
                                            className="img-fluid"
                                            alt="Invitations"
                                            style={{
                                              maxWidth: '300px',
                                              margin: 'auto'
                                            }}
                                          />{' '}
                                          {/*                               <div style={{*/}{' '}
                                          {/*                                 position: "absolute",*/}{' '}
                                          {/*                                 top: "45%",*/}{' '}
                                          {/*                                 left: "auto",*/}{' '}
                                          {/*                                 right: "auto",*/}{' '}
                                          {/*                                 width: "100%",*/}{' '}
                                          {/*                                 textAlign: "center",*/}{' '}
                                          {/*                                 opacity: "0.2"*/}{' '}
                                          {/*                               }}>*/}{' '}
                                          {/*    <img src={logo} style={{ height:"auto",maxWidth: "120px", margin: "auto"}} alt="card"/>*/}
                                          {/*</div>*/}
                                        </a>
                                      </div>
                                    </>
                                  )
                                })
                              ) : (
                                <OwlCarousel className="owl-carousel owl-theme wedding-carousel" options={options2}>
                                  {val.cardNames.map((card1, ind) => {
                                    return (
                                      <>
                                        <div className="item">
                                          <a data-fancybox="gallery" href={'http://localhost:3001/generated/' + card1}>
                                            <img
                                              src={'http://localhost:3001/generated/' + card1}
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
                              {/*<a id="edit-card"*/}
                              {/*   // href="./edit-card" onclick="window.location.href=this.href+'?id='+val;"*/}
                              {/*    onClick={changeHref(1)}*/}
                              {/*   style={{ background: "#FF3767", color: "#fff", borderRadius: "10px", textDecoration: "none", padding: "10px 20px" }}>Try This Card</a>*/}

                              <button className="btn btn-primary" onClick={() => preview(val.id)}>
                                Download This Card
                              </button>
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
            })}
          </div>
        </div>

        <Footer />
      </>
    )
}
export default Purchased
