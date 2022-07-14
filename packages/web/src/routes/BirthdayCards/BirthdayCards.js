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

import { useNavigate } from 'react-router'

import Fancybox from '../../fancybox'
import Footer from '../Footer'
import ScrollToTop from '../../components/ScrollToTop'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Loading from '../../components/Loading'

const BirthdayCards = () => {
  const navigate = useNavigate()
  const { isLoading, isSuccess, isError, data } = useCardDetails()

  const { data: profile, status } = useProfileApi()

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
  }

  async function EditCard(id) {
    if (status === 'success') {
      navigate(`/card${id}?id=${id}`)
    } else {
      navigate(`/login?id=${id}`)
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
  }
  useEffect(() => {
    getCardsOfUser()
  }, [])

  if (!cardInfo) {
    return <Loading />
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="my-4">
          {/*<hr />*/}
          <div className="d-flex justify-content-between">
            <h4>Birthday Invitation</h4>
          </div>
          {/*<hr />*/}
        </div>

        <div className="row">
          {cardInfo?.map((val, index) => {
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
                              <OwlCarousel className="owl-carousel owl-theme wedding-carousel" options={options}>
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
        <ScrollToTop />
      </div>
      <Footer />
    </>
  )
}

export default BirthdayCards
