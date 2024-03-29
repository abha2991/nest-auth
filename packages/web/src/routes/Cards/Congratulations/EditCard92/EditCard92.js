import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'
import congratulationCard from '../../../img/Congratulations/Congratulations_6_1.png'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const EditCard92 = () => {
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
  const [cardData, setCardData] = useState()

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

  const [cardText, setCardText] = useState({
    message_1: '',
    message_2: ''
  })

  useEffect(() => {
    if (textdata) {
      setCardText({
        message_1: textdata[0]?.message_1 ?? '',
        message_2: textdata[0]?.message_2 ?? ''
      })
    }
  }, [textdata])

  let textData
  let congratulationsCardData = []

  if (textdata) {
    textData = ['message_1', 'message_2', textdata[0]?.message_1 ?? '', textdata[0]?.message_2 ?? '']

    congratulationsCardData = Object.entries(cardText)
  }

  const handleInputs = (e) => {
    const name = e.target.name
    const value = e.target.value
    setCardText({ ...cardText, [name]: value })
  }

  const PostData = async (e) => {
    e.preventDefault()

    let email = profile.email

    let message_1 = cardText.message_1?.toString() ?? ''
    let message_2 = cardText.message_2?.toString() ?? ''

    let details

    details = [{ message_1, message_2 }]

    let card_id = cardData.cardId
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/congratulationscard`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: cardData.cardId,
        details,
        userId: profile.id,
        email: email,
        maxCharsPerLine: Number(21)
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
                    background: `url(${congratulationCard}) no-repeat center/contain`,
                    textAlign: 'center',
                    width: '100%',
                    fontFamily: 'myriad-pro-bold',

                    height: '100%',
                    padding: '100px 0 250px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <div className="editable" {...hover1}>
                    <h3
                      data-bs-toggle="modal"
                      data-bs-target="#id1"
                      style={{
                        paddingTop: '90px',
                        maxWidth: '350px',
                        margin: 'auto',

                        fontSize: '16px',
                        color: '#de8aa4'
                      }}
                    >
                      {' '}
                      {cardText.message_1}
                    </h3>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover2}>
                    <h3
                      data-bs-toggle="modal"
                      data-bs-target="#id2"
                      style={{
                        paddingTop: '10px',
                        fontSize: '16px',
                        maxWidth: '300px',
                        margin: 'auto',
                        color: '#da498c'
                      }}
                    >
                      {cardText.message_2}
                    </h3>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {congratulationsCardData?.map((val, index) => {
          return (
            <Modal
              key={index + 1}
              id={`id${index + 1}`}
              onClick={() => {
                let name = textData[index]
                let value = textData[index + 2]

                setCardText({ ...cardText, [name]: [value] })
              }}
              onChange={(e) => {
                const name = e.target.name
                const value = e.target.value
                setCardText({ ...cardText, [name]: value })
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
export default EditCard92
