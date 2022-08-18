import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'
import card1 from '../../../img/Engagement/Engagement_2_1.png'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
import Engagement from '../../../img/Engagement/Engagement_2_1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const EditCard51 = () => {
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
    groomOrBrideName: '',
    date: '',
    time: '',
    venue: ''
  })

  useEffect(() => {
    if (textdata) {
      setdata({
        brideOrGroomName: textdata[0]?.brideOrGroomName ?? '',

        groomOrBrideName: textdata[0]?.groomOrBrideName ?? '',
        date: textdata[0]?.date ?? '',
        time: textdata[0]?.time ?? '',
        venue: textdata[0]?.venue ?? ''
      })
    }
  }, [textdata])

  let textData
  let engagementCardData = []

  if (textdata) {
    textData = [
      'brideOrGroomName',
      'groomOrBrideName',
      'date',
      'time',
      'venue',
      textdata[0]?.brideOrGroomName ?? '',
      textdata[0]?.groomOrBrideName ?? '',
      textdata[0]?.date ?? '',
      textdata[0]?.time ?? '',
      textdata[0]?.venue ?? ''
    ]

    engagementCardData = Object.entries(data)
  }

  const PostData = async (e) => {
    e.preventDefault()
    let brideOrGroomName = data.brideOrGroomName?.toString() ?? ''
    let groomOrBrideName = data.groomOrBrideName?.toString() ?? ''

    let date = data.date?.toString() ?? ''
    let time = data.time?.toString() ?? ''
    let venue = data.venue?.toString() ?? ''
    let email = profile.email?.toString() ?? ''
    let and = 'and'
    let details

    details = [{ brideOrGroomName, and, groomOrBrideName, date, time, venue }]

    let card_id = cardData.cardId
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/engagementcard`, {
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
                      {data.brideOrGroomName}
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
                    and
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
                      {data.groomOrBrideName}
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
                      {data.date}
                    </h5>{' '}
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
                      {data.time}
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
                      {data.venue}
                    </h5>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        {engagementCardData?.map((val, index) => {
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
export default EditCard51
