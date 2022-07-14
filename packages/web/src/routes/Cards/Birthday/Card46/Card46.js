import React, { useState } from 'react'
import Header from '../../../Header'
import birthdayCard1 from '../../../img/Birthday/Birthday_3_1.png'
import birthdayCard2 from '../../../img/Birthday/Birthday_3_2.png'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
const Card46 = () => {
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

  const [firstPageData, setFirstPageData] = useState({
    date: '25 JUNE 2022'
  })

  const [secondPageData, setSecondPageData] = useState({
    name: 'JOHN IS TURNING 15',
    time: 'At 8:00 PM',
    venue: 'Number Night Club 300 Westheimer RDHouston TX',
    _rsvp: 'RSVP',

    rsvp: 'TO TAMMYAT',
    rsvpNumber: '9959984585'
  })

  const FirstPageData = ['date', '25 JUNE 2022']

  const SecondPageData = [
    'name',
    'time',
    'venue',
    '_rsvp',
    'rsvp',
    'rsvpNumber',
    'JOHN IS TURNING 15',
    'At 8:00 PM',
    'Number Night Club 300 Westheimer RDHouston TX',
    'RSVP',
    'TO TAMMYAT',
    '9959984585'
  ]

  let birthdayFirstPageCardData = []
  birthdayFirstPageCardData = Object.entries(firstPageData)
  let birthdaySecondPageCardData = []
  birthdaySecondPageCardData = Object.entries(secondPageData)

  const PostData = async (e) => {
    e.preventDefault()
    let date = firstPageData.date?.toString() ?? ''
    let name = secondPageData.name?.toString() ?? ''
    let time = secondPageData.time?.toString() ?? ''
    let venue = secondPageData.venue?.toString() ?? ''
    let rsvp = secondPageData.rsvp?.toString() ?? ''
    let _rsvp = secondPageData._rsvp?.toString() ?? ''
    let rsvpNumber = secondPageData.rsvpNumber?.toString() ?? ''

    let details

    details = [{ date }, { name, date, time, venue, _rsvp, rsvp, rsvpNumber }]

    const res = await fetch(`http://localhost:3001/api/card1/birthdaycard`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id2,
        details,
        userId: profile.id,
        email: profile.email,
        maxCharsPerLine: Number(40)
      })
    })

    const card_data = await res.json()

    navigate(`/preview?id=${card_data.id}`)
  }

  return (
    <>
      <Header />
      <div className="my-5"></div>
      <div className="container" style={{ position: 'relative' }}>
        <div className="row">
          <div className="col-md-4">
            <div className="card-box">
              <div
                style={{
                  background: `url(${birthdayCard1}) no-repeat center/contain`,
                  textAlign: 'center',
                  width: '100%',

                  height: '100%',
                  padding: '100px 0 150px',
                  backgroundSize: '100% 100%'
                }}
              >
                <h7
                  data-bs-toggle="modal"
                  data-bs-target="#id1"
                  style={{
                    paddingTop: '300px',
                    maxWidth: '350px',

                    margin: 'auto',
                    fontFamily: 'segoe-ui-bold',
                    color: '#e2ba8f',
                    marginLeft: '50px'
                  }}
                >
                  {' '}
                  {firstPageData.date}
                </h7>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-box">
              <div
                style={{
                  background: `url(${birthdayCard2}) no-repeat center/contain`,
                  textAlign: 'center',
                  width: '100%',

                  height: '100%',
                  padding: '20px 0 50px',
                  backgroundSize: '100% 100%'
                }}
              >
                <h4
                  data-bs-toggle="modal"
                  data-bs-target="#id2"
                  style={{
                    maxWidth: '350px',
                    margin: 'auto',
                    color: '#813d14',
                    fontFamily: 'myriad-pro-bold-italic',
                    paddingTop: '400px'
                  }}
                >
                  {' '}
                  {secondPageData.name}
                </h4>
                <h5
                  data-bs-toggle="modal"
                  data-bs-target="#id1"
                  style={{
                    maxWidth: '350px',
                    margin: 'auto',

                    color: '#451f00',
                    fontFamily: 'nirmala-bold'
                  }}
                >
                  {' '}
                  {firstPageData.date}
                </h5>

                <h5
                  data-bs-toggle="modal"
                  data-bs-target="#id3"
                  style={{
                    maxWidth: '350px',
                    margin: 'auto',
                    fontWeight: 'bold',
                    color: '#451f00',
                    fontFamily: 'nirmala-bold'
                  }}
                >
                  {' '}
                  {secondPageData.time}
                </h5>

                <h7
                  data-bs-toggle="modal"
                  data-bs-target="#id4"
                  style={{
                    paddingTop: '20px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#522f11',
                    fontFamily: 'myriad-pro-bold'
                  }}
                >
                  {secondPageData.venue}
                </h7>

                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id5"
                  style={{
                    paddingTop: '10px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#7e411b',
                    fontFamily: 'myriad-pro-bold'
                  }}
                >
                  {secondPageData._rsvp}
                </h6>

                <h5
                  data-bs-toggle="modal"
                  data-bs-target="#id6"
                  style={{
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#451b00',
                    fontFamily: 'mongolian-baiti-regular'
                  }}
                >
                  {secondPageData.rsvp}
                </h5>

                <h5
                  data-bs-toggle="modal"
                  data-bs-target="#id7"
                  style={{
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#451b00',
                    fontFamily: 'mongolian-baiti-regular'
                  }}
                >
                  {secondPageData.rsvpNumber}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {birthdayFirstPageCardData?.map((val, index) => {
        return (
          <Modal
            key={index + 1}
            id={`id${index + 1}`}
            onClick={() => {
              let name = FirstPageData[index]
              let value = FirstPageData[index + 1]

              console.log({ name, value })

              setFirstPageData({ ...firstPageData, [name]: [value] })
            }}
            onChange={(e) => {
              const name = e.target.name
              const value = e.target.value
              setFirstPageData({ ...firstPageData, [name]: value })
            }}
            name={val[0]}
            data={val[1]}
          />
        )
      })}

      {birthdaySecondPageCardData?.map((val, index) => {
        return (
          <Modal
            key={index + 2}
            id={`id${index + 2}`}
            onClick={() => {
              let name = SecondPageData[index]
              let value = SecondPageData[index + 6]

              console.log({ name, value })

              setSecondPageData({ ...secondPageData, [name]: [value] })
            }}
            onChange={(e) => {
              const name = e.target.name
              const value = e.target.value
              setSecondPageData({ ...secondPageData, [name]: value })
            }}
            name={val[0]}
            data={val[1]}
          />
        )
      })}

      <div className="col-md-12 text-center mt-4">
        <button
          onClick={PostData}
          className="btn"
          style={{
            borderRadius: '50px',
            background: '#FF3767',
            color: '#fff',
            padding: '10px 20px',
            margin: '20px'
          }}
        >
          Preview
        </button>
      </div>

      <Footer />
    </>
  )
}

export default Card46
