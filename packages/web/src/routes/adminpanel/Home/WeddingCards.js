import React, { useEffect, useState } from 'react'
import '../Adminindex.css'
import AdminHeader from '../Header/AdminHeader'
import Loading from '../../../components/Loading'
import { useNavigate } from 'react-router'
import OwlCarousel from 'react-owl-carousel2'
import Fancybox from '../../../fancybox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faShareNodes } from '@fortawesome/free-solid-svg-icons'
function WeddingCards() {
  const navigate = useNavigate()
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

  const ChangeCardDetails = (id) => {
    navigate(`/update-card-details?id=${id}`)
  }

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

  if (!cardInfo) {
    return (
      <>
        <Loading />
      </>
    )
  }

  return (
    <>
      {' '}
      <AdminHeader />
      <div className="content-header sty-one">
        <h1>Data Tables</h1>
        <ol className="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <i className="fa fa-angle-right"></i>/ Wedding Cards
          </li>
        </ol>
      </div>
      s
      <div className="content">
        <div className="card m-t-3">
          <div className="card-body">
            <div className="table-responsive">
              <div className="content-wrapper" style={{ minHeight: 'auto' }}>
                <table id="example1" className="table table-bordered table-striped dataTable no-footer">
                  <thead>
                    <tr>
                      <th>Card Id</th>
                      <th>Card Name</th>
                      <th>Card Details</th>
                      <th>Card Sale Price</th>

                      <th>Card Total Price</th>
                      <th>No Of Pages</th>
                      <th>Image</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cardInfo?.map((val, index) => {
                      if (val.cardCategory === 'WeddingInvitation') {
                        return (
                          <>
                            <tr>
                              <td>{val.id}</td>
                              <td>{val.cardName}</td>
                              <td>
                                {val.cardDetails?.map((cardetails, ind) => {
                                  if (val.cardDetails.length === ind + 1) {
                                    return (
                                      <>
                                        <td>{cardetails}</td>
                                      </>
                                    )
                                  } else {
                                    return (
                                      <>
                                        <td>{cardetails},</td>
                                      </>
                                    )
                                  }
                                })}
                              </td>
                              <td>{val.cardSalePrice}</td>
                              <td>{val.cardTotalPrice}</td>
                              <td>{val.noOfPages}</td>
                              <td>
                                {/*<a href={'#id' + index} data-bs-toggle="modal">*/}
                                <img
                                  style={{ maxWidth: '80px' }}
                                  src={'http://localhost:3001/assets/' + val.cardCategory + '/' + val.cardTemplates[0]}
                                />
                                {/*</a>*/}
                              </td>
                              <td>
                                <button
                                  onClick={() => {
                                    ChangeCardDetails(val.id)
                                  }}
                                >
                                  Change Card Details
                                </button>
                              </td>
                            </tr>

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
                                                  href={
                                                    'http://localhost:3001/assets/' + val.cardCategory + '/' + card1
                                                  }
                                                >
                                                  <img
                                                    src={
                                                      'http://localhost:3001/assets/' + val.cardCategory + '/' + card1
                                                    }
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
                                        <OwlCarousel
                                          className="owl-carousel owl-theme wedding-carousel"
                                          options={options}
                                        >
                                          {val.cardTemplates.map((card1, ind) => {
                                            return (
                                              <>
                                                <div className="item">
                                                  <a
                                                    data-fancybox={'#id' + index}
                                                    href={
                                                      'http://localhost:3001/assets/' + val.cardCategory + '/' + card1
                                                    }
                                                  >
                                                    <img
                                                      src={
                                                        'http://localhost:3001/assets/' + val.cardCategory + '/' + card1
                                                      }
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )
                      }
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default WeddingCards
