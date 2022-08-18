import useProfileApi from '../../api/useProfileApi'
import Header from '../Header'
import Footer from '../Footer'
import Loading from '../../components/Loading'
import React, { useRef, useState } from 'react'
import card from '../img/BabyShower/BabyShower_1_1.png'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

const UserProfile = () => {
  const { data: profile } = useProfileApi()

  const [userData, setUserData] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    email: profile.email,
    phoneNumber: profile.phoneNumber
  })

  let name, value
  const handleInputs = (e) => {
    e.preventDefault()
    name = e.target.name
    value = e.target.value
    setUserData({ ...userData, [name]: value })
  }

  const updateData = async (firstName, lastName, phoneNumber) => {
    const response = await fetch(`http://localhost:3001/api/users/${profile.id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,

        phoneNumber: phoneNumber
      })

      //body: formData
    })

    const data = await response.json()
  }

  const inputRef = useRef(null)
  const uploadPhoto = async () => {
    const formData = new FormData()
    formData.append('file', inputRef.current.files[0])

    const response = await fetch(`http://localhost:3001/api/uploadfile/ProfilePic`, {
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

  if (!profile) {
    return <Loading />
  }

  return (
    <>
      <Header />

      <div className="row">
        <div className="profile">
          <div className="m-5 mx-auto" style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              style={{ height: '250px', width: '200px' }}
              alt="profile"
              src={'http://localhost:3001/ProfilePic/' + profile.profileImage}
            />
          </div>
          {/*<button*/}
          {/*  className="mx-auto"*/}
          {/*  style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', border: 'none' }}*/}
          {/*>*/}
          {/*  Update &nbsp; <i className="fa fa-edit" aria-hidden="true"></i>*/}
          {/*</button>*/}

          <input
            className="mx-auto border"
            name="images"
            multiple
            ref={inputRef}
            style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', border: 'none' }}
            type="file"
          />
          <button
            className="btn btn-primary mt-2 mx-auto"
            style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}
            onClick={uploadPhoto}
          >
            Submit
          </button>
        </div>

        <div className="profile">
          <div className="row m-5">
            {/*<div className="col">*/}
            <label style={{ marginBottom: '10px' }}>First Name</label>{' '}
            <input
              type="text"
              value={userData.firstName}
              name="firstName"
              style={{ border: 'none' }}
              onChange={handleInputs}
            ></input>
            {/*</div>*/}
            {/*<div className="col">*/}
            <label style={{ marginBottom: '10px', marginTop: '10px' }}>Last Name</label>{' '}
            <input
              type="text"
              style={{ border: 'none' }}
              name="lastName"
              value={userData.lastName}
              onChange={handleInputs}
            ></input>
            {/*</div>*/}
            <div className="w-100"></div>
            {/*<div className="col">*/} <label style={{ marginBottom: '10px', marginTop: '10px' }}>Email</label>{' '}
            <input type="text" style={{ border: 'none' }} name="email" value={userData.email}></input>
            {/*</div>*/}
            {/*<div className="col">*/}
            <label style={{ marginBottom: '10px', marginTop: '10px' }}>Phone</label>{' '}
            <input
              type="text"
              style={{ border: 'none' }}
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleInputs}
            ></input>
            {/*</div>*/}
            <div>
              <button
                className="m-5 mx-auto"
                style={{ display: 'flex', justifyContent: 'center', border: 'none' }}
                onClick={() => updateData(userData.firstName, userData.lastName, userData.phoneNumber)}
              >
                Update &nbsp; <i className="fa fa-edit" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default UserProfile
