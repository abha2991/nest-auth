import React, { useState, useRef } from 'react'
import Header from '../Header'

import { useEffect } from 'react'

const CustomizedCard = () => {
  const [customizeCardData, setCustomizeCardData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    event: '',
    description: ''
  })

  const handleInputs = (e) => {
    const name = e.target.name
    const value = e.target.value
    setCustomizeCardData({ ...customizeCardData, [name]: value })
  }
  const CustomizedInformation = async (e) => {
    const res = await fetch(`http://localhost:3001/api/customizecardsquery`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: customizeCardData.name,
        email: customizeCardData.email,
        phoneNumber: customizeCardData.phoneNumber,
        event: customizeCardData.event,
        description: customizeCardData.description
      })
    })

    const data = await res.json()

    if (data.status === 'success') {
      window.alert('Submitted Successfully')
    } else {
      window.alert(data.message)
    }
  }

  return (
    <>
      <div className="card shadow p-5 mb-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>Customized Card</h3>
            <hr />
          </div>
          <div className="col-md-6">
            <p>
              <strong>Looking for a Designer for a Customised e-card?</strong>
            </p>
            <ul>
              <li>We've got you covered!</li>
              <li>You're Special & your Wedding card needs to be Special too</li>
            </ul>
          </div>
          <div className="col-md-6">
            <p>
              <strong>How it works?</strong>
            </p>
            <ul>
              <li>Get a dedicated Designer for your Wedding/Engagement e-card.</li>
              <li>Delivery within 3 working days.</li>
              <li>Flexible editing & customer support</li>
            </ul>
          </div>
          <div className="col-md-12 text-center">
            <a href="#cardmodal" data-bs-toggle="modal" className="btn btn-primary">
              Buy Now
            </a>
          </div>
        </div>
      </div>

      <div className="modal fade" id="cardmodal" tabIndex="-1" aria-labelledby="cardmodalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="cardmodalLabel">
                Customized Your Card
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/*<form method="post">*/}
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  onChange={handleInputs}
                  value={customizeCardData.name}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="phoneNumber"
                  className="form-control"
                  placeholder="Phone"
                  onChange={handleInputs}
                  value={customizeCardData.phoneNumber}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={handleInputs}
                  value={customizeCardData.email}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="event"
                  className="form-control"
                  placeholder="Event"
                  onChange={handleInputs}
                  value={customizeCardData.event}
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  name="description"
                  className="form-control"
                  placeholder="Description"
                  onChange={handleInputs}
                  value={customizeCardData.description}
                ></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-primary form-control" onClick={CustomizedInformation}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomizedCard
