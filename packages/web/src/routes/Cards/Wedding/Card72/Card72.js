import React, { useState } from 'react'
import Header from '../../../Header'
import weddingCard1 from '../../../img/Wedding/Wedding_14_1.png'
import weddingCard2 from '../../../img/Wedding/Wedding_14_2.png'
import weddingCard3 from '../../../img/Wedding/Wedding_14_3.png'
import weddingCard4 from '../../../img/Wedding/Wedding_14_4.png'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
const Card72 = () => {
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
    name1: 'Mohit Agrawal',
    name2: 'Ishita Agrawal',
    date: '12 Nov 2022'
  })
  const [secondPageData, setSecondPageData] = useState({
    parent1: 'Mr Anil Ji Agrawal',
    parent2: 'Mrs Poolki Bai Agrawal',
    sonOrDaughter: 'grandson',
    sonOf: 'Son Of',
    parents1: 'Mr. Rajiv Agrawal And Mrs. Rachna Agrawal',
    grandSonOf: 'GrandSon Of',
    grandParents1: 'Mr. Rajesh Agrawal And Mrs. Anchal Agrawal',
    daughterOf: 'Daughter Of',
    parents2: 'Mr. Anil Agrawal and Mrs. Rita Agrawal',
    grandDaughterOf: 'Grand Daughter Of',
    grandParents2: 'Mr. Rahul Agrawal and Mrs. Rema Agrawal'
  })

  const [thirdPageData, setThirdPageData] = useState({
    function1: 'HALDI',
    date1: '9  Nov 2022, 11:00 AM',
    venue1: 'Hotel Sayaji Near Magneto Mall, New Delhi',
    function2: 'LAGAN',
    date2: '10  Nov 2022, 10:00 AM',
    venue2: 'Hotel Sayaji Near Magneto Mall, New Delhi',
    function3: 'SANGEET',
    date3: '10  Nov 2022, 11:00 AM',
    venue3: 'Hotel Sayaji Near Magneto Mall, New Delhi',
    function4: 'MEHANDI',
    date4: '11  Nov 2022, 5:00 PM',
    venue4: 'Hotel Sayaji Near Magneto Mall, New Delhi',
    function5: 'CHAK BHAAT',
    date5: '11  Nov 2022, 5:00 PM',
    venue5: 'Hotel Sayaji Near Magneto Mall, New Delhi',
    function6: 'VIDAI',
    date6: '13  Nov 2022, 5:00 AM',
    venue6: 'Hotel Sayaji Near Magneto Mall, New Delhi'
  })
  const [fourthPageData, setFourthPageData] = useState({
    venue: 'Hotel Sayaji Near Magneto Mall, New Delhi',
    rsvp: 'RSVP',
    _rsvp1: 'Mr Neerja Agrawal',
    _rsvp2: 'Mrs. Lalita Agrawal'
  })

  const FirstPageData = ['name1', 'name2', 'date', 'Ishita Agrawal', 'Mohit Agrawal', '12 Nov 2022']

  const SecondPageData = [
    'parent1',
    'parent2',
    'sonOrDaughter',
    'sonOf',
    'parents1',
    'grandSonOf',
    'grandParents1',
    'daughterOf',
    'parents2',
    'grandDaughterOf',
    'grandParents2',

    'Mr Anil Ji Agrawal',
    'Mrs Poolki Bai Agrawal',
    'grandson',
    'Son Of',
    'Mr. Rajiv Agrawal And Mrs. Rachna Agrawal',
    'GrandSon Of',
    'Mr. Rajesh Agrawal And Mrs. Anchal Agrawal',
    'Daughter Of',
    'Mr. Anil Agrawal and Mrs. Rita Agrawal',
    'Grand Daughter Of',
    'Mr. Rahul Agrawal and Mrs. Rema Agrawal'
  ]

  const ThirdPageData = [
    'function1',
    'date1',
    'venue1',
    'function2',
    'date2',
    'venue2',
    'function3',
    'date3',
    'venue3',
    'function4',
    'date4',
    'venue4',
    'function5',
    'date5',
    'venue5',
    'function6',
    'date6',
    'venue6',
    'HALDI',
    '9  Nov 2022, 11:00 AM',
    'Hotel Sayaji Near Magneto Mall, New Delhi',
    'LAGAN',
    '10  Nov 2022, 10:00 AM',
    'Hotel Sayaji Near Magneto Mall, New Delhi',
    'SANGEET',
    '10  Nov 2022, 11:00 AM',
    'Hotel Sayaji Near Magneto Mall, New Delhi',
    'MEHANDI',
    '11 Nov 2022, 5:00 PM',
    'Hotel Sayaji Near Magneto Mall, New Delhi',
    'CHAK BHAAT',
    '11 Nov 2022, 5:00 PM',
    'Hotel Sayaji Near Magneto Mall, New Delhi',
    'VIDAI',
    '13  Nov 2022, 5:00 AM',
    'Hotel Sayaji Near Magneto Mall, New Delhi'
  ]

  const FourthPageData = [
    'venue',
    'rsvp',
    '_rsvp1',
    '_rsvp2',

    'Hotel Sayaji Near Magneto Mall, New Delhi',
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
  let weddingFourthPageCardData = []
  weddingFourthPageCardData = Object.entries(fourthPageData)

  const PostData = async (e) => {
    e.preventDefault()
    let name1 = firstPageData.name1?.toString() ?? ''
    let name2 = firstPageData.name2?.toString() ?? ''
    let _date = firstPageData?.date?.toString() ?? ''
    let parent1 = secondPageData?.parent1?.toString() ?? ''
    let parent2 = secondPageData?.parent2?.toString() ?? ''
    let sonOf = secondPageData?.sonOf?.toString() ?? ''
    let sonOrDaughter = secondPageData?.sonOrDaughter?.toString() ?? ''
    let parents1 = secondPageData?.parents1?.toString() ?? ''
    let grandSonOf = secondPageData?.grandSonOf?.toString() ?? ''
    let grandParents1 = secondPageData?.grandParents1?.toString() ?? ''
    let daughterOf = secondPageData?.daughterOf?.toString() ?? ''
    let parents2 = secondPageData?.parents2?.toString() ?? ''
    let grandDaughterOf = secondPageData?.grandDaughterOf?.toString() ?? ''
    let grandParents2 = secondPageData?.grandParents2?.toString() ?? ''
    let function1 = thirdPageData?.function1?.toString() ?? ''
    let function2 = thirdPageData?.function2?.toString() ?? ''
    let function3 = thirdPageData?.function3?.toString() ?? ''
    let function4 = thirdPageData?.function4?.toString() ?? ''
    let function5 = thirdPageData?.function5?.toString() ?? ''
    let function6 = thirdPageData?.function6?.toString() ?? ''
    let date1 = thirdPageData?.date1?.toString() ?? ''
    let date2 = thirdPageData?.date2?.toString() ?? ''
    let date3 = thirdPageData?.date3?.toString() ?? ''
    let date4 = thirdPageData?.date4?.toString() ?? ''
    let date5 = thirdPageData?.date5?.toString() ?? ''
    let date6 = thirdPageData?.date6?.toString() ?? ''
    let venue1 = thirdPageData?.venue1?.toString() ?? ''
    let venue2 = thirdPageData?.venue2?.toString() ?? ''
    let venue3 = thirdPageData?.venue3?.toString() ?? ''
    let venue4 = thirdPageData?.venue4?.toString() ?? ''
    let venue5 = thirdPageData?.venue5?.toString() ?? ''
    let venue6 = thirdPageData?.venue6?.toString() ?? ''
    let date = fourthPageData?.date?.toString() ?? ''

    let venue = fourthPageData?.venue?.toString() ?? ''
    let rsvp = fourthPageData?.rsvp?.toString() ?? ''
    let _rsvp1 = fourthPageData?._rsvp1?.toString() ?? ''
    let _rsvp2 = fourthPageData?._rsvp2?.toString() ?? ''
    let _with = 'With'
    let details
    let message = `${parent1} ${parent2} request the honour of your presence and blessings on the auspicious occasion of the wedding of their ${sonOrDaughter}`

    details = [
      { name1, _with, name2, _date },
      {
        message,
        name1,
        sonOf,
        parents1,
        grandSonOf,
        grandParents1,
        name2,
        daughterOf,
        parents2,
        grandDaughterOf,
        grandParents2
      },
      {
        function1,
        date1,
        venue1,
        function2,
        date2,
        venue2,
        function3,
        date3,
        venue3,
        function4,
        date4,
        venue4,
        function5,
        date5,
        venue5,
        function6,
        date6,
        venue6
      },
      { venue, rsvp, _rsvp1, _rsvp2 }
    ]
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/weddingcard11`, {
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
                  fontFamily: 'great-vibes',
                  color: '#e1cf54',
                  height: '100%',
                  padding: '150x 0 150px',
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
                  style={{
                    color: '#fff',
                    paddingTop: '10px',
                    maxWidth: '300px',
                    margin: 'auto'
                  }}
                >
                  With
                </h3>
                <h3
                  data-bs-toggle="modal"
                  data-bs-target="#id2"
                  style={{
                    paddingTop: '10px',
                    maxWidth: '300px',
                    margin: 'auto'
                  }}
                >
                  {firstPageData.name2}
                </h3>

                <h5
                  data-bs-toggle="modal"
                  data-bs-target="#id3"
                  style={{
                    paddingTop: '10px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#ebd0ab',
                    fontFamily: 'minion-pro-regular'
                  }}
                >
                  {firstPageData.date}
                </h5>
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
                  fontFamily: 'lucida-sans',
                  color: '#fff',
                  height: '100%',
                  padding: '250px 0 40px',
                  backgroundSize: '100% 100%'
                }}
              >
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id4"
                  style={{
                    margin: 'auto',
                    fontFamily: 'minion-pro-regular'
                  }}
                >
                  <span data-bs-toggle="modal" data-bs-target="#id4">
                    {secondPageData.parent1}
                  </span>
                  <span> and</span>
                  <span data-bs-toggle="modal" data-bs-target="#id5">
                    {' '}
                    {secondPageData.parent1}
                  </span>{' '}
                  request the honour of your presence and blessings on the auspicious occasion of the wedding of their{' '}
                  <span data-bs-toggle="modal" data-bs-target="#id6">
                    {secondPageData.sonOrDaughter}
                  </span>
                </h6>
                <h3
                  data-bs-toggle="modal"
                  data-bs-target="#id1"
                  style={{
                    paddingTop: '20px',
                    maxWidth: '350px',
                    margin: 'auto',
                    fontFamily: 'lucida-sans-demi',
                    color: '#fef496'
                  }}
                >
                  {' '}
                  {firstPageData.name1}
                </h3>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id7"
                  style={{ maxWidth: '300px', margin: 'auto', color: '#f5d1ab', fontFamily: 'minion-pro-regular' }}
                >
                  {' '}
                  {secondPageData.sonOf}
                </h6>
                <h5 data-bs-toggle="modal" data-bs-target="#id8" style={{ maxWidth: '300px', margin: 'auto' }}>
                  {' '}
                  {secondPageData.parents1}
                </h5>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id9"
                  style={{ maxWidth: '300px', margin: 'auto', color: '#f5d1ab', fontFamily: 'minion-pro-regular' }}
                >
                  {' '}
                  {secondPageData.grandSonOf}
                </h6>
                <h5 data-bs-toggle="modal" data-bs-target="#id10" style={{ maxWidth: '300px', margin: 'auto' }}>
                  {' '}
                  {secondPageData.grandParents1}
                </h5>
                <h3
                  data-bs-toggle="modal"
                  data-bs-target="#id2"
                  style={{
                    paddingTop: '40px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#fef496',
                    fontFamily: 'lucida-sans-demi'
                  }}
                >
                  {' '}
                  {firstPageData.name2}
                </h3>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id11"
                  style={{ maxWidth: '300px', margin: 'auto', color: '#f5d1ab', fontFamily: 'minion-pro-regular' }}
                >
                  {' '}
                  {secondPageData.daughterOf}
                </h6>

                <h5 data-bs-toggle="modal" data-bs-target="#id12" style={{ maxWidth: '300px', margin: 'auto' }}>
                  {secondPageData.parents2}
                </h5>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id13"
                  style={{ maxWidth: '300px', margin: 'auto', color: '#f5d1ab', fontFamily: 'minion-pro-regular' }}
                >
                  {secondPageData.grandDaughterOf}
                </h6>

                <h5 data-bs-toggle="modal" data-bs-target="#id14" style={{ maxWidth: '300px', margin: 'auto' }}>
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
                  fontFamily: 'minion-pro-regular',
                  color: '#fff',
                  height: '100%',
                  padding: '150px 0 150px',
                  backgroundSize: '100% 100%'
                }}
              >
                <h4
                  data-bs-toggle="modal"
                  data-bs-target="#id15"
                  style={{
                    maxWidth: '350px',
                    margin: 'auto',
                    fontFamily: '#minion-pro-semibold',
                    color: '#fffca5'
                  }}
                >
                  {' '}
                  {thirdPageData.function1}
                </h4>

                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id16"
                  style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto' }}
                >
                  {thirdPageData.date1}
                </h6>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id17"
                  style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto' }}
                >
                  {thirdPageData.venue1}
                </h6>
                <h4
                  data-bs-toggle="modal"
                  data-bs-target="#id18"
                  style={{
                    maxWidth: '350px',
                    margin: 'auto',
                    fontFamily: '#minion-pro-semibold',
                    color: '#fffca5'
                  }}
                >
                  {' '}
                  {thirdPageData.function2}
                </h4>

                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id19"
                  style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto' }}
                >
                  {thirdPageData.date2}
                </h6>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id20"
                  style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto' }}
                >
                  {thirdPageData.venue2}
                </h6>
                <h4
                  data-bs-toggle="modal"
                  data-bs-target="#id21"
                  style={{
                    maxWidth: '350px',
                    margin: 'auto',
                    fontFamily: '#minion-pro-semibold',
                    color: '#fffca5'
                  }}
                >
                  {' '}
                  {thirdPageData.function3}
                </h4>

                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id22"
                  style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto' }}
                >
                  {thirdPageData.date3}
                </h6>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id23"
                  style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto' }}
                >
                  {thirdPageData.venue3}
                </h6>
                <h4
                  data-bs-toggle="modal"
                  data-bs-target="#id24"
                  style={{
                    maxWidth: '350px',
                    margin: 'auto',
                    fontFamily: '#minion-pro-semibold',
                    color: '#fffca5'
                  }}
                >
                  {' '}
                  {thirdPageData.function4}
                </h4>

                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id25"
                  style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto' }}
                >
                  {thirdPageData.date4}
                </h6>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id26"
                  style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto' }}
                >
                  {thirdPageData.venue4}
                </h6>
                <h4
                  data-bs-toggle="modal"
                  data-bs-target="#id27"
                  style={{
                    maxWidth: '350px',
                    fontFamily: '#minion-pro-semibold',
                    margin: 'auto',
                    color: '#fffca5'
                  }}
                >
                  {' '}
                  {thirdPageData.function5}
                </h4>

                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id28"
                  style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto' }}
                >
                  {thirdPageData.date5}
                </h6>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id29"
                  style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto' }}
                >
                  {thirdPageData.venue5}
                </h6>
                <h4
                  className="card12-text"
                  data-bs-toggle="modal"
                  data-bs-target="#id30"
                  style={{
                    maxWidth: '350px',
                    margin: 'auto',
                    fontFamily: '#minion-pro-semibold',
                    color: '#fffca5'
                  }}
                >
                  {' '}
                  {thirdPageData.function6}
                </h4>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id31"
                  style={{ paddingTop: '20px', maxWidth: '300px', margin: 'auto' }}
                >
                  {thirdPageData.date6}
                </h6>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id32"
                  style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto' }}
                >
                  {thirdPageData.venue6}
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box">
              <div
                style={{
                  background: `url(${weddingCard4}) no-repeat center/contain`,
                  textAlign: 'center',
                  width: '100%',
                  fontFamily: 'myriad-pro-regular',
                  color: '#fff',
                  height: '100%',
                  padding: '250px 0 40px',
                  backgroundSize: '100% 100%'
                }}
              >
                <h4
                  data-bs-toggle="modal"
                  data-bs-target="#id33"
                  style={{
                    maxWidth: '350px',
                    margin: 'auto'
                  }}
                >
                  {' '}
                  {fourthPageData.venue}
                </h4>

                <h4
                  data-bs-toggle="modal"
                  data-bs-target="#id34"
                  style={{
                    paddingTop: '20px',
                    maxWidth: '300px',
                    margin: 'auto',
                    color: '#f9e378',
                    fontFamily: 'romelio'
                  }}
                >
                  {fourthPageData.rsvp}
                </h4>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id35"
                  style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto' }}
                >
                  {fourthPageData._rsvp1}
                </h6>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id36"
                  style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto' }}
                >
                  {fourthPageData._rsvp2}
                </h6>
                <h6
                  data-bs-toggle="modal"
                  data-bs-target="#id37"
                  style={{ paddingTop: '10px', maxWidth: '300px', margin: 'auto' }}
                >
                  {fourthPageData.date}
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

      {weddingSecondPageCardData?.map((val, index) => {
        return (
          <Modal
            key={index + 4}
            id={`id${index + 4}`}
            onClick={() => {
              let name = SecondPageData[index]
              let value = SecondPageData[index + 11]

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
              let value = ThirdPageData[index + 18]

              console.log({ name, value, index })

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

      {weddingFourthPageCardData?.map((val, index) => {
        return (
          <Modal
            key={index + 33}
            id={`id${index + 33}`}
            onClick={() => {
              let name = FourthPageData[index]
              let value = FourthPageData[index + 4]

              console.log({ name, value })

              setFourthPageData({ ...fourthPageData, [name]: [value] })
            }}
            onChange={(e) => {
              const name = e.target.name
              const value = e.target.value
              setFourthPageData({ ...fourthPageData, [name]: value })
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

export default Card72
