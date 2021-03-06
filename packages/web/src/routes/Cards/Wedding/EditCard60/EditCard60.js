import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'
import weddingCard1 from '../../../img/Wedding/Wedding_3_1.png'
import weddingCard2 from '../../../img/Wedding/Wedding_3_2.png'
import weddingCard3 from '../../../img/Wedding/Wedding_3_3.png'
import weddingCard4 from '../../../img/Wedding/Wedding_3_4.png'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
const EditCard60 = () => {
  const navigate = useNavigate()
  const id = useQueryParams()
  const { id: id2 } = id

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
    name1: '',
    name2: '',
    date: ''
  })
  const [secondPageData, setSecondPageData] = useState({
    message: '',
    parents1: '',
    grandParents1: '',
    parents2: '',
    grandParents2: ''
  })

  const [thirdPageData, setThirdPageData] = useState({
    function1: '',
    date1: '',
    venue1: '',
    function2: '',
    date2: '',
    venue2: '',
    function3: '',
    date3: '',
    venue3: '',
    function4: '',
    date4: '',
    venue4: '',
    function5: '',
    date5: '',
    venue5: ''
  })
  const [fourthPageData, setFourthPageData] = useState({
    date: '',
    time: '',
    venue: '',
    rsvp: '',
    _rsvp: ''
  })

  useEffect(() => {
    if (textdata) {
      setFirstPageData({
        name1: textdata[0]?.name1 ?? '',
        name2: textdata[0]?.name2 ?? '',
        date: textdata[0]?.date ?? ''
      })
      setSecondPageData({
        message: textdata[1]?.message ?? '',
        parents1: textdata[1]?.parents1 ?? '',
        grandParents1: textdata[1]?.grandparents1 ?? '',
        parents2: textdata[1]?.parents2 ?? '',
        grandParents2: textdata[1]?.grandparents2 ?? ''
      })
      setThirdPageData({
        function1: textdata[2]?.function1 ?? '',
        date1: textdata[2]?.date1 ?? '',
        venue1: textdata[2]?.venue1 ?? '',
        function2: textdata[2]?.function2 ?? '',
        date2: textdata[2]?.date2 ?? '',
        venue2: textdata[2]?.venue2 ?? '',
        function3: textdata[2]?.function3 ?? '',
        date3: textdata[2]?.date3 ?? '',
        venue3: textdata[2]?.venue3 ?? '',
        function4: textdata[2]?.function4 ?? '',
        date4: textdata[2]?.date14 ?? '',
        venue4: textdata[2]?.venue4 ?? '',
        function5: textdata[2]?.function5 ?? '',
        date5: textdata[2]?.date5 ?? '',
        venue5: textdata[2]?.venue5 ?? ''
      })
      setFourthPageData({
        date: textdata[3]?.date ?? '',
        time: textdata[3]?.time ?? '',
        venue: textdata[3]?.venue ?? '',
        rsvp: textdata[3]?.rsvp ?? '',
        _rsvp: textdata[3]?._rsvp ?? ''
      })
    }
  }, [textdata])

  let textData1
  let textData2
  let textData3
  let textData4
  let weddingFirstPageCardData = []

  let weddingSecondPageCardData = []

  let weddingThirdPageCardData = []

  let weddingFourthPageCardData = []

  if (textdata) {
    textData1 = ['name1', 'name2', 'date', textdata[0]?.name1 ?? '', textdata[0]?.name2 ?? '', textdata[0]?.date ?? '']

    textData2 = [
      'message',
      'parents1',
      'grandParents1',
      'parents2',
      'grandParents2',
      textdata[1]?.message ?? '',
      textdata[1]?.parents1 ?? '',
      textdata[1]?.grandparents1 ?? '',
      textdata[1]?.parents2 ?? '',
      textdata[1]?.grandparents2 ?? ''
    ]

    textData3 = [
      'function1',
      'date1',
      'venue1',
      'function2',
      'date2',
      'venue2',
      'function3',
      'date3',
      'venue3',
      'function4',
      'date4',
      'venue4',
      'function5',
      'date5',
      'venue5',
      textdata[2]?.function1 ?? '',
      textdata[2]?.date1 ?? '',
      textdata[2]?.venue1 ?? '',
      textdata[2]?.function2 ?? '',
      textdata[2]?.date2 ?? '',
      textdata[2]?.venue2 ?? '',
      textdata[2]?.function3 ?? '',
      textdata[2]?.date3 ?? '',
      textdata[2]?.venue3 ?? '',
      textdata[2]?.function4 ?? '',
      textdata[2]?.date4 ?? '',
      textdata[2]?.venue4 ?? '',
      textdata[2]?.function5 ?? '',
      textdata[2]?.date5 ?? '',
      textdata[2]?.venue5 ?? ''
    ]
    textData4 = ['date', 'time', 'venue', 'rsvp', '_rsvp', textdata[3]?.date ?? '', textdata[3]?.venue ?? '']

    weddingFirstPageCardData = Object.entries(firstPageData)

    weddingSecondPageCardData = Object.entries(secondPageData)
    weddingThirdPageCardData = Object.entries(thirdPageData)
    weddingFourthPageCardData = Object.entries(fourthPageData)
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

    let name1 = firstPageData.name1?.toString() ?? ''
    let name2 = firstPageData.name2?.toString() ?? ''
    let _date = firstPageData?.date?.toString() ?? ''
    let message = secondPageData?.message?.toString() ?? ''
    let parents1 = secondPageData?.parents1?.toString() ?? ''
    let parents2 = secondPageData?.parents2?.toString() ?? ''
    let grandparents1 = secondPageData?.grandParents1?.toString() ?? ''
    let weds = 'Weds'
    let grandparents2 = secondPageData?.grandParents2?.toString() ?? ''
    let function1 = thirdPageData?.function1?.toString() ?? ''
    let function2 = thirdPageData?.function2?.toString() ?? ''
    let function3 = thirdPageData?.function3?.toString() ?? ''
    let function4 = thirdPageData?.function4?.toString() ?? ''
    let function5 = thirdPageData?.function5?.toString() ?? ''
    let date1 = thirdPageData?.date1?.toString() ?? ''
    let date2 = thirdPageData?.date2?.toString() ?? ''
    let date3 = thirdPageData?.date3?.toString() ?? ''
    let date4 = thirdPageData?.date4?.toString() ?? ''
    let date5 = thirdPageData?.date5?.toString() ?? ''
    let venue1 = thirdPageData?.venue1?.toString() ?? ''
    let venue2 = thirdPageData?.venue2?.toString() ?? ''
    let venue3 = thirdPageData?.venue3?.toString() ?? ''
    let venue4 = thirdPageData?.venue4?.toString() ?? ''
    let venue5 = thirdPageData?.venue5?.toString() ?? ''
    let date = fourthPageData?.date?.toString() ?? ''
    let time = fourthPageData?.time?.toString() ?? ''
    let venue = fourthPageData?.venue?.toString() ?? ''
    let rsvp = fourthPageData?.rsvp?.toString() ?? ''
    let _rsvp = fourthPageData?._rsvp?.toString() ?? ''
    let _venue = 'VENUE'
    let details

    details = [
      { name1, weds, name2, _date },
      { message, name1, parents1, grandparents1, weds, name2, parents2, grandparents2 },
      {
        function1,
        date1,
        venue1,
        function2,
        date2,
        venue2,
        function3,
        date3,
        venue3,
        function4,
        date4,
        venue4,
        function5,
        date5,
        venue5
      },
      { date, time, _venue, venue, rsvp, _rsvp }
    ]

    let card_id = cardData.cardId
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/weddingcard10`, {
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
        maxCharsPerLine: 40,
        minCharsPerLine: 20
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
                    background: `url(${weddingCard1}) no-repeat center/contain`,
                    textAlign: 'center',
                    width: '100%',
                    fontFamily: 'myriad-pro-bold',
                    color: '#d0ab72',
                    height: '100%',
                    padding: '290px 0 40px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id1"
                    style={{
                      paddingTop: '100px',
                      maxWidth: '350px',
                      margin: 'auto'
                    }}
                  >
                    {' '}
                    {firstPageData.name1}
                  </h3>

                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id2"
                    style={{
                      paddingTop: '40px',
                      maxWidth: '300px',
                      margin: 'auto'
                    }}
                  >
                    {firstPageData.name2}
                  </h3>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id3"
                    style={{
                      paddingTop: '50px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#fff',
                      fontFamily: 'myriad-pro-regular'
                    }}
                  >
                    {firstPageData.date}
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card-box">
                <div
                  style={{
                    background: `url(${weddingCard2}) no-repeat center/contain`,
                    textAlign: 'center',
                    width: '100%',
                    fontFamily: 'myriad-pro-regular',
                    color: '#fff',
                    height: '100%',
                    padding: '250px 0 40px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <p
                    data-bs-toggle="modal"
                    data-bs-target="#id4"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#ffce0a',
                      fontFamily: 'myriad-bold-bold'
                    }}
                  >
                    {secondPageData.message}
                  </p>
                  <h5
                    className="card12-text"
                    data-bs-toggle="modal"
                    data-bs-target="#id1"
                    style={{
                      paddingTop: '100px',
                      color: '#ffce0a',
                      fontFamily: 'myriad-pro-bold',
                      maxWidth: '350px',
                      margin: 'auto'
                    }}
                  >
                    {' '}
                    {firstPageData.name1}
                  </h5>

                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id5"
                    style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto', color: '#fff' }}
                  >
                    {secondPageData.parents1}
                  </h5>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id6"
                    style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto', color: '#fff' }}
                  >
                    {secondPageData.grandParents1}
                  </h5>
                  <h5
                    style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto', fontFamily: 'lucida-handwriting' }}
                  >
                    Weds
                  </h5>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id2"
                    style={{
                      paddingTop: '10px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#ffce0a',
                      fontFamily: 'myriad-pro-bold'
                    }}
                  >
                    {firstPageData.name2}
                  </h5>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id7"
                    style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto' }}
                  >
                    {secondPageData.parents2}
                  </h5>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id8"
                    style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto' }}
                  >
                    {secondPageData.grandParents2}
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-box">
                <div
                  style={{
                    background: `url(${weddingCard3}) no-repeat center/contain`,
                    textAlign: 'center',
                    width: '100%',
                    fontFamily: 'myriad-pro-regular',
                    color: '#fff',
                    height: '100%',
                    padding: '250px 0 40px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id9"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#ffcb85',
                      fontFamily: 'myriad-pro-semibold'
                    }}
                  >
                    {' '}
                    {thirdPageData.function1}
                  </h5>

                  <h5 data-bs-toggle="modal" data-bs-target="#id10" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date1}
                  </h5>
                  <h5 data-bs-toggle="modal" data-bs-target="#id11" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.venue1}
                  </h5>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id12"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#ffcb85',
                      fontFamily: 'myriad-pro-semibold'
                    }}
                  >
                    {' '}
                    {thirdPageData.function2}
                  </h5>

                  <h5 data-bs-toggle="modal" data-bs-target="#id13" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date2}
                  </h5>
                  <h5 data-bs-toggle="modal" data-bs-target="#id14" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.venue2}
                  </h5>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id15"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#ffcb85',
                      fontFamily: 'myriad-pro-semibold'
                    }}
                  >
                    {' '}
                    {thirdPageData.function3}
                  </h5>

                  <h5 data-bs-toggle="modal" data-bs-target="#id16" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date3}
                  </h5>
                  <h5 data-bs-toggle="modal" data-bs-target="#id17" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.venue3}
                  </h5>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id18"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#ffcb85',
                      fontFamily: 'myriad-pro-semibold'
                    }}
                  >
                    {' '}
                    {thirdPageData.function4}
                  </h5>

                  <h5 data-bs-toggle="modal" data-bs-target="#id19" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date4}
                  </h5>
                  <h5 data-bs-toggle="modal" data-bs-target="#id20" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.venue4}
                  </h5>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id21"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#ffcb85',
                      fontFamily: 'myriad-pro-semibold'
                    }}
                  >
                    {' '}
                    {thirdPageData.function5}
                  </h5>

                  <h5 data-bs-toggle="modal" data-bs-target="#id22" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date5}
                  </h5>
                  <h5 data-bs-toggle="modal" data-bs-target="#id23" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.venue5}
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-box">
                <div
                  style={{
                    background: `url(${weddingCard4}) no-repeat center/contain`,
                    textAlign: 'center',
                    width: '100%',
                    fontFamily: 'myriad-pro-regular',
                    color: '#fff',
                    height: '100%',
                    padding: '200px 0 200px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id24"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto'
                    }}
                  >
                    {' '}
                    {fourthPageData.date}
                  </h6>

                  <h6 data-bs-toggle="modal" data-bs-target="#id25" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {fourthPageData.time}
                  </h6>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id26"
                    style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto' }}
                  >
                    {fourthPageData.venue}
                  </h5>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id27"
                    style={{
                      paddingTop: '10px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#edbe7f',
                      fontFamily: 'myriad-pro-bold'
                    }}
                  >
                    {fourthPageData.rsvp}
                  </h5>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id28"
                    style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto' }}
                  >
                    {fourthPageData._rsvp}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {weddingFirstPageCardData?.map((val, index) => {
          return (
            <Modal
              key={index + 1}
              id={`id${index + 1}`}
              onClick={() => {
                let name = FirstPageData[index]
                let value = FirstPageData[index + 3]

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

        {weddingSecondPageCardData?.map((val, index) => {
          return (
            <Modal
              key={index + 4}
              id={`id${index + 4}`}
              onClick={() => {
                let name = SecondPageData[index]
                let value = SecondPageData[index + 5]

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

        {weddingThirdPageCardData?.map((val, index) => {
          return (
            <Modal
              key={index + 9}
              id={`id${index + 9}`}
              onClick={() => {
                let name = ThirdPageData[index]
                let value = ThirdPageData[index + 15]

                console.log({ name, value, index })

                setThirdPageData({ ...thirdPageData, [name]: [value] })
              }}
              onChange={(e) => {
                const name = e.target.name
                const value = e.target.value
                setThirdPageData({ ...thirdPageData, [name]: value })
              }}
              name={val[0]}
              data={val[1]}
            />
          )
        })}

        {weddingFourthPageCardData?.map((val, index) => {
          return (
            <Modal
              key={index + 24}
              id={`id${index + 24}`}
              onClick={() => {
                let name = FourthPageData[index]
                let value = FourthPageData[index + 5]

                console.log({ name, value })

                setFourthPageData({ ...fourthPageData, [name]: [value] })
              }}
              onChange={(e) => {
                const name = e.target.name
                const value = e.target.value
                setFourthPageData({ ...fourthPageData, [name]: value })
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
export default EditCard60
