import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'
import weddingCard1 from '../../../img/Wedding/Wedding_15_1.png'
import weddingCard2 from '../../../img/Wedding/Wedding_15_2.png'
import weddingCard3 from '../../../img/Wedding/Wedding_15_3.png'
import weddingCard4 from '../../../img/Wedding/Wedding_15_4.png'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
const EditCard73 = () => {
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
    sonOrDaughter: '',
    sonOf: '',
    parents1: '',
    grandSonOf: '',
    grandParents1: '',
    daughterOf: '',
    parents2: '',
    grandDaughterOf: '',
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
    venue5: '',
    function6: '',
    date6: '',
    venue6: ''
  })
  const [fourthPageData, setFourthPageData] = useState({
    venue: '',
    rsvp: '',
    _rsvp1: '',
    _rsvp2: '',
    date: ''
  })

  useEffect(() => {
    if (textdata) {
      setFirstPageData({
        name1: textdata[0]?.name1 ?? '',
        name2: textdata[0]?.name2 ?? '',
        date: textdata[0]?._date ?? ''
      })
      setSecondPageData({
        message: textdata[1]?.message ?? '',

        sonOrDaughter: textdata[1]?.sonOrDaughter ?? '',
        sonOf: textdata[1]?.sonOf ?? '',
        parents1: textdata[1]?.parents1 ?? '',
        grandSonOf: textdata[1]?.grandSonOf ?? '',
        grandParents1: textdata[1]?.grandParents1 ?? '',
        daughterOf: textdata[1]?.daughterOf ?? '',
        parents2: textdata[1]?.parents2 ?? '',
        grandDaughterOf: textdata[1]?.grandDaughterOf ?? '',
        grandParents2: textdata[1]?.grandParents2 ?? ''
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
        venue5: textdata[2]?.venue5 ?? '',
        function6: textdata[2]?.function6 ?? '',
        date6: textdata[2]?.date6 ?? '',
        venue6: textdata[2]?.venue6 ?? ''
      })
      setFourthPageData({
        venue: textdata[3]?.venue ?? '',
        rsvp: textdata[3]?.rsvp ?? '',
        _rsvp1: textdata[3]?._rsvp1 ?? '',
        _rsvp2: textdata[3]?._rsvp2 ?? '',
        date: textdata[3]?.date ?? ''
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
    textData1 = ['name1', 'name2', 'date', textdata[0]?.name1 ?? '', textdata[0]?.name2 ?? '', textdata[0]?._date ?? '']

    textData2 = [
      'message',
      'sonOrDaughter',
      'sonOf',
      'parents1',
      'grandSonOf',
      'grandParents1',
      'daughterOf',
      'parents2',
      'grandDaughterOf',
      'grandParents2',
      textdata[1]?.message ?? '',

      textdata[1]?.sonOrDaughter ?? '',
      textdata[1]?.sonOf ?? '',
      textdata[1]?.parents1 ?? '',
      textdata[1]?.grandSonOf ?? '',
      textdata[1]?.grandParents1 ?? '',
      textdata[1]?.daughterOf ?? '',
      textdata[1]?.parents2 ?? '',
      textdata[1]?.grandDaughterOf ?? '',
      textdata[1]?.grandParents2 ?? ''
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
      'function6',
      'date6',
      'venue6',
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
      textdata[2]?.venue5 ?? '',
      textdata[2]?.function6 ?? '',
      textdata[2]?.date6 ?? '',
      textdata[2]?.venue6 ?? ''
    ]
    textData4 = [
      'venue',
      'rsvp',
      '_rsvp1',
      '_rsvp2',
      'date',
      textdata[3]?.venue ?? '',
      textdata[3]?.rsvp ?? '',
      textdata[3]?._rsvp1 ?? '',
      textdata[3]?._rsvp2 ?? '',
      textdata[3]?.date ?? ''
    ]

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

    let sonOf = secondPageData?.sonOf?.toString() ?? ''
    let sonOrDaughter = secondPageData?.sonOrDaughter?.toString() ?? ''
    let parents1 = secondPageData?.parents1?.toString() ?? ''
    let grandSonOf = secondPageData?.grandSonOf?.toString() ?? ''
    let grandParents1 = secondPageData?.grandParents1?.toString() ?? ''
    let daughterOf = secondPageData?.daughterOf?.toString() ?? ''
    let parents2 = secondPageData?.parents2?.toString() ?? ''
    let grandDaughterOf = secondPageData?.grandDaughterOf?.toString() ?? ''
    let grandParents2 = secondPageData?.grandParents2?.toString() ?? ''
    let function1 = thirdPageData?.function1?.toString() ?? ''
    let function2 = thirdPageData?.function2?.toString() ?? ''
    let function3 = thirdPageData?.function3?.toString() ?? ''
    let function4 = thirdPageData?.function4?.toString() ?? ''
    let function5 = thirdPageData?.function5?.toString() ?? ''
    let function6 = thirdPageData?.function6?.toString() ?? ''
    let date1 = thirdPageData?.date1?.toString() ?? ''
    let date2 = thirdPageData?.date2?.toString() ?? ''
    let date3 = thirdPageData?.date3?.toString() ?? ''
    let date4 = thirdPageData?.date4?.toString() ?? ''
    let date5 = thirdPageData?.date5?.toString() ?? ''
    let date6 = thirdPageData?.date6?.toString() ?? ''
    let venue1 = thirdPageData?.venue1?.toString() ?? ''
    let venue2 = thirdPageData?.venue2?.toString() ?? ''
    let venue3 = thirdPageData?.venue3?.toString() ?? ''
    let venue4 = thirdPageData?.venue4?.toString() ?? ''
    let venue5 = thirdPageData?.venue5?.toString() ?? ''
    let venue6 = thirdPageData?.venue6?.toString() ?? ''
    let date = fourthPageData?.date?.toString() ?? ''

    let venue = fourthPageData?.venue?.toString() ?? ''
    let rsvp = fourthPageData?.rsvp?.toString() ?? ''
    let _rsvp1 = fourthPageData?._rsvp1?.toString() ?? ''
    let _rsvp2 = fourthPageData?._rsvp2?.toString() ?? ''
    let details
    details = [
      { name1, name2, _date },
      {
        message,
        name1,
        sonOf,
        parents1,
        grandSonOf,
        grandParents1,
        name2,
        daughterOf,
        parents2,
        grandDaughterOf,
        grandParents2
      },
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
        venue5,
        function6,
        date6,
        venue6
      },
      { venue, rsvp, _rsvp1, _rsvp2, date }
    ]

    let card_id = cardData.cardId
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/weddingcard12`, {
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
        maxCharsPerLine: 40
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

                    height: '100%',
                    padding: '100px 0 100px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <h1
                    data-bs-toggle="modal"
                    data-bs-target="#id1"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      paddingTop: '190px',
                      color: '#ff9600',
                      fontFamily: 'great-vibes'
                    }}
                  >
                    {' '}
                    {firstPageData.name1}
                  </h1>

                  <h1
                    data-bs-toggle="modal"
                    data-bs-target="#id2"
                    style={{
                      paddingTop: '70px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#ff9600',
                      marginTop: '100px',
                      fontFamily: 'great-vibes'
                    }}
                  >
                    {firstPageData.name2}
                  </h1>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id3"
                    style={{
                      paddingTop: '30px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#fff',
                      fontFamily: 'microsoft-new-tai-lue'
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

                    color: '#ebd0ab',
                    height: '100%',
                    padding: '250px 0 40px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id4"
                    style={{
                      margin: 'auto',
                      fontFamily: 'minion-pro-regular'
                    }}
                  >
                    {secondPageData.message}
                  </h6>

                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id1"
                    style={{
                      margin: 'auto',
                      fontFamily: 'lucida-sans-demi',
                      color: '#ff9300',
                      marginTop: '20px'
                    }}
                  >
                    {' '}
                    {firstPageData.name1}
                  </h3>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id5"
                    style={{
                      paddingTop: '5px',

                      fontFamily: 'minion-pro-regular'
                    }}
                  >
                    {' '}
                    {secondPageData.sonOf}
                  </h6>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id6"
                    style={{
                      margin: 'auto',

                      fontFamily: 'gadugi'
                    }}
                  >
                    {' '}
                    {secondPageData.parents1}
                  </h5>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id7"
                    style={{
                      margin: 'auto',

                      fontFamily: 'minion-pro-regular'
                    }}
                  >
                    {' '}
                    {secondPageData.grandSonOf}
                  </h6>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id8"
                    style={{
                      margin: 'auto',

                      fontFamily: 'gadugi'
                    }}
                  >
                    {' '}
                    {secondPageData.grandParents1}
                  </h5>
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id9"
                    style={{
                      paddingTop: '20px',

                      margin: 'auto',
                      color: '#ff9300',
                      fontFamily: 'lucida-sans-demi'
                    }}
                  >
                    {' '}
                    {firstPageData.name2}
                  </h3>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id10"
                    style={{
                      margin: 'auto',

                      fontFamily: 'minion-pro-regular'
                    }}
                  >
                    {' '}
                    {secondPageData.daughterOf}
                  </h6>

                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id11"
                    style={{
                      margin: 'auto',

                      fontFamily: 'gadugi'
                    }}
                  >
                    {secondPageData.parents2}
                  </h5>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id12"
                    style={{
                      margin: 'auto',

                      fontFamily: 'minion-pro-regular'
                    }}
                  >
                    {secondPageData.grandDaughterOf}
                  </h6>

                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id13"
                    style={{
                      margin: 'auto',

                      fontFamily: 'gadugi'
                    }}
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
                    fontFamily: 'minion-pro-regular',
                    color: '#ebd0ab',
                    height: '100%',
                    padding: '150px 0 100px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <h4
                    data-bs-toggle="modal"
                    data-bs-target="#id14"
                    style={{
                      maxWidth: '350px',
                      paddingTop: '10px',
                      margin: 'auto',
                      color: '#ffae00',
                      fontFamily: 'minion-pro-semibold'
                    }}
                  >
                    {' '}
                    {thirdPageData.function1}
                  </h4>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id15"
                    style={{
                      maxWidth: '300px',
                      margin: 'auto'
                    }}
                  >
                    {thirdPageData.date1}
                  </h6>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id16"
                    style={{
                      maxWidth: '300px',
                      margin: 'auto'
                    }}
                  >
                    {thirdPageData.venue1}
                  </h6>
                  <h4
                    data-bs-toggle="modal"
                    data-bs-target="#id17"
                    style={{
                      maxWidth: '350px',
                      paddingTop: '20px',
                      margin: 'auto',
                      color: '#ffae00',
                      fontFamily: 'minion-pro-semibold'
                    }}
                  >
                    {' '}
                    {thirdPageData.function2}
                  </h4>
                  <h6 data-bs-toggle="modal" data-bs-target="#id18" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date2}
                  </h6>
                  <h6 data-bs-toggle="modal" data-bs-target="#id19" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.venue2}
                  </h6>
                  <h4
                    data-bs-toggle="modal"
                    data-bs-target="#id20"
                    style={{
                      maxWidth: '350px',
                      paddingTop: '20px',
                      margin: 'auto',
                      color: '#ffae00',
                      fontFamily: 'minion-pro-semibold'
                    }}
                  >
                    {' '}
                    {thirdPageData.function3}
                  </h4>
                  <h6 data-bs-toggle="modal" data-bs-target="#id21" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date3}
                  </h6>
                  <h6 data-bs-toggle="modal" data-bs-target="#id22" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.venue3}
                  </h6>
                  <h4
                    data-bs-toggle="modal"
                    data-bs-target="#id23"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#ffae00',
                      paddingTop: '20px',
                      fontFamily: 'minion-pro-semibold'
                    }}
                  >
                    {' '}
                    {thirdPageData.function4}
                  </h4>
                  <h6 data-bs-toggle="modal" data-bs-target="#id24" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date4}
                  </h6>
                  <h6 data-bs-toggle="modal" data-bs-target="#id25" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.venue4}
                  </h6>
                  <h4
                    data-bs-toggle="modal"
                    data-bs-target="#id26"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#ffae00',
                      paddingTop: '20px',
                      fontFamily: 'minion-pro-semibold'
                    }}
                  >
                    {' '}
                    {thirdPageData.function5}
                  </h4>
                  <h6 data-bs-toggle="modal" data-bs-target="#id27" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date5}
                  </h6>
                  <h6 data-bs-toggle="modal" data-bs-target="#id28" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.venue5}
                  </h6>
                  <h4
                    data-bs-toggle="modal"
                    data-bs-target="#id29"
                    style={{
                      paddingTop: '10px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#ffae00',
                      fontFamily: 'minion-pro-semibold'
                    }}
                  >
                    {thirdPageData.function6}
                  </h4>
                  <h6 data-bs-toggle="modal" data-bs-target="#id30" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date6}
                  </h6>
                  <h6 data-bs-toggle="modal" data-bs-target="#id31" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.venue6}
                  </h6>
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

                    height: '100%',
                    padding: '250px 0 100px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id32"
                    style={{
                      paddingTop: '100px',
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#ebd0ab',
                      fontFamily: 'myriad-pro-regular'
                    }}
                  >
                    {' '}
                    {fourthPageData.venue}
                  </h3>

                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id33"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#ff7800',
                      fontFamily: 'romelio'
                    }}
                  >
                    {fourthPageData.rsvp}
                  </h5>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id34"
                    style={{
                      paddingTop: '10px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#fff',
                      fontFamily: 'myriad-pro-regular'
                    }}
                  >
                    {fourthPageData._rsvp1}
                  </h5>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id35"
                    style={{
                      paddingTop: '10px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#fff',
                      fontFamily: 'myriad-pro-regular'
                    }}
                  >
                    {fourthPageData._rsvp2}
                  </h5>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id36"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#ff7800',
                      fontFamily: 'romelio'
                    }}
                  >
                    {fourthPageData.date}
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
                let value = SecondPageData[index + 10]

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
              key={index + 14}
              id={`id${index + 14}`}
              onClick={() => {
                let name = ThirdPageData[index]
                let value = ThirdPageData[index + 18]

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
              key={index + 32}
              id={`id${index + 32}`}
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
export default EditCard73
