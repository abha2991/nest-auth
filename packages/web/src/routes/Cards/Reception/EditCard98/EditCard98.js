import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
import card1 from '../../../img/Reception/Reception_6_1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const EditCard98 = () => {
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

  const [data, setdata] = useState({
    brideOrGroomName: '',
    and: '',
    groomOrBrideName: '',
    dateAndTime: '',

    venue: ''
  })

  useEffect(() => {
    if (textdata) {
      setdata({
        brideOrGroomName: textdata[0]?.brideOrGroomName ?? '',
        and: textdata[0]?.and ?? '',
        groomOrBrideName: textdata[0]?.groomOrBrideName ?? '',
        dateAndTime: textdata[0]?.dateAndTime ?? '',

        venue: textdata[0]?.venue ?? ''
      })
    }
  }, [textdata])

  let textData
  let receptionCardData = []

  if (textdata) {
    textData = [
      'brideOrGroomName',
      'and',
      'groomOrBrideName',
      'dateAndTime',

      'venue',
      textdata[0]?.brideOrGroomName ?? '',
      textdata[0]?.and ?? '',
      textdata[0]?.groomOrBrideName ?? '',
      textdata[0]?.dateAndTime ?? '',

      textdata[0]?.venue ?? ''
    ]

    receptionCardData = Object.entries(data)
  }

  const PostData = async (e) => {
    e.preventDefault()
    let brideOrGroomName = data.brideOrGroomName?.toString() ?? ''
    let groomOrBrideName = data.groomOrBrideName?.toString() ?? ''
    let dateAndTime = data.dateAndTime?.toString() ?? ''
    let time = data.time?.toString() ?? ''
    let venue = data.venue?.toString() ?? ''
    let and = data.and?.toString() ?? ''

    let details

    details = [{ brideOrGroomName, and, groomOrBrideName, dateAndTime, venue }]

    let card_id = cardData.cardId
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/receptioncard4`, {
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
        maxCharsPerLine: Number(30)
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

                    height: '100%',
                    padding: '100px 0 100px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <div className="editable" {...hover1}>
                    <h3
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
                      {data.brideOrGroomName}
                    </h3>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>

                  <div className="editable" {...hover2}>
                    <h3
                      data-bs-toggle="modal"
                      data-bs-target="#id2"
                      style={{
                        paddingTop: '100px',
                        maxWidth: '300px',
                        margin: 'auto',
                        color: '#83889c',
                        fontFamily: 'nirmala-bold',
                        textAlign: 'center'
                      }}
                    >
                      {data.and}
                    </h3>
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
                      {data.groomOrBrideName}
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
                      {data.dateAndTime}
                    </h6>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>

                  <div className="editable" {...hover5}>
                    <h6
                      data-bs-toggle="modal"
                      data-bs-target="#id5"
                      style={{
                        paddingTop: '20px',
                        maxWidth: '350px',
                        margin: 'auto',
                        color: '#5e6a9c',
                        fontFamily: 'franklin-gothic-regular'
                      }}
                    >
                      {' '}
                      {data.venue}
                    </h6>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        {receptionCardData?.map((val, index) => {
          return (
            <Modal
              key={index + 1}
              id={`id${index + 1}`}
              onClick={() => {
                let name = textData[index]
                let value = textData[index + 5]

                setdata({ ...data, [name]: [value] })
              }}
              onChange={(e) => {
                const name = e.target.name
                const value = e.target.value
                setdata({ ...data, [name]: value })
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
export default EditCard98
