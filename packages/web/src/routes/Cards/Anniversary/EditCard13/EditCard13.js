import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
import anniversaryCard1 from '../../../img/Anniversary/Anniversary_2_1.png'
import anniversaryCard2 from '../../../img/Anniversary/Anniversary_2_2.png'
const EditCard13 = () => {
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

  const [firstPageData, setFirstPageData] = useState({
    anniversaryYear: '',
    name: '',
    date: ''
  })

  const [secondPageData, setSecondPageData] = useState({
    day: '',
    time: '',
    venue: ''
  })

  useEffect(() => {
    if (textdata) {
      setFirstPageData({
        anniversaryYear: textdata[0]?.anniversaryYear ?? '',
        name: textdata[0]?.name ?? '',
        date: textdata[0]?.date ?? ''
      })
      setSecondPageData({
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
      'anniversaryYear',
      'name',
      'date',
      textdata[0]?.anniversaryYear ?? '',
      textdata[0]?.name ?? '',
      textdata[0]?.date ?? ''
    ]

    textData2 = ['day', 'time', 'venue', textdata[1]?.day ?? '', textdata[1]?.time ?? '', textdata[1]?.venue ?? '']

    anniversaryFirstPageCardData = Object.entries(firstPageData)

    anniversarySecondPageCardData = Object.entries(secondPageData)
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

    let anniversaryYear = firstPageData.anniversaryYear?.toString() ?? ''
    let name = firstPageData.name?.toString() ?? ''
    let date = firstPageData.date?.toString() ?? ''
    let day = secondPageData.day?.toString() ?? ''
    let time = secondPageData.time?.toString() ?? ''
    let venue = secondPageData.venue?.toString() ?? ''

    let details

    details = [
      { anniversaryYear, name, date },
      { anniversaryYear, day, time, venue }
    ]

    let card_id = cardData.cardId

    const res = await fetch(`http://localhost:3001/api/card1/anniversarycard1`, {
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
        maxCharsPerLine: Number(20)
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
                    {firstPageData.anniversaryYear}
                  </h4>
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
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id3"
                    style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto', color: '#ebd0ab' }}
                  >
                    {firstPageData.date}
                  </h6>
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
                    {firstPageData.anniversaryYear}
                  </h4>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id4"
                    style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto', color: '#fff' }}
                  >
                    {secondPageData.day}
                  </h5>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id5"
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
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id6"
                    style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto', color: '#fff', fontSize: 'small' }}
                  >
                    {secondPageData.venue}
                  </h5>
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

        {anniversarySecondPageCardData?.map((val, index) => {
          return (
            <Modal
              key={index + 4}
              id={`id${index + 4}`}
              onClick={() => {
                let name = textData2[index]
                let value = textData2[index + 3]

                console.log({ name, value })

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
export default EditCard13
