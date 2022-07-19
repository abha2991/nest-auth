import React, { useState } from 'react'
import Header from '../../../Header'
import missYouCard from '../../../img/MissYou/MissYou_4_1.png'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
const Card26 = () => {
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

  const [cardData, setCardData] = useState({
    receiverName: 'Dear Jeane,',
    message_1: 'I MISS YOU A LITTLE TOO MUCH A LITTLE TOO AFTER AND A LITTLE MORE EVERYDAY',
    senderName: 'Love Mike'
  })

  const messageData = [
    'receiverName',
    'message_1',
    'senderName',
    'Dear Jeane,',
    'I MISS YOU A LITTLE TOO MUCH A LITTLE TOO AFTER AND A LITTLE MORE EVERYDAY',
    'Love Mike'
  ]

  let missYouCardData = []
  missYouCardData = Object.entries(cardData)

  const PostData = async (e) => {
    e.preventDefault()
    let receiverName = cardData.receiverName?.toString() ?? ''
    let message_1 = cardData.message_1?.toString() ?? ''
    let senderName = cardData.senderName?.toString() ?? ''

    let details

    details = [{ receiverName, message_1, senderName }]
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/missyoucard2`, {
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
        maxCharsPerLine: Number(20)
      })
    })

    const card_data = await res.json()

    if ((card_data.status = 'Success')) {
      setLoading(false)
      navigate(`/preview?id=${card_data.data.id}`)
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
                  background: `url(${missYouCard}) no-repeat center/contain`,
                  textAlign: 'center',
                  width: '100%',
                  fontFamily: 'nirmala-bold',
                  color: '#2e5b67',
                  height: '100%',
                  padding: '100px 0 50px',
                  backgroundSize: '100% 100%'
                }}
              >
                <h5
                  data-bs-toggle="modal"
                  data-bs-target="#id1"
                  style={{
                    paddingTop: '300px',
                    maxWidth: '300px',
                    margin: 'auto'
                  }}
                >
                  {' '}
                  {cardData.receiverName}
                </h5>

                <h5
                  data-bs-toggle="modal"
                  data-bs-target="#id2"
                  style={{
                    paddingTop: '6px',
                    maxWidth: '300px',
                    margin: 'auto',

                    textAlign: 'center'
                  }}
                >
                  {cardData.message_1}
                </h5>

                <h5
                  data-bs-toggle="modal"
                  data-bs-target="#id3"
                  style={{
                    paddingTop: '6px',
                    maxWidth: '350px',
                    margin: 'auto'
                  }}
                >
                  {' '}
                  {cardData.senderName}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {missYouCardData?.map((val, index) => {
        return (
          <Modal
            key={index + 1}
            id={`id${index + 1}`}
            onClick={() => {
              let name = messageData[index]
              let value = messageData[index + 3]

              console.log({ name, value })

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

export default Card26
