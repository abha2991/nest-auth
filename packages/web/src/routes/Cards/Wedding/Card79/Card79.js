import React, { useState } from 'react'
import Header from '../../../Header'
import weddingCard1 from '../../../img/Wedding/Wedding_20_1.png'
import weddingCard2 from '../../../img/Wedding/Wedding_20_2.png'
import weddingCard3 from '../../../img/Wedding/Wedding_20_3.png'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const Card79 = () => {
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
    name1: 'Simarpreet',
    name2: 'Mandeep',
    date: '16 DECEMBER 2022'
  })
  const [secondPageData, setSecondPageData] = useState({
    grandParents: 'MR. JASBIR KAUR  &  MRS. SURJEET KAUR',
    message: 'Grand Daughter',
    brideOrGroomName: 'Simarpreet  Kaur',
    parents1: 'D /O  Mr Harpreet Kaur  &  Mrs Sunpreet Kaur',
    groomOrBrideName: 'Mandeep Kaur',
    parents2: 'S/O MR. AMARJEET KAUR & MRS. KAMALJEET AHLUWALIA',
    date: '16 DECEMBER 2022',
    venue: 'AT HOTEL BROOKLYN  MALVIYA NAGAR  SOUTH ROAD \n' + 'NEW DELHI'
  })

  const [thirdPageData, setThirdPageData] = useState({
    function1: 'Shagun ( At Home)',
    date1: '15 Dec 2022, 10:00 AM',
    function2: 'Reception Of Baraat',
    date2: '16 Dec 2022, 10:00 AM',
    function3: 'Anand Karaj',
    date3: '6 Dec 2022, 11:30 AM',
    function4: 'Wedding Lunch On',
    date4: '16 Dec 2022, 1: 00 PM',
    function5: 'Doli',
    date5: '6 Dec 2022, 5:00PM',
    rsvp: 'RSVP',
    name1: 'Mr. Gurdyal Singh',
    name2: 'Mr.  Simerjeet Singh',
    name3: 'Mr. KamalJeet Singh',
    name4: 'Mr. Mandeep Singh'
  })

  const FirstPageData = ['name1', 'name2', 'date', 'Simarpreet', 'Mandeep', '16 DECEMBER 2022']

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
    'Simarpreet  Kaur',
    'D /O  Mr Harpreet Kaur  &  Mrs Sunpreet Kaur',
    'Mandeep Kaur',
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
    'Reception Of Baraat',
    '16 Dec 2022, 10:00 AM',
    'Anand Karaj',
    '6 Dec 2022, 11:30 AM',
    'Wedding Lunch On',
    '16 Dec 2022, 1: 00 PM',
    'Doli',
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

    let date = firstPageData?.date?.toString() ?? ''
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
      { name1, _with, name2, date },
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
    const res = await fetch(`http://localhost:3001/api/card1/weddingcard5`, {
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
        maxCharsPerLine: 36
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
                      paddingTop: '10px',
                      maxWidth: '300px',
                      margin: 'auto',

                      marginTop: '100px'
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
                      paddingTop: '10px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#b17520',
                      fontFamily: 'agaramond-pro-bold',
                      marginTop: '100px'
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
                  height: '100%',
                  padding: '250px 0 40px',
                  backgroundSize: '100% 100%'
                }}
              >
                <div className="editable" {...hover4}>
                  <h6
                    className="card12-text"
                    data-bs-toggle="modal"
                    data-bs-target="#id4"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',

                      color: '#b2893b'
                    }}
                  >
                    {' '}
                    {secondPageData.grandParents}
                  </h6>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>

                <p style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto', color: '#e0c264' }}>
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
                      color: '#ad8336',
                      fontFamily: 'franklin-gothic-regular'
                    }}
                  >
                    {secondPageData.brideOrGroomName}
                  </h3>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover7}>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id7"
                    style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto', color: '#b48b3c' }}
                  >
                    {secondPageData.parents1}
                  </h6>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>

                <h5
                  data-bs-toggle="modal"
                  data-bs-target="#id7"
                  style={{
                    paddingTop: '10px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#e1c266',
                    fontFamily: 'great-vibes'
                  }}
                >
                  With
                </h5>
                <div className="editable" {...hover8}>
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id8"
                    style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto', color: '#ad8336' }}
                  >
                    {secondPageData.groomOrBrideName}
                  </h3>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>

                <div className="editable" {...hover9}>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id9"
                    style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto', color: '#b48b3c' }}
                  >
                    {secondPageData.parents2}
                  </h6>
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
                      color: '#a1742c',
                      fontFamily: 'agaramond-pro-bold'
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
                      color: '#af8943',
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
                  fontFamily: 'franklin-gothic-regular',
                  color: '#cba751',
                  height: '100%',
                  padding: '250px 0 40px',
                  backgroundSize: '100% 100%'
                }}
              >
                <div className="editable" {...hover12}>
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id12"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#84551b'
                    }}
                  >
                    {' '}
                    {thirdPageData.function1}
                  </h3>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover13}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id13"
                    style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto' }}
                  >
                    {thirdPageData.date1}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover14}>
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id14"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#84551b'
                    }}
                  >
                    {' '}
                    {thirdPageData.function2}
                  </h3>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover15}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id15"
                    style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto' }}
                  >
                    {thirdPageData.date2}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover16}>
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id16"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#84551b'
                    }}
                  >
                    {' '}
                    {thirdPageData.function3}
                  </h3>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover17}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id17"
                    style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto' }}
                  >
                    {thirdPageData.date3}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover18}>
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id18"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#84551b'
                    }}
                  >
                    {' '}
                    {thirdPageData.function4}
                  </h3>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover19}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id19"
                    style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto' }}
                  >
                    {thirdPageData.date4}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover20}>
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id20"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#84551b'
                    }}
                  >
                    {' '}
                    {thirdPageData.function5}
                  </h3>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover21}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id21"
                    style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto' }}
                  >
                    {thirdPageData.date5}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover22}>
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id22"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#84551b'
                    }}
                  >
                    {' '}
                    {thirdPageData.rsvp}
                  </h3>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover23}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id23"
                    style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto' }}
                  >
                    {thirdPageData.name1}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover24}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id24"
                    style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto' }}
                  >
                    {thirdPageData.name2}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover25}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id25"
                    style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto' }}
                  >
                    {thirdPageData.name3}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover26}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id26"
                    style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto' }}
                  >
                    {thirdPageData.name4}
                  </h5>
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

export default Card79
