import React, { useRef, useEffect, useState } from 'react'
import Header from '../Header'
import OwlCarousel from 'react-owl-carousel2'
import logo from '../img/image 7.png'
import 'react-owl-carousel2/lib/styles.css'
import 'react-owl-carousel2/src/owl.theme.default.css'
import useRazorpay from '../../hooks/useRazorpay'
// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'
import useQueryParams from '../../hooks/useQueryParams'
//image

import useProfileApi from '../../api/useProfileApi'
import useCardUserApi from '../../api/useCardUserApi'
import Carousel from 'carousel-react-rcdev'
import Loading from '../../components/Loading'

import Footer from '../Footer'
const Preview = () => {
  const navigate = useNavigate()
  const { data: profile, status } = useProfileApi()

  const id = useQueryParams()
  const { pay } = useRazorpay()
  const [cardData, setCardData] = useState()
  const [cardname, setCardName] = useState()
  const [userdata, setUserData] = useState()

  const { id: id2 } = id
  const getCardsOfUser = async (e) => {
    const res = await fetch(`http://localhost:3001/api/card1/getCard/${id2}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()

    setCardData(data)

    setCardName(data.previewCardNames)
    setUserData(data.id)
  }
  useEffect(() => {
    getCardsOfUser()
  }, [id2])

  let cardId = userdata

  const deleteCard = async (e) => {
    let text = 'Are You Sure!!!'
    if (confirm(text) == true) {
      const res = await fetch(`http://localhost:3001/api/card1/delete/${id2}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json()
      if (data.message === 'Successfully Deleted') {
        window.alert('Succesfully Deleted')
        navigate('/drafts')
      }
    } else {
    }
  }

  const options = {
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  }

  const Pay = async (Price, cardId) => {
    //console.log("in Preview")

    try {
      let result = await pay(Price, cardId)

      //navigate('/download')
    } catch (e) {
      if (e.message) {
      }
    }
  }

  let cardid = cardData?.cardId ?? ''

  if (!cardname) {
    return (
      <Loading />
      // <>

      //     <div></div></>
    )
  } else {
    return (
      <>
        <Header />

        <div className="pt-5">
          <h3 className="text-center">Preview</h3>
        </div>
        <hr />

        <div className="container">
          <div className="d-flex justify-content-between align-items-center my-5">
            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
              <FontAwesomeIcon icon={faArrowLeft} />
              &nbsp;Back
            </button>

            <button style={{ textDecoration: 'none' }} onClick={() => deleteCard()}>
              <i className="fa fa-trash" aria-hidden="true"></i>
              &nbsp;Delete
            </button>
            <a href="#" style={{ textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faShareNodes} />
              &nbsp;Share
            </a>
          </div>
          <div>
            <OwlCarousel className="owl-carousel owl-theme wedding-carousel" options={options}>
              {cardname?.map((val) => {
                if (!val) return null

                return (
                  <>
                    <div className="item">
                      <div style={{ position: 'relative' }}>
                        <img
                          src={'http://localhost:3001/generated/' + cardData?.cardCategory + '/' + val}
                          className="img-fluid"
                          alt="Invitations"
                          style={{
                            maxWidth: '300px',
                            margin: 'auto'
                          }}
                        />
                        {/*<div style={{*/}
                        {/*    position: "absolute",*/}
                        {/*    top: "45%",*/}
                        {/*    left: "auto",*/}
                        {/*    right: "auto",*/}
                        {/*    width: "100%",*/}
                        {/*    textAlign: "center",*/}
                        {/*    opacity: "0.2"*/}
                        {/*}}>*/}
                        {/*    <img src={logo} style={{maxWidth: "150px", margin: "auto"}}/>*/}
                        {/*</div>*/}
                      </div>
                    </div>
                  </>
                )
              })}
            </OwlCarousel>
          </div>
          <div className="d-md-flex justify-content-center pay-btn my-5">
            <a href={`/edit-card${cardid}?id=${id2}`}>
              <FontAwesomeIcon icon={faPen} /> Edit this Page
            </a>
            <a style={{ cursor: 'pointer' }} onClick={() => Pay(cardData?.cardSalePrice, cardId)}>
              Pay {cardData?.cardSalePrice} & Download
            </a>
          </div>
        </div>

        <Footer />
      </>
    )
  }
}
export default Preview
