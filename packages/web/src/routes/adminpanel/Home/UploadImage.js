import React, { useEffect, useState, useRef } from 'react'
import useQueryParams from '../../../hooks/useQueryParams'
import Loading from '../../../components/Loading'
import AdminHeader from '../Header/AdminHeader'

const UploadImage = () => {
  const id = useQueryParams()
  const { id: id2 } = id
  const inputRef = useRef(null)
  const getData = async () => {
    const formData = new FormData()
    formData.append('file', inputRef.current.files[0])

    const response = await fetch(`http://localhost:3001/api/uploadfile/Banner`, {
      method: 'POST',
      credentials: 'include',

      body: formData
    })

    const data = await response.json()
    if (data.statusCode === 400) {
      window.alert(data.message)
    } else {
      window.alert(data.message)
    }
  }
  return (
    <>
      <AdminHeader />
      <div className="content-wrapper" style={{ minHeight: 'auto' }}>
        <div className="content-header sty-one">
          <ol className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <i className="fa fa-angle-right"></i>/ Upload Banner
            </li>
          </ol>
        </div>
        <div className="content">
          <div className="card m-t-3">
            <div className="card-body">
              <input type="file" name="images" multiple ref={inputRef} className="border" />
              <button className="btn btn-primary mt-2" onClick={getData}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadImage
