import React, { useEffect, useState } from 'react'
import Loading from '../../../components/Loading'
import AdminHeader from '../Header/AdminHeader'

const AllPurchased = () => {
  const [cardInfo, setCardInfo] = useState()

  const getAllCards = async (e) => {
    const res = await fetch(`http://localhost:3001/api/card1/getall`, {
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
    getAllCards()
  }, [])

  if (!cardInfo) {
    return <Loading />
  }

  return (
    <>
      <AdminHeader />
      <div className="content-header sty-one">
        <ol className="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <i className="fa fa-angle-right"></i>/ Purchased
          </li>
        </ol>
      </div>
      <div className="content">
        <div className="card m-t-3">
          <div className="card-body">
            <div className="table-responsive">
              <div className="content-wrapper" style={{ minHeight: 'auto' }}>
                <div className="input-group mycasetable-form "></div>
                <table id="example1" className="table table-bordered table-striped dataTable no-footer">
                  <thead>
                    <tr>
                      <th>Card Id</th>
                      <th>User Id</th>

                      <th>Card Name</th>
                      <th>Card Category</th>

                      <th>Card Selling Price</th>
                      <th>Card Actual Price</th>
                      <th>Payment Status</th>

                      <th>Created At</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cardInfo?.map((val, index) => {
                      if (val?.paymentStatus === 'SUCCESS') {
                        return (
                          <>
                            <tr>
                              <td>{val.id}</td>
                              <td>
                                <a href={'/user-information?id=' + val.userId}>{val.userId}</a>
                              </td>

                              <td>{val.cardNames}</td>
                              <td>{val.cardCategory}</td>
                              <td>{val.cardSalePrice}</td>
                              <td>{val.cardTotalPrice}</td>
                              <td>{val.paymentStatus}</td>

                              <td>{new Date(val.createdAt).toDateString()}</td>
                              <td>
                                <img
                                  style={{ maxWidth: '80px' }}
                                  src={
                                    'http://localhost:3001/generated/' +
                                    val.cardCategory +
                                    '/' +
                                    val.previewCardNames[0]
                                  }
                                />
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

export default AllPurchased
