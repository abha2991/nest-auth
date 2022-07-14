import React, { useState } from 'react'
import Header from '../../../Header'
import birthdayCard1 from '../../../img/Birthday/Birthday_2_1.png'
import birthdayCard2 from '../../../img/Birthday/Birthday_2_2.png'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
const Card45 = () => {
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
                  padding: '200px 0 50px',
                  backgroundSize: '100% 100%'
                }}
              >
                <p
                  data-bs-toggle="modal"
                  data-bs-target="#id1"
                  style={{
                    maxWidth: '350px',
                    paddingTop: '230px',
                    textAlign: 'center',
                    margin: 'auto',
                    fontSize: '14px',
                    fontFamily: 'segoe-ui-bold',
                    color: '#e49027',
                    marginLeft: '50px'
                  }}
                >
                  {' '}
                  {firstPageData.date}
                </p>
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
                  padding: '250px 0 150px',
                  backgroundSize: '100% 100%'
                }}
              >
                <h4
                  data-bs-toggle="modal"
                  data-bs-target="#id2"
                  style={{
                    color: '#cd1515',
                    maxWidth: '350px',
                    margin: 'auto',
                    paddingTop: '50px',
                    fontFamily: 'myriad-pro-bold'
                  }}
                >
                  {' '}
                  {secondPageData.name}
                </h4>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id1"
                  style={{
                    color: '#eca531',
                    maxWidth: '350px',
                    margin: 'auto',

                    fontFamily: 'nuevastd-bold'
                  }}
                >
                  {' '}
                  {firstPageData.date}
                </h6>

                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id3"
                  style={{
                    color: '#eca531',
                    maxWidth: '350px',
                    margin: 'auto',
                    fontFamily: 'nuevastd-bold'
                  }}
                >
                  {' '}
                  {secondPageData.time}
                </h6>

                <h7
                  data-bs-toggle="modal"
                  data-bs-target="#id4"
                  style={{
                    paddingTop: '20px',
                    fontSize: '14px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#e79624',
                    fontFamily: 'nuevastd-bold'
                  }}
                >
                  {secondPageData.venue}
                </h7>

                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id5"
                  style={{
                    paddingTop: '15px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#d11919',
                    fontFamily: 'nuevastd-bold'
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
                    color: '#e79624',
                    fontFamily: 'nuevastd-bold'
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
                    color: '#e79624',
                    fontFamily: 'nuevastd-bold'
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

export default Card45
