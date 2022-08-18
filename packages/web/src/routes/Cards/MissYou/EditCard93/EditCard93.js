import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'
import card1 from '../../../img/MissYou/MissYou_5_1.png'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const EditCard93 = () => {
  const navigate = useNavigate()
  const id = useQueryParams()
  const { id: id2 } = id
  function useHover(styleOnHover, styleOnNotHover = {}) {
    const [style, setStyle] = React.useState(styleOnNotHover)

    const onMouseEnter = () => setStyle(styleOnHover)
    const onMouseLeave = () => setStyle(styleOnNotHover)

    return { style, onMouseEnter, onMouseLeave }
  }
  const hover1 = useHover({ border: '2px solid #ffd167' })
  const hover2 = useHover({ border: '2px solid #ffd167' })
  const hover3 = useHover({ border: '2px solid #ffd167' })
  const { data: profile, status } = useProfileApi()
  const [loading, setLoading] = useState(false)
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
  let missYouCardData = []

  if (textdata) {
    textData = [
      'receiverName',
      'message_1',
      'senderName',
      textdata[0]?.receiverName ?? '',
      textdata[0]?.message_1 ?? '',
      textdata[0]?.senderName ?? ''
    ]

    missYouCardData = Object.entries(messageData)
  }
  const handleInputs = (e) => {
    const name = e.target.name
    const value = e.target.value
    setMessageData({ ...messageData, [name]: value })
  }

  const PostData = async (e) => {
    e.preventDefault()
    let receiverName = messageData.receiverName?.toString() ?? ''
    let message_1 = messageData.message_1?.toString() ?? ''
    let senderName = messageData.senderName?.toString() ?? ''

    let email = profile.email

    //
    let details

    details = [{ receiverName, message_1, senderName }]

    let card_id = cardData.cardId
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/missyoucard3`, {
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
        maxCharsPerLine: Number(19)
      })
    })

    const card_data = await res.json()
    if ((card_data.status = 'Success')) {
      setLoading(false)
      navigate(`/preview?id=${card_data.createdCardId}`)
    }
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
                    background: `url(${card1}) no-repeat center/contain`,
                    textAlign: 'center',
                    width: '100%',
                    fontFamily: 'nirmala-bold',
                    color: '#2e5b67',
                    height: '100%',
                    padding: '100px 0 50px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <div className="editable" {...hover1}>
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
                      {messageData.receiverName}
                    </h5>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover2}>
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
                      {messageData.message_1}
                    </h5>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover3}>
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
                      {messageData.senderName}
                    </h5>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        {missYouCardData?.map((val, index) => {
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
}
export default EditCard93
