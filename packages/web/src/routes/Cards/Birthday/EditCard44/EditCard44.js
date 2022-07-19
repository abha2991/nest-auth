import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'
import birthdayCard1 from '../../../img/Birthday/Birthday_1_1.png'
import birthdayCard2 from '../../../img/Birthday/Birthday_1_2.png'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
const EditCard44 = () => {
  const navigate = useNavigate()
  const id = useQueryParams()
  const { id: id2 } = id
  const [loading, setLoading] = useState(false)
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

  console.log({ textdata })
  const [firstPageData, setFirstPageData] = useState({
    date: ''
  })

  const [secondPageData, setSecondPageData] = useState({
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
      'time',
      'venue',
      '_rsvp',
      'rsvp',
      'rsvpNumber',
      textdata[1]?.time ?? '',
      textdata[1]?.venue ?? '',
      textdata[1]?._rsvp ?? '',
      textdata[1]?.rsvp ?? '',
      textdata[1]?.rsvpNumber ?? ''
    ]
    birthDayCardData1 = Object.entries(firstPageData)
    birthDayCardData2 = Object.entries(secondPageData)
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

    let date = firstPageData.date?.toString() ?? ''

    let time = secondPageData.time?.toString() ?? ''
    let venue = secondPageData.venue?.toString() ?? ''
    let rsvp = secondPageData.rsvp?.toString() ?? ''
    let _rsvp = secondPageData._rsvp?.toString() ?? ''
    let rsvpNumber = secondPageData.rsvpNumber?.toString() ?? ''
    let email = profile.email

    let details

    details = [{ date }, { date, time, venue, _rsvp, rsvp, rsvpNumber }]

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
      navigate(`/preview?id=${card_data.data.id}`)
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
                    fontFamily: 'Lora',

                    height: '100%',
                    padding: '200px 0 150px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id1"
                    style={{
                      maxWidth: '350px',
                      paddingTop: '150px',
                      margin: 'auto',
                      fontFamily: 'segoe-ui-bold',
                      fontSize: '12px',
                      color: '#fff'
                    }}
                  >
                    {' '}
                    {firstPageData.date}
                  </h5>
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
                    fontFamily: 'Lora',
                    color: '#000',
                    height: '100%',
                    padding: '250px 0 150px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <h5
                    className="card12-text"
                    data-bs-toggle="modal"
                    data-bs-target="#id1"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      paddingTop: '50px',
                      color: '#efb53a',
                      fontFamily: 'nuevastd-bold'
                    }}
                  >
                    {' '}
                    {firstPageData.date}
                  </h5>

                  <h5
                    className="card12-text"
                    data-bs-toggle="modal"
                    data-bs-target="#id2"
                    style={{
                      color: '#efb53a',
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'nuevastd-bold'
                    }}
                  >
                    {' '}
                    {secondPageData.time}
                  </h5>

                  <h7
                    data-bs-toggle="modal"
                    data-bs-target="#id3"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '300px',
                      color: '#ece2d1',
                      margin: 'auto',
                      fontFamily: 'nuevastd-bold'
                    }}
                  >
                    {secondPageData.venue}
                  </h7>

                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id4"
                    style={{
                      paddingTop: '10px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#f3e9d5',
                      fontFamily: 'nuevastd-bold'
                    }}
                  >
                    {secondPageData._rsvp}
                  </h6>

                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id5"
                    style={{
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#efb53a',
                      fontFamily: 'nuevastd-bold'
                    }}
                  >
                    {secondPageData.rsvp}
                  </h5>

                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id6"
                    style={{
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#efb53a',
                      fontFamily: 'nuevastd-bold'
                    }}
                  >
                    {secondPageData.rsvpNumber}
                  </h5>
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

                console.log({ name, value })

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
                let value = textData2[index + 5]
                console.log({ name, value, index })
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
export default EditCard44
