import React, { useState } from 'react'
import Header from '../../../Header'
import weddingCard1 from '../../../img/Wedding/Wedding_10_1.png'
import weddingCard2 from '../../../img/Wedding/Wedding_10_2.png'
import weddingCard3 from '../../../img/Wedding/Wedding_10_3.png'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const Card67 = () => {
  const navigate = useNavigate()
  const id = useQueryParams()
  const { id: id2 } = id

  const { data: profile, status } = useProfileApi()
  const [loading, setLoading] = useState(false)
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
  const hover9 = useHover({ border: '2px solid #ffd167' })
  const hover10 = useHover({ border: '2px solid #ffd167' })
  const hover11 = useHover({ border: '2px solid #ffd167' })
  const hover12 = useHover({ border: '2px solid #ffd167' })
  const hover13 = useHover({ border: '2px solid #ffd167' })
  const hover14 = useHover({ border: '2px solid #ffd167' })
  const hover15 = useHover({ border: '2px solid #ffd167' })
  const hover16 = useHover({ border: '2px solid #ffd167' })
  const hover17 = useHover({ border: '2px solid #ffd167' })
  const hover18 = useHover({ border: '2px solid #ffd167' })
  const hover19 = useHover({ border: '2px solid #ffd167' })
  const hover20 = useHover({ border: '2px solid #ffd167' })
  const hover21 = useHover({ border: '2px solid #ffd167' })
  const hover22 = useHover({ border: '2px solid #ffd167' })
  const hover23 = useHover({ border: '2px solid #ffd167' })
  const hover24 = useHover({ border: '2px solid #ffd167' })
  const hover25 = useHover({ border: '2px solid #ffd167' })
  const hover26 = useHover({ border: '2px solid #ffd167' })
  const hover27 = useHover({ border: '2px solid #ffd167' })
  const hover28 = useHover({ border: '2px solid #ffd167' })
  const hover29 = useHover({ border: '2px solid #ffd167' })

  const [firstPageData, setFirstPageData] = useState({
    name1: 'SIMARPREET',
    name2: 'MANDEEP',
    date: '16 DECEMBER 2022'
  })
  const [secondPageData, setSecondPageData] = useState({
    grandParents: 'MR. JASBIR KAUR  &  MRS. SURJEET KAUR',
    message: 'Grand Daughter',
    brideOrGroomName: 'SIMARPREET  KAUR',
    parents1: 'D /O  Mr Harpreet Kaur  &  Mrs Sunpreet Kaur',
    groomOrBrideName: 'MANDEEP KAUR',
    parents2: 'S/O MR. AMARJEET KAUR & MRS. KAMALJEET AHLUWALIA',
    date: '16 DECEMBER 2022',
    venue: 'AT HOTEL BROOKLYN  MALVIYA NAGAR  SOUTH ROAD \n' + 'NEW DELHI'
  })

  const [thirdPageData, setThirdPageData] = useState({
    function1: 'Shagun ( At Home)',
    date1: '15 Dec 2022, 10:00 AM',
    function2: 'RECEPTION OF BARAAT',
    date2: '16 Dec 2022, 10:00 AM',
    function3: 'ANAND KARAJ',
    date3: '6 Dec 2022, 11:30 AM',
    function4: 'WEDDING LUNCH ON',
    date4: '16 Dec 2022, 1: 00 PM',
    function5: 'DOLI',
    date5: '6 Dec 2022, 5:00PM',
    rsvp: 'RSVP',
    name1: 'Mr. Gurdyal Singh',
    name2: 'Mr.  Simerjeet Singh',
    name3: 'Mr. KamalJeet Singh',
    name4: 'Mr. Mandeep Singh'
  })

  const FirstPageData = ['name1', 'name2', 'date', 'SIMARPREET', 'MANDEEP', '16 DECEMBER 2022']

  const SecondPageData = [
    'grandParents',
    'message',
    'brideOrGroomName',
    'parents1',
    'groomOrBrideName',
    'parents2',
    'date',
    'venue',
    'MR. JASBIR KAUR  &  MRS. SURJEET KAUR',
    'Grand Daughter',
    'SIMARPREET  KAUR',
    'D /O  Mr Harpreet Kaur  &  Mrs Sunpreet Kaur',
    'MANDEEP KAUR',
    'S/O MR. AMARJEET KAUR & MRS. KAMALJEET AHLUWALIA',
    '16 DECEMBER 2022',
    'AT HOTEL BROOKLYN  MALVIYA NAGAR  SOUTH ROAD \n' + 'NEW DELHI'
  ]

  const ThirdPageData = [
    'function1',
    'date1',

    'function2',
    'date2',

    'function3',
    'date3',

    'function4',
    'date4',
    'function5',
    'date5',
    'rsvp',
    'name1',
    'name2',
    'name3',
    'name4',
    'Shagun ( At Home)',
    '15 Dec 2022, 10:00 AM',
    'RECEPTION OF BARAAT',
    '16 Dec 2022, 10:00 AM',
    'ANAND KARAJ',
    '6 Dec 2022, 11:30 AM',
    'WEDDING LUNCH ON',
    '16 Dec 2022, 1: 00 PM',
    'DOLI',
    '6 Dec 2022, 5:00PM',
    'RSVP',
    'Mr. Gurdyal Singh',
    'Mr. Simerjeet Singh',
    'Mr. KamalJeet Singh',
    'Mr. Mandeep Singh'
  ]

  let weddingFirstPageCardData = []
  weddingFirstPageCardData = Object.entries(firstPageData)
  let weddingSecondPageCardData = []
  weddingSecondPageCardData = Object.entries(secondPageData)
  let weddingThirdPageCardData = []
  weddingThirdPageCardData = Object.entries(thirdPageData)

  const PostData = async (e) => {
    e.preventDefault()

    let name1 = firstPageData.name1?.toString() ?? ''
    let name2 = firstPageData.name2?.toString() ?? ''
    let _date = firstPageData.date?.toString() ?? ''
    let date = secondPageData?.date?.toString() ?? ''
    let grandParents = secondPageData?.grandParents?.toString() ?? ''
    let brideOrGroomName = secondPageData?.brideOrGroomName?.toString() ?? ''
    let parents1 = secondPageData?.parents1?.toString() ?? ''
    let groomOrBrideName = secondPageData?.groomOrBrideName?.toString() ?? ''
    let parents2 = secondPageData?.parents2?.toString() ?? ''
    let venue = secondPageData?.venue?.toString() ?? ''

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
    let rsvp = thirdPageData?.rsvp?.toString() ?? ''
    let _name1 = thirdPageData?.name1?.toString() ?? ''
    let _name2 = thirdPageData?.name2?.toString() ?? ''
    let _name3 = thirdPageData?.name3?.toString() ?? ''
    let _name4 = thirdPageData?.name4?.toString() ?? ''
    let _with = 'With'
    let message =
      'Request The Honor Of  Your Presence  At The Wedding Ceremony Of Their ' + secondPageData?.message?.toString() ??
      ''

    let details

    details = [
      { name1, name2, _date },
      { grandParents, message, brideOrGroomName, parents1, _with, groomOrBrideName, parents2, date, venue },
      {
        function1,
        date1,

        function2,
        date2,

        function3,
        date3,

        function4,
        date4,
        function5,
        date5,
        rsvp,
        _name1,
        _name2,
        _name3,
        _name4
      }
    ]
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/weddingcard13`, {
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
        maxCharsPerLine: 42
      })
    })

    const card_data = await res.json()

    if ((card_data.status = 'Success')) {
      setLoading(false)
      navigate(`/preview?id=${card_data.createdCardId}`)
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
                  fontFamily: 'georgia',
                  color: '#981c3c',
                  height: '100%',
                  padding: '290px 0 40px',
                  backgroundSize: '100% 100%'
                }}
              >
                <div className="editable" {...hover1}>
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id1"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto'
                    }}
                  >
                    {' '}
                    {firstPageData.name1}
                  </h3>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover2}>
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id2"
                    style={{
                      paddingTop: '140px',
                      maxWidth: '300px',
                      margin: 'auto'
                    }}
                  >
                    {firstPageData.name2}
                  </h3>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover3}>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id3"
                    style={{
                      paddingTop: '30px',
                      maxWidth: '300px',
                      margin: 'auto',
                      fontFamily: 'agaramond-pro-bold'
                    }}
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
                  background: `url(${weddingCard2}) no-repeat center/contain`,
                  textAlign: 'center',
                  width: '100%',
                  fontFamily: 'georgia-bold',
                  color: '#911e3e',
                  height: '100%',
                  padding: '250px 0 40px',
                  backgroundSize: '100% 100%'
                }}
              >
                <div className="editable" {...hover4}>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id4"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#911e3e',
                      fontFamily: 'georgia-bold'
                    }}
                  >
                    {' '}
                    {secondPageData.grandParents}
                  </h6>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>

                <p style={{ color: '#a82047', maxWidth: '300px', margin: 'auto', fontFamily: 'georgia-bold' }}>
                  Request The Honor Of Your Presence At The Wedding Ceremony Of Their{' '}
                  <div className="editable" {...hover5}>
                    <span data-bs-toggle="modal" data-bs-target="#id5">
                      {secondPageData.message}
                    </span>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                </p>
                <div className="editable" {...hover6}>
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id6"
                    style={{
                      paddingTop: '30px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#7a1537',
                      fontFamily: 'franklin-gothic-regular'
                    }}
                  >
                    {secondPageData.brideOrGroomName}
                  </h3>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover7}>
                  <p
                    data-bs-toggle="modal"
                    data-bs-target="#id7"
                    style={{
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#a82047',
                      fontFamily: 'georgia-bold'
                    }}
                  >
                    {secondPageData.parents1}
                  </p>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>

                <h4
                  data-bs-toggle="modal"
                  data-bs-target="#id7"
                  style={{
                    paddingTop: '20px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#a82047',
                    fontFamily: 'great-vibes'
                  }}
                >
                  With
                </h4>
                <div className="editable" {...hover8}>
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id8"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#7a1537',
                      fontFamily: 'franklin-gothic-regular'
                    }}
                  >
                    {secondPageData.groomOrBrideName}
                  </h3>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>

                <div className="editable" {...hover9}>
                  <p
                    data-bs-toggle="modal"
                    data-bs-target="#id9"
                    style={{
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#a82047',
                      fontFamily: 'georgia-bold'
                    }}
                  >
                    {secondPageData.parents2}
                  </p>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover10}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id10"
                    style={{
                      paddingTop: '10px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#a82047',
                      fontFamily: 'gadugi-bold'
                    }}
                  >
                    {secondPageData.date}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover11}>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id11"
                    style={{
                      paddingTop: '10px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#a82047',
                      fontFamily: 'gadugi-bold'
                    }}
                  >
                    {secondPageData.venue}
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
                  background: `url(${weddingCard3}) no-repeat center/contain`,
                  textAlign: 'center',
                  width: '100%',
                  fontFamily: 'gadugi-bold',
                  color: '#a82047',
                  height: '100%',
                  padding: '250px 0 40px',
                  backgroundSize: '100% 100%'
                }}
              >
                <div className="editable" {...hover12}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id12"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'franklin-gothic-regular',
                      color: '#991737'
                    }}
                  >
                    {' '}
                    {thirdPageData.function1}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover13}>
                  <h6 data-bs-toggle="modal" data-bs-target="#id13" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date1}
                  </h6>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover14}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id14"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'franklin-gothic-regular',
                      color: '#991737'
                    }}
                  >
                    {' '}
                    {thirdPageData.function2}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover15}>
                  <h6 data-bs-toggle="modal" data-bs-target="#id15" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date2}
                  </h6>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover16}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id16"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'franklin-gothic-regular',
                      color: '#991737'
                    }}
                  >
                    {' '}
                    {thirdPageData.function3}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover17}>
                  <h6 data-bs-toggle="modal" data-bs-target="#id17" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date3}
                  </h6>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover18}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id18"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'franklin-gothic-regular',
                      color: '#991737'
                    }}
                  >
                    {' '}
                    {thirdPageData.function4}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover19}>
                  <h6 data-bs-toggle="modal" data-bs-target="#id19" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date4}
                  </h6>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover20}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id20"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'franklin-gothic-regular',
                      color: '#991737'
                    }}
                  >
                    {' '}
                    {thirdPageData.function5}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover21}>
                  <h6 data-bs-toggle="modal" data-bs-target="#id21" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date5}
                  </h6>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover22}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id22"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'franklin-gothic-regular',
                      color: '#991737'
                    }}
                  >
                    {' '}
                    {thirdPageData.rsvp}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover23}>
                  <h6 data-bs-toggle="modal" data-bs-target="#id23" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.name1}
                  </h6>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover24}>
                  <h6 data-bs-toggle="modal" data-bs-target="#id24" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.name2}
                  </h6>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover25}>
                  <h6 data-bs-toggle="modal" data-bs-target="#id25" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.name3}
                  </h6>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover26}>
                  <h6 data-bs-toggle="modal" data-bs-target="#id26" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.name4}
                  </h6>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
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
              let value = SecondPageData[index + 8]

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
            key={index + 12}
            id={`id${index + 12}`}
            onClick={() => {
              let name = ThirdPageData[index]
              let value = ThirdPageData[index + 15]

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

export default Card67
