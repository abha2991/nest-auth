import React, { useState, useEffect } from 'react'
import '../Adminindex.css'
import AdminHeader from '../Header/AdminHeader'
import Loading from '../../../components/Loading'

function CustomizeCardsQuery() {
  const [data, setData] = useState([])

  const userEnteredData = async (e) => {
    const res = await fetch(`http://localhost:3001/api/customizecardsquery`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const data1 = await res.json()
    setData(data1)
  }
  useEffect(() => {
    userEnteredData()
  }, [])

  const deleteCard = async (id) => {
    let text = 'Are You Sure!!!'
    if (confirm(text) == true) {
      const res = await fetch(`http://localhost:3001/api/customizecardsquery/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json()
      if (data.message === 'Successfully Deleted') {
        window.alert('Succesfully Deleted')
        window.location.reload()
      }
    } else {
    }
  }

  if (!data) {
    return <Loading />
  }
  return (
    <>
      {' '}
      <AdminHeader />
      <div className="content-wrapper" style={{ minHeight: 'auto' }}>
        <div className="content-header sty-one">
          <h1>Users Queries</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <i className="fa fa-angle-right"></i>/Users Query
            </li>
          </ol>
        </div>
        <div className="content">
          <div className="card m-t-3">
            <div className="card-body">
              <div className="table-responsive">
                <table id="example1" className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Email</th>

                      <th>Event</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((val, index) => {
                      return (
                        <>
                          <tr>
                            <td>{val.name}</td>
                            <td>{val.phoneNumber}</td>
                            <td>{val.email}</td>

                            <td>{val.event}</td>
                            <td>{val.description}</td>
                            <td>{new Date(val.createdAt).toDateString()}</td>
                            <td>
                              {' '}
                              <button
                                style={{
                                  borderRadius: '50px',
                                  background: '#FF3767',
                                  color: '#fff',
                                  padding: '10px 20px'
                                }}
                                onClick={() => deleteCard(val.id)}
                              >
                                Delete{' '}
                              </button>
                            </td>
                            {/*<td><button setcaseid={val._id}*/}
                            {/*    className="viewbtn"*/}
                            {/*    onClick={() => deleteCase(val._id)}>Delete</button></td>*/}
                            {/* <td><button setcaseid={val._id}
                                className="viewbtn"
                                onClick={() => sendemail(val.Email,val.Court,val.Name)}>Send Email</button></td> */}
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

export default CustomizeCardsQuery
