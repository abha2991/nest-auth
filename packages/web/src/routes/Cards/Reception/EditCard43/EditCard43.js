import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'
import anniversaryCard1 from '../../../img/Reception/Reception_4_1.png'
import anniversaryCard2 from '../../../img/Reception/Reception_4_2.png'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const EditCard43 = () => {
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
  const hover4 = useHover({ border: '2px solid #ffd167' })
  const hover5 = useHover({ border: '2px solid #ffd167' })
  const hover6 = useHover({ border: '2px solid #ffd167' })
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

  const [firstPageData, setFirstPageData] = useState({
    brideAndGroomName: '',

    date: ''
  })

  const [secondPageData, setSecondPageData] = useState({
    dateAndTime: '',
    venue: ''
  })

  useEffect(() => {
    if (textdata) {
      setFirstPageData({
        brideAndGroomName: textdata[0]?.brideAndGroomName ?? '',

        date: textdata[0]?.date ?? ''
      })
      setSecondPageData({
        dateAndTime: textdata[1]?.dateAndTime ?? '',
        venue: textdata[1]?.venue ?? ''
      })
    }
  }, [textdata])

  let textData1
  let textData2
  let receptionFirstPageCardData = []
  let receptionSecondPageCardData = []

  if (textdata) {
    textData1 = ['brideAndGroomName', 'date', textdata[0]?.brideAndGroomName ?? '', textdata[0]?.date ?? '']
    textData2 = ['dateAndTime', 'venue', textdata[1]?.dateAndTime ?? '', textdata[1]?.venue ?? '']

    receptionFirstPageCardData = Object.entries(firstPageData)

    receptionSecondPageCardData = Object.entries(secondPageData)
  }

  const PostData = async (e) => {
    e.preventDefault()

    let brideAndGroomName = firstPageData.brideAndGroomName?.toString() ?? ''

    let date = firstPageData.date?.toString() ?? ''

    let dateAndTime = secondPageData.dateAndTime?.toString() ?? ''
    let venue = secondPageData.venue?.toString() ?? ''
    //let dateAndTime = date + ' ( ' + time + ' )'
    let details

    details = [
      { brideAndGroomName, date },
      { brideAndGroomName, dateAndTime, venue }
    ]

    let card_id = cardData.cardId
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/receptioncard`, {
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
                  <div className="editable" {...hover1}>
                    <h4
                      className="card12-text"
                      data-bs-toggle="modal"
                      data-bs-target="#id1"
                      style={{
                        fontSize: '80px',
                        maxWidth: '350px',
                        margin: 'auto',
                        fontWeight: 'bold'
                      }}
                    >
                      {' '}
                      {firstPageData.brideAndGroomName}
                    </h4>{' '}
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover2}>
                    <h6
                      data-bs-toggle="modal"
                      data-bs-target="#id2"
                      style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto', color: '#ebd0ab' }}
                    >
                      {firstPageData.date}
                    </h6>{' '}
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
                  <div className="editable" {...hover3}>
                    <h5
                      className="card12-text"
                      data-bs-toggle="modal"
                      data-bs-target="#id1"
                      style={{
                        fontSize: '80px',
                        maxWidth: '350px',
                        margin: 'auto',
                        fontWeight: 'bold'
                      }}
                    >
                      {' '}
                      {firstPageData.brideAndGroomName}
                    </h5>{' '}
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover4}>
                    <h5
                      data-bs-toggle="modal"
                      data-bs-target="#id3"
                      style={{
                        paddingTop: '10px',
                        maxWidth: '300px',
                        margin: 'auto'
                      }}
                    >
                      {secondPageData.dateAndTime}
                    </h5>{' '}
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover5}>
                    <h5
                      data-bs-toggle="modal"
                      data-bs-target="#id4"
                      style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto' }}
                    >
                      {secondPageData.venue}
                    </h5>{' '}
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {receptionFirstPageCardData?.map((val, index) => {
          return (
            <Modal
              key={index + 1}
              id={`id${index + 1}`}
              onClick={() => {
                let name = textData1[index]
                let value = textData1[index + 2]

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

        {receptionSecondPageCardData?.map((val, index) => {
          return (
            <Modal
              key={index + 3}
              id={`id${index + 3}`}
              onClick={() => {
                let name = textData2[index]
                let value = textData2[index + 2]

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
export default EditCard43
