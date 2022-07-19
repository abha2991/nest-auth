import React, { useState } from 'react'
import Header from '../../../Header'
import weddingCard1 from '../../../img/Wedding/Wedding_5_1.png'
import weddingCard2 from '../../../img/Wedding/Wedding_5_2.png'
import weddingCard3 from '../../../img/Wedding/Wedding_5_3.png'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
const Card62 = () => {
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
    name1: 'PHOEBE ALBERTO',
    name2: 'PAUL ALVES'
  })
  const [secondPageData, setSecondPageData] = useState({
    date: 'ON THE 16TH DEC 2022',
    time: 'FROM 6:00 PM ONWARDS',
    venue: 'AT ARMOUR HALL YMCA, NEW DELHI',
    yours: 'YOURS',
    family: 'PETER ALBERTO & FAMILY  SAMSON ALVES & FAMILY'
  })

  const [thirdPageData, setThirdPageData] = useState({
    function1: 'EXCHANGE OF VOWS',
    date1: '16 DEC 2022 10:00 AM',
    function2: 'EXCHANGE OF RINGS',
    date2: '16 DEC 2022 12:00 AM',
    function3: 'RECESSIONAL',
    date3: '16 DEC 2022 2:00 AM',
    function4: 'RECEPTION',
    date4: '17 DEC 2022 5:00 AM'
  })

  const FirstPageData = ['name1', 'name2', 'PHOEBE ALBERTO', 'PAUL ALVES']

  const SecondPageData = [
    'date',
    'time',
    'venue',
    'yours',
    'family1',
    'family2',
    'ON THE 16TH DEC 2022',
    'FROM 6:00 PM ONWARDS',
    'AT ARMOUR HALL YMCA, NEW DELHI',
    'YOURS',
    'PETER ALBERTO & FAMILY',
    'SAMSON ALVES & FAMILY'
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

    'EXCHANGE OF VOWS',
    '16 DEC 2022 10:00 AM',
    'EXCHANGE OF RINGS',
    '16 DEC 2022 12:00 AM',
    'RECESSIONAL',
    '16 DEC 2022 2:00 AM',
    'RECEPTION',
    '17 DEC 2022 5:00 AM'
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
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/weddingcard2`, {
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
        maxCharsPerLine: 40
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
                  fontFamily: 'lucida-calligraphy',
                  color: '#c49596',
                  height: '100%',
                  padding: '290px 0 200px',
                  backgroundSize: '100% 100%'
                }}
              >
                <h3
                  data-bs-toggle="modal"
                  data-bs-target="#id1"
                  style={{
                    paddingTop: '50px',
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
                    paddingTop: '50px',
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
                  padding: '250px 0 40px',
                  backgroundSize: '100% 100%'
                }}
              >
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id3"
                  style={{
                    maxWidth: '350px',
                    margin: 'auto',
                    color: '#9e6c73',
                    fontFamily: 'gadugi-bold'
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
                    color: '#9e6c73',
                    fontFamily: 'gadugi-bold'
                  }}
                >
                  {secondPageData.time}
                </h6>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id5"
                  style={{
                    paddingTop: '10px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#87706c',
                    fontFamily: 'gadugi-bold'
                  }}
                >
                  {secondPageData.venue}
                </h6>

                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id6"
                  style={{
                    paddingTop: '10px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#e2c3c3',
                    fontFamily: 'gadugi-bold'
                  }}
                >
                  {secondPageData.yours}
                </h6>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id7"
                  style={{
                    paddingTop: '10px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#e2c3c3',
                    fontFamily: 'gadugi-bold'
                  }}
                >
                  {secondPageData.family}
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

                  height: '100%',
                  padding: '250px 0 40px',
                  backgroundSize: '100% 100%'
                }}
              >
                <h3
                  data-bs-toggle="modal"
                  data-bs-target="#id8"
                  style={{
                    fontFamily: 'bodoni-mt',
                    color: '#c48d9d',
                    maxWidth: '350px',
                    margin: 'auto'
                  }}
                >
                  {' '}
                  {thirdPageData.function1}
                </h3>

                <h5
                  data-bs-toggle="modal"
                  data-bs-target="#id9"
                  style={{
                    paddingTop: '20px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#625857',
                    fontFamily: 'arial-mt-bold'
                  }}
                >
                  {thirdPageData.date1}
                </h5>

                <h3
                  data-bs-toggle="modal"
                  data-bs-target="#id10"
                  style={{
                    fontFamily: 'bodoni-mt',
                    color: '#c48d9d',
                    maxWidth: '350px',
                    margin: 'auto',
                    fontWeight: 'bold'
                  }}
                >
                  {' '}
                  {thirdPageData.function2}
                </h3>

                <h5
                  data-bs-toggle="modal"
                  data-bs-target="#id11"
                  style={{
                    paddingTop: '20px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#625857',
                    fontFamily: 'arial-mt-bold'
                  }}
                >
                  {thirdPageData.date2}
                </h5>

                <h3
                  data-bs-toggle="modal"
                  data-bs-target="#id12"
                  style={{
                    fontFamily: 'bodoni-mt',
                    color: '#c48d9d',
                    maxWidth: '350px',
                    margin: 'auto',
                    fontWeight: 'bold'
                  }}
                >
                  {' '}
                  {thirdPageData.function3}
                </h3>

                <h5
                  data-bs-toggle="modal"
                  data-bs-target="#id13"
                  style={{
                    paddingTop: '20px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#625857',
                    fontFamily: 'arial-mt-bold'
                  }}
                >
                  {thirdPageData.date3}
                </h5>

                <h3
                  data-bs-toggle="modal"
                  data-bs-target="#id14"
                  style={{
                    fontFamily: 'bodoni-mt',
                    color: '#c48d9d',
                    maxWidth: '350px',
                    margin: 'auto',
                    fontWeight: 'bold'
                  }}
                >
                  {' '}
                  {thirdPageData.function4}
                </h3>

                <h5
                  data-bs-toggle="modal"
                  data-bs-target="#id15"
                  style={{
                    paddingTop: '20px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#625857',
                    fontFamily: 'arial-mt-bold'
                  }}
                >
                  {thirdPageData.date4}
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

export default Card62
