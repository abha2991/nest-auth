import React, { useState } from 'react'
import Header from '../../../Header'
import thankyouCard from '../../../img/ThankYou/ThankYou_5_1.png'

import useProfileApi from '../../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../../hooks/useQueryParams'

import Footer from '../../../Footer'

import Modal from '../../../Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const Card22 = () => {
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

  const [cardData, setCardData] = useState({
    receiverName: 'Dear Jeane,',
    message_1:
      'You have been extremely supportive through this difficult time. You may not realise what a blessing you have been. Thank you for your help',
    senderName: 'Love Mike'
  })

  const messageData = [
    'receiverName',
    'message_1',
    'senderName',
    'Dear Jeane,',
    'You have been extremely supportive through this difficult time. You may not realise what a blessing you have been. Thank you for your help',
    'Love Mike'
  ]

  let thankyouCardData = []
  thankyouCardData = Object.entries(cardData)

  const PostData = async (e) => {
    e.preventDefault()
    let receiverName = cardData.receiverName?.toString() ?? ''
    let message_1 = cardData.message_1?.toString() ?? ''
    let senderName = cardData.senderName?.toString() ?? ''

    let details

    details = [{ receiverName, message_1, senderName }]
    setLoading(true)
    const res = await fetch(`http://localhost:3001/api/card1/thankyoucard`, {
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
        maxCharsPerLine: Number(34)
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
                  background: `url(${thankyouCard}) no-repeat center/contain`,
                  textAlign: 'center',
                  width: '100%',

                  fontFamily: 'myriad-pro-bold',
                  color: '#ee4673',
                  height: '100%',
                  padding: '300px 0 300px',
                  backgroundSize: '100% 100%'
                }}
              >
                <div className="editable" {...hover1}>
                  <p
                    data-bs-toggle="modal"
                    data-bs-target="#id1"
                    style={{
                      paddingTop: '300px',
                      maxWidth: '350px',
                      margin: 'auto'
                    }}
                  >
                    {' '}
                    {cardData.receiverName}
                  </p>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover2}>
                  <h5
                    data-bs-toggle="modal"
                    data-bs-target="#id2"
                    style={{
                      paddingTop: '8px',
                      maxWidth: '300px',
                      margin: 'auto'
                    }}
                  >
                    {cardData.message_1}
                  </h5>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
                <div className="editable" {...hover3}>
                  <p
                    data-bs-toggle="modal"
                    data-bs-target="#id3"
                    style={{
                      paddingTop: '8px',
                      maxWidth: '350px',
                      margin: 'auto'
                    }}
                  >
                    {' '}
                    {cardData.senderName}
                  </p>
                  <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: '#50024B' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {thankyouCardData?.map((val, index) => {
        return (
          <Modal
            key={index + 1}
            id={`id${index + 1}`}
            onClick={() => {
              let name = messageData[index]
              let value = messageData[index + 3]

              setCardData({ ...cardData, [name]: [value] })
            }}
            onChange={(e) => {
              const name = e.target.name
              const value = e.target.value
              setCardData({ ...cardData, [name]: value })
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
  // const navigate = useNavigate()
  // const id = useQueryParams()
  //
  // const { data: profile, status } = useProfileApi()
  // const [loading, setLoading] = useState(false)
  // function useHover(styleOnHover, styleOnNotHover = {}) {
  //   const [style, setStyle] = React.useState(styleOnNotHover)
  //
  //   const onMouseEnter = () => setStyle(styleOnHover)
  //   const onMouseLeave = () => setStyle(styleOnNotHover)
  //
  //   return { style, onMouseEnter, onMouseLeave }
  // }
  // const hover1 = useHover({ border: '2px solid #ffd167' })
  // const hover2 = useHover({ border: '2px solid #ffd167' })
  // const hover3 = useHover({ border: '2px solid #ffd167' })
  // const hover4 = useHover({ border: '2px solid #ffd167' })
  // const hover5 = useHover({ border: '2px solid #ffd167' })
  //
  // const [cardData, setCardData] = useState({
  //   receiverName: 'Dear Jeane,',
  //   message_1:
  //     'You have been extremely supportive through this difficult time. You may not realise what a blessing you have been. Thank you for your help',
  //   senderName: 'Love Mike'
  // })
  //
  // const messageData = [
  //   'receiverName',
  //   'message_1',
  //   'senderName',
  //   'Dear Jeane,',
  //   'You have been extremely supportive through this difficult time. You may not realise what a blessing you have been. Thank you for your help',
  //   'Love Mike'
  // ]
  //
  // let thankyouCardData = []
  // thankyouCardData = Object.entries(cardData)
  //
  // // const PostData = async (e) => {
  // //   e.preventDefault()
  // //   let receiverName = cardData.receiverName?.toString() ?? ''
  // //   let message_1 = cardData.message_1?.toString() ?? ''
  // //   let senderName = cardData.senderName?.toString() ?? ''
  // //
  // //   let details
  // //
  // //   details = [{ receiverName, message_1, senderName }]
  // //   setLoading(true)
  // //   const res = await fetch(`http://localhost:3001/api/card1/thankyoucard`, {
  // //     method: 'POST',
  // //     credentials: 'include',
  // //     headers: {
  // //       'Content-Type': 'application/json'
  // //     },
  // //     body: JSON.stringify({
  // //       id: id2,
  // //       details,
  // //       userId: profile.id,
  // //       email: profile.email,
  // //       maxCharsPerLine: Number(45)
  // //     })
  // //   })
  // //
  // //   const card_data = await res.json()
  // //
  // //   if ((card_data.status = 'Success')) {
  // //     setLoading(false)
  // //     navigate(`/preview?id=${card_data.data.id}`)
  // //   }
  // // }
  //
  // const PostData = async (e) => {
  //   e.preventDefault()
  //   let receiverName = cardData.receiverName?.toString() ?? ''
  //   let message_1 = cardData.message_1?.toString() ?? ''
  //   let senderName = cardData.senderName?.toString() ?? ''
  //
  //   let details
  //
  //   details = [{ receiverName, message_1, senderName }]
  //   setLoading(true)
  //   const res = await fetch(`http://localhost:3001/api/card1/thankyoucard`, {
  //     method: 'POST',
  //     credentials: 'include',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       id: id2,
  //       details,
  //       userId: profile.id,
  //       email: profile.email,
  //       maxCharsPerLine: Number(34)
  //     })
  //   })
  //
  //   const card_data = await res.json()
  //   console.log({ card_data })
  //   if ((card_data.status = 'Success')) {
  //     setLoading(false)
  //     navigate(`/preview?id=${card_data.data.id}`)
  //   }
  // }
  // return (
  //   <>
  //     <Header />
  //     <div className="my-5"></div>
  //     <div className="container" style={{ position: 'relative' }}>
  //       <div className="row">
  //         <div className="col-md-4">
  //           <div className="card-box">
  //             <div
  //               style={{
  //                 background: `url(${thankyouCard}) no-repeat center/contain`,
  //                 textAlign: 'center',
  //                 width: '100%',
  //                 fontFamily: 'myriad-pro-bold',
  //                 color: '#ee4673',
  //                 height: '100%',
  //                 padding: '100px 0 300px',
  //                 backgroundSize: '100% 100%'
  //               }}
  //             >
  //               <h6
  //                 data-bs-toggle="modal"
  //                 data-bs-target="#id1"
  //                 style={{
  //                   paddingTop: '250px',
  //                   maxWidth: '350px',
  //                   margin: 'auto'
  //                 }}
  //               >
  //                 {' '}
  //                 {cardData.receiverName}
  //               </h6>
  //
  //               <h6
  //                 data-bs-toggle="modal"
  //                 data-bs-target="#id2"
  //                 style={{ paddingTop: '8px', maxWidth: '300px', margin: 'auto' }}
  //               >
  //                 {cardData.message_1}
  //               </h6>
  //
  //               <h6
  //                 data-bs-toggle="modal"
  //                 data-bs-target="#id3"
  //                 style={{
  //                   paddingTop: '8px',
  //                   maxWidth: '350px',
  //                   margin: 'auto'
  //                 }}
  //               >
  //                 {' '}
  //                 {cardData.senderName}
  //               </h6>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     {thankyouCardData?.map((val, index) => {
  //       return (
  //         <Modal
  //           key={index + 1}
  //           id={`id${index + 1}`}
  //           onClick={() => {
  //             let name = messageData[index]
  //             let value = messageData[index + 3]
  //
  //             setCardData({ ...cardData, [name]: [value] })
  //           }}
  //           onChange={(e) => {
  //             const name = e.target.name
  //             const value = e.target.value
  //
  //             setCardData({ ...cardData, [name]: value })
  //           }}
  //           name={val[0]}
  //           data={val[1]}
  //         />
  //       )
  //     })}
  //
  //     <div className="col-md-12 text-center mt-4">
  //       <button
  //         onClick={PostData}
  //         className="btn"
  //         disabled={loading}
  //         style={{
  //           borderRadius: '50px',
  //           background: '#FF3767',
  //           color: '#fff',
  //           padding: '10px 20px'
  //         }}
  //       >
  //         {loading && <i className="fa fa-refresh fa-spin" style={{ marginRight: '5px' }} />}
  //         {loading && <span>Loading...</span>}
  //         {!loading && <span>Preview</span>}
  //       </button>
  //     </div>
  //
  //     <Footer />
  //   </>
  // )
}

export default Card22
