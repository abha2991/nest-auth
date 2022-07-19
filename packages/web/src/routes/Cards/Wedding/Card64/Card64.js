import React, { useState } from 'react'
import Header from '../../../Header'
import weddingCard1 from '../../../img/Wedding/Wedding_7_1.png'
import weddingCard2 from '../../../img/Wedding/Wedding_7_2.png'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
const Card64 = () => {
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
    name1: 'PHOEBE ALBERTO',
    name2: 'PAUL ALVES',
    date: 'ON THE 16TH DEC 2022',
    time: 'FROM 6:00 PM ONWARDS',
    venue: 'AT ARMOUR HALL YMCA, NEW DELHI'
  })

  const FirstPageData = ['name1', 'name2', 'PHOEBE ALBERTO', 'PAUL ALVES']

  const SecondPageData = [
    'name1',
    'name2',
    'date',
    'time',
    'venue',

    'PHOEBE ALBERTO',
    'PAUL ALVES',
    'ON THE 16TH DEC 2022',
    'FROM 6:00 PM ONWARDS',
    'AT ARMOUR HALL YMCA, NEW DELHI'
  ]

  let weddingFirstPageCardData = []
  weddingFirstPageCardData = Object.entries(firstPageData)
  let weddingSecondPageCardData = []
  weddingSecondPageCardData = Object.entries(secondPageData)

  const PostData = async (e) => {
    e.preventDefault()
    let name1 = firstPageData.name1?.toString() ?? ''
    let name2 = firstPageData.name2?.toString() ?? ''
    let staticData = 'With'
    let weds = 'Weds'
    let _name1 = secondPageData.name1?.toString() ?? ''
    let _name2 = secondPageData.name2?.toString() ?? ''
    let date = secondPageData?.date?.toString() ?? ''
    let time = secondPageData?.time?.toString() ?? ''
    let venue = secondPageData?.venue?.toString() ?? ''

    let details

    details = [
      { name1, weds, name2 },
      { _name1, staticData, _name2, date, time, venue }
    ]
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/weddingcard3`, {
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
                  fontFamily: 'georgia',
                  color: '#c3ab32',
                  height: '100%',
                  padding: '300px 0 250px',
                  backgroundSize: '100% 100%'
                }}
              >
                <h4
                  data-bs-toggle="modal"
                  data-bs-target="#id1"
                  style={{
                    maxWidth: '350px',
                    margin: 'auto'
                  }}
                >
                  {' '}
                  {firstPageData.name1}
                </h4>
                <h4
                  data-bs-toggle="modal"
                  style={{
                    maxWidth: '350px',
                    margin: 'auto',

                    color: '#000'
                  }}
                >
                  {' '}
                  Weds
                </h4>

                <h4
                  data-bs-toggle="modal"
                  data-bs-target="#id2"
                  style={{
                    paddingTop: '10px',
                    maxWidth: '300px',
                    margin: 'auto'
                  }}
                >
                  {firstPageData.name2}
                </h4>
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
                  fontFamily: 'Lora',
                  color: '#000',
                  height: '100%',
                  padding: '250px 0 40px',
                  backgroundSize: '100% 100%'
                }}
              >
                <h5
                  data-bs-toggle="modal"
                  data-bs-target="#id3"
                  style={{
                    maxWidth: '350px',
                    color: '#ccb53c',
                    margin: 'auto',
                    fontFamily: 'monotype-corsiva'
                  }}
                >
                  {' '}
                  {secondPageData.name1}
                </h5>
                <h5
                  data-bs-toggle="modal"
                  style={{
                    maxWidth: '350px',
                    color: '#ccb53c',
                    margin: 'auto',
                    fontFamily: 'monotype-corsiva'
                  }}
                >
                  With
                </h5>
                <h5
                  data-bs-toggle="modal"
                  data-bs-target="#id4"
                  style={{
                    maxWidth: '350px',
                    margin: 'auto',
                    color: '#ccb53c',
                    fontFamily: 'monotype-corsiva'
                  }}
                >
                  {' '}
                  {secondPageData.name2}
                </h5>
                <h6
                  className="card12-text"
                  data-bs-toggle="modal"
                  data-bs-target="#id5"
                  style={{
                    paddingTop: '50px',
                    maxWidth: '350px',
                    margin: 'auto',
                    color: '#d8c349',
                    fontFamily: 'gadugi-bold'
                  }}
                >
                  {' '}
                  {secondPageData.date}
                </h6>

                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id6"
                  style={{
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#d8c349',
                    fontFamily: 'gadugi-bold'
                  }}
                >
                  {secondPageData.time}
                </h6>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id7"
                  style={{
                    paddingTop: '10px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#000',
                    fontFamily: 'gadugi-bold'
                  }}
                >
                  {secondPageData.venue}
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

export default Card64
