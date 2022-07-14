import React, { useEffect, useState } from 'react'
import '../Adminindex.css'
import AdminHeader from '../Header/AdminHeader'
import Loading from '../../../components/Loading'
import { useNavigate } from 'react-router'
function ThankYouCards() {
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

    console.log({ data })

    setCardInfo(data)
  }
  useEffect(() => {
    getCardsOfUser()
  }, [])
  const ChangeCardDetails = (id) => {
    navigate(`/update-card-details?id=${id}`)
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
            <i className="fa fa-angle-right"></i>/ Thank You Cards
          </li>
        </ol>
      </div>
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
                      if (val.cardCategory === 'ThankYouInvitation') {
                        return (
                          <>
                            <tr>
                              <td>{val.id}</td>
                              <td>{val.cardName}</td>
                              <td>{val.cardDetails}</td>
                              <td>{val.cardSalePrice}</td>
                              <td>{val.cardTotalPrice}</td>
                              <td>{val.noOfPages}</td>
                              <td>
                                <img
                                  style={{ maxWidth: '80px' }}
                                  src={'http://localhost:3001/assets/' + val.cardCategory + '/' + val.cardTemplates[0]}
                                />
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
export default ThankYouCards
