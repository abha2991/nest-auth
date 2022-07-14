import React, { useState } from 'react'
import Header from '../../Header'
import card1 from '../../img/Wedding/card31.jpg'
import card2 from '../../img/Wedding/card32.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import useProfileApi from '../../../api/useProfileApi'
import useQueryParams from '../../../hooks/useQueryParams'
import { useNavigate } from 'react-router'
import Footer from '../../Footer'
const Card4 = () => {
  const navigate = useNavigate()
  const id = useQueryParams()
  const { id: id2 } = id
  const { data: profile, status } = useProfileApi()
  function useHover(styleOnHover, styleOnNotHover = {}) {
    const [style, setStyle] = React.useState(styleOnNotHover)

    const onMouseEnter = () => setStyle(styleOnHover)
    const onMouseLeave = () => setStyle(styleOnNotHover)

    return { style, onMouseEnter, onMouseLeave }
  }
  const hover1 = useHover({ border: '2px solid #cc9d55' })
  const hover2 = useHover({ border: '2px solid #cc9d55' })
  const hover3 = useHover({ border: '2px solid #cc9d55' })
  const hover4 = useHover({ border: '2px solid #cc9d55' })
  const hover5 = useHover({ border: '2px solid #cc9d55' })

  const [cardData, setCardData] = useState({
    BrideName: 'Ishita Agrawal',
    StaticData0: 'weds',
    Groomname: 'Mohit Agrawal',
    StaticData1: 'Save the Date',
    Date: '12.01.2020'
  })

  const [secondPageData, setSecondPageData] = useState({
    BrideGrandFatherName: 'Mr. Om Prakash Ji Agrawal',
    StaticData2: 'and',
    BrideGrandMotherName: 'Mrs. Poolki Bai Agrawal',
    StaticData3: 'request',
    StaticData4: 'the honor of your presence and blessings on the anspicious\n',
    StaticData5: 'ocassion of the wedding ceremoney of their Grand Daughter',
    BrideName: 'Ishita Agrawal',
    StaticData6: 'Daughter Of',
    BrideFatherName: 'Mr. Rajiv Agrawal',

    BrideMotherName: 'Mrs. Rachna Agrawal',
    StaticData7: 'Grand Daughter of',
    GroomName: 'Mohit Agrawal',
    StaticData8: 'Son Of',
    GroomFatherName: 'Mr. Anil Agrawal',

    GroomMotherName: 'Mrs. Ritu Agrawal',
    StaticData9: 'Grand Son of',
    GroomGrandFatherName: 'Mr. Rahul Agrawal',

    GroomGrandMotherName: 'Mrs. Rema Agrawal',
    StaticData10: 'All are welcome'
  })

  const [thirdPageData, setThirdPageData] = useState({
    StaticData11: 'Functions',
    Function1: 'Mehandi Ceremoney',
    Function1Date: '12 AM onwards, 25 Dec 2019',
    Function1Venue: 'Hotel Sayaji, Near Magneto Mall, Raipur',
    Function2: 'Tilak Ceremoney',
    Function2Date: '12 AM onwards, 25 Dec 2019',
    Function2Venue: 'Hotel Sayaji, Near Magneto Mall, Raipur',
    Function3: 'Reception Ceremoney',
    Function3Date: '12 AM onwards, 25 Dec 2019',
    Function3Venue: 'Hotel Sayaji, Near Magneto Mall'
  })

  const [fourthPageData, setFourthPageData] = useState({
    StaticData12: 'Special Message',
    Message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",

    Message1:
      'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  })

  const [fifthPageData, setFifthPageData] = useState({
    StaticData13: 'Rsvp',
    Rsvp: 'Kindly respond by December 25',
    StaticData14: 'Venue',
    Address: 'Hotel Sayaji, Near Magneto Mall, ',
    Area: 'Avanti Vihar, Raipur, Chattisgarh',
    Date: '1 Jan 2020'
  })

  const handleInputs = (e) => {
    const name = e.target.name
    const value = e.target.value
    setCardData({ ...cardData, [name]: value })
  }
  const handleInputs1 = (e) => {
    const name = e.target.name
    const value = e.target.value
    setSecondPageData({ ...secondPageData, [name]: value })
  }
  const handleInputs2 = (e) => {
    const name = e.target.name
    const value = e.target.value
    setThirdPageData({ ...thirdPageData, [name]: value })
  }
  const handleInputs3 = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFourthPageData({ ...fourthPageData, [name]: value })
  }
  const handleInputs4 = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFifthPageData({ ...fifthPageData, [name]: value })
  }

  const reset = () => {
    setCardData({
      ...cardData,
      BrideName: 'Ishita Agrawal',
      StaticData0: 'weds',
      Groomname: 'Mohit Agrawal',
      StaticData1: 'Save the Date',
      Date: '12.01.2020'
    })

    setSecondPageData({
      ...secondPageData,
      BrideGrandFatherName: 'Mr. Om Prakash Ji Agrawal',
      StaticData2: 'and',
      BrideGrandMotherName: 'Mrs. Poolki Bai Agrawal',
      StaticData3: 'request',
      StaticData4: 'the honor of your presence and blessings on the anspicious\n',
      StaticData5: 'ocassion of the wedding ceremoney of their Grand Daughter',
      BrideName: 'Ishita Agrawal',
      StaticData6: 'Daughter Of',
      BrideFatherName: 'Mr. Rajiv Agrawal',

      BrideMotherName: 'Mrs. Rachna Agrawal',
      StaticData7: 'Grand Daughter of',
      GroomName: 'Mohit Agrawal',
      StaticData8: 'Son Of',
      GroomFatherName: 'Mr. Anil Agrawal',

      GroomMotherName: 'Mrs. Ritu Agrawal',
      StaticData9: 'Grand Son of',
      GroomGrandFatherName: 'Mr. Rahul Agrawal',

      GroomGrandMotherName: 'Mrs. Rema Agrawal',
      StaticData10: 'All are welcome'
    })

    setThirdPageData({
      ...thirdPageData,
      StaticData11: 'Functions',
      Function1: 'Mehandi Ceremoney',
      Function1Date: '12 AM onwards, 25 Dec 2019',
      Function1Venue: 'Hotel Sayaji, Near Magneto Mall, Raipur',
      Function2: 'Tilak Ceremoney',
      Function2Date: '12 AM onwards, 25 Dec 2019',
      Function2Venue: 'Hotel Sayaji, Near Magneto Mall, Raipur',
      Function3: 'Reception Ceremoney',
      Function3Date: '12 AM onwards, 25 Dec 2019',
      Function3Venue: 'Hotel Sayaji, Near Magneto Mall'
    })

    setFourthPageData({
      ...fourthPageData,
      StaticData12: 'Special Message',
      Message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
      Message1:
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    })

    setFifthPageData({
      ...fifthPageData,
      StaticData13: 'Rsvp',
      Rsvp: 'Kindly respond by December 25',
      StaticData14: 'Venue',
      Address: 'Hotel Sayaji, Near Magneto Mall,',
      Area: 'Avanti Vihar, Raipur, Chattisgarh',
      Date: '1 Jan 2020'
    })
  }

  let details

  details = [
    {
      brideName: cardData.BrideName,
      staticData0: cardData.StaticData0,
      groomName: cardData.Groomname,
      staticData1: cardData.StaticData1,
      date: cardData.Date
    },
    {
      brideGrandFatherName: secondPageData.BrideGrandFatherName,
      staticData2: secondPageData.StaticData2,
      brideGrandMotherName: secondPageData.BrideGrandMotherName,
      staticData3: secondPageData.StaticData3,
      staticData4: secondPageData.StaticData4,
      staticData5: secondPageData.StaticData5,
      brideName: secondPageData.BrideName,
      staticData6: secondPageData.StaticData6,
      brideFatherName: secondPageData.BrideFatherName,
      staticData: secondPageData.StaticData2,
      brideMotherName: secondPageData.BrideMotherName,
      staticData7: secondPageData.StaticData7,
      bride_GrandFatherName: secondPageData.BrideGrandFatherName,
      static_Data2: secondPageData.StaticData2,
      bride_GrandMotherName: secondPageData.BrideGrandMotherName,
      groomName: secondPageData.GroomName,
      staticData8: secondPageData.StaticData8,
      groomFatherName: secondPageData.GroomGrandFatherName,
      static_Data: secondPageData.StaticData2,
      groomMotherName: secondPageData.GroomMotherName,
      staticData9: secondPageData.StaticData9,
      groomGrandFatherName: secondPageData.GroomGrandFatherName,
      static_Data1: secondPageData.StaticData2,
      groomGrandMotherName: secondPageData.GroomGrandMotherName,
      staticData10: secondPageData.StaticData10
    },
    {
      staticData11: thirdPageData.StaticData11,
      function1: thirdPageData.Function1,
      function1date: thirdPageData.Function1Date,
      function1venue: thirdPageData.Function1Venue,
      function2: thirdPageData.Function2,
      function2date: thirdPageData.Function2Date,
      function2venue: thirdPageData.Function2Venue,
      function3: thirdPageData.Function3,
      function3date: thirdPageData.Function3Date,
      function3venue: thirdPageData.Function3Venue
    },
    { staticData12: fourthPageData.StaticData12, message: fourthPageData.Message, message1: fourthPageData.Message1 },
    {
      staticData13: fifthPageData.StaticData13,
      rsvp: fifthPageData.Rsvp,
      staticData14: fifthPageData.StaticData14,
      adress: fifthPageData.Address,
      area: fifthPageData.Area,
      date: fifthPageData.Date
    }
  ]

  const PostData = async (e) => {
    e.preventDefault()

    const res = await fetch(`http://localhost:3001/api/card1/preview`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id2,
        details,
        userId: profile.id,
        email: profile.email
      })
    })

    const card_data = await res.json()
    console.log(card_data.id)
    setCardData(card_data.id)

    navigate(`/preview?id=${card_data.id}`)
  }

  return (
    <>
      <Header />
      <div className="pt-5">
        <h3 className="text-center">Try Card</h3>
      </div>
      <hr />
      <div className="container" style={{ position: 'relative' }}>
        <div className="row my-5">
          <div className="col-md-4 mb-3">
            <div className="card-box">
              <div
                style={{
                  background: `url(${card1}) no-repeat center/cover`,
                  textAlign: 'center',
                  width: '100%',
                  color: '#cc9d55',
                  fontFamily: "'Berkshire Swash', cursive",
                  height: '100%',
                  padding: '300px 0px 0px'
                }}
              >
                <div className="editable" {...hover1}>
                  <h2 data-bs-toggle="modal" data-bs-target="#id1" style={{ fontFamily: "'Berkshire Swash', cursive" }}>
                    {cardData.BrideName}
                  </h2>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: 'transparent' }} />
                </div>
                <h6>{cardData.StaticData0}</h6>
                <div className="editable" {...hover2}>
                  <h2 data-bs-toggle="modal" data-bs-target="#id2" style={{ fontFamily: "'Berkshire Swash', cursive" }}>
                    {cardData.Groomname}
                  </h2>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: 'transparent' }} />
                </div>
                <div className="editable mt-5 mb-0" {...hover3}>
                  <h4 data-bs-toggle="modal" data-bs-target="#staticId1" className="mb-0">
                    {cardData.StaticData1}
                  </h4>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: 'transparent' }} />
                </div>
                <div className="editable" {...hover4}>
                  <h5 data-bs-toggle="modal" data-bs-target="#id3" className="mb-2">
                    {cardData.Date}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: 'transparent' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card-box">
              <div
                style={{
                  background: `url(${card2}) no-repeat center/cover`,
                  textAlign: 'center',
                  width: '100%',
                  fontStyle: 'italic',
                  color: '#fff',
                  height: '100%',
                  padding: '130px 0px 30px'
                }}
              >
                <p style={{ fontSize: '10px' }}>
                  <span data-bs-toggle="modal" data-bs-target="#id4">
                    {secondPageData.BrideGrandFatherName}
                  </span>{' '}
                  {secondPageData.StaticData2}{' '}
                  <span data-bs-toggle="modal" data-bs-target="#id5">
                    {secondPageData.BrideGrandMotherName}
                  </span>{' '}
                  {secondPageData.StaticData3}
                  <br />
                  {secondPageData.StaticData4}
                  <br />
                  {secondPageData.StaticData5}
                </p>
                <div className="editable" {...hover2}>
                  <h2
                    data-bs-toggle="modal"
                    data-bs-target="#id6"
                    style={{
                      fontFamily: "'Berkshire Swash', cursive",
                      fontStyle: 'normal',
                      color: '#cc9d55'
                    }}
                  >
                    {secondPageData.BrideName}
                  </h2>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: 'transparent' }} />
                </div>
                <p className="mb-0" style={{ fontSize: '13px' }}>
                  {secondPageData.StaticData6}
                </p>
                <p style={{ fontSize: '13px' }} data-bs-toggle="modal">
                  <span data-bs-toggle="modal" data-bs-target="#id7">
                    {secondPageData.BrideFatherName}
                  </span>{' '}
                  {secondPageData.StaticData2}{' '}
                  <span data-bs-toggle="modal" data-bs-target="#id8">
                    {secondPageData.BrideMotherName}
                  </span>
                </p>
                <p className="mb-0" style={{ fontSize: '13px' }}>
                  {secondPageData.StaticData8}
                </p>
                <p style={{ fontSize: '13px' }}>
                  <span data-bs-toggle="modal" data-bs-target="#id4">
                    {secondPageData.BrideGrandFatherName}
                  </span>{' '}
                  {secondPageData.StaticData2}{' '}
                  <span data-bs-toggle="modal" data-bs-target="#id5">
                    {secondPageData.BrideGrandMotherName}
                  </span>
                </p>
                <div className="editable" {...hover1}>
                  <h2
                    data-bs-toggle="modal"
                    data-bs-target="#id9"
                    style={{
                      fontFamily: "'Berkshire Swash', cursive",
                      fontStyle: 'normal',
                      color: '#cc9d55'
                    }}
                  >
                    {secondPageData.GroomName}
                  </h2>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: 'transparent' }} />
                </div>
                <p className="mb-0" style={{ fontSize: '13px' }}>
                  {secondPageData.StaticData8}
                </p>
                <p style={{ fontSize: '13px' }}>
                  <span data-bs-toggle="modal" data-bs-target="#id10">
                    {secondPageData.GroomFatherName}
                  </span>{' '}
                  {secondPageData.StaticData2}{' '}
                  <span data-bs-toggle="modal" data-bs-target="#id11">
                    {secondPageData.GroomMotherName}
                  </span>
                </p>
                <p className="mb-0" style={{ fontSize: '13px' }}>
                  {secondPageData.StaticData9}
                </p>
                <p style={{ fontSize: '13px' }}>
                  <span data-bs-toggle="modal" data-bs-target="#id12">
                    {secondPageData.GroomGrandFatherName}
                  </span>{' '}
                  {secondPageData.StaticData2}{' '}
                  <span data-bs-toggle="modal" data-bs-target="#id13">
                    {secondPageData.GroomGrandMotherName}
                  </span>
                </p>
                <div className="editable" {...hover1}>
                  <h3
                    data-bs-toggle="modal"
                    data-bs-target="#staticId3"
                    style={{
                      fontFamily: "'Berkshire Swash', cursive",
                      fontStyle: 'normal',
                      color: '#cc9d55'
                    }}
                  >
                    {secondPageData.StaticData10}
                  </h3>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: 'transparent' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card-box">
              <div
                style={{
                  background: `url(${card2}) no-repeat center/cover`,
                  textAlign: 'center',
                  width: '100%',
                  color: '#fff',
                  height: '100%',
                  padding: '100px 0px 30px'
                }}
              >
                <h1 style={{ fontFamily: "'Berkshire Swash', cursive", color: '#cc9d55' }}>
                  {thirdPageData.StaticData11}
                </h1>
                <div className="editable" {...hover1}>
                  <h2
                    data-bs-toggle="modal"
                    data-bs-target="#id14"
                    style={{
                      fontFamily: "'Berkshire Swash', cursive",
                      color: '#cc9d55',
                      marginBottom: '0',
                      lineHeight: 'normal'
                    }}
                  >
                    {thirdPageData.Function1}
                  </h2>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <p
                  style={{
                    fontSize: '10px',
                    maxWidth: '250px',
                    margin: 'auto'
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p
                  style={{
                    fontStyle: 'italic',
                    fontSize: '13px',
                    marginBottom: '0'
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#id15"
                >
                  {thirdPageData.Function1Date}
                </p>
                <p
                  style={{
                    fontStyle: 'italic',
                    fontSize: '13px'
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#id16"
                >
                  {thirdPageData.Function1Venue}
                </p>
                <div className="editable" {...hover1}>
                  <h2
                    data-bs-toggle="modal"
                    data-bs-target="#id17"
                    style={{
                      color: '#cc9d55',
                      fontFamily: "'Berkshire Swash', cursive",
                      marginBottom: '0',
                      lineHeight: 'normal'
                    }}
                  >
                    {thirdPageData.Function2}
                  </h2>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <p
                  style={{
                    fontSize: '10px',
                    maxWidth: '250px',
                    margin: 'auto'
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p
                  style={{
                    fontStyle: 'italic',
                    fontSize: '13px',
                    marginBottom: '0'
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#id18"
                >
                  {thirdPageData.Function2Date}
                </p>
                <p
                  style={{
                    fontStyle: 'italic',
                    fontSize: '13px'
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#id19"
                >
                  {thirdPageData.Function2Venue}
                </p>
                <div className="editable" {...hover1}>
                  <h2
                    data-bs-toggle="modal"
                    data-bs-target="#id20"
                    style={{
                      color: '#cc9d55',
                      fontFamily: "'Berkshire Swash', cursive",
                      marginBottom: '0',
                      lineHeight: 'normal'
                    }}
                  >
                    {thirdPageData.Function3}
                  </h2>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <p
                  style={{
                    fontSize: '10px',
                    maxWidth: '250px',
                    margin: 'auto'
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p
                  style={{
                    fontStyle: 'italic',
                    fontSize: '13px',
                    marginBottom: '0'
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#id21"
                >
                  {thirdPageData.Function3Date}
                </p>
                <p
                  style={{
                    fontStyle: 'italic',
                    fontSize: '13px'
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#id22"
                >
                  {thirdPageData.Function3Venue}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card-box">
              <div
                style={{
                  background: `url(${card2}) no-repeat center/cover`,
                  textAlign: 'center',
                  width: '100%',
                  color: '#fff',
                  height: '100%',
                  padding: '130px 0px 70px'
                }}
              >
                <h1
                  style={{
                    fontFamily: "'Berkshire Swash', cursive",
                    color: '#cc9d55'
                  }}
                >
                  {fourthPageData.StaticData12}
                </h1>
                <p
                  style={{
                    fontStyle: 'italic',
                    fontSize: '13px',
                    maxWidth: '250px',
                    margin: 'auto',
                    marginBottom: '20px'
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#id23"
                >
                  {fourthPageData.Message}
                </p>
                <p
                  style={{
                    fontStyle: 'italic',
                    fontSize: '13px',
                    maxWidth: '250px',
                    margin: 'auto'
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#id24"
                >
                  {fourthPageData.Message1}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card-box">
              <div
                style={{
                  background: `url(${card2}) no-repeat center/cover`,
                  textAlign: 'center',
                  width: '100%',
                  color: '#fff',
                  height: '100%',
                  padding: '200px 0px 0px'
                }}
              >
                <h2 style={{ fontFamily: "'Berkshire Swash', cursive", color: '#cc9d55' }}>
                  {fifthPageData.StaticData13}
                </h2>
                <p
                  style={{
                    fontSize: '13px',
                    maxWidth: '250px',
                    margin: 'auto',
                    marginBottom: '20px'
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#id25"
                >
                  {fifthPageData.Rsvp}
                </p>
                <h2
                  style={{
                    fontFamily: "'Berkshire Swash', cursive",
                    color: '#cc9d55',
                    marginTop: '30px'
                  }}
                >
                  {fifthPageData.StaticData14}
                </h2>
                <p
                  style={{
                    fontSize: '13px',
                    maxWidth: '250px',
                    margin: 'auto',
                    marginBottom: '20px'
                  }}
                >
                  <span data-bs-toggle="modal" data-bs-target="#id26">
                    {fifthPageData.Address}
                  </span>{' '}
                  <span data-bs-toggle="modal" data-bs-target="#id27">
                    {fifthPageData.Area}
                  </span>
                </p>
                <p
                  style={{
                    fontStyle: 'italic',
                    fontSize: '16px',
                    maxWidth: '250px',
                    margin: 'auto',
                    marginBottom: '20px'
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#id28"
                >
                  {fifthPageData.Date}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      {/* Modal  */}
      {/*{card1.map((val,index)=>{*/}
      {/*  <div className="modal fade" id={"id"+index+1} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">         <div className="modal-dialog modal-dialog-centered">             <div className="modal-content">                 <div className="modal-body">                     <form>                         <input type="text" name={"data"+index+1}  value={`cardData.data${index+1}`} onChange={handleInputs}   className="form-control mb-3" />                         <div className="d-flex justify-content-between text-center">                             <button type="button" className="btn btn-primary">Save</button>                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>                         </div>                     </form>                 </div>             </div>         </div>     </div>*/}
      {/*})}*/}
      {/*Modal*/}
      <div
        className="modal fade"
        id="id1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="BrideName"
                  placeholder="Bride Name"
                  value={cardData.BrideName}
                  onChange={handleInputs}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*Modal*/}
      <div
        className="modal fade"
        id="id2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Groomname"
                  placeholder="Groom Name"
                  value={cardData.Groomname}
                  onChange={handleInputs}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}{' '}
      {/*<div className="modal fade" id="id2" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">*/}{' '}
      {/*        <div className="modal-dialog modal-dialog-centered">*/}{' '}
      {/*            <div className="modal-content">*/} {/*                <div className="modal-body">*/}{' '}
      {/*                    <form>*/}{' '}
      {/*                        <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3" />*/}{' '}
      {/*                        <div className="d-flex justify-content-between text-center">*/}{' '}
      {/*                            <button type="button" className="btn btn-primary">Save</button>*/}{' '}
      {/*                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}{' '}
      {/*                        </div>*/} {/*                    </form>*/} {/*                </div>*/}{' '}
      {/*            </div>*/} {/*        </div>*/} {/*    </div>*/} {/* Modal  */}
      <div
        className="modal fade"
        id="id3"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Date"
                  placeholder="Date"
                  value={cardData.Date}
                  onChange={handleInputs}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id4"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="BrideGrandFatherName"
                  placeholder="Bride GrandFather Name"
                  value={secondPageData.BrideGrandFatherName}
                  onChange={handleInputs1}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id5"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="BrideGrandMotherName"
                  placeholder="Bride GrandMother Name"
                  value={secondPageData.BrideGrandMotherName}
                  onChange={handleInputs1}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id6"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="BrideName"
                  placeholder="Bride Name"
                  value={secondPageData.BrideName}
                  onChange={handleInputs1}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id7"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="BrideFatherName"
                  placeholder="Bride Father Name"
                  value={secondPageData.BrideFatherName}
                  onChange={handleInputs1}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id8"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="BrideMotherName"
                  placeholder="Bride Mother Name"
                  value={secondPageData.BrideMotherName}
                  onChange={handleInputs1}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id9"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="GroomName"
                  placeholder="Groom Name"
                  value={secondPageData.GroomName}
                  onChange={handleInputs1}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id10"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="GroomFatherName"
                  placeholder="Groom Father Name"
                  value={secondPageData.GroomFatherName}
                  onChange={handleInputs1}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id11"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="GroomMotherName"
                  placeholder="Groom Mother Name"
                  value={secondPageData.GroomMotherName}
                  onChange={handleInputs1}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id12"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="GroomGrandFatherName"
                  placeholder="Groom GrandFather Name"
                  value={secondPageData.GroomGrandFatherName}
                  onChange={handleInputs1}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id13"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="GroomGrandMotherName"
                  placeholder="Groom GrandMother Name"
                  value={secondPageData.GroomGrandMotherName}
                  onChange={handleInputs1}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id14"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Function1"
                  placeholder="Function Name"
                  value={thirdPageData.Function1}
                  onChange={handleInputs2}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id15"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Function1Date"
                  placeholder="Function Date"
                  value={thirdPageData.Function1Date}
                  onChange={handleInputs2}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id16"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Function1Venue"
                  placeholder="Function Venue"
                  value={thirdPageData.Function1Venue}
                  onChange={handleInputs2}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id17"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Function2"
                  placeholder="Function Name"
                  value={thirdPageData.Function2}
                  onChange={handleInputs2}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id18"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Function2Date"
                  placeholder="Function Date"
                  value={thirdPageData.Function2Date}
                  onChange={handleInputs2}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id19"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Function2Venue"
                  placeholder="Function Venue"
                  value={thirdPageData.Function2Venue}
                  onChange={handleInputs2}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id20"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Function3"
                  placeholder="Function Name"
                  value={thirdPageData.Function3}
                  onChange={handleInputs2}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id21"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Function3Date"
                  placeholder="Function Date"
                  value={thirdPageData.Function3Date}
                  onChange={handleInputs2}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id22"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Function3Venue"
                  placeholder="Function Venue"
                  value={thirdPageData.Function3Venue}
                  onChange={handleInputs2}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id23"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Message"
                  placeholder="Message"
                  value={fourthPageData.Message}
                  onChange={handleInputs3}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id24"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Message1"
                  placeholder="Message"
                  value={fourthPageData.Message1}
                  onChange={handleInputs3}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id25"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Rsvp"
                  placeholder="RSVP"
                  value={fifthPageData.Rsvp}
                  onChange={handleInputs4}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id26"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Address"
                  placeholder="Address"
                  value={fifthPageData.Address}
                  onChange={handleInputs4}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id27"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Area"
                  placeholder="Area"
                  value={fifthPageData.Area}
                  onChange={handleInputs4}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <div
        className="modal fade"
        id="id28"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="id1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  name="Date"
                  placeholder="Date"
                  value={fifthPageData.Date}
                  onChange={handleInputs4}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between text-center">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reset()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 text-center my-4">
        <button
          onClick={PostData}
          className="btn"
          style={{
            borderRadius: '50px',
            background: '#FF3767',
            color: '#fff',
            padding: '10px 20px'
          }}
        >
          Preview
        </button>
      </div>
      <Footer />
    </>
  )
}

export default Card4

// import React,{useState} from "react";
// import Header from "../../Header";
// import card1 from "../../img/card31.jpg";
// import card2 from "../../img/card32.jpg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
//
// const Card4 = () => {
//   function useHover(styleOnHover, styleOnNotHover = {}) {
//     const [style, setStyle] = React.useState(styleOnNotHover);
//
//     const onMouseEnter = () => setStyle(styleOnHover)
//     const onMouseLeave = () => setStyle(styleOnNotHover)
//
//     return { style, onMouseEnter, onMouseLeave }
//   }
//   const hover1 = useHover({ border: "2px solid #cc9d55" })
//   const hover2 = useHover({ border: "2px solid #cc9d55" })
//   const hover3 = useHover({ border: "2px solid #cc9d55" })
//   const hover4 = useHover({ border: "2px solid #cc9d55" })
//   const hover5 = useHover({ border: "2px solid #cc9d55" })
//
//   const [cardData, setCardData] = useState(
//       [{data0:"Ishita Agrawal"},
//         {data1:"Mohit Agrawal"},{data2:"Save the Date"},{data3:"12.01.2020"}]
//
//   );
//
//
//
//   const handleInputs = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setCardData({...cardData, [name]: value});
//   };
//
//   let card_data=[];
//   card_data=[cardData];
//   //console.log(typeof card_data)
//   //console.log(card_data[0])
//
//   card_data.map((val,index)=>{
//     console.log(val)
//
//   })
//
//   if(card_data) {
//     return (
//         <>
//             <Header/>
//             <div className="container" style={{position: "relative"}}>
//                 <div className="row my-5">
//                     <div className="col-md-4 mb-3">
//                         <div className="card-box">
//                             <div style={{
//                               background: `url(${card1}) no-repeat center/cover`,
//                               textAlign: "center",
//                               width: "100%",
//                               color: "#cc9d55",
//                               fontFamily: "'Berkshire Swash', cursive",
//                               height: "100%",
//                               padding: "300px 0px 0px"
//                             }}>
//                                 <div className="editable" {...hover1}>
//                                     <h2 data-bs-toggle="modal" data-bs-target="#id0" style={{fontFamily: "'Berkshire Swash', cursive",}}>{cardData[0].data0}</h2>
//                                     <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "transparent"}}/>
//                                 </div>
//                                 <h6>weds</h6>
//                                 <div className="editable" {...hover2}>
//                                     <h2 data-bs-toggle="modal" data-bs-target="#id1" style={{fontFamily: "'Berkshire Swash', cursive"}}>{cardData[1].data1}</h2>
//                                     <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "transparent"}}/>
//                                 </div>
//                                 <div className="editable mt-5 mb-0" {...hover3}>
//                                     <h4 data-bs-toggle="modal" data-bs-target="#id2" className="mb-0">{cardData[2].data2}</h4>
//                                     <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "transparent"}}/>
//                                 </div>
//                                 <div className="editable" {...hover4}>
//                                     <h5 data-bs-toggle="modal" data-bs-target="#id3" className="mb-2">{cardData[3].data3}</h5>
//                                     <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "transparent"}}/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <div className="card-box">
//                             <div style={{
//                               background: `url(${card2}) no-repeat center/cover`,
//                               textAlign: "center",
//                               width: "100%",
//                               fontStyle: "italic",
//                               color: "#fff",
//                               height: "100%",
//                               padding: "130px 0px 30px"
//                             }}>
//                                 <p style={{fontSize: "10px"}}>Mr. Om Prakash Ji Agrawal and Mrs. Poolki Bai Agrawal request<br/>the honor of your presence and blessings on the anspicious<br/>ocassion of the wedding ceremoney of their Grand Son</p>
//                                 <div className="editable" {...hover2}>
//                                     <h2 data-bs-toggle="modal" data-bs-target="#id2" style={{
//                                       fontFamily: "'Berkshire Swash', cursive",
//                                       fontStyle: "normal",
//                                       color: "#cc9d55"
//                                     }}>Mohit Agrawal</h2>
//                                     <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "transparent"}}/>
//                                 </div>
//                                 <p className="mb-0" style={{fontSize: "13px"}}>Son of</p>
//                                 <p style={{fontSize: "13px"}}>Mr. Rajiv Agrawal and Mrs. Rachna Agrawal</p>
//                                 <p className="mb-0" style={{fontSize: "13px"}}>Grand Son of</p>
//                                 <p style={{fontSize: "13px"}}>Mr. Rajesh Agrawal and Mrs. Anchal Agrawal</p>
//                                 <div className="editable" {...hover1}>
//                                     <h2 data-bs-toggle="modal" data-bs-target="#id1" style={{
//                                       fontFamily: "'Berkshire Swash', cursive",
//                                       fontStyle: "normal",
//                                       color: "#cc9d55"
//                                     }}>Ishita Agrawal</h2>
//                                     <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "transparent"}}/>
//                                 </div>
//                                 <p className="mb-0" style={{fontSize: "13px"}}>Son of</p>
//                                 <p style={{fontSize: "13px"}}>Mr. Anil Agrawal and Mrs. Ritu Agrawal</p>
//                                 <p className="mb-0" style={{fontSize: "13px"}}>Grand Son of</p>
//                                 <p style={{fontSize: "13px"}}>Mr. Rahul Agrawal and Mrs. Rema Agrawal</p>
//                                 <div className="editable" {...hover1}>
//                                     <h3 data-bs-toggle="modal" data-bs-target="#id1" style={{
//                                       fontFamily: "'Berkshire Swash', cursive",
//                                       fontStyle: "normal",
//                                       color: "#cc9d55"
//                                     }}>All are welcome</h3>
//                                     <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "transparent"}}/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//
//                     <div className="col-md-4 mb-3">
//                         <div className="card-box">
//                             <div style={{
//                               background: `url(${card2}) no-repeat center/cover`,
//                               textAlign: "center",
//                               width: "100%",
//                               color: "#fff",
//                               height: "100%",
//                               padding: "100px 0px 30px"
//                             }}>
//                                 <h1 style={{fontFamily: "'Berkshire Swash', cursive", color: "#cc9d55"}}>Functions</h1>
//                                 <div className="editable" {...hover1}>
//                                     <h2 data-bs-toggle="modal" data-bs-target="#id1" style={{
//                                       fontFamily: "'Berkshire Swash', cursive",
//                                       color: "#cc9d55",
//                                       marginBottom: "0",
//                                       lineHeight: "normal"
//                                     }}>Mehandi Ceremoney</h2>
//                                     <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "#50024B"}}/>
//                                 </div>
//                                 <p style={{
//                                   fontSize: "10px",
//                                   maxWidth: "250px",
//                                   margin: "auto"
//                                 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                                 <p style={{
//                                   fontStyle: "italic",
//                                   fontSize: "13px",
//                                   marginBottom: "0"
//                                 }}>12 AM onwards, 25 Dec 2019</p>
//                                 <p style={{
//                                   fontStyle: "italic",
//                                   fontSize: "13px"
//                                 }}>Hotel Sayaji, Near Magneto Mall, Raipur</p>
//                                 <div className="editable" {...hover1}>
//                                     <h2 data-bs-toggle="modal" data-bs-target="#id1" style={{
//                                       color: "#cc9d55",
//                                       fontFamily: "'Berkshire Swash', cursive",
//                                       marginBottom: "0",
//                                       lineHeight: "normal"
//                                     }}>Tilak Ceremoney</h2>
//                                     <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "#50024B"}}/>
//                                 </div>
//                                 <p style={{
//                                   fontSize: "10px",
//                                   maxWidth: "250px",
//                                   margin: "auto"
//                                 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                                 <p style={{
//                                   fontStyle: "italic",
//                                   fontSize: "13px",
//                                   marginBottom: "0"
//                                 }}>12 AM onwards, 25 Dec 2019</p>
//                                 <p style={{
//                                   fontStyle: "italic",
//                                   fontSize: "13px"
//                                 }}>Hotel Sayaji, Near Magneto Mall, Raipur</p>
//                                 <div className="editable" {...hover1}>
//                                     <h2 data-bs-toggle="modal" data-bs-target="#id1" style={{
//                                       color: "#cc9d55",
//                                       fontFamily: "'Berkshire Swash', cursive",
//                                       marginBottom: "0",
//                                       lineHeight: "normal"
//                                     }}>Reception Ceremoney</h2>
//                                     <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "#50024B"}}/>
//                                 </div>
//                                 <p style={{
//                                   fontSize: "10px",
//                                   maxWidth: "250px",
//                                   margin: "auto"
//                                 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                                 <p style={{
//                                   fontStyle: "italic",
//                                   fontSize: "13px",
//                                   marginBottom: "0"
//                                 }}>12 AM onwards, 25 Dec 2019</p>
//                                 <p style={{
//                                   fontStyle: "italic",
//                                   fontSize: "13px"
//                                 }}>Hotel Sayaji, Near Magneto Mall, Raipur</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <div className="card-box">
//                             <div style={{
//                               background: `url(${card2}) no-repeat center/cover`,
//                               textAlign: "center",
//                               width: "100%",
//                               color: "#fff",
//                               height: "100%",
//                               padding: "130px 0px 70px"
//                             }}>
//                                 <h1 style={{
//                                   fontFamily: "'Berkshire Swash', cursive",
//                                   color: "#cc9d55"
//                                 }}>Special Message</h1>
//                                 <p style={{
//                                   fontStyle: "italic",
//                                   fontSize: "13px",
//                                   maxWidth: "250px",
//                                   margin: "auto",
//                                   marginBottom: "20px"
//                                 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
//                                 <p style={{
//                                   fontStyle: "italic",
//                                   fontSize: "13px",
//                                   maxWidth: "250px",
//                                   margin: "auto"
//                                 }}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <div className="card-box">
//                             <div style={{
//                               background: `url(${card2}) no-repeat center/cover`,
//                               textAlign: "center",
//                               width: "100%",
//                               color: "#fff",
//                               height: "100%",
//                               padding: "200px 0px 0px"
//                             }}>
//                                 <h2 style={{fontFamily: "'Berkshire Swash', cursive", color: "#cc9d55"}}>Rsvp</h2>
//                                 <p style={{
//                                   fontSize: "13px",
//                                   maxWidth: "250px",
//                                   margin: "auto",
//                                   marginBottom: "20px"
//                                 }}>Kindly respond by December 25</p>
//                                 <h2 style={{
//                                   fontFamily: "'Berkshire Swash', cursive",
//                                   color: "#cc9d55",
//                                   marginTop: "30px"
//                                 }}>Venue</h2>
//                                 <p style={{
//                                   fontSize: "13px",
//                                   maxWidth: "250px",
//                                   margin: "auto",
//                                   marginBottom: "20px"
//                                 }}>Hotel Sayaji, Near Magneto Mall, Avanti Vihar, Raipur, Chattisgarh</p>
//                                 <p style={{
//                                   fontStyle: "italic",
//                                   fontSize: "16px",
//                                   maxWidth: "250px",
//                                   margin: "auto",
//                                   marginBottom: "20px"
//                                 }}>1 Jan 2020</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                 </div>
//             </div>
//
//           {/* Modal  */}
//
//
//
//                 <div className="modal fade" id="id0" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby={"id"+index} aria-hidden="true">
//               <div className="modal-dialog modal-dialog-centered">
//                 <div className="modal-content">
//                   <div className="modal-body">
//                     <form>
//                       <input type="text" name={"data"+index}   value={val} onChange={handleInputs}   className="form-control mb-3" />
//                       <div className="d-flex justify-content-between text-center">
//                         <button type="button" className="btn btn-primary">Save</button>
//                         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//                 </div>
//
//
//           {/* Modal  */}
//
//
//
//           <div className="modal fade" id="id1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby={"id"+index} aria-hidden="true">
//               <div className="modal-dialog modal-dialog-centered">
//                 <div className="modal-content">
//                   <div className="modal-body">
//                     <form>
//                       <input type="text" name={"data"+index}   value={val} onChange={handleInputs}   className="form-control mb-3" />
//                       <div className="d-flex justify-content-between text-center">
//                         <button type="button" className="btn btn-primary">Save</button>
//                         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//                 </div>
//
//           {/* Modal  */}
//
//
//
//           <div className="modal fade" id="id2" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby={"id"+index} aria-hidden="true">
//               <div className="modal-dialog modal-dialog-centered">
//                 <div className="modal-content">
//                   <div className="modal-body">
//                     <form>
//                       <input type="text" name={"data"+index}   value={val} onChange={handleInputs}   className="form-control mb-3" />
//                       <div className="d-flex justify-content-between text-center">
//                         <button type="button" className="btn btn-primary">Save</button>
//                         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//                 </div>
//
//           {/*{card1.map((val,index)=>{*/}
//
//           {/*  <div className="modal fade" id={"id"+index+1} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">         <div className="modal-dialog modal-dialog-centered">             <div className="modal-content">                 <div className="modal-body">                     <form>                         <input type="text" name={"data"+index+1}  value={`cardData.data${index+1}`} onChange={handleInputs}   className="form-control mb-3" />                         <div className="d-flex justify-content-between text-center">                             <button type="button" className="btn btn-primary">Save</button>                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>                         </div>                     </form>                 </div>             </div>         </div>     </div>*/}
//
//           {/*})}*/}
//
//           {/* Modal  */} {/*<div className="modal fade" id="id2" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">*/} {/*        <div className="modal-dialog modal-dialog-centered">*/} {/*            <div className="modal-content">*/} {/*                <div className="modal-body">*/} {/*                    <form>*/} {/*                        <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3" />*/} {/*                        <div className="d-flex justify-content-between text-center">*/} {/*                            <button type="button" className="btn btn-primary">Save</button>*/} {/*                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/} {/*                        </div>*/} {/*                    </form>*/} {/*                </div>*/} {/*            </div>*/} {/*        </div>*/} {/*    </div>*/} {/* Modal  */}
//           <div className="modal fade" id="id3" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id4" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id6" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id7" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id8" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id9" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id10" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id11" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id12" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id13" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id14" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id15" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id16" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id17" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id18" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id19" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id20" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id21" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id22" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id23" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id24" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id25" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           {/* Modal  */}
//           <div className="modal fade" id="id26" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <form>
//                                 <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
//                                 <div className="d-flex justify-content-between text-center">
//                                     <button type="button" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//
//     )
//   }
// }
//
// export default Card4
