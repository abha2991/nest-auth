import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'
import birthdayCard1 from '../../../img/Birthday/Birthday_2_1.png'
import birthdayCard2 from '../../../img/Birthday/Birthday_2_2.png'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const EditCard45 = () => {
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
  const hover7 = useHover({ border: '2px solid #ffd167' })
  const hover8 = useHover({ border: '2px solid #ffd167' })
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

  const [firstPageData, setFirstPageData] = useState({
    date: ''
  })

  const [secondPageData, setSecondPageData] = useState({
    name: '',
    time: '',
    venue: '',
    _rsvp: '',

    rsvp: '',
    rsvpNumber: ''
  })

  useEffect(() => {
    if (textdata) {
      setFirstPageData({
        date: textdata[0]?.date ?? ''
      })
      setSecondPageData({
        name: textdata[1]?.name ?? '',
        time: textdata[1]?.time ?? '',
        venue: textdata[1]?.venue ?? '',
        _rsvp: textdata[1]?._rsvp ?? '',
        rsvp: textdata[1]?.rsvp ?? '',
        rsvpNumber: textdata[1]?.rsvpNumber ?? ''
      })
    }
  }, [textdata])

  let textData1
  let textData2
  let birthDayCardData1 = []
  let birthDayCardData2 = []

  if (textdata) {
    textData1 = ['date', textdata[0]?.date ?? '']

    textData2 = [
      'name',
      'time',
      'venue',
      '_rsvp',
      'rsvp',
      'rsvpNumber',
      textdata[1]?.name ?? '',
      textdata[1]?.time ?? '',
      textdata[1]?.venue ?? '',
      textdata[1]?._rsvp ?? '',
      textdata[1]?.rsvp ?? '',
      textdata[1]?.rsvpNumber ?? ''
    ]
    birthDayCardData1 = Object.entries(firstPageData)
    birthDayCardData2 = Object.entries(secondPageData)
  }

  const PostData = async (e) => {
    e.preventDefault()

    let date = firstPageData.date?.toString() ?? ''
    let name = secondPageData.name?.toString() ?? ''
    let time = secondPageData.time?.toString() ?? ''
    let venue = secondPageData.venue?.toString() ?? ''
    let rsvp = secondPageData.rsvp?.toString() ?? ''
    let _rsvp = secondPageData._rsvp?.toString() ?? ''
    let rsvpNumber = secondPageData.rsvpNumber?.toString() ?? ''
    let email = profile.email

    let details

    details = [{ date }, { name, date, time, venue, _rsvp, rsvp, rsvpNumber }]

    let card_id = cardData.cardId
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/birthdaycard`, {
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
        maxCharsPerLine: Number(40)
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
        <div className="my-5"></div>
        <div className="container" style={{ position: 'relative' }}>
          <div className="row">
            <div className="col-md-4">
              <div className="card-box">
                <div
                  style={{
                    background: `url(${birthdayCard1}) no-repeat center/contain`,
                    textAlign: 'center',
                    width: '100%',

                    height: '100%',
                    padding: '200px 0 50px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <div className="editable" {...hover1}>
                    <p
                      data-bs-toggle="modal"
                      data-bs-target="#id1"
                      style={{
                        maxWidth: '350px',
                        paddingTop: '230px',
                        textAlign: 'center',
                        margin: 'auto',
                        fontSize: '14px',
                        fontFamily: 'segoe-ui-bold',
                        color: '#e49027',
                        marginLeft: '50px'
                      }}
                    >
                      {' '}
                      {firstPageData.date}
                    </p>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card-box">
                <div
                  style={{
                    background: `url(${birthdayCard2}) no-repeat center/contain`,
                    textAlign: 'center',
                    width: '100%',

                    height: '100%',
                    padding: '250px 0 150px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <div className="editable" {...hover2}>
                    <h4
                      data-bs-toggle="modal"
                      data-bs-target="#id2"
                      style={{
                        color: '#cd1515',
                        maxWidth: '350px',
                        margin: 'auto',
                        paddingTop: '50px',
                        fontFamily: 'myriad-pro-bold'
                      }}
                    >
                      {' '}
                      {secondPageData.name}
                    </h4>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover3}>
                    <h6
                      data-bs-toggle="modal"
                      data-bs-target="#id1"
                      style={{
                        color: '#eca531',
                        maxWidth: '350px',
                        margin: 'auto',

                        fontFamily: 'nuevastd-bold'
                      }}
                    >
                      {' '}
                      {firstPageData.date}
                    </h6>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover4}>
                    <h6
                      data-bs-toggle="modal"
                      data-bs-target="#id3"
                      style={{
                        color: '#eca531',
                        maxWidth: '350px',
                        margin: 'auto',
                        fontFamily: 'nuevastd-bold'
                      }}
                    >
                      {' '}
                      {secondPageData.time}
                    </h6>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover5}>
                    <p
                      data-bs-toggle="modal"
                      data-bs-target="#id4"
                      style={{
                        paddingTop: '20px',
                        fontSize: '14px',
                        maxWidth: '300px',
                        margin: 'auto',
                        color: '#e79624',
                        fontFamily: 'nuevastd-bold'
                      }}
                    >
                      {secondPageData.venue}
                    </p>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover6}>
                    <h6
                      data-bs-toggle="modal"
                      data-bs-target="#id5"
                      style={{
                        paddingTop: '15px',
                        maxWidth: '300px',
                        margin: 'auto',
                        color: '#d11919',
                        fontFamily: 'nuevastd-bold'
                      }}
                    >
                      {secondPageData._rsvp}
                    </h6>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover7}>
                    <h5
                      data-bs-toggle="modal"
                      data-bs-target="#id6"
                      style={{
                        maxWidth: '300px',
                        margin: 'auto',
                        color: '#e79624',
                        fontFamily: 'nuevastd-bold'
                      }}
                    >
                      {secondPageData.rsvp}
                    </h5>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover8}>
                    <h5
                      data-bs-toggle="modal"
                      data-bs-target="#id7"
                      style={{
                        maxWidth: '300px',
                        margin: 'auto',
                        color: '#e79624',
                        fontFamily: 'nuevastd-bold'
                      }}
                    >
                      {secondPageData.rsvpNumber}
                    </h5>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {birthDayCardData1?.map((val, index) => {
          return (
            <Modal
              key={index + 1}
              id={`id${index + 1}`}
              onClick={() => {
                let name = textData1[index]
                let value = textData1[index + 1]

                setFirstPageData({ ...firstPageData, [name]: [value] })
              }}
              onChange={(e) => {
                const name = e.target.name
                const value = e.target.value
                setFirstPageData({ ...firstPageData, [name]: value })
              }}
              name={val[0]}
              data={val[1]}
            />
          )
        })}

        {birthDayCardData2?.map((val, index) => {
          return (
            <Modal
              key={index + 2}
              id={`id${index + 2}`}
              onClick={() => {
                let name = textData2[index]
                let value = textData2[index + 6]

                setSecondPageData({ ...secondPageData, [name]: [value] })
              }}
              onChange={(e) => {
                const name = e.target.name
                const value = e.target.value
                setSecondPageData({ ...secondPageData, [name]: value })
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
export default EditCard45
