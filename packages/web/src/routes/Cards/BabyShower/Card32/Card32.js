import React, { useState } from 'react'
import Header from '../../../Header'
import babyShowerCard from '../../../img/BabyShower/BabyShower_1_1.png'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const Card32 = () => {
  const navigate = useNavigate()
  const id = useQueryParams()
  const [loading, setLoading] = useState(false)
  const { id: id2 } = id

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
    babyName: 'Rebeca William',
    date: '25 June 2022',
    time: '7PM Onwards',
    venue: '7 Circle Street, Milton Delhi'
  })

  const messageData = [
    'babyName',
    'date',
    'time',
    'venue',

    'Rebeca William',
    '25 June 2022',
    '7PM Onwards',
    '7 Circle Street, Milton Delhi'
  ]

  let babyShowerCardData = []
  babyShowerCardData = Object.entries(cardData)

  const PostData = async (e) => {
    e.preventDefault()
    let babyName = cardData.babyName?.toString() ?? ''
    let date = cardData.date?.toString() ?? ''
    let time = cardData.time?.toString() ?? ''
    let venue = cardData.venue?.toString() ?? ''
    let _venue = 'VENUE'
    let details

    details = [{ babyName, date, time, _venue, venue }]
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/babyshower1`, {
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
        maxCharsPerLine: 30
      })
    })

    const card_data = await res.json()

    //setCardData(card_data.id)

    if ((card_data.status = 'Success')) {
      setLoading(false)
      navigate(`/preview?id=${card_data.createdCardId}`)
    }
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
                  background: `url(${babyShowerCard}) no-repeat center/contain`,
                  textAlign: 'center',
                  width: '100%',
                  fontFamily: 'nirmala-ui',
                  color: '#fff',
                  height: '100%',
                  padding: '100px 0 120px',
                  backgroundSize: '100% 100%'
                }}
              >
                <div className="editable" {...hover1}>
                  <h4
                    data-bs-toggle="modal"
                    data-bs-target="#id1"
                    style={{
                      paddingTop: '100px',
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'pristina-regular'
                    }}
                  >
                    {' '}
                    {cardData.babyName}
                  </h4>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover2}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id2"
                    style={{
                      paddingTop: '120px',
                      fontFamily: 'myriad-pro-regular',
                      maxWidth: '300px',
                      margin: 'auto'
                    }}
                  >
                    {cardData.date}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover3}>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id3"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',

                      fontFamily: 'myriad-pro-regular'
                    }}
                  >
                    {' '}
                    {cardData.time}
                  </h6>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <h5
                  data-bs-toggle="modal"
                  style={{
                    paddingTop: '40px',
                    maxWidth: '350px',
                    margin: 'auto',
                    fontFamily: 'myriad-pro-bold'
                  }}
                >
                  VENUE
                </h5>
                <div className="editable" {...hover4}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id4"
                    style={{
                      paddingTop: '40px',
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'myriad-pro-bold'
                    }}
                  >
                    {' '}
                    {cardData.venue}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {babyShowerCardData?.map((val, index) => {
        return (
          <Modal
            key={index + 1}
            id={`id${index + 1}`}
            onClick={() => {
              let name = messageData[index]
              let value = messageData[index + 4]

              setCardData({ ...cardData, [name]: [value] })
            }}
            onChange={(e) => {
              const name = e.target.name
              const value = e.target.value
              setCardData({ ...cardData, [name]: value })
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
          disabled={loading}
          style={{
            borderRadius: '50px',
            background: '#FF3767',
            color: '#fff',
            padding: '10px 20px'
          }}
        >
          {loading && <i className="fa fa-refresh fa-spin" style={{ marginRight: '5px' }} />}
          {loading && <span>Loading...</span>}
          {!loading && <span>Preview</span>}
        </button>
      </div>

      <Footer />
    </>
  )
}

export default Card32
