import React, { useState } from 'react'
import Header from '../../../Header'
import weddingCard1 from '../../../img/Wedding/Wedding_3_1.png'
import weddingCard2 from '../../../img/Wedding/Wedding_3_2.png'
import weddingCard3 from '../../../img/Wedding/Wedding_3_3.png'
import weddingCard4 from '../../../img/Wedding/Wedding_3_4.png'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
const Card60 = () => {
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

  const [firstPageData, setFirstPageData] = useState({
    name1: 'EMRAAN KHAN',
    name2: 'AAISHA KHAN',
    date: '21 JULY 2022'
  })
  const [secondPageData, setSecondPageData] = useState({
    sonOrDaughter: 'SON',
    parents1: 'S/O Mr Ahmad Khan & Mrs Nazma Khan',
    grandParents1: 'GS/O Mr Eqbal Khan & Mrs Aarifa Khan',
    parents2: 'D/O Mr Salman Khan & Mrs Amina Khan',
    grandParents2: 'GD/O Mr Adil Khan & Mrs Aafreen Khan'
  })

  const [thirdPageData, setThirdPageData] = useState({
    function1: 'MEHENDI',
    date1: '19 July 2022, 6:00 PM Onwards',
    venue1: 'Hotel Brookyln, Malviya Nager, New Delhi',
    function2: 'BARAAT',
    date2: '21 July 2022, 5:00 PM',
    venue2: 'Hotel Brookyln, Malviya Nager, New Delhi',
    function3: 'NIKAAH',
    date3: '21 July 2022, 7:00 PM',
    venue3: 'Hotel Brookyln, Malviya Nager, New Delhi',
    function4: 'RUKHSAT',
    date4: '22 July 2022, 5:00 AM',
    venue4: 'Hotel Brookyln, Malviya Nager, New Delhi',
    function5: 'WALIMAH',
    date5: '22 July 2022, 7:00 PM Onwards',
    venue5: 'Hotel Brookyln, Malviya Nager, New Delhi'
  })
  const [fourthPageData, setFourthPageData] = useState({
    date: '21 JULY 2022',
    time: '8:00 PM ONWARDS',
    venue: 'Hotel Brookyln, Malviya Nager, New Delhi',
    rsvp: 'RSVP',
    _rsvp: 'Please Respond By 15 July 2022'
  })

  const FirstPageData = ['name1', 'name2', 'date', 'EMRAAN KHAN', 'AAISHA KHAN', '21 JULY 2022']

  const SecondPageData = [
    'sonOrDaughter',
    'parents1',
    'grandParents1',
    'parents2',
    'grandParents2',
    'SON',
    'S/O Mr Ahmad Khan & Mrs Nazma Khan',
    'GS/O Mr Eqbal Khan & Mrs Aarifa Khan',
    'D/O Mr Salman Khan & Mrs Amina Khan',
    'GD/O Mr Adil Khan & Mrs Aafreen Khan'
  ]

  const ThirdPageData = [
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
    'MEHENDI',
    '19 July 2022, 6:00 PM Onwards',
    'Hotel Brookyln, Malviya Nager, New Delhi',
    'BARAAT',
    '21 July 2022, 5:00 PM',
    'Hotel Brookyln, Malviya Nager, New Delhi',
    'NIKAAH',
    '21 July 2022, 7:00 PM',
    'Hotel Brookyln, Malviya Nager, New Delhi',
    'RUKHSAT',
    '22 July 2022, 5:00 AM',
    'Hotel Brookyln, Malviya Nager, New Delhi',
    'WALIMAH',
    '22 July 2022, 7:00 PM Onwards',
    'Hotel Brookyln, Malviya Nager, New Delhi'
  ]

  const FourthPageData = [
    'date',
    'time',
    'venue',
    'rsvp',
    '_rsvp',
    '21 JULY 2022',
    '8:00 PM ONWARDS',
    'Hotel Brookyln, Malviya Nager, New Delhi',
    'RSVP',
    'Please Respond By 15 July 2022'
  ]

  let weddingFirstPageCardData = []
  weddingFirstPageCardData = Object.entries(firstPageData)
  let weddingSecondPageCardData = []
  weddingSecondPageCardData = Object.entries(secondPageData)
  let weddingThirdPageCardData = []
  weddingThirdPageCardData = Object.entries(thirdPageData)
  let weddingFourthPageCardData = []
  weddingFourthPageCardData = Object.entries(fourthPageData)

  const PostData = async (e) => {
    e.preventDefault()
    let name1 = firstPageData.name1?.toString() ?? ''
    let name2 = firstPageData.name2?.toString() ?? ''
    let _date = firstPageData?.date?.toString() ?? ''
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
    let sonOrDaughter = secondPageData?.sonOrDaughter?.toString() ?? ''
    let message = `WE INVITE YOU FOR WEDDING OF OUR ${sonOrDaughter}`
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
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/weddingcard10`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id2,
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
                  style={{
                    maxWidth: '350px',
                    margin: 'auto',
                    color: '#ffce0a',
                    fontFamily: 'myriad-bold-bold'
                  }}
                >
                  WE INVITE YOU FOR WEDDING OF OUR
                  <span data-bs-toggle="modal" data-bs-target="#id4">
                    {secondPageData.sonOrDaughter}
                  </span>
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
                <h5 style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto', fontFamily: 'lucida-handwriting' }}>
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

      <div className="col-md-12 text-center mt-4">
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

export default Card60
