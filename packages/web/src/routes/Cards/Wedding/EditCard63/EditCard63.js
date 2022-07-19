import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'
import weddingCard1 from '../../../img/Wedding/Wedding_6_1.png'
import weddingCard2 from '../../../img/Wedding/Wedding_6_2.png'
import weddingCard3 from '../../../img/Wedding/Wedding_6_3.png'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
const EditCard63 = () => {
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
    name2: ''
  })
  const [secondPageData, setSecondPageData] = useState({
    date: '',
    time: '',
    venue: '',
    yours: '',
    family: ''
  })

  const [thirdPageData, setThirdPageData] = useState({
    function1: '',
    date1: '',
    function2: '',
    date2: '',
    function3: '',
    date3: '',
    function4: '',
    date4: ''
  })

  useEffect(() => {
    if (textdata) {
      setFirstPageData({
        name1: textdata[0]?.name1 ?? '',
        name2: textdata[0]?.name2 ?? ''
      })
      setSecondPageData({
        date: textdata[1]?.date ?? '',
        time: textdata[1]?.time ?? '',
        venue: textdata[1]?.venue ?? '',
        yours: textdata[1]?.yours ?? '',
        family: textdata[1]?.family ?? ''
      })
      setThirdPageData({
        function1: textdata[2]?.function1 ?? '',
        date1: textdata[2]?.date1 ?? '',

        function2: textdata[2]?.function2 ?? '',
        date2: textdata[2]?.date2 ?? '',

        function3: textdata[2]?.function3 ?? '',
        date3: textdata[2]?.date3 ?? '',

        function4: textdata[2]?.function4 ?? '',
        date4: textdata[2]?.date4 ?? ''
      })
    }
  }, [textdata])

  let textData1
  let textData2
  let textData3

  let weddingFirstPageCardData = []

  let weddingSecondPageCardData = []

  let weddingThirdPageCardData = []

  if (textdata) {
    textData1 = ['name1', 'name2', textdata[0]?.name1 ?? '', textdata[0]?.name2 ?? '']

    textData2 = [
      'date',
      'time',
      'venue',
      'yours',
      'family',
      textdata[1]?.date ?? '',

      textdata[1]?.time ?? '',
      textdata[1]?.venue ?? '',
      textdata[1]?.yours ?? '',
      textdata[1]?.family ?? ''
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

      textdata[2]?.function1 ?? '',
      textdata[2]?.date1 ?? '',

      textdata[2]?.function2 ?? '',
      textdata[2]?.date2 ?? '',

      textdata[2]?.function3 ?? '',
      textdata[2]?.date3 ?? '',

      textdata[2]?.function4 ?? '',
      textdata[2]?.date4 ?? ''
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

    let date = secondPageData?.date?.toString() ?? ''
    let time = secondPageData?.time?.toString() ?? ''
    let venue = secondPageData?.venue?.toString() ?? ''

    let yours = secondPageData?.yours?.toString() ?? ''
    let family = secondPageData?.family?.toString() ?? ''

    let function1 = thirdPageData?.function1?.toString() ?? ''
    let function2 = thirdPageData?.function2?.toString() ?? ''
    let function3 = thirdPageData?.function3?.toString() ?? ''
    let function4 = thirdPageData?.function4?.toString() ?? ''

    let date1 = thirdPageData?.date1?.toString() ?? ''
    let date2 = thirdPageData?.date2?.toString() ?? ''
    let date3 = thirdPageData?.date3?.toString() ?? ''
    let date4 = thirdPageData?.date4?.toString() ?? ''

    let details
    details = [
      { name1, name2 },
      { date, time, venue, yours, family },
      {
        function1,
        date1,

        function2,
        date2,

        function3,
        date3,

        function4,
        date4
      }
    ]

    let card_id = cardData.cardId
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/weddingcard2`, {
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
                    fontFamily: 'lucida-calligraphy',
                    color: '#2b2831',
                    height: '100%',
                    padding: '200px 0 300px',
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
                      paddingTop: '10px',
                      maxWidth: '300px',
                      margin: 'auto'
                    }}
                  >
                    {firstPageData.name2}
                  </h3>
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

                    height: '100%',
                    padding: '200px 0 200px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id3"
                    style={{
                      paddingTop: '150px',
                      fontFamily: 'bodoni-mt-bold',
                      color: '#b5cdb5',
                      maxWidth: '350px',
                      margin: 'auto'
                    }}
                  >
                    {' '}
                    {secondPageData.date}
                  </h6>

                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id4"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '300px',
                      margin: 'auto',
                      fontFamily: 'bodoni-mt-bold',
                      color: '#b5cdb5'
                    }}
                  >
                    {secondPageData.time}
                  </h6>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id5"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '300px',
                      margin: 'auto',
                      fontFamily: 'bodoni-mt-bold',
                      color: '#394039'
                    }}
                  >
                    {secondPageData.venue}
                  </h5>

                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id6"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#a1b7a1',
                      fontFamily: 'lucida-fax-demibold'
                    }}
                  >
                    {secondPageData.yours}
                  </h5>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id7"
                    style={{
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#a1b7a1',
                      fontFamily: 'lucida-fax-demibold'
                    }}
                  >
                    {secondPageData.family}
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
                    fontFamily: 'bodoni-mt',
                    color: '#a3bfa3',
                    height: '100%',
                    padding: '200px 0 200px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id8"
                    style={{
                      paddingTop: '60px',
                      maxWidth: '350px',
                      margin: 'auto'
                    }}
                  >
                    {' '}
                    {thirdPageData.function1}
                  </h5>

                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id9"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#000',
                      fontFamily: 'arial-mt'
                    }}
                  >
                    {thirdPageData.date1}
                  </h6>

                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id10"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto'
                    }}
                  >
                    {' '}
                    {thirdPageData.function2}
                  </h5>

                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id11"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#000',
                      fontFamily: 'arial-mt'
                    }}
                  >
                    {thirdPageData.date2}
                  </h6>

                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id12"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto'
                    }}
                  >
                    {' '}
                    {thirdPageData.function3}
                  </h5>

                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id13"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#000',
                      fontFamily: 'arial-mt'
                    }}
                  >
                    {thirdPageData.date3}
                  </h6>

                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id14"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto'
                    }}
                  >
                    {' '}
                    {thirdPageData.function4}
                  </h5>

                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id15"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#000',
                      fontFamily: 'arial-mt'
                    }}
                  >
                    {thirdPageData.date4}
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
                let value = FirstPageData[index + 2]

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
              key={index + 3}
              id={`id${index + 3}`}
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
              key={index + 8}
              id={`id${index + 8}`}
              onClick={() => {
                let name = ThirdPageData[index]
                let value = ThirdPageData[index + 8]

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
export default EditCard63
