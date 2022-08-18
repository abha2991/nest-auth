import React, { useState } from 'react'
import Header from '../../../Header'
import Engagement from '../../../img/Engagement/Engagement_2_1.png'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const Card51 = () => {
  const navigate = useNavigate()
  const id = useQueryParams()
  const { id: id2 } = id

  const { data: profile, status } = useProfileApi()
  const [loading, setLoading] = useState(false)
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
    brideOrGroomName: 'ANDREA CAMPBELL',
    groomOrBrideName: 'JACOB HENDERSON',
    date: 'June 29 2022',
    time: '7:00 PM EVENING',
    venue: 'AJESTIC BALL ROOM 1152-DARK STAR LANE'
  })

  const messageData = [
    'brideOrGroomName',
    'groomOrBrideName',
    'date',
    'time',
    'venue',
    'ANDREA CAMPBELL',
    'JACOB HENDERSON',
    'June 29 2022',

    '7:00 PM EVENING',
    'AJESTIC BALL ROOM 1152-DARK STAR LANE'
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
    let and = 'AND'
    let details

    details = [{ brideOrGroomName, and, groomOrBrideName, date, time, venue }]
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/engagementcard`, {
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
        maxCharsPerLine: Number(33)
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
                  background: `url(${Engagement}) no-repeat center/contain`,
                  textAlign: 'center',
                  width: '100%',

                  color: '#fff',
                  height: '100%',
                  padding: '60px 0 30px',
                  backgroundSize: '100% 100%'
                }}
              >
                <div className="editable" {...hover1}>
                  <h4
                    data-bs-toggle="modal"
                    data-bs-target="#id1"
                    style={{
                      paddingTop: '330px',
                      maxWidth: '300px',
                      margin: 'auto',
                      fontFamily: 'bell-mt-bold',
                      fontSize: '20px',

                      textAlign: 'center'
                    }}
                  >
                    {cardData.brideOrGroomName}
                  </h4>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <h4
                  data-bs-toggle="modal"
                  style={{
                    paddingTop: '10px',
                    maxWidth: '300px',
                    margin: 'auto',
                    fontFamily: 'bell-mt-bold',
                    fontSize: '20px',

                    textAlign: 'center'
                  }}
                >
                  AND
                </h4>
                <div className="editable" {...hover2}>
                  <h4
                    data-bs-toggle="modal"
                    data-bs-target="#id2"
                    style={{
                      paddingTop: '10px',
                      maxWidth: '350px',
                      margin: 'auto',

                      fontSize: '20px',
                      fontFamily: 'bell-mt-bold'
                    }}
                  >
                    {' '}
                    {cardData.groomOrBrideName}
                  </h4>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover3}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id3"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '350px',
                      margin: 'auto',

                      fontSize: '15px',
                      fontFamily: 'copper-plate-gothic-light'
                    }}
                  >
                    {' '}
                    {cardData.date}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover4}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id4"
                    style={{
                      paddingTop: '10px',
                      maxWidth: '350px',
                      margin: 'auto',

                      fontSize: '15px',
                      fontFamily: 'copper-plate-gothic-light'
                    }}
                  >
                    {' '}
                    {cardData.time}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover5}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id5"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '350px',
                      margin: 'auto',

                      fontSize: '12px',

                      fontFamily: 'copper-plate-gothic-light'
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
      {engagementCarddData?.map((val, index) => {
        return (
          <Modal
            key={index + 1}
            id={`id${index + 1}`}
            onClick={() => {
              let name = messageData[index]
              let value = messageData[index + 5]

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

export default Card51
