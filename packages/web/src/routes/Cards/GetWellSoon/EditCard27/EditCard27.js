import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'
import card1 from '../../../img/GetWellSoon/GetWellSoon_1_1.png'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
import getWellSoonCard from '../../../img/GetWellSoon/GetWellSoon_1_1.png'
const EditCard27 = () => {
  const navigate = useNavigate()
  const id = useQueryParams()
  const { id: id2 } = id

  const { data: profile, status } = useProfileApi()

  const [cardData, setCardData] = useState()
  const [cardname, setCardName] = useState()
  const [userdata, setUserData] = useState()
  const [loading, setLoading] = useState(false)
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

  // console.log({textdata})
  const [messageData, setMessageData] = useState({
    message_1: '',
    senderName: ''
  })

  useEffect(() => {
    if (textdata) {
      console.log({ textdata })
      setMessageData({
        message_1: textdata[0]?.message_1 ?? '',
        senderName: textdata[0]?.senderName ?? ''
      })
    }
  }, [textdata])

  let textData
  let getWellSoonCardData = []

  if (textdata) {
    textData = ['message_1', 'senderName', textdata[0]?.message_1 ?? '', textdata[0]?.senderName ?? '']

    getWellSoonCardData = Object.entries(messageData)
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
    let message_1 = messageData.message_1?.toString() ?? ''
    let senderName = messageData.senderName?.toString() ?? ''

    let email = profile.email

    //
    let details

    details = [{ message_1, senderName }]

    let card_id = cardData.cardId
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/getwellsooncard`, {
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
        maxCharsPerLine: Number(33)
      })
    })

    const card_data = await res.json()

    if ((card_data.status = 'Success')) {
      setLoading(false)
      navigate(`/preview?id=${card_data.data.id}`)
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
                    fontFamily: 'Lora',
                    color: '#75a1bf',
                    height: '100%',
                    padding: '240px 0 270px',
                    backgroundSize: '100% 100%',
                    fontWeight: 'bold'
                  }}
                >
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id1"
                    style={{
                      paddingTop: '70px',
                      maxWidth: '300px',
                      margin: 'auto',
                      fontFamily: 'georgia',
                      textAlign: 'center'
                    }}
                  >
                    {messageData.message_1}
                  </h5>

                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id2"
                    style={{
                      paddingTop: '4px',
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'lucida-fax-demibold-italic'
                    }}
                  >
                    {' '}
                    {messageData.senderName}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        {getWellSoonCardData?.map((val, index) => {
          return (
            <Modal
              key={index + 1}
              id={`id${index + 1}`}
              onClick={() => {
                let name = textData[index]
                let value = textData[index + 2]

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
export default EditCard27
