import React, { useState } from 'react'
import Header from '../../../Header'
import receptionCard1 from '../../../img/Reception/Reception_1_1.png'
import receptionCard2 from '../../../img/Reception/Reception_1_2.png'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
const Card40 = () => {
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
    brideAndGroomName: 'DIANA & JACK',

    date: '25 JUNE 2022'
  })

  const [secondPageData, setSecondPageData] = useState({
    venue: 'DURBAR HALL TAJ DIPLOMATIC ENCLAVE ( SP MAGE ) NEW DELHI',

    time: '8:30 PM'
  })

  const FirstPageData = ['brideAndGroomName', 'date', 'DIANA & JACK', '25 JUNE 2022']

  const SecondPageData = ['venue', 'time', 'DURBAR HALL TAJ DIPLOMATIC ENCLAVE ( SP MAGE ) NEW DELHI', '8:30 PM']

  let receptionFirstPageCardData = []
  receptionFirstPageCardData = Object.entries(firstPageData)
  let receptionSecondPageCardData = []
  receptionSecondPageCardData = Object.entries(secondPageData)

  const PostData = async (e) => {
    e.preventDefault()
    let brideAndGroomName = firstPageData.brideAndGroomName?.toString() ?? ''

    let date = firstPageData.date?.toString() ?? ''

    let time = secondPageData.time?.toString() ?? ''
    let venue = secondPageData.venue?.toString() ?? ''

    let details

    let dateAndTime = date + ' ( ' + time + ' )'

    details = [
      { brideAndGroomName, date },
      { brideAndGroomName, dateAndTime, venue }
    ]
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/receptioncard2`, {
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
        maxCharsPerLine: Number(40)
      })
    })

    const card_data = await res.json()

    //setCardData(card_data.id)

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
                  background: `url(${receptionCard1}) no-repeat center/contain`,
                  textAlign: 'center',
                  width: '100%',
                  fontFamily: 'Lora',
                  color: '#000',
                  height: '100%',
                  padding: '300px 0 100px',
                  backgroundSize: '100% 100%'
                }}
              >
                <h3
                  data-bs-toggle="modal"
                  data-bs-target="#id1"
                  style={{
                    maxWidth: '350px',
                    margin: 'auto',
                    fontFamily: 'palatino-linot-bold',
                    color: '#000'
                  }}
                >
                  {' '}
                  {firstPageData.brideAndGroomName}
                </h3>

                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id2"
                  style={{
                    paddingTop: '10px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#ebd0ab',
                    fontFamily: 'myriad-pro-regular'
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
                  background: `url(${receptionCard2}) no-repeat center/contain`,
                  textAlign: 'center',
                  width: '100%',
                  fontFamily: 'Lora',

                  height: '100%',
                  padding: '250px 0 200px',
                  backgroundSize: '100% 100%'
                }}
              >
                <h3
                  className="card12-text"
                  data-bs-toggle="modal"
                  data-bs-target="#id1"
                  style={{
                    maxWidth: '350px',
                    margin: 'auto',
                    fontWeight: 'bold',
                    color: '#d99d6a',
                    fontFamily: 'palatino-linot-bold'
                  }}
                >
                  {' '}
                  {firstPageData.brideAndGroomName}
                </h3>

                <h6
                  className="card12-text"
                  data-bs-toggle="modal"
                  data-bs-target="#id2"
                  style={{
                    maxWidth: '350px',
                    margin: 'auto',
                    color: '#fff',
                    fontFamily: 'nirmala-bold'
                  }}
                >
                  {' '}
                  {firstPageData.date}
                </h6>

                <h7
                  data-bs-toggle="modal"
                  data-bs-target="#id3"
                  style={{
                    paddingTop: '20px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#fff',
                    fontFamily: 'nirmala-bold'
                  }}
                >
                  {secondPageData.venue}
                </h7>

                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id4"
                  style={{
                    paddingTop: '10px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#fff',
                    fontFamily: 'nirmala-bold'
                  }}
                >
                  {secondPageData.time}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {receptionFirstPageCardData?.map((val, index) => {
        return (
          <Modal
            key={index + 1}
            id={`id${index + 1}`}
            onClick={() => {
              let name = FirstPageData[index]
              let value = FirstPageData[index + 2]

              console.log({ name, value, index })

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

      {receptionSecondPageCardData?.map((val, index) => {
        return (
          <Modal
            key={index + 3}
            id={`id${index + 3}`}
            onClick={() => {
              let name = SecondPageData[index]
              let value = SecondPageData[index + 2]

              console.log({ name, value, index })

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

export default Card40
