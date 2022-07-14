import React, { useState } from 'react'
import Header from '../Header'
import card1 from '../img/Wedding/card1.png'
import card2 from '../img/Wedding/card2.png'
import card3 from '../img/Wedding/card3.png'
import { useNavigate, useParams } from 'react-router'
import useQueryParams from '../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../api/useProfileApi'

const TryCard = () => {
  const navigate = useNavigate()
  const id = useQueryParams()
  const { id: id2 } = id
  console.log(id2)
  const { data: profile, status } = useProfileApi()
  console.log({ profile })
  //console.log(`Profile id is ${profile.id}`)
  console.log({ status })

  const [brideData, setBrideData] = useState({
    BrideName: 'Anamika',
    BrideFatherName: 'Sandeep',
    BrideMotherName: '17TH July 2022'
  })
  const [groomData, setGroomData] = useState({
    GroomName: 'Anamika Agrawal',
    GroomFatherName: 'Mr. Shubham agrawal',
    GroomMotherName: 'Mrs. Monika Agrawal',
    GroomGrandFatherName: 'Sandeep Rawat',

    GroomGrandMotherName: 'Mr. Shubham agrawal',
    Grrom: 'Mrs. Monika Agrawal'
  })

  const [rsvpData, setRsvpData] = useState({
    ProgramName: 'Waiting to meet you all in the wedding',
    _Date: 'Sunday, 17th July 2022',

    Venue: 'Hotel Brooklyn, Rajpur Road, Delhi'
  })

  const reset = () => {
    setRsvpData({
      ...rsvpData,
      _Date: 'Sunday, 17th July 2022',
      Venue: 'Hotel Brooklyn, Rajpur Road, Delhi',
      ProgramName: 'Waiting to meet you all in the wedding'
    })
  }

  const reset1 = () => {
    setBrideData({ ...brideData, BrideName: 'Anamika', BrideFatherName: 'Sandeep', BrideMotherName: '17TH July 2022' })
  }

  const reset2 = () => {
    setGroomData({
      ...groomData,
      GroomName: 'Anamika Agrawal',
      GroomFatherName: 'Mr. Shubham agrawal',
      GroomMotherName: 'Mrs. Monika Agrawal',
      GroomGrandFatherName: 'Sandeep Rawat',

      GroomGrandMotherName: 'Mr. Shubham agrawal',
      Grrom: 'Mrs. Monika Agrawal'
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
    let Details

    Details = [
      { bridename, groomName, date },
      { groomname, groomfather, groommother, brideName, brideFathername, grrom },
      { text, venue, _date }
    ]

    console.log({ Details })

    const res = await fetch(`http://localhost:3001/api/card1/create`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id2,
        Details,
        UserId: profile.id
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
      <div className="container" style={{ position: 'relative' }}>
        <div className="row">
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
                <p style={{ color: '#CC8935' }}>Weds</p>
                <h2 data-bs-toggle="modal" data-bs-target="#id2">
                  {brideData.BrideFatherName}
                </h2>
                <p className="mb-0 mt-3" style={{ fontSize: 'small' }}>
                  <strong>WEDDING INVITAION</strong>
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
                  Daughter of <br />
                  <span data-bs-toggle="modal" data-bs-target="#id5">
                    {groomData.GroomFatherName}
                  </span>{' '}
                  &{' '}
                  <span data-bs-toggle="modal" data-bs-target="#id6">
                    {groomData.GroomMotherName}
                  </span>
                </p>
                <p style={{ color: '#CC8935', marginTop: '10px', marginBottom: '5px' }}>With</p>
                <h4 data-bs-toggle="modal" data-bs-target="#id7" className="mb-0">
                  {groomData.GroomGrandFatherName}
                </h4>
                <p style={{ color: '#CC8935', fontSize: '10px', marginBottom: '0' }}>
                  Daughter of <br />
                  <span data-bs-toggle="modal" data-bs-target="#id8">
                    {groomData.GroomGrandMotherName}
                  </span>{' '}
                  &{' '}
                  <span data-bs-toggle="modal" data-bs-target="#id9">
                    {groomData.Grrom}
                  </span>
                </p>
                <p className="mb-0 mt-3" style={{ color: '#CC8935', fontSize: 'small' }}>
                  TOGETHER WITH THEIR
                </p>
                <p style={{ color: '#CC8935', fontSize: 'small' }}>FAMILY AND FRIENDS</p>
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
                <h4 style={{ paddingTop: '75px' }}>RSVP</h4>
                <p data-bs-toggle="modal" data-bs-target="#id10" style={{ color: '#CC8935', fontSize: '12px' }}>
                  {rsvpData.ProgramName}
                </p>
                <h4>Venue</h4>
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

      <div className="col-md-12 text-center mt-4">
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
    </>
  )
}

export default TryCard
