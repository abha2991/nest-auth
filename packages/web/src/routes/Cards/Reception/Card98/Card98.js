import React, { useState } from 'react'
import Header from '../../../Header'
import card1 from '../../../img/Reception/Reception_6_1.jpg'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const Card98 = () => {
  const navigate = useNavigate()
  const id = useQueryParams()
  const { id: id2 } = id
  const [loading, setLoading] = useState(false)
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
  const hover6 = useHover({ border: '2px solid #ffd167' })
  const [cardData, setCardData] = useState({
    brideOrGroomName: 'VALERIE ANDERSON',
    and: '&',
    groomOrBrideName: 'RICHARD TAYLOR',
    date: '27 JUNE 2022',
    time: '8:30 PM',
    venue: 'DURBAR HALL TAJ DIPLOMATIC ENCLAVE NEW DELHI'
  })

  const messageData = [
    'brideOrGroomName',
    'and',
    'groomOrBrideName',
    'date',
    'time',
    'venue',
    'VALERIE ANDERSON',
    '&',
    'RICHARD TAYLOR',
    '27 JUNE 2022',

    '8:30 PM',
    'DURBAR HALL TAJ DIPLOMATIC ENCLAVE NEW DELHI'
  ]

  let engagementCarddData = []
  engagementCarddData = Object.entries(cardData)

  const PostData = async (e) => {
    e.preventDefault()

    let brideOrGroomName = cardData.brideOrGroomName?.toString() ?? ''
    let groomOrBrideName = cardData.groomOrBrideName?.toString() ?? ''
    let date = cardData.date?.toString() ?? ''
    let time = cardData.time?.toString() ?? ''
    let venue = cardData.venue?.toString() ?? ''
    let and = cardData.and?.toString() ?? ''
    let dateAndTime = date + ' ( ' + time + ' )'
    let details

    details = [{ brideOrGroomName, and, groomOrBrideName, dateAndTime, venue }]
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/receptioncard4`, {
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
        maxCharsPerLine: Number(30)
      })
    })

    const card_data = await res.json()

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
                  background: `url(${card1}) no-repeat center/contain`,
                  textAlign: 'center',
                  width: '100%',

                  height: '100%',
                  padding: '100px 0 100px',
                  backgroundSize: '100% 100%'
                }}
              >
                <div className="editable" {...hover1}>
                  <h4
                    data-bs-toggle="modal"
                    data-bs-target="#id1"
                    style={{
                      paddingTop: '100px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#83889c',
                      fontFamily: 'nirmala-bold',
                      textAlign: 'center'
                    }}
                  >
                    {cardData.brideOrGroomName}
                  </h4>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover2}>
                  <h4
                    data-bs-toggle="modal"
                    data-bs-target="#id2"
                    style={{
                      paddingTop: '10px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#83889c',
                      textAlign: 'center',
                      fontFamily: 'nirmala-bold'
                    }}
                  >
                    &
                  </h4>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover3}>
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id3"
                    style={{
                      paddingTop: '10px',
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#83889c',
                      fontFamily: 'nirmala-bold'
                    }}
                  >
                    {' '}
                    {cardData.groomOrBrideName}
                  </h3>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover4}>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id4"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#767c91',
                      fontFamily: 'nirmala-bold'
                    }}
                  >
                    {' '}
                    {cardData.date}
                  </h6>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover5}>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id5"
                    style={{
                      paddingTop: '10px',
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#767c91',
                      fontFamily: 'nirmala-bold'
                    }}
                  >
                    {' '}
                    {cardData.time}
                  </h6>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover6}>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id6"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#5e6a9c',
                      fontFamily: 'franklin-gothic-regular'
                    }}
                  >
                    {' '}
                    {cardData.venue}
                  </h6>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {engagementCarddData?.map((val, index) => {
        return (
          <Modal
            key={index + 1}
            id={`id${index + 1}`}
            onClick={() => {
              let name = messageData[index]
              let value = messageData[index + 6]

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

export default Card98
