import React, { useState } from 'react'
import AdminHeader from '../Header/AdminHeader'
const emptyObj = {
  CardTemplates: '',
  CardDetails: ''
}
const EnterCardDetails = () => {
  const [card, setCard] = useState({
    CardName: '',
    CardCategory: '',
    CardTotalPrice: 0,
    // CardTemplates: [],
    // CardDetails: [],
    CardSalePrice: 0,
    NoOfPages: 0,
    Description: ''
  })
  let name, value
  const handleInput = (e) => {
    name = e.target.name
    value = e.target.value
    setCard({ ...card, [name]: value })
  }
  const [data, setData] = useState([emptyObj])

  const handleInputs1 = (i) => (e) => {
    const name = e.target.name
    const value = e.target.value
    setData((existing) => {
      // console.log({ existing })
      existing[i] = { ...existing[i], [name]: value }
      return [...existing]
    })
  }
  const addRow = () => setData((existing) => [...existing, emptyObj])
  const deleteRow = (i) => setData((existing) => existing.filter((_, index) => i !== index))

  const EnterDetails = async () => {
    let cardTemplates = []
    let cardDetails = []

    data?.map((val, ind) => {
      if (val) {
        cardTemplates.push(val.CardTemplates)
        cardDetails.push(val.CardDetails)
      }
    })

    const res = await fetch(`http://localhost:3001/api/cardetails`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        cardName: card.CardName,
        cardCategory: card.CardCategory,
        cardTotalPrice: Number(card.CardTotalPrice),
        // cardTemplates: [card.CardTemplates],
        // cardDetails: [card.CardDetails],

        cardTemplates,
        cardDetails,
        cardSalePrice: Number(card.CardSalePrice),
        noOfPages: Number(card.NoOfPages),
        description: card.Description
      })
    })

    const data1 = await res.json()
    window.alert('Sucessfully Submitted')
  }

  return (
    <>
      <AdminHeader />

      <div className="content-wrapper" style={{ height: '100vh' }}>
        <div className="content-header sty-one">
          <h1>Enter Card Details</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <i className="fa fa-angle-right"></i>/Enter Card Details
            </li>
          </ol>
        </div>

        <div className="content">
          <div className="card m-t-3">
            <div className="card-body">
              <label for="CardCategory" style={{ display: 'block', margin: '10px' }}>
                Card Category
              </label>
              <select
                className="form-control adminnews-form"
                name="CardCategory"
                value={card.CardCategory}
                onChange={handleInput}
                style={{ width: '300px', height: '35px' }}
              >
                <option value="AnniversaryInvitation">Anniversary Invitation</option>
                <option value="BabyShowerInvitation">BabyShower Invitation</option>
                <option value="BirthdayInvitation">Birthday Invitation</option>
                <option value="CongratulationsInvitation">Congratulations Invitation</option>
                <option value="EngagementInvitation">Engagement Invitation</option>
                <option value="GetWellInvitation">Get Well Soon Invitation</option>
                <option value="MissYouInvitation">Miss You Invitation</option>
                <option value="ReceptionInvitation">Reception Invitation</option>
                <option value="ThankYouInvitation">ThankYou Invitation</option>
                <option value="WeddingInvitation">Wedding Invitation</option>
              </select>
              {/*<input*/}
              {/*  className="form-control adminnews-form"*/}
              {/*  type="text"*/}
              {/*  name="CardCategory"*/}
              {/*  value={card.CardCategory}*/}
              {/*  onChange={handleInput}*/}
              {/*  placeholder="Card Category"*/}
              {/*/>*/}
              <input
                className="form-control adminnews-form"
                type="text"
                placeholder="Card Name"
                name="CardName"
                value={card.CardName}
                onChange={handleInput}
              />

              <input
                className="form-control adminnews-form"
                type="text"
                placeholder="Card Description"
                name="Description"
                value={card.Description}
                onChange={handleInput}
              />

              <input
                className="form-control adminnews-form"
                type="number"
                placeholder="Card Total Price"
                name="CardTotalPrice"
                value={card.CardTotalPrice}
                onChange={handleInput}
              />

              <input
                className="form-control adminnews-form"
                type="number"
                placeholder="Card Sale Price"
                name="CardSalePrice"
                value={card.CardSalePrice}
                onChange={handleInput}
              />

              <input
                className="form-control adminnews-form"
                type="number"
                placeholder="No Of Pages"
                name="NoOfPages"
                value={card.NoOfPages}
                onChange={handleInput}
              />

              {/*<input*/}
              {/*  className="form-control adminnews-form"*/}
              {/*  type="text"*/}
              {/*  placeholder="Card Templates"*/}
              {/*  name="CardTemplates"*/}
              {/*  value={card.CardTemplates}*/}
              {/*  onChange={handleInput}*/}
              {/*/>*/}

              {data.map((obj, i) => (
                <>
                  <input
                    className="form-control adminnews-form"
                    type="text"
                    placeholder="Card Templates"
                    name="CardTemplates"
                    value={obj.CardTemplates}
                    onChange={handleInputs1(i)}
                  />

                  <input
                    className="form-control adminnews-form"
                    type="text"
                    placeholder="Card Details"
                    name="CardDetails"
                    value={card.CardDetails}
                    onChange={handleInputs1(i)}
                  />

                  <button
                    type="button"
                    className="btn"
                    style={{ margin: '10px', width: 'max-content', background: '#FF3767', color: '#fff' }}
                    onClick={() => deleteRow(i)}
                  >
                    Remove Row
                  </button>
                </>
              ))}

              <button
                onClick={addRow}
                type="button"
                className="btn"
                style={{ margin: '10px', width: 'max-content', background: '#FF3767', color: '#fff' }}
              >
                Add Row
              </button>
              {/*<input*/}
              {/*  className="form-control adminnews-form"*/}
              {/*  type="text"*/}
              {/*  placeholder="Card Details"*/}
              {/*  name="CardDetails"*/}
              {/*  value={card.CardDetails}*/}
              {/*  onChange={handleInput}*/}
              {/*/>*/}

              <button
                type="button"
                className="btn"
                style={{ margin: '10px', width: 'max-content', background: '#FF3767', color: '#fff' }}
                onClick={EnterDetails}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EnterCardDetails
