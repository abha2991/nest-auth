import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'
import weddingCard1 from '../../../img/Wedding/Wedding_8_1.png'
import weddingCard2 from '../../../img/Wedding/Wedding_8_2.png'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
const EditCard65 = () => {
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
    name1: '',
    name2: '',
    date: '',
    time: '',
    venue: ''
  })

  useEffect(() => {
    if (textdata) {
      setFirstPageData({
        name1: textdata[0]?.name1 ?? '',
        name2: textdata[0]?.name2 ?? ''
      })
      setSecondPageData({
        name1: textdata[1]?._name1 ?? '',
        name2: textdata[1]?._name2 ?? '',
        date: textdata[1]?.date ?? '',
        time: textdata[1]?.time ?? '',
        venue: textdata[1]?.venue ?? ''
      })
    }
  }, [textdata])

  let textData1
  let textData2
  let textData3

  let weddingFirstPageCardData = []

  let weddingSecondPageCardData = []

  if (textdata) {
    textData1 = ['name1', 'name2', textdata[0]?.name1 ?? '', textdata[0]?.name2 ?? '']

    textData2 = [
      'name1',
      'name2',
      'date',
      'time',
      'venue',
      textdata[1]?._name1 ?? '',
      textdata[1]?._name2 ?? '',
      textdata[1]?.date ?? '',

      textdata[1]?.time ?? '',
      textdata[1]?.venue ?? ''
    ]

    weddingFirstPageCardData = Object.entries(firstPageData)

    weddingSecondPageCardData = Object.entries(secondPageData)
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

    let _name1 = secondPageData.name1?.toString() ?? ''
    let _name2 = secondPageData.name2?.toString() ?? ''
    let date = secondPageData?.date?.toString() ?? ''
    let time = secondPageData?.time?.toString() ?? ''
    let venue = secondPageData?.venue?.toString() ?? ''

    let details

    details = [
      { name1, name2 },
      { _name1, _name2, date, time, venue }
    ]

    let card_id = cardData.cardId
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/weddingcard4`, {
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
                    fontFamily: 'georgia',
                    color: '#514663',
                    height: '100%',
                    padding: '220px 0 250px',
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
                      paddingTop: '20px',
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
                    padding: '200px 0 150px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id3"
                    style={{
                      paddingTop: '6px',
                      maxWidth: '350px',
                      fontFamily: 'monotype-corsiva',
                      margin: 'auto',
                      color: '#3b4970'
                    }}
                  >
                    {' '}
                    {secondPageData.name1}
                  </h5>

                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id4"
                    style={{
                      paddingTop: '15px',
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'monotype-corsiva',
                      color: '#3b4970'
                    }}
                  >
                    {' '}
                    {secondPageData.name2}
                  </h5>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id5"
                    style={{
                      paddingTop: '50px',
                      maxWidth: '350px',
                      margin: 'auto',
                      color: '#4d6189',
                      fontFamily: 'gadugi'
                    }}
                  >
                    {' '}
                    {secondPageData.date}
                  </h6>

                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id6"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '300px',
                      margin: 'auto',
                      color: '#4d6189',
                      fontFamily: 'gadugi'
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
                      color: '#4d6189',
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
export default EditCard65
