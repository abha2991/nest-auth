import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
import anniversaryCard1 from '../../../img/Anniversary/Anniversary_5_1.png'
const EditCard16 = () => {
  const navigate = useNavigate()
  const id = useQueryParams()
  const { id: id2 } = id
  const [loading, setLoading] = useState(false)
  const { data: profile, status } = useProfileApi()

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
    anniversaryYear: '',
    name1: '',
    name2: '',
    date: '',
    time: '',
    venue: ''
  })

  useEffect(() => {
    if (textdata) {
      setFirstPageData({
        anniversaryYear: textdata[0]?.anniversaryYear ?? '',
        name1: textdata[0]?.name1 ?? '',
        name2: textdata[0]?.name2 ?? '',
        date: textdata[0]?.date ?? '',
        time: textdata[0]?.time ?? '',
        venue: textdata[0]?.venue ?? ''
      })
    }
  }, [textdata])

  let textData
  let anniversaryCardData = []

  if (textdata) {
    textData = [
      'anniversaryYear',
      'name1',
      'name2',
      'date',
      'time',
      'venue',
      textdata[0]?.anniversaryYear ?? '',
      textdata[0]?.name1 ?? '',
      textdata[0]?.name2 ?? '',
      textdata[0]?.date ?? '',
      textdata[0]?.time ?? '',
      textdata[0]?.venue ?? ''
    ]

    anniversaryCardData = Object.entries(firstPageData)
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
        id: cardData.cardId,
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
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id1"
                    style={{
                      paddingTop: '10px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#000',
                      marginTop: '100px',
                      fontWeight: 'bold'
                    }}
                  >
                    {firstPageData.name1}
                  </h3>
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#id2"
                    style={{
                      paddingTop: '10px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#000',
                      marginTop: '100px',
                      fontWeight: 'bold'
                    }}
                  >
                    {firstPageData.name2}
                  </h3>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id3"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      fontStyle: 'italic',
                      fontSize: '12px',
                      color: '#000',
                      marginLeft: '107px',
                      fontWeight: 'bold'
                    }}
                  >
                    {' '}
                    {firstPageData.anniversaryYear}
                  </h5>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id4"
                    style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto', color: '#000' }}
                  >
                    {firstPageData.date}
                    <h6
                      data-bs-toggle="modal"
                      data-bs-target="#id5"
                      style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto', color: '#000' }}
                    >
                      {firstPageData.time}
                    </h6>
                    <h6
                      data-bs-toggle="modal"
                      data-bs-target="#id6"
                      style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto', color: '#000' }}
                    >
                      {firstPageData.venue}
                    </h6>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {anniversaryCardData?.map((val, index) => {
          return (
            <Modal
              key={index + 1}
              id={`id${index + 1}`}
              onClick={() => {
                let name = textData[index]
                let value = textData[index + 6]

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
export default EditCard16
