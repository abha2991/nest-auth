import React, { useState } from 'react'
import Header from '../../../Header'
import anniversaryCard1 from '../../../img/Anniversary/Anniversary_5_1.png'
//import anniversaryCard2 from '../../../img/Anniversary/Anniversary_5_2.png'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
const Card16 = () => {
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
    anniversaryYear: '25th',
    name1: 'JOSH',
    name2: 'SMITH',
    date: '27 June 2022',
    time: '7:00 PM',
    venue: 'AVENUE STREET CITY'
  })

  const FirstPageData = [
    'anniversaryYear',
    'name1',
    'name2',
    'date',
    'time',
    'venue',
    '25th',
    'JOSH',
    'SMITH',
    '25 June 2022',
    '7:00 PM',
    'AVENUE STREET CITY'
  ]

  let anniversaryFirstPageCardData = []
  anniversaryFirstPageCardData = Object.entries(firstPageData)

  const PostData = async (e) => {
    e.preventDefault()
    let anniversaryYear = firstPageData.anniversaryYear?.toString() ?? ''
    let name1 = firstPageData.name1?.toString() ?? ''
    let name2 = firstPageData.name2?.toString() ?? ''
    let date = firstPageData.date?.toString() ?? ''

    let time = firstPageData.time?.toString() ?? ''
    let venue = firstPageData.venue?.toString() ?? ''

    let details

    details = [{ name1, name2, anniversaryYear, date, time, venue }]
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/anniversarycard`, {
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
        maxCharsPerLine: Number(20)
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
                  background: `url(${anniversaryCard1}) no-repeat center/contain`,
                  textAlign: 'center',
                  width: '100%',
                  fontFamily: 'Lora',
                  color: '#e22d54',
                  height: '100%',
                  padding: '100px 0 200px',
                  backgroundSize: '100% 100%'
                }}
              >
                <h2
                  data-bs-toggle="modal"
                  data-bs-target="#id1"
                  style={{
                    paddingTop: '10px',
                    maxWidth: '300px',
                    margin: 'auto'
                  }}
                >
                  {firstPageData.name1}
                </h2>
                <h2
                  data-bs-toggle="modal"
                  data-bs-target="#id2"
                  style={{
                    paddingTop: '10px',
                    maxWidth: '300px',
                    margin: 'auto',
                    marginTop: '40px'
                  }}
                >
                  {firstPageData.name2}
                </h2>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id3"
                  style={{
                    maxWidth: '350px',
                    margin: 'auto',
                    marginTop: '200px'
                  }}
                >
                  {' '}
                  {firstPageData.anniversaryYear}
                </h6>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id4"
                  style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto', marginTop: '40px' }}
                >
                  {firstPageData.date}
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id5"
                    style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto' }}
                  >
                    {firstPageData.time}
                  </h6>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id6"
                    style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto' }}
                  >
                    {firstPageData.venue}
                  </h6>
                </h6>
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
              let value = FirstPageData[index + 6]

              console.log({ name, value })

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

export default Card16
