import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'
import card1 from '../../../img/MissYou/MissYou_1_1.png'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
const EditCard20 = () => {
  const navigate = useNavigate()
  const id = useQueryParams()
  const { id: id2 } = id

  const { data: profile, status } = useProfileApi()

  const [cardData, setCardData] = useState()
  const [cardname, setCardName] = useState()
  const [userdata, setUserData] = useState()

  const [textdata, setTextData] = useState()
  const getCardsOfUser = async () => {
    const res = await fetch(`http://localhost:3001/api/card1/getCard/${id2}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()
    setCardData(data)

    setTextData(data.text)
  }
  useEffect(() => {
    getCardsOfUser()
  }, [id2])

  const [messageData, setMessageData] = useState({
    receiverName: '',
    message_1: '',
    senderName: ''
  })

  useEffect(() => {
    if (textdata) {
      setMessageData({
        receiverName: textdata[0]?.receiverName ?? '',
        message_1: textdata[0]?.message_1 ?? '',
        senderName: textdata[0]?.senderName ?? ''
      })
    }
  }, [textdata])

  let textData
  let thankYouCardData = []

  if (textdata) {
    textData = [
      'receiverName',
      'message_1',
      'senderName',
      textdata[0]?.receiverName ?? '',
      textdata[0]?.message_1 ?? '',
      textdata[0]?.senderName ?? ''
    ]

    thankYouCardData = Object.entries(messageData)
  }

  const handleInputs = (e) => {
    const name = e.target.name
    const value = e.target.value
    setMessageData({ ...messageData, [name]: value })
  }

  function useHover(styleOnHover, styleOnNotHover = {}) {
    const [style, setStyle] = React.useState(styleOnNotHover)

    const onMouseEnter = () => setStyle(styleOnHover)
    const onMouseLeave = () => setStyle(styleOnNotHover)

    return { style, onMouseEnter, onMouseLeave }
  }

  const hover = useHover({ color: 'orange' })

  const PostData = async (e) => {
    e.preventDefault()
    let receiverName = messageData.receiverName?.toString()
    let message_1 = messageData.message_1?.toString()
    let senderName = messageData.senderName?.toString()

    let email = profile.email

    let details

    details = [{ receiverName, message_1, senderName }]

    let card_id = cardData.cardId

    const res = await fetch(`http://localhost:3001/api/card1/thankyoucard`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: cardData.cardId,
        details,
        userId: profile.id,
        email: profile.email,
        maxCharsPerLine: Number(22)
      })
    })

    const card_data = await res.json()

    setCardData(card_data.id)

    navigate(`/preview?id=${card_data.id}`)
  }

  if (!textdata) {
    return <Loading />
  } else {
    return (
      <>
        <Header />
        <div className="pt-5">
          <h3 className="text-center">Edit Card</h3>
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
                    {messageData.receiverName}
                  </h2>
                  <h4 data-bs-toggle="modal" data-bs-target="#id2" style={{ paddingTop: '105px' }}>
                    {' '}
                    {messageData.message_1}
                  </h4>

                  <h2 data-bs-toggle="modal" data-bs-target="#id3">
                    {messageData.senderName}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        {thankYouCardData?.map((val, index) => {
          return (
            <Modal
              key={index + 1}
              id={`id${index + 1}`}
              onClick={() => {
                let name = textData[index]
                let value = textData[index + 3]

                setMessageData({ ...messageData, [name]: [value] })
              }}
              onChange={(e) => {
                const name = e.target.name
                const value = e.target.value
                setMessageData({ ...messageData, [name]: value })
              }}
              name={val[0]}
              data={val[1]}
            />
          )
        })}

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
}
export default EditCard20
