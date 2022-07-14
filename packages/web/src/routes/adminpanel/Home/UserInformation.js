import React, { useEffect, useState } from 'react'
import useQueryParams from '../../../hooks/useQueryParams'
import Loading from '../../../components/Loading'
import AdminHeader from '../Header/AdminHeader'

const UserInformation = () => {
  const [userInfo, setUserInfo] = useState()

  const id = useQueryParams()
  const email = useQueryParams()

  const { id: id2 } = id

  const getUserInfo = async (e) => {
    const res = await fetch(`http://localhost:3001/api/card1/${id2}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()

    setUserInfo(data)
  }
  useEffect(() => {
    getUserInfo()
  }, [id2])

  if (!userInfo) {
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
            <i className="fa fa-angle-right"></i>/ User Information
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
                      <th>User Email</th>
                      <th>Card Name</th>
                      <th>Card Category</th>

                      <th>Card Selling Price</th>
                      <th>Card Actual Price</th>
                      <th>Payment Status</th>
                      <th>Payment Date</th>
                      <th>Created At</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userInfo?.map((val, index) => {
                      return (
                        <>
                          <tr>
                            <td>{val.id}</td>
                            <td>{val.userId}</td>
                            <td>{email?.email}</td>
                            <td>{val.cardNames}</td>
                            <td>{val.CardType}</td>
                            <td>{val.cardSalePrice}</td>
                            <td>{val.cardTotalPrice}</td>
                            <td>{val.paymentStatus}</td>
                            <td>{val.paymentDate}</td>

                            <td>{new Date(val.createdAt).toDateString()}</td>
                            <td>
                              <img
                                style={{ maxWidth: '80px' }}
                                src={'http://localhost:3001/generated/' + val.cardCategory + '/' + val.cardNames[0]}
                              />
                            </td>
                          </tr>
                        </>
                      )
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

export default UserInformation
