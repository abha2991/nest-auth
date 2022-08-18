import React, { createRef, useEffect, useState } from 'react'
import Header from '../Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faShareNodes } from '@fortawesome/free-solid-svg-icons'
// @ts-ignore
import OwlCarousel from 'react-owl-carousel2'
import 'react-owl-carousel2/lib/styles.css'
import 'react-owl-carousel2/src/owl.theme.default.css'
import { jsPDF } from 'jspdf'
import useQueryParams from '../../hooks/useQueryParams'
import { Navigate } from 'react-router-dom'

import Footer from '../Footer'

const DownloadCards = () => {
  const componentRef = createRef()
  const id = useQueryParams()
  const { id: id2 } = id
  const [cardname, setCardName] = useState()
  const [cardData, setCardData] = useState()
  const [paymentStatus, setPaymentStatus] = useState()
  const getCardsOfUser = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/card1/getCard/${id2}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data1 = await response.json()

      setCardName(data1.cardNames)
      setCardData(data1)

      setPaymentStatus(data1.paymentStatus)
    } catch (e) {
      //console.log({ e })
    }
  }
  useEffect(() => {
    getCardsOfUser()
    //.then((r) => console.log({ r }))
    // return () => {
    //   setCardName({});
    //   setPaymentStatus({})// This worked for me
    // };
  }, [id2])

  const options = {
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  }

  //const [zoom,setZoom]=useState({height:0, width:0});

  const doc = new jsPDF('p', 'mm', 'a4')

  var width = doc.internal.pageSize.getWidth()
  var height = doc.internal.pageSize.getHeight()

  // const handleZoomIn=()=>{
  //
  //
  //   // Increase dimension(Zooming)
  //   setZoom({
  //     height : height + 10,
  //     width : width + 10,
  //   })
  // }

  // Event handler callback zoom out
  // const handleZoomOut=()=>{
  //
  //   // Assigning original height and width
  //   setZoom({
  //     height : height,
  //     width : width,
  //   })
  // }

  async function addImageProcess(src: string) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      let img = new Image()
      img.src = src
      img.onload = () => resolve(img)
      img.onerror = reject
    })
  }

  const imageUrls = cardname

  async function generatePdf(imageUrls: any) {
    let len = imageUrls.length

    for (const i of imageUrls) {
      let url = `http://localhost:3001/generated/${(cardData as any)?.cardCategory}/${i}`

      const image = await addImageProcess(url)

      doc.addImage(image, 'png', 0, 0, width, height)
      if (i !== imageUrls.length - 1) {
        doc.addPage()
      }

      doc.deletePage(len + 1)
    }
    return doc
  }

  async function savePdf() {
    const multiPng = await generatePdf(imageUrls)

    multiPng.output('dataurlstring', { filename: 'Card.pdf' })

    // @ts-ignore
    multiPng.output('save', 'Card.pdf')
  }

  let redirectTo = `/preview?id=${id2}`

  if (!cardname || !paymentStatus || !cardData) {
    return null
  }

  if (paymentStatus === 'SUCCESS' && cardData) {
    return (
      <>
        <Header />
        <div className="pt-5">
          <h3 className="text-center">Download Card</h3>
        </div>
        <hr />
        <div className="container">
          <div className="d-flex justify-content-between align-items-center my-5">
            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
              <FontAwesomeIcon icon={faArrowLeft} />
              &nbsp;Back
            </button>

            {/*<a href="#" style={{ textDecoration: 'none' }}>*/}
            {/*  <FontAwesomeIcon icon={faShareNodes} />*/}
            {/*  &nbsp;Share*/}
            {/*</a>*/}
          </div>
          {(cardData as any)?.noOfPages === 1 ? (
            (cardname as any)?.map((val: any, ind: number) => {
              return (
                <>
                  <div className="item">
                    <img
                      src={'http://localhost:3001/generated/' + (cardData as any)?.cardCategory + '/' + val}
                      className="img-fluid"
                      alt="Invitations"
                      style={{
                        maxWidth: '300px',
                        margin: 'auto'
                      }}
                    />
                  </div>
                </>
              )
            })
          ) : (
            <OwlCarousel className="owl-carousel owl-theme wedding-carousel" options={options}>
              {(cardname as any)?.map((val: any, index: number) => {
                return (
                  <>
                    <div className="item">
                      <img
                        src={'http://localhost:3001/generated/' + (cardData as any)?.cardCategory + '/' + val}
                        className="img-fluid"
                        alt="Invitations"
                        style={{
                          maxWidth: '300px',
                          margin: 'auto'
                        }}
                      />
                    </div>
                  </>
                )
              })}{' '}
            </OwlCarousel>
          )}

          <div className="d-md-flex justify-content-center pay-btn my-5">
            <a
              onClick={savePdf}
              className="btn"
              style={{
                borderRadius: '50px',
                background: '#FF3767',
                color: '#fff',
                padding: '10px 20px'
              }}
            >
              Download
            </a>
          </div>
        </div>

        <Footer />
      </>
    )
  }

  if (paymentStatus === 'PENDING') {
    return (
      <>
        <Navigate to={redirectTo} />
      </>
    )
  }
  return null
}

export default DownloadCards
