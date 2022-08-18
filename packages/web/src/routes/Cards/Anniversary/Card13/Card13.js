import React, { useState } from 'react'
import Header from '../../../Header'
import anniversaryCard1 from '../../../img/Anniversary/Anniversary_3_1.jpeg'
import anniversaryCard2 from '../../../img/Anniversary/Anniversary_3_2.jpeg'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const Card13 = () => {
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

  const [firstPageData, setFirstPageData] = useState({
    name: 'JOSH AND SMITH',
    anniversaryYear: '25th',
    date: '25 June 2022'
  })

  const [secondPageData, setSecondPageData] = useState({
    day: 'On June 25 Sunday Night',
    time: '7:00 PM',
    venue: 'AVENUE STREET CITY'
  })

  const FirstPageData = ['name', 'anniversaryYear', 'date', 'JOSH AND SMITH', '25th', '25 June 2022']

  const SecondPageData = ['day', 'time', 'venue', 'On June 25 Sunday Night', '7:00 PM', 'AVENUE STREET CITY']

  let anniversaryFirstPageCardData = []
  anniversaryFirstPageCardData = Object.entries(firstPageData)
  let anniversarySecondPageCardData = []
  anniversarySecondPageCardData = Object.entries(secondPageData)

  const PostData = async (e) => {
    e.preventDefault()
    // let anniversaryYear = firstPageData.anniversaryYear?.toString() ?? ''
    let name = firstPageData.name?.toString() ?? ''
    let date = firstPageData.date?.toString() ?? ''
    let day = secondPageData.day?.toString() ?? ''
    let time = secondPageData.time?.toString() ?? ''
    let venue = secondPageData.venue?.toString() ?? ''
    let message = `Join Us As We Celebrate Our ${firstPageData.anniversaryYear?.toString() ?? ''} Anniversary`
    let details

    details = [
      { name, message, date },
      { day, time, venue }
    ]

    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/anniversarycard3`, {
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
        maxCharsPerLine: Number(30)
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
                  background: `url(${anniversaryCard1}) no-repeat center/contain`,
                  textAlign: 'center',
                  width: '100%',
                  fontFamily: 'Lora',
                  color: '#de8aa4',
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
                      paddingTop: '10px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#ebd0ab',
                      marginTop: '100px',
                      fontWeight: 'bold'
                    }}
                  >
                    {firstPageData.name}
                  </h3>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover2}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id2"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      fontStyle: 'italic',
                      fontSize: '12px',
                      color: '#fff',
                      marginLeft: '107px',
                      fontWeight: 'bold'
                    }}
                  >
                    {' '}
                    {firstPageData.anniversaryYear}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover3}>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id3"
                    style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto', color: '#ebd0ab' }}
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
                  background: `url(${anniversaryCard2}) no-repeat center/contain`,
                  textAlign: 'center',
                  width: '100%',
                  fontFamily: 'Lora',
                  color: '#de8aa4',
                  height: '100%',
                  padding: '250px 0 40px',
                  backgroundSize: '100% 100%'
                }}
              >
                <div className="editable" {...hover4}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id4"
                    style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto', color: '#fff' }}
                  >
                    {secondPageData.day}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover5}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id5"
                    style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto', color: '#fff' }}
                  >
                    {secondPageData.time}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover6}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id6"
                    style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto', color: '#fff', fontSize: 'small' }}
                  >
                    {secondPageData.venue}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {anniversaryFirstPageCardData?.map((val, index) => {
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

      {anniversarySecondPageCardData?.map((val, index) => {
        return (
          <Modal
            key={index + 4}
            id={`id${index + 4}`}
            onClick={() => {
              let name = SecondPageData[index]
              let value = SecondPageData[index + 3]

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

export default Card13
