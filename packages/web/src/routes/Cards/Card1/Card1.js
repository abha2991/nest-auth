import React, { useState } from 'react'
import Header from '../../Header'
import card1 from '../../img/card1.png'
import card2 from '../../img/card2.png'
import card3 from '../../img/card3.png'
import Footer from '../../Footer'
import useQueryParams from '../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../api/useProfileApi'

const Card1 = () => {
  const navigate = useNavigate()
  const id = useQueryParams()
  const { id: id2 } = id
  //console.log(id2)
  const { data: profile, status } = useProfileApi()
  //console.log({profile})
  //console.log(`Profile id is ${profile.id}`)
  // console.log({status})

  const [brideData, setBrideData] = useState({
    BrideName: 'Anamika',
    StaticData1: 'Weds',
    BrideFatherName: 'Sandeep',
    StaticData2: 'WEDDING INVITAION',
    BrideMotherName: '17TH July 2022'
  })
  const [groomData, setGroomData] = useState({
    GroomName: 'Anamika Agrawal',
    StaticData3: 'Daughter of',
    GroomFatherName: 'Mr. Shubham agrawal',
    GroomMotherName: 'Mrs. Monika Agrawal',
    StaticData4: 'With',
    GroomGrandFatherName: 'Sandeep Rawat',
    StaticData5: 'Son of',
    GroomGrandMotherName: 'Mr. Shubham agrawal',
    Grrom: 'Mrs. Monika Agrawal',
    StaticData6: 'TOGETHER WITH THEIR',
    StaticData7: 'FAMILY AND FRIENDS'
  })

  const [rsvpData, setRsvpData] = useState({
    StaticData8: 'RSVP',
    ProgramName: 'Waiting to meet you all in the wedding',
    StaticData9: 'Venue',
    _Date: 'Sunday, 17th July 2022',

    Venue: 'Hotel Brooklyn, Rajpur Road, Delhi'
  })

  let dummydata = []
  const reset = () => {
    setRsvpData({
      ...rsvpData,
      StaticData8: 'RSVP',
      _Date: 'Sunday, 17th July 2022',
      StaticData9: 'Venue',
      Venue: 'Hotel Brooklyn, Rajpur Road, Delhi',
      ProgramName: 'Waiting to meet you all in the wedding'
    })
  }

  const reset1 = () => {
    setBrideData({
      ...brideData,
      BrideName: 'Anamika',
      StaticData1: 'Weds',
      BrideFatherName: 'Sandeep',
      StaticData2: 'WEDDING INVITAION',
      BrideMotherName: '17TH July 2022'
    })
  }

  const reset2 = () => {
    setGroomData({
      ...groomData,
      GroomName: 'Anamika Agrawal',
      StaticData3: 'Daughter of',
      GroomFatherName: 'Mr. Shubham agrawal',
      GroomMotherName: 'Mrs. Monika Agrawal',
      StaticData4: 'With',
      GroomGrandFatherName: 'Sandeep Rawat',
      StaticData5: 'Son of',
      GroomGrandMotherName: 'Mr. Shubham agrawal',
      Grrom: 'Mrs. Monika Agrawal',
      StaticData6: 'TOGETHER WITH THEIR',
      StaticData7: 'FAMILY AND FRIENDS'
    })
  }
  const handleInputs = (e) => {
    const name = e.target.name
    const value = e.target.value
    setBrideData({ ...brideData, [name]: value })
  }

  const handleInputs1 = (e) => {
    const name = e.target.name
    const value = e.target.value
    setGroomData({ ...groomData, [name]: value })
  }
  const handleInputs2 = (e) => {
    const name = e.target.name
    const value = e.target.value
    setRsvpData({ ...rsvpData, [name]: value })
  }

  const [cardData, setCardData] = useState()
  function useHover(styleOnHover, styleOnNotHover = {}) {
    const [style, setStyle] = React.useState(styleOnNotHover)

    const onMouseEnter = () => setStyle(styleOnHover)
    const onMouseLeave = () => setStyle(styleOnNotHover)

    return { style, onMouseEnter, onMouseLeave }
  }
  const hover = useHover({ color: 'orange' })
  const PostData = async (e) => {
    e.preventDefault()
    let bridename = brideData.BrideName
    let groomName = brideData.BrideFatherName
    let date = brideData.BrideMotherName
    let staticdata1 = brideData.StaticData1
    let staticdata2 = brideData.StaticData2
    let staticdata3 = groomData.StaticData3
    let staticdata4 = groomData.StaticData4
    let staticdata5 = groomData.StaticData5
    let staticdata6 = groomData.StaticData6
    let staticdata7 = groomData.StaticData7
    let staticdata8 = rsvpData.StaticData8
    let staticdata9 = rsvpData.StaticData9
    let groomname = groomData.GroomName
    let groomfather = groomData.GroomFatherName
    let groommother = groomData.GroomMotherName
    let brideName = groomData.GroomGrandFatherName
    let brideFathername = groomData.GroomGrandMotherName
    let grrom = groomData.Grrom

    let text = rsvpData.ProgramName
    let venue = rsvpData.Venue
    let _date = rsvpData._Date

    // let Data = data;
    //
    // let len = Data.length;

    let email = profile.email
    console.log({ email })

    // const obj = Object.assign({}, Data);
    // console.log({id})
    //
    let details

    details = [
      { bridename, staticdata1, groomName, staticdata2, date },
      {
        groomname,
        staticdata3,
        groomfather,
        groommother,
        staticdata4,
        brideName,
        staticdata5,
        brideFathername,
        grrom,
        staticdata6,
        staticdata7
      },
      { staticdata8, text, staticdata9, venue, _date }
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
          <div className="col-md-4">
            <div className="card-box">
              <div
                style={{
                  background: `url(${card1}) no-repeat center/cover`,
                  textAlign: 'center',
                  width: '100%',
                  fontFamily: 'Lora',
                  color: '#7132A1',
                  height: '100%',
                  padding: '100px 0'
                }}
              >
                <h2 data-bs-toggle="modal" data-bs-target="#id1" style={{ paddingTop: '105px' }}>
                  {' '}
                  {brideData.BrideName}
                </h2>
                <p style={{ color: '#CC8935' }}>{brideData.StaticData1}</p>
                <h2 data-bs-toggle="modal" data-bs-target="#id2">
                  {brideData.BrideFatherName}
                </h2>
                <p className="mb-0 mt-3" style={{ fontSize: 'small' }}>
                  <strong>{brideData.StaticData2}</strong>
                </p>
                <p data-bs-toggle="modal" data-bs-target="#id3" style={{ fontSize: 'small' }}>
                  {brideData.BrideMotherName}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box">
              <div
                style={{
                  background: `url(${card2}) no-repeat center/cover`,
                  textAlign: 'center',
                  width: '100%',
                  fontFamily: 'Lora',
                  color: '#7132A1',
                  height: '100%',
                  padding: '100px 0'
                }}
              >
                <h4 data-bs-toggle="modal" data-bs-target="#id4" style={{ paddingTop: '75px' }}>
                  {groomData.GroomName}
                </h4>
                <p style={{ color: '#CC8935', fontSize: '10px', marginBottom: '0' }}>
                  {groomData.StaticData3} <br />
                  <span data-bs-toggle="modal" data-bs-target="#id5">
                    {groomData.GroomFatherName}
                  </span>{' '}
                  &{' '}
                  <span data-bs-toggle="modal" data-bs-target="#id6">
                    {groomData.GroomMotherName}
                  </span>
                </p>
                <p style={{ color: '#CC8935', marginTop: '10px', marginBottom: '5px' }}>{groomData.StaticData4}</p>
                <h4 data-bs-toggle="modal" data-bs-target="#id7" className="mb-0">
                  {groomData.GroomGrandFatherName}
                </h4>
                <p style={{ color: '#CC8935', fontSize: '10px', marginBottom: '0' }}>
                  {groomData.StaticData5}
                  <br />
                  <span data-bs-toggle="modal" data-bs-target="#id8">
                    {groomData.GroomGrandMotherName}
                  </span>{' '}
                  &{' '}
                  <span data-bs-toggle="modal" data-bs-target="#id9">
                    {groomData.Grrom}
                  </span>
                </p>
                <p className="mb-0 mt-3" style={{ color: '#CC8935', fontSize: 'small' }}>
                  {groomData.StaticData6}
                </p>
                <p style={{ color: '#CC8935', fontSize: 'small' }}>{groomData.StaticData7}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box">
              <div
                style={{
                  background: `url(${card3}) no-repeat center/cover`,
                  textAlign: 'center',
                  width: '100%',
                  fontFamily: 'Lora',
                  color: '#7132A1',
                  height: '100%',
                  padding: '100px 0'
                }}
              >
                <h4 style={{ paddingTop: '75px' }}>{rsvpData.StaticData8}</h4>
                <p data-bs-toggle="modal" data-bs-target="#id10" style={{ color: '#CC8935', fontSize: '12px' }}>
                  {rsvpData.ProgramName}
                </p>
                <h4>{rsvpData.StaticData9}</h4>
                <p data-bs-toggle="modal" data-bs-target="#id11" style={{ color: '#CC8935', fontSize: '12px' }}>
                  {rsvpData.Venue}
                </p>
                <p
                  data-bs-toggle="modal"
                  data-bs-target="#id12"
                  className="mb-0 mt-3"
                  style={{ color: '#CC8935', fontSize: 'small' }}
                >
                  {rsvpData._Date}
                </p>
              </div>
            </div>
          </div>
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
                  placeholder="Bride Name"
                  value={brideData.BrideName}
                  onChange={handleInputs}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset1()}>
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
        aria-labelledby="id2"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="BrideFatherName"
                  placeholder="Groom Name"
                  value={brideData.BrideFatherName}
                  onChange={handleInputs}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset1()}>
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
        aria-labelledby="id3"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="BrideMotherName"
                  placeholder="Wedding Date"
                  value={brideData.BrideMotherName}
                  onChange={handleInputs}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset1()}>
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
        aria-labelledby="id4"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="GroomName"
                  placeholder="Bride Name"
                  value={groomData.GroomName}
                  onChange={handleInputs1}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset2()}>
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
        aria-labelledby="id5"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="GroomFatherName"
                  placeholder="Bride Father Name"
                  value={groomData.GroomFatherName}
                  onChange={handleInputs1}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset2()}>
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
        id="id6"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id5"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="GroomMotherName"
                  placeholder="Bride's Mother Name"
                  value={groomData.GroomMotherName}
                  onChange={handleInputs1}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset2()}>
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
        id="id7"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id7"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="GroomGrandFatherName"
                  placeholder="Groom Name"
                  value={groomData.GroomGrandFatherName}
                  onChange={handleInputs1}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset2()}>
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
        id="id8"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id8"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="GroomGrandMotherName"
                  placeholder="Groom's Father Name"
                  value={groomData.GroomGrandMotherName}
                  onChange={handleInputs1}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset2()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="id9"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id8"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Grrom"
                  placeholder="Groom's Father Name"
                  value={groomData.Grrom}
                  onChange={handleInputs1}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset2()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="id10"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id10"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="ProgramName"
                  placeholder="Message"
                  value={rsvpData.ProgramName}
                  onChange={handleInputs2}
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
        id="id11"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id11"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Venue"
                  placeholder="Venue"
                  value={rsvpData.Venue}
                  onChange={handleInputs2}
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
        id="id12"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id12"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="_Date"
                  placeholder="Wedding Date"
                  value={rsvpData._Date}
                  onChange={handleInputs2}
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

export default Card1
