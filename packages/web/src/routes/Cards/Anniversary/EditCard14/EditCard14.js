import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
import anniversaryCard1 from '../../../img/Anniversary/Anniversary_1_1.png'
import anniversaryCard2 from '../../../img/Anniversary/Anniversary_1_2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const EditCard14 = () => {
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
    message: '',
    name: '',
    date: ''
  })

  const [secondPageData, setSecondPageData] = useState({
    anniversaryYear: '',
    day: '',
    time: '',
    venue: ''
  })

  useEffect(() => {
    if (textdata) {
      setFirstPageData({
        message: textdata[0]?.message ?? '',
        name: textdata[0]?.name ?? '',
        date: textdata[0]?.date ?? ''
      })
      setSecondPageData({
        anniversaryYear: textdata[1]?.anniversaryYear ?? '',
        day: textdata[1]?.day ?? '',
        time: textdata[1]?.time ?? '',
        venue: textdata[1]?.venue ?? ''
      })
    }
  }, [textdata])

  let textData1
  let textData2
  let anniversaryFirstPageCardData = []
  let anniversarySecondPageCardData = []

  if (textdata) {
    textData1 = [
      'message',
      'name',
      'date',
      textdata[0]?.message ?? '',
      textdata[0]?.name ?? '',
      textdata[0]?.date ?? ''
    ]

    textData2 = [
      'anniversaryYear',
      'day',
      'time',
      'venue',
      textdata[1]?.anniversaryYear ?? '',
      textdata[1]?.day ?? '',
      textdata[1]?.time ?? '',
      textdata[1]?.venue ?? ''
    ]

    anniversaryFirstPageCardData = Object.entries(firstPageData)

    anniversarySecondPageCardData = Object.entries(secondPageData)
  }

  const PostData = async (e) => {
    e.preventDefault()

    let anniversaryYear = secondPageData.anniversaryYear?.toString() ?? ''
    let name = firstPageData.name?.toString() ?? ''
    let date = firstPageData.date?.toString() ?? ''
    let day = secondPageData.day?.toString() ?? ''
    let time = secondPageData.time?.toString() ?? ''
    let venue = secondPageData.venue?.toString() ?? ''
    let message = firstPageData?.message?.toString() ?? ''
    let details

    details = [
      { name, message, date },
      { anniversaryYear, day, time, venue }
    ]

    let card_id = cardData.cardId
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/anniversarycard2`, {
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
        <div className="my-5"></div>
        <div className="container" style={{ position: 'relative' }}>
          <div className="row">
            <div className="col-md-4">
              <div className="card-box">
                <div
                  style={{
                    background: `url(${anniversaryCard1}) no-repeat center/contain`,
                    textAlign: 'center',
                    width: '100%',
                    fontFamily: 'Lora',
                    color: '#de8aa4',
                    height: '100%',
                    padding: '290px 0 50px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <div className="editable" {...hover2}>
                    <h3
                      data-bs-toggle="modal"
                      data-bs-target="#id2"
                      style={{
                        paddingTop: '10px',
                        maxWidth: '300px',
                        margin: 'auto',
                        color: '#ebd0ab',
                        marginTop: '100px',
                        fontWeight: 'bold'
                      }}
                    >
                      {firstPageData.name}
                    </h3>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>

                  <div className="editable" {...hover1}>
                    <h4
                      className="card12-text"
                      data-bs-toggle="modal"
                      data-bs-target="#id1"
                      style={{
                        maxWidth: '350px',
                        margin: 'auto',
                        fontWeight: 'bold'
                      }}
                    >
                      {' '}
                      {firstPageData.message}
                    </h4>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover3}>
                    <h6
                      data-bs-toggle="modal"
                      data-bs-target="#id3"
                      style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto', color: '#ebd0ab' }}
                    >
                      {firstPageData.date}
                    </h6>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card-box">
                <div
                  style={{
                    background: `url(${anniversaryCard2}) no-repeat center/contain`,
                    textAlign: 'center',
                    width: '100%',
                    fontFamily: 'Lora',
                    color: '#de8aa4',
                    height: '100%',
                    padding: '250px 0 40px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <div className="editable" {...hover4}>
                    <h4
                      className="card12-text"
                      data-bs-toggle="modal"
                      data-bs-target="#id4"
                      style={{
                        maxWidth: '350px',
                        margin: 'auto',
                        fontWeight: 'bold'
                      }}
                    >
                      {' '}
                      {secondPageData.anniversaryYear}
                    </h4>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover5}>
                    <h5
                      data-bs-toggle="modal"
                      data-bs-target="#id5"
                      style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto', color: '#fff' }}
                    >
                      {secondPageData.day}
                    </h5>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover6}>
                    <h5
                      data-bs-toggle="modal"
                      data-bs-target="#id6"
                      style={{
                        paddingTop: '10px',
                        maxWidth: '300px',
                        margin: 'auto',
                        color: '#fff',
                        fontStyle: 'italic'
                      }}
                    >
                      {secondPageData.time}
                    </h5>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover7}>
                    <h5
                      data-bs-toggle="modal"
                      data-bs-target="#id7"
                      style={{
                        paddingTop: '10px',
                        maxWidth: '300px',
                        margin: 'auto',
                        color: '#fff',
                        fontSize: 'small'
                      }}
                    >
                      {secondPageData.venue}
                    </h5>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {anniversaryFirstPageCardData?.map((val, index) => {
          return (
            <Modal
              key={index + 1}
              id={`id${index + 1}`}
              onClick={() => {
                let name = textData1[index]
                let value = textData1[index + 3]

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

        {anniversarySecondPageCardData?.map((val, index) => {
          return (
            <Modal
              key={index + 4}
              id={`id${index + 4}`}
              onClick={() => {
                let name = textData2[index]
                let value = textData2[index + 4]

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
export default EditCard14
