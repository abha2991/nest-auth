import React, { useState } from 'react'
import Header from '../../../Header'
import weddingCard1 from '../../../img/Wedding/Wedding_16_1.png'
import weddingCard2 from '../../../img/Wedding/Wedding_16_2.png'
import weddingCard3 from '../../../img/Wedding/Wedding_16_3.png'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
const Card74 = () => {
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
    name1: 'Parul',
    name2: 'Sandeep',
    date: '22 June 2022',
    venue: 'Hotel Brooklyn Delhi'
  })
  const [secondPageData, setSecondPageData] = useState({
    name1: 'PARUL AGARWAL',
    daughterOf: 'Daughter Of',
    parents1: 'Mr. Shiv Agarwal And Mrs. Reena Agarwal',
    grandDaughterOf: 'Grand Daughter Of',
    grandParents1: 'Mr. Shiv Agarwal And Mrs. Reena Agarwal',

    name2: 'SANDEEP AGARWAL',
    sonOf: 'Son Of',
    parents2: 'Mr. Shiv Agarwal And Mrs. Reena Agarwal',

    grandSonOf: 'GrandSon Of',

    grandParents2: 'Mr. Shiv Agarwal And Mrs. Reena Agarwal'
  })

  const [thirdPageData, setThirdPageData] = useState({
    venue: 'Hotel Sayaji, Near Magneto Mall, Avanti Vihar, Raipur, Chattisgarh',
    rsvp: 'RSVP',
    _rsvp1: 'Mr Neerja Agrawal',
    _rsvp2: 'Mrs. Lalita Agrawal'
  })

  const FirstPageData = ['name1', 'name2', 'date', 'venue', 'Parul', 'Sandeep', '22 June 2022', 'Hotel Brooklyn Delhi']

  const SecondPageData = [
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
    'PARUL AGARWL',
    'Daughter Of',
    'Mr. Shiv Agarwal And Mrs. Reena Agarwal',
    'Grand Daughter Of',
    'Mr. Shiv Agarwal And Mrs. Reena Agarwal',

    'SANDEEP AGARWAL',
    'Son Of',
    'Mr. Shiv Agarwal And Mrs. Reena Agarwal',

    'GrandSon Of',

    'Mr. Shiv Agarwal And Mrs. Reena Agarwal'
  ]

  const ThirdPageData = [
    'venue',
    'rsvp',
    '_rsvp1',
    '_rsvp2',

    'Hotel Sayaji, Near Magneto Mall, Avanti Vihar, Raipur, Chattisgarh',
    'RSVP',
    'Mr Neerja Agrawal',
    'Mrs. Lalita Agrawal'
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
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/weddingcard9`, {
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

                  height: '100%',
                  padding: '290px 0 40px',
                  backgroundSize: '100% 100%'
                }}
              >
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

export default Card74
