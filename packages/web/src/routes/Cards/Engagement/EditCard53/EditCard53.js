import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
import card1 from '../../../img/Engagement/Engagement_4_1.png'

const EditCard53 = () => {
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

  // console.log({textdata})
  const [data, setdata] = useState({
    brideOrGroomName: '',
    groomOrBrideName: '',
    date: '',
    time: '',
    venue: ''
  })

  useEffect(() => {
    if (textdata) {
      console.log({ textdata })
      setdata({
        brideOrGroomName: textdata[0]?.brideOrGroomName ?? '',
        and: textdata[0]?.and ?? '',
        groomOrBrideName: textdata[0]?.groomOrBrideName ?? '',
        date: textdata[0]?.date ?? '',
        time: textdata[0]?.time ?? '',
        venue: textdata[0]?.venue ?? ''
      })
    }
  }, [textdata])

  let textData
  let engagementCardData = []

  if (textdata) {
    textData = [
      'brideOrGroomName',
      'groomOrBrideName',
      'date',
      'time',
      'venue',
      textdata[0]?.brideOrGroomName ?? '',
      textdata[0]?.groomOrBrideName ?? '',
      textdata[0]?.date ?? '',
      textdata[0]?.time ?? '',
      textdata[0]?.venue ?? ''
    ]

    engagementCardData = Object.entries(data)
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
    let brideOrGroomName = data.brideOrGroomName?.toString() ?? ''
    let groomOrBrideName = data.groomOrBrideName?.toString() ?? ''
    let and = data.and?.toString() ?? ''
    let date = data.date?.toString() ?? ''
    let time = data.time?.toString() ?? ''
    let venue = data.venue?.toString() ?? ''
    let email = profile.email?.toString() ?? ''

    let details

    details = [{ brideOrGroomName, and, groomOrBrideName, date, time, venue }]

    let card_id = cardData.cardId
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/engagementcard1`, {
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
        maxCharsPerLine: Number(33)
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
        <div className="pt-5">
          <h3 className="text-center">Edit Card</h3>
        </div>
        <hr />
        <div className="container" style={{ position: 'relative' }}>
          <div className="row my-5">
            <div className="col-md-4">
              <div className="card-box">
                <div
                  style={{
                    background: `url(${card1}) no-repeat center/contain`,
                    textAlign: 'center',
                    width: '100%',
                    color: '#f60331',
                    height: '100%',
                    padding: '100px 0 100px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id1"
                    style={{
                      paddingTop: '170px',
                      maxWidth: '300px',
                      margin: 'auto',

                      textAlign: 'center',
                      fontFamily: 'nirmala-bold'
                    }}
                  >
                    {data.brideOrGroomName}
                  </h5>

                  <h5
                    data-bs-toggle="modal"
                    style={{
                      paddingTop: '15px',
                      maxWidth: '300px',
                      margin: 'auto',

                      textAlign: 'center',
                      fontFamily: 'nirmala-bold'
                    }}
                  >
                    AND
                  </h5>

                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id2"
                    style={{
                      paddingTop: '15px',
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'nirmala-bold'
                    }}
                  >
                    {' '}
                    {data.groomOrBrideName}
                  </h5>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id3"
                    style={{
                      paddingTop: '80px',
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'nirmala-ui'
                    }}
                  >
                    {' '}
                    {data.date}
                  </h6>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id4"
                    style={{
                      paddingTop: '5px',
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'nirmala-ui'
                    }}
                  >
                    {' '}
                    {data.time}
                  </h6>
                  <h6
                    data-bs-toggle="modal"
                    data-bs-target="#id5"
                    style={{
                      paddingTop: '20px',
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'gadugi-bold'
                    }}
                  >
                    {' '}
                    {data.venue}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        {engagementCardData?.map((val, index) => {
          return (
            <Modal
              key={index + 1}
              id={`id${index + 1}`}
              onClick={() => {
                let name = textData[index]
                let value = textData[index + 5]

                setdata({ ...data, [name]: [value] })
              }}
              onChange={(e) => {
                const name = e.target.name
                const value = e.target.value
                setdata({ ...data, [name]: value })
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
export default EditCard53
