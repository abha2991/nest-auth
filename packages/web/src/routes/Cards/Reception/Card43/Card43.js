import React, { useState } from 'react'
import Header from '../../../Header'
import receptionCard1 from '../../../img/Reception/Reception_4_1.png'
import receptionCard2 from '../../../img/Reception/Reception_4_2.png'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const Card43 = () => {
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

    const res = await fetch(`http://localhost:3001/api/card1/receptioncard3`, {
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
    setLoading(true)
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
                  background: `url(${receptionCard1}) no-repeat center/contain`,
                  textAlign: 'center',
                  width: '100%',

                  height: '100%',
                  padding: '290px 0 100px',
                  backgroundSize: '100% 100%'
                }}
              >
                <div className="editable" {...hover1}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id1"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'palatino-linot-bold',
                      color: '#fa7658'
                    }}
                  >
                    {' '}
                    {firstPageData.brideAndGroomName}
                  </h5>{' '}
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover2}>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id2"
                    style={{
                      paddingTop: '10px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#f66b50',
                      fontFamily: 'myriad-pro-semibold'
                    }}
                  >
                    {firstPageData.date}
                  </h6>{' '}
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
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

                  color: '#ff8d6a',
                  height: '100%',
                  padding: '250px 0 200px',
                  backgroundSize: '100% 100%'
                }}
              >
                <div className="editable" {...hover3}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id1"
                    style={{
                      paddingTop: '50px',
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#ff8d6a',
                      fontFamily: 'palatino-linot-bold'
                    }}
                  >
                    {' '}
                    {firstPageData.brideAndGroomName}
                  </h5>{' '}
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover4}>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id2"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'nirmala-bold',
                      color: '#fe7055'
                    }}
                  >
                    {' '}
                    {firstPageData.date}
                  </h6>{' '}
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover5}>
                  <p
                    data-bs-toggle="modal"
                    data-bs-target="#id3"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#fd795f',
                      fontFamily: 'nirmala-bold'
                    }}
                  >
                    {secondPageData.venue}
                  </p>{' '}
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover6}>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id4"
                    style={{
                      paddingTop: '10px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#fe7055',
                      fontFamily: 'nirmala-bold'
                    }}
                  >
                    {secondPageData.time}
                  </h6>{' '}
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
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

export default Card43
