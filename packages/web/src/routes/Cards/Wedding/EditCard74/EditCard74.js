import React, { useEffect, useState, Suspense } from 'react'
import Header from '../../../Header'
import weddingCard1 from '../../../img/Wedding/Wedding_16_1.png'
import weddingCard2 from '../../../img/Wedding/Wedding_16_2.png'
import weddingCard3 from '../../../img/Wedding/Wedding_16_3.png'

import useQueryParams from '../../../../hooks/useQueryParams'

import { useNavigate } from 'react-router'
import useProfileApi from '../../../../api/useProfileApi'
import Loading from '../../../../components/Loading'
import Footer from '../../../Footer'
import Modal from '../../../Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const EditCard74 = () => {
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
    name2: '',
    date: '',
    venue: ''
  })
  const [secondPageData, setSecondPageData] = useState({
    name1: '',
    daughterOf: '',
    parents1: '',
    grandDaughterOf: '',
    grandParents1: '',

    name2: '',
    sonOf: '',
    parents2: '',

    grandSonOf: '',

    grandParents2: ''
  })

  const [thirdPageData, setThirdPageData] = useState({
    venue: '',
    rsvp: '',
    _rsvp1: '',
    _rsvp2: ''
  })

  useEffect(() => {
    if (textdata) {
      setFirstPageData({
        name1: textdata[0]?.name1 ?? '',
        name2: textdata[0]?.name2 ?? '',
        date: textdata[0]?._date ?? '',
        venue: textdata[0]?.venue ?? ''
      })
      setSecondPageData({
        name1: textdata[1]?._name1 ?? '',
        daughterOf: textdata[1]?.daughterOf ?? '',
        parents1: textdata[1]?.parents1 ?? '',
        grandDaughterOf: textdata[1]?.grandDaughterOf ?? '',
        grandParents1: textdata[1]?.grandParents1 ?? '',
        name2: textdata[1]?._name2 ?? '',
        sonOf: textdata[1]?.sonOf ?? '',
        parents2: textdata[1]?.parents2 ?? '',

        grandSonOf: textdata[1]?.grandSonOf ?? '',

        grandParents2: textdata[1]?.grandParents2 ?? ''
      })
      setThirdPageData({
        venue: textdata[2]?._venue ?? '',
        rsvp: textdata[2]?.rsvp ?? '',
        _rsvp1: textdata[2]?._rsvp1 ?? '',
        _rsvp2: textdata[2]?._rsvp2 ?? ''
      })
    }
  }, [textdata])

  let FirstPageData
  let SecondPageData
  let ThirdPageData
  let FourthPageData
  let weddingFirstPageCardData = []

  let weddingSecondPageCardData = []

  let weddingThirdPageCardData = []

  if (textdata) {
    FirstPageData = [
      'name1',
      'name2',
      'date',
      'venue',
      textdata[0]?.name1 ?? '',
      textdata[0]?.name2 ?? '',
      textdata[0]?._date ?? '',
      textdata[0]?.venue ?? ''
    ]

    SecondPageData = [
      'name1',
      'daughterOf',
      'parents1',
      'grandDaughterOf',
      'grandParents1',
      'name2',
      'sonOf',
      'parents2',
      'grandSonOf',
      'grandParents2',
      textdata[1]?._name1 ?? '',

      textdata[1]?.daughterOf ?? '',
      textdata[1]?.parents1 ?? '',
      textdata[1]?.grandDaughterOf ?? '',
      textdata[1]?.grandParents1 ?? '',

      textdata[1]?._name2 ?? '',
      textdata[1]?.sonOf ?? '',
      textdata[1]?.parents2 ?? '',
      textdata[1]?.grandSonOf ?? '',
      textdata[1]?.grandParents2 ?? ''
    ]

    ThirdPageData = [
      'venue',
      'rsvp',
      '_rsvp1',
      '_rsvp2',
      textdata[2]?._venue ?? '',
      textdata[2]?.rsvp ?? '',
      textdata[2]?._rsvp1 ?? '',
      textdata[2]?._rsvp2 ?? ''
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

  const hover1 = useHover({ border: '2px solid #ffd167' })
  const hover2 = useHover({ border: '2px solid #ffd167' })
  const hover3 = useHover({ border: '2px solid #ffd167' })
  const hover4 = useHover({ border: '2px solid #ffd167' })
  const hover5 = useHover({ border: '2px solid #ffd167' })
  const hover6 = useHover({ border: '2px solid #ffd167' })
  const hover7 = useHover({ border: '2px solid #ffd167' })
  const hover8 = useHover({ border: '2px solid #ffd167' })
  const hover9 = useHover({ border: '2px solid #ffd167' })
  const hover10 = useHover({ border: '2px solid #ffd167' })
  const hover11 = useHover({ border: '2px solid #ffd167' })
  const hover12 = useHover({ border: '2px solid #ffd167' })
  const hover13 = useHover({ border: '2px solid #ffd167' })
  const hover14 = useHover({ border: '2px solid #ffd167' })
  const hover15 = useHover({ border: '2px solid #ffd167' })
  const hover16 = useHover({ border: '2px solid #ffd167' })
  const hover17 = useHover({ border: '2px solid #ffd167' })
  const hover18 = useHover({ border: '2px solid #ffd167' })
  const hover19 = useHover({ border: '2px solid #ffd167' })
  const hover20 = useHover({ border: '2px solid #ffd167' })
  const hover21 = useHover({ border: '2px solid #ffd167' })
  const hover22 = useHover({ border: '2px solid #ffd167' })
  const hover23 = useHover({ border: '2px solid #ffd167' })
  const hover24 = useHover({ border: '2px solid #ffd167' })
  const hover25 = useHover({ border: '2px solid #ffd167' })
  const hover26 = useHover({ border: '2px solid #ffd167' })
  const hover27 = useHover({ border: '2px solid #ffd167' })
  const hover28 = useHover({ border: '2px solid #ffd167' })
  const hover29 = useHover({ border: '2px solid #ffd167' })

  const PostData = async (e) => {
    e.preventDefault()
    let name1 = firstPageData.name1?.toString() ?? ''
    let name2 = firstPageData.name2?.toString() ?? ''
    let _date = firstPageData?.date?.toString() ?? ''
    let venue = firstPageData?.venue?.toString() ?? ''
    let _name1 = secondPageData?.name1?.toString() ?? ''
    let daughterOf = secondPageData?.daughterOf?.toString() ?? ''
    let parents1 = secondPageData?.parents1?.toString() ?? ''
    let grandDaughterOf = secondPageData?.grandDaughterOf?.toString() ?? ''
    let grandParents1 = secondPageData?.grandParents1?.toString() ?? ''
    let _name2 = secondPageData?.name2?.toString() ?? ''

    let sonOf = secondPageData?.sonOf?.toString() ?? ''
    let parents2 = secondPageData?.parents2?.toString() ?? ''

    let grandSonOf = secondPageData?.grandSonOf?.toString() ?? ''

    let grandParents2 = secondPageData?.grandParents2?.toString() ?? ''
    let _venue = thirdPageData?.venue?.toString() ?? ''
    let rsvp = thirdPageData?.rsvp?.toString() ?? ''
    let _rsvp1 = thirdPageData?._rsvp1?.toString() ?? ''
    let _rsvp2 = thirdPageData?._rsvp2?.toString() ?? ''
    let weds = 'Weds'
    let details
    details = [
      { name1, weds, name2, _date, venue },
      {
        _name1,
        daughterOf,
        parents1,
        grandDaughterOf,
        grandParents1,
        _name2,
        sonOf,
        parents2,
        grandSonOf,

        grandParents2
      },

      { _venue, rsvp, _rsvp1, _rsvp2 }
    ]

    let card_id = cardData.cardId
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/weddingcard9`, {
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
      navigate(`/preview?id=${card_data.createdCardId}`)
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
                        maxWidth: '350px',
                        margin: 'auto',
                        fontFamily: 'romelio',
                        color: '#0a0d14'
                      }}
                    >
                      {' '}
                      {firstPageData.name1}
                    </h3>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>

                  <h3
                    data-bs-toggle="modal"
                    style={{
                      maxWidth: '350px',
                      margin: 'auto',
                      fontFamily: 'lucida-handwriting',
                      color: '#f0c479'
                    }}
                  >
                    {' '}
                    Weds
                  </h3>
                  <div className="editable" {...hover2}>
                    <h3
                      data-bs-toggle="modal"
                      data-bs-target="#id2"
                      style={{
                        paddingTop: '10px',
                        maxWidth: '300px',
                        margin: 'auto',
                        fontFamily: 'romelio',
                        color: '#0a0d14'
                      }}
                    >
                      {firstPageData.name2}
                    </h3>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover3}>
                    <h6
                      data-bs-toggle="modal"
                      data-bs-target="#id3"
                      style={{
                        paddingTop: '10px',
                        maxWidth: '300px',
                        margin: 'auto',
                        fontFamily: 'arial-mt',
                        color: '#93560e'
                      }}
                    >
                      {firstPageData.date}
                    </h6>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover4}>
                    <h6
                      data-bs-toggle="modal"
                      data-bs-target="#id4"
                      style={{
                        paddingTop: '10px',
                        maxWidth: '300px',
                        margin: 'auto',
                        fontFamily: 'arial-mt',
                        color: '#93560e'
                      }}
                    >
                      {firstPageData.venue}
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
                    background: `url(${weddingCard2}) no-repeat center/contain`,
                    textAlign: 'center',
                    width: '100%',
                    fontFamily: 'romelio',
                    color: '#dfb97c',
                    height: '100%',
                    padding: '250px 0 40px',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <div className="editable" {...hover5}>
                    <h3
                      className="card12-text"
                      data-bs-toggle="modal"
                      data-bs-target="#id5"
                      style={{
                        maxWidth: '350px',
                        margin: 'auto'
                      }}
                    >
                      {' '}
                      {secondPageData.name1}
                    </h3>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover6}>
                    <h6
                      className="card12-text"
                      data-bs-toggle="modal"
                      data-bs-target="#id6"
                      style={{
                        maxWidth: '350px',
                        margin: 'auto'
                      }}
                    >
                      {' '}
                      {secondPageData.daughterOf}
                    </h6>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover7}>
                    <h5
                      data-bs-toggle="modal"
                      data-bs-target="#id7"
                      style={{
                        maxWidth: '350px',
                        margin: 'auto',
                        fontFamily: 'myriad-pro-regular',
                        color: '#fff'
                      }}
                    >
                      {' '}
                      {secondPageData.parents1}
                    </h5>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover8}>
                    <h6
                      data-bs-toggle="modal"
                      data-bs-target="#id8"
                      style={{
                        maxWidth: '300px',
                        margin: 'auto'
                      }}
                    >
                      {' '}
                      {secondPageData.grandDaughterOf}
                    </h6>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover9}>
                    <h5
                      data-bs-toggle="modal"
                      data-bs-target="#id9"
                      style={{
                        maxWidth: '300px',
                        margin: 'auto',
                        fontFamily: 'myriad-pro-regular',
                        color: '#fff'
                      }}
                    >
                      {' '}
                      {secondPageData.grandParents1}
                    </h5>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover10}>
                    <h3
                      data-bs-toggle="modal"
                      data-bs-target="#id10"
                      style={{
                        paddingTop: '20px',
                        maxWidth: '300px',
                        margin: 'auto'
                      }}
                    >
                      {' '}
                      {secondPageData.name2}
                    </h3>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover11}>
                    <h6
                      data-bs-toggle="modal"
                      data-bs-target="#id11"
                      style={{
                        maxWidth: '300px',
                        margin: 'auto'
                      }}
                    >
                      {' '}
                      {secondPageData.sonOf}
                    </h6>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover12}>
                    <h5
                      data-bs-toggle="modal"
                      data-bs-target="#id12"
                      style={{
                        maxWidth: '300px',
                        margin: 'auto',
                        fontFamily: 'myriad-pro-regular',
                        color: '#fff'
                      }}
                    >
                      {' '}
                      {secondPageData.parents2}
                    </h5>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover13}>
                    <h6
                      data-bs-toggle="modal"
                      data-bs-target="#id13"
                      style={{
                        maxWidth: '300px',
                        margin: 'auto'
                      }}
                    >
                      {secondPageData.grandSonOf}
                    </h6>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover14}>
                    <h5
                      data-bs-toggle="modal"
                      data-bs-target="#id14"
                      style={{
                        maxWidth: '300px',
                        margin: 'auto',
                        fontFamily: 'myriad-pro-regular',
                        color: '#fff'
                      }}
                    >
                      {secondPageData.grandParents2}
                    </h5>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
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
                  <div className="editable" {...hover15}>
                    <h6
                      data-bs-toggle="modal"
                      data-bs-target="#id15"
                      style={{
                        paddingTop: '70px',
                        maxWidth: '350px',
                        margin: 'auto',
                        fontFamily: 'myriad-pro-regular',
                        color: '#f5c27e'
                      }}
                    >
                      {' '}
                      {thirdPageData.venue}
                    </h6>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover16}>
                    <h3
                      data-bs-toggle="modal"
                      data-bs-target="#id16"
                      style={{
                        paddingTop: '20px',
                        maxWidth: '300px',
                        margin: 'auto',
                        fontFamily: 'romelio',
                        color: '#fff'
                      }}
                    >
                      {thirdPageData.rsvp}
                    </h3>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover17}>
                    <h5
                      data-bs-toggle="modal"
                      data-bs-target="#id17"
                      style={{
                        paddingTop: '10px',
                        maxWidth: '300px',
                        margin: 'auto',
                        fontFamily: 'myriad-pro-regular',
                        color: '#ffcb85'
                      }}
                    >
                      {thirdPageData._rsvp1}
                    </h5>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
                  <div className="editable" {...hover18}>
                    <h5
                      className="card12-text"
                      data-bs-toggle="modal"
                      data-bs-target="#id18"
                      style={{
                        maxWidth: '350px',
                        margin: 'auto',
                        fontFamily: 'myriad-pro-regular',
                        color: '#ffcb85'
                      }}
                    >
                      {' '}
                      {thirdPageData._rsvp2}
                    </h5>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                  </div>
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
                let value = FirstPageData[index + 4]

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
              key={index + 5}
              id={`id${index + 5}`}
              onClick={() => {
                let name = SecondPageData[index]
                let value = SecondPageData[index + 10]

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
              key={index + 15}
              id={`id${index + 15}`}
              onClick={() => {
                let name = ThirdPageData[index]
                let value = ThirdPageData[index + 4]

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
export default EditCard74
