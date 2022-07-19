import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'
import weddingCard1 from '../../../img/Wedding/Wedding_10_1.png'
import weddingCard2 from '../../../img/Wedding/Wedding_10_2.png'
import weddingCard3 from '../../../img/Wedding/Wedding_10_3.png'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
const EditCard67 = () => {
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
    grandParents: '',
    message: '',
    brideOrGroomName: '',
    parents1: '',
    groomOrBrideName: '',
    parents2: '',
    date: '',
    venue: ''
  })

  const [thirdPageData, setThirdPageData] = useState({
    function1: '',
    date1: '',

    function2: '',
    date2: '',

    function3: '',
    date3: '',

    function4: '',
    date4: '',

    function5: '',
    date5: '',

    rsvp: '',
    name1: '',
    name2: '',
    name3: '',
    name4: ''
  })

  useEffect(() => {
    if (textdata) {
      setFirstPageData({
        name1: textdata[0]?.name1 ?? '',
        name2: textdata[0]?.name2 ?? '',
        date: textdata[0]?._date ?? ''
      })
      setSecondPageData({
        grandParents: textdata[1]?.grandParents1 ?? '',
        message: textdata[1]?.message ?? '',
        brideOrGroomName: textdata[1]?.brideOrGroomName ?? '',
        parents1: textdata[1]?.parents1 ?? '',
        groomOrBrideName: textdata[1]?.groomOrBrideName ?? '',
        parents2: textdata[1]?.parents2 ?? '',
        date: textdata[1]?.date ?? '',
        venue: textdata[1]?.venue ?? ''
      })
      setThirdPageData({
        function1: textdata[2]?.function1 ?? '',
        date1: textdata[2]?.date1 ?? '',

        function2: textdata[2]?.function2 ?? '',
        date2: textdata[2]?.date2 ?? '',

        function3: textdata[2]?.function3 ?? '',
        date3: textdata[2]?.date3 ?? '',

        function4: textdata[2]?.function4 ?? '',
        date4: textdata[2]?.date14 ?? '',

        function5: textdata[2]?.function5 ?? '',
        date5: textdata[2]?.date5 ?? '',
        rsvp: textdata[2]?.rsvp ?? '',
        name1: textdata[2]?._name1 ?? '',
        name2: textdata[2]?._name2 ?? '',
        name3: textdata[2]?._name3 ?? '',
        name4: textdata[2]?._name4 ?? ''
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
      'grandParents',
      'message',
      'brideOrGroomName',
      'parents1',
      'groomOrBrideName',
      'parents2',
      'date',
      'venue',
      textdata[1]?.grandParents ?? '',

      textdata[1]?.message ?? '',
      textdata[1]?.brideOrGroomName ?? '',
      textdata[1]?.parents1 ?? '',
      textdata[1]?.groomOrBrideName ?? '',

      textdata[1]?.parents2 ?? '',
      textdata[1]?.date ?? '',
      textdata[1]?.venue ?? ''
    ]

    textData3 = [
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

      textdata[2]?.function1 ?? '',
      textdata[2]?.date1 ?? '',

      textdata[2]?.function2 ?? '',
      textdata[2]?.date2 ?? '',

      textdata[2]?.function3 ?? '',
      textdata[2]?.date3 ?? '',

      textdata[2]?.function4 ?? '',
      textdata[2]?.date4 ?? '',

      textdata[2]?.function5 ?? '',
      textdata[2]?.date5 ?? '',
      textdata[2]?.rsvp ?? '',
      textdata[2]?._name1 ?? '',
      textdata[2]?._name2 ?? '',
      textdata[2]?._name3 ?? '',
      textdata[2]?._name4 ?? ''
    ]

    weddingFirstPageCardData = Object.entries(firstPageData)

    weddingSecondPageCardData = Object.entries(secondPageData)
    weddingThirdPageCardData = Object.entries(thirdPageData)
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

    let message = secondPageData?.message?.toString() ?? ''

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

    let card_id = cardData.cardId
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/weddingcard13`, {
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
        maxCharsPerLine: 36
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
                    fontFamily: 'georgia',
                    color: '#981c3c',
                    height: '100%',
                    padding: '290px 0 40px',
                    backgroundSize: '100% 100%'
                  }}
                >
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

                  <h7
                    data-bs-toggle="modal"
                    data-bs-target="#id5"
                    style={{ color: '#a82047', maxWidth: '300px', margin: 'auto', fontFamily: 'georgia-bold' }}
                  >
                    {secondPageData.message}
                  </h7>
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

                  <h7
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
                  </h7>
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
                  <h7
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
                  </h7>
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

                  <h6 data-bs-toggle="modal" data-bs-target="#id13" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date1}
                  </h6>

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

                  <h6 data-bs-toggle="modal" data-bs-target="#id15" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date2}
                  </h6>

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

                  <h6 data-bs-toggle="modal" data-bs-target="#id17" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date3}
                  </h6>

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

                  <h6 data-bs-toggle="modal" data-bs-target="#id19" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date4}
                  </h6>
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

                  <h6 data-bs-toggle="modal" data-bs-target="#id21" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.date5}
                  </h6>
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

                  <h6 data-bs-toggle="modal" data-bs-target="#id23" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.name1}
                  </h6>
                  <h6 data-bs-toggle="modal" data-bs-target="#id24" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.name2}
                  </h6>
                  <h6 data-bs-toggle="modal" data-bs-target="#id25" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.name3}
                  </h6>
                  <h6 data-bs-toggle="modal" data-bs-target="#id26" style={{ maxWidth: '300px', margin: 'auto' }}>
                    {thirdPageData.name4}
                  </h6>
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
export default EditCard67
