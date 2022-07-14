import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'
import card1 from '../../../img/BabyShower/BabyShower_4_1.png'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
const EditCard35 = () => {
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

  // console.log({textdata})
  const [data, setdata] = useState({
    babyName: '',
    date: '',
    time: '',
    venue: ''
  })

  useEffect(() => {
    if (textdata) {
      setdata({
        babyName: textdata[0]?.babyName ?? '',
        date: textdata[0]?.date ?? '',
        time: textdata[0]?.time ?? '',
        venue: textdata[0]?.venue ?? ''
      })
    }
  }, [textdata])

  let textData
  let babyShowerCardData = []

  if (textdata) {
    textData = [
      'babyName',
      'date',
      'time',
      'venue',
      textdata[0]?.babyName ?? '',
      textdata[0]?.date ?? '',
      textdata[0]?.time ?? '',
      textdata[0]?.venue ?? ''
    ]

    babyShowerCardData = Object.entries(data)
  }
  const handleInputs = (e) => {
    const name = e.target.name
    const value = e.target.value
    setdata({ ...data, [name]: value })
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
    let babyName = data.babyName
    let date = data.date?.toString() ?? ''
    let time = data.time?.toString() ?? ''
    let venue = data.venue?.toString() ?? ''
    let email = profile.email?.toString() ?? ''

    let details

    details = [{ babyName, date, time, venue }]

    let card_id = cardData.cardId

    const res = await fetch(`http://localhost:3001/api/card1/babyshower`, {
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
        maxCharsPerLine: Number(24)
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
                    background: `url(${card1}) no-repeat center/cover`,
                    textAlign: 'center',
                    width: '100%',
                    fontFamily: 'Lora',
                    color: '#7132A1',
                    height: '100%',
                    padding: '100px 0'
                  }}
                >
                  <h2 data-bs-toggle="modal" data-bs-target="#id1" style={{ paddingTop: '105px' }}>
                    {' '}
                    {data.babyName}
                  </h2>
                  <h4 data-bs-toggle="modal" data-bs-target="#id2" style={{ paddingTop: '105px' }}>
                    {' '}
                    {data.date}
                  </h4>

                  <h2 data-bs-toggle="modal" data-bs-target="#id3">
                    {data.time}
                  </h2>
                  <h2 data-bs-toggle="modal" data-bs-target="#id4">
                    {data.venue}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        {babyShowerCardData?.map((val, index) => {
          return (
            <Modal
              key={index + 1}
              id={`id${index + 1}`}
              onClick={() => {
                let name = textData[index]
                let value = textData[index + 4]

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
export default EditCard35
