import React, { useState } from 'react'
import Header from '../../Header'
import card1 from '../../img/42241481.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import useProfileApi from '../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../hooks/useQueryParams'
import card from '../../Card'
import Footer from '../../Footer'
const Card2 = () => {
  const navigate = useNavigate()
  const id = useQueryParams()
  const { id: id2 } = id
  console.log(id2)
  const { data: profile, status } = useProfileApi()

  function useHover(styleOnHover, styleOnNotHover = {}) {
    const [style, setStyle] = React.useState(styleOnNotHover)

    const onMouseEnter = () => setStyle(styleOnHover)
    const onMouseLeave = () => setStyle(styleOnNotHover)

    return { style, onMouseEnter, onMouseLeave }
  }
  const hover1 = useHover({ border: '2px solid #ffd167' })
  const hover2 = useHover({ border: '2px solid #ffd167' })
  const hover3 = useHover({ border: '2px solid #ffd167' })
  const hover4 = useHover({ border: '2px solid #ffd167' })
  const hover5 = useHover({ border: '2px solid #ffd167' })

  const [cardData, setCardData] = useState({
    StaticData1: 'TOGETHER',
    StaticData2: 'WITH THEIR FAMILIES',
    BrideName: 'Larisa',
    StaticData3: 'AND',
    GroomName: 'Reyansh',
    StaticData4: 'INVITE YOU TO CELEBRATE',
    StaticData5: 'THEIR MARRIAGE',
    Date: '10.10.2020',
    Time: '10 AM IN THE MORNING',
    Address: 'BLOSSOM GARDEN WEST COAST'
  })

  const reset = () => {
    setCardData({
      ...cardData,
      StaticData1: 'TOGETHER',
      StaticData2: 'WITH THEIR FAMILIES',
      BrideName: 'Larisa',
      StaticData3: 'AND',
      GroomName: 'Reyansh',
      StaticData4: 'INVITE YOU TO CELEBRATE',
      StaticData5: 'THEIR MARRIAGE',
      Date: '10.10.2020',
      Time: '10 AM IN THE MORNING',
      Address: 'BLOSSOM GARDEN WEST COAST'
    })
  }

  const handleInputs = (e) => {
    const name = e.target.name
    const value = e.target.value
    setCardData({ ...cardData, [name]: value })
  }

  const PostData = async (e) => {
    e.preventDefault()
    let staticdata1 = cardData.StaticData1
    let staticdata2 = cardData.StaticData2
    let staticdata3 = cardData.StaticData3
    let staticdata4 = cardData.StaticData4
    let staticdata5 = cardData.StaticData5
    let bridename = cardData.BrideName
    let groomName = cardData.GroomName
    let date = cardData.Date

    let time = cardData.Time
    let venue = cardData.Address

    //
    let details

    details = [
      { staticdata1, staticdata2, bridename, staticdata3, groomName, staticdata4, staticdata5, date, time, venue }
    ]

    const res = await fetch(`http://localhost:3001/api/card1/preview`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id2,
        details,
        userId: profile.id,
        email: email
      })
    })

    const card_data = await res.json()
    console.log(card_data.id)
    setCardData(card_data.id)

    navigate(`/preview?id=${card_data.id}`)
  }

  return (
    <>
      <Header />
      <div className="pt-5">
        <h3 className="text-center">Try Card</h3>
      </div>
      <hr />
      <div className="container" style={{ position: 'relative' }}>
        <div className="row my-5">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card-box">
              <div
                style={{
                  background: `url(${card1}) no-repeat center/cover`,
                  textAlign: 'center',
                  width: '100%',
                  fontFamily: 'JosefinSans',
                  color: '#ffd167',
                  height: '100%',
                  padding: '100px 0px 100px'
                }}
              >
                <p style={{ marginBottom: '0', fontSize: '10px' }}>{cardData.StaticData1}</p>
                <p style={{ marginBottom: '0', fontSize: '10px' }}>{cardData.StaticData2}</p>
                <div className="editable" {...hover1}>
                  <h2
                    data-bs-toggle="modal"
                    data-bs-target="#id1"
                    style={{ fontFamily: 'cac-champagne', fontSize: '50px', marginBottom: '0', lineHeight: 'normal' }}
                  >
                    {cardData.BrideName}
                  </h2>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <h6 style={{ marginTop: '0px', marginBottom: '0', lineHeight: 'normal' }}>{cardData.StaticData3}</h6>
                <div className="editable" {...hover2}>
                  <h2
                    data-bs-toggle="modal"
                    data-bs-target="#id2"
                    style={{ fontFamily: 'cac-champagne', fontSize: '50px', lineHeight: 'normal' }}
                  >
                    {cardData.GroomName}
                  </h2>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <p style={{ fontSize: '10px', marginBottom: '0' }}>{cardData.StaticData4}</p>
                <p style={{ fontSize: '10px', marginBottom: '0' }}>{cardData.StaticData5}</p>
                <div style={{ maxWidth: '200px', margin: 'auto' }}>
                  <hr className="mb-0" />
                  <div className="editable" {...hover3}>
                    <h4 data-bs-toggle="modal" data-bs-target="#id3" className="mb-0 pt-2">
                      {cardData.Date}
                    </h4>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover4}>
                    <p data-bs-toggle="modal" data-bs-target="#id4" className="pb-2 mb-0" style={{ fontSize: '10px' }}>
                      {cardData.Time}
                    </p>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <hr className="mt-0" />
                </div>
                <div className="editable" {...hover5}>
                  <p data-bs-toggle="modal" data-bs-target="#id5" style={{ fontSize: '10px' }}>
                    {cardData.Address}
                  </p>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
        <div></div>
      </div>

      {/* Modal  */}
      <div
        className="modal fade"
        id="id1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="BrideName"
                  value={cardData.BrideName}
                  onChange={handleInputs}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="GroomName"
                  value={cardData.GroomName}
                  onChange={handleInputs}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id3"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Date"
                  value={cardData.Date}
                  onChange={handleInputs}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id4"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Time"
                  value={cardData.Time}
                  onChange={handleInputs}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id5"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Address"
                  value={cardData.Address}
                  onChange={handleInputs}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 text-center my-4">
        <button
          onClick={PostData}
          className="btn"
          style={{
            borderRadius: '50px',
            background: '#FF3767',
            color: '#fff',
            padding: '10px 20px'
          }}
        >
          Preview
        </button>
      </div>

      <Footer />
    </>
  )
}

export default Card2
