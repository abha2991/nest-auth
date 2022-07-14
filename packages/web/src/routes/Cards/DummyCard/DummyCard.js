// import React,{useState} from "react";
// import Header from "../../Header";
// import card1 from "../../img/42241481.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// import useProfileApi from '../../../api/useProfileApi';
// import {useNavigate} from 'react-router';
// import useQueryParams from '../../../hooks/useQueryParams';
// import card from '../../Card';
// import Modal from '../../Modal'
// import * as _ from 'lodash-es';
//
// const Card2 = () => {
//   const navigate = useNavigate()
//   const id=useQueryParams();
//   const {id: id2} = id
//   console.log(id2)
//   const {data: profile, status} = useProfileApi()
//
//   function useHover(styleOnHover, styleOnNotHover = {}) {
//     const [style, setStyle] = React.useState(styleOnNotHover);
//
//     const onMouseEnter = () => setStyle(styleOnHover)
//     const onMouseLeave = () => setStyle(styleOnNotHover)
//
//     return { style, onMouseEnter, onMouseLeave }
//   }
//   const hover1 = useHover({ border: "2px solid #ffd167" })
//   const hover2 = useHover({ border: "2px solid #ffd167" })
//   const hover3 = useHover({ border: "2px solid #ffd167" })
//   const hover4 = useHover({ border: "2px solid #ffd167" })
//   const hover5 = useHover({ border: "2px solid #ffd167" })
//
//
//   const [cardData, setCardData] = useState({
//         StaticData1: "TOGETHER",
//         StaticData2: "WITH THEIR FAMILIES",
//         BrideName: "Larisa",
//         StaticData3: "AND",
//         GroomName: "Reyansh",
//         StaticData4: "INVITE YOU TO CELEBRATE",
//         StaticData5: "THEIR MARRIAGE",
//         Date: "10.10.2020",
//         Time: "10 AM IN THE MORNING",
//         Address: "BLOSSOM GARDEN WEST COAST"
//       }
//
//   );
//
//   //const [cardData1,setCardData1]=useState([])
//   //const [d,setD]=useState({"date": "10.10.2020", "time": "10 AM IN THE MORNING", "venue": "BLOSSOM GARDEN WEST COAST", "bridename": "Larisa", "groomName": "Reyansh", "staticdata1": "TOGETHER", "staticdata2": "WITH THEIR FAMILIES", "staticdata3": "AND", "staticdata4": "INVITE YOU TO CELEBRATE", "staticdata5": "THEIR MARRIAGE"})
//
//
// //console.log({d})
//
//   // let g=Object.entries(d)
//   // console.log({g})
//
//   // const handleInputs1 = index => e => {
//   //
//   //   let newArr = [...cardData1];
//   //   newArr[index] = e.target.value;
//   //
//   //   setCardData1(newArr);
//   // }
//
//   let dummydata=[]
//   dummydata=Object.entries((cardData))
// // setCardData1(dummydata)
// //   console.log(cardData1)
//
//   const handleInputs1 = (i) => (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setCardData((existing) => {
//
//       console.log({existing})
//       existing[i] = { ...existing[i], [name]: value };
//       return [...existing];
//     });
//   };
//
//  //[ console.log({cardData1})
// //console.log({cardData})
//   const reset=()=>{
//
//     setCardData({...cardData, StaticData1:"TOGETHER",
//       StaticData2:"WITH THEIR FAMILIES",
//       BrideName: "Larisa",
//       StaticData3:"AND",
//       GroomName: "Reyansh",
//       StaticData4:"INVITE YOU TO CELEBRATE",
//       StaticData5:"THEIR MARRIAGE",
//       Date: "10.10.2020",
//       Time:"10 AM IN THE MORNING",
//       Address:"BLOSSOM GARDEN WEST COAST"})
//   }
//
//   const handleInputs = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setCardData({...cardData, [name]: value});
//   };
//
//
//   //console.log({cardData})
//
//   // const handleInputs = index => e => {
//   //
//   //   let newArr = [...cardData];
//   //   newArr[index] = e.target.value;
//   //
//   //   setCardData(newArr);
//   // }
//
//
//    // _.mapValues(cardData , function(num) { console.log(num) });
//
//   const PostData = async (e) => {
//     e.preventDefault();
//     let staticdata1=cardData.StaticData1;
//     let staticdata2=cardData.StaticData2;
//     let staticdata3=cardData.StaticData3;
//     let staticdata4=cardData.StaticData4;
//     let staticdata5=cardData.StaticData5;
//     let bridename = cardData.BrideName;
//     let groomName = cardData.GroomName;
//     let date = cardData.Date;
//
//     let time = cardData.Time;
//     let venue = cardData.Address;
//
//
//     //
//     let Details;
//
//     Details = [{staticdata1,staticdata2,bridename, staticdata3,groomName,staticdata4,staticdata5, date,time,venue}
//     ]
//
//
//     const res = await fetch(`http://localhost:3001/api/card1/preview`, {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         id:id2,
//         Details,
//         UserId:profile.id,
//
//       }),
//
//
//     });
//
//     const card_data= await res.json();
//     console.log(card_data.id)
//     setCardData(card_data.id)
//
//     navigate(`/preview?id=${card_data.id}`)
//
//   };
//
//
//
//
// // const [dummydata,setDummyData]=useState([])
// //
// // setDummyData(Object.entries((cardData))
// console.log({dummydata})
//
//
// //
// //   dummydata.map((val,index)=>{
// //     console.log({val})
// //   })
//
//   return (
//       <>
//             <Header />
//             <div className="container" style={{ position: "relative" }}>
//                 <div className="row">
//                     <div className="col-md-4"></div>
//                     <div className="col-md-4">
//                         <div className="card-box">
//                             <div style={{
//                               background: `url(${card1}) no-repeat center/cover`,
//                               textAlign: "center", width: "100%", fontFamily: 'JosefinSans', color: "#ffd167", height: "100%", padding: "100px 0px 100px"
//                             }}>
//                                 <p style={{ marginBottom: "0", fontSize: "10px" }}>{cardData.StaticData1}</p>
//                                 <p style={{ marginBottom: "0", fontSize: "10px" }}>{cardData.StaticData2}</p>
//                                 <div className="editable" {...hover1}>
//                                     <h2 data-bs-toggle="modal" data-bs-target="#id3" style={{ fontFamily: "cac-champagne", fontSize: "50px", marginBottom: "0", lineHeight: "normal" }}>{cardData.BrideName}</h2>
//                                     <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: "#50024B" }} />
//                                 </div>
//                                 <h6 style={{ marginTop: "0px", marginBottom: "0", lineHeight: "normal" }}>{cardData.StaticData3}</h6>
//                                 <div className="editable" {...hover2}>
//                                     <h2 data-bs-toggle="modal" data-bs-target="#id5" style={{ fontFamily: "cac-champagne", fontSize: "50px", lineHeight: "normal" }}>{cardData.GroomName}</h2>
//                                     <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: "#50024B" }} />
//                                 </div>
//                                 <p style={{ fontSize: "10px", marginBottom: "0" }}>{cardData.StaticData4}</p>
//                                 <p style={{ fontSize: "10px", marginBottom: "0" }}>{cardData.StaticData5}</p>
//                                 <div style={{ maxWidth: "200px", margin: "auto" }}>
//                                     <hr className="mb-0" />
//                                     <div className="editable" {...hover3}>
//                                         <h4 data-bs-toggle="modal" data-bs-target="#id8" className="mb-0 pt-2">{cardData.Date}</h4>
//                                         <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: "#50024B" }} />
//                                     </div>
//                                     <div className="editable" {...hover4}>
//                                         <p data-bs-toggle="modal" data-bs-target="#id9" className="pb-2 mb-0" style={{ fontSize: "10px" }}>{cardData.Time}</p>
//                                         <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: "#50024B" }} />
//                                     </div>
//                                     <hr className="mt-0" />
//                                 </div>
//                                 <div className="editable" {...hover5}>
//                                     <p data-bs-toggle="modal" data-bs-target="#id10" style={{ fontSize: "10px" }}>{cardData.Address}</p>
//                                     <FontAwesomeIcon icon={faPenToSquare} style={{ backgroundColor: "#50024B" }} />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-4"></div>
//                 </div>
//                 <div>
//                 </div>
//             </div>
//
//         {/* Modal  */}
//         {/*<div className="modal fade" id="id1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">*/}
//         {/*        <div className="modal-dialog modal-dialog-centered">*/}
//         {/*            <div className="modal-content">*/}
//         {/*                <div className="modal-body">*/}
//         {/*                    <form>*/}
//         {/*                        <input type="text" name="BrideName"  value={cardData.BrideName} onChange={handleInputs} className="form-control mb-3" />*/}
//         {/*                        <div className="d-flex justify-content-between text-center">*/}
//         {/*                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>*/}
//         {/*                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"*/}
//         {/*                                    onClick={()=>reset()}>Close</button>*/}
//         {/*                        </div>*/}
//         {/*                    </form>*/}
//         {/*                </div>*/}
//         {/*            </div>*/}
//         {/*        </div>*/}
//         {/*    </div>*/}
//         {/* Modal  */}
//         {/*<div className="modal fade" id="id2" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">*/}
//         {/*        <div className="modal-dialog modal-dialog-centered">*/}
//         {/*            <div className="modal-content">*/}
//         {/*                <div className="modal-body">*/}
//         {/*                    <form>*/}
//         {/*                        <input type="text" name="GroomName"  value={cardData.GroomName} onChange={handleInputs} className="form-control mb-3" />*/}
//         {/*                        <div className="d-flex justify-content-between text-center">*/}
//         {/*                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>*/}
//         {/*                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"*/}
//         {/*                                    onClick={()=>reset()}>Close</button>*/}
//         {/*                        </div>*/}
//         {/*                    </form>*/}
//         {/*                </div>*/}
//         {/*            </div>*/}
//         {/*        </div>*/}
//         {/*    </div>*/}
//         {/* Modal  */}
//         {/*<div className="modal fade" id="id3" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">*/}
//         {/*        <div className="modal-dialog modal-dialog-centered">*/}
//         {/*            <div className="modal-content">*/}
//         {/*                <div className="modal-body">*/}
//         {/*                    <form>*/}
//         {/*                        <input type="text" name="Date"  value={cardData.Date} onChange={handleInputs} className="form-control mb-3" />*/}
//         {/*                        <div className="d-flex justify-content-between text-center">*/}
//         {/*                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>*/}
//         {/*                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"*/}
//         {/*                                    onClick={()=>reset()}>Close</button>*/}
//         {/*                        </div>*/}
//         {/*                    </form>*/}
//         {/*                </div>*/}
//         {/*            </div>*/}
//         {/*        </div>*/}
//         {/*    </div>*/}
//         {/* Modal  */}
//         {/*<div className="modal fade" id="id4" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">*/}
//         {/*        <div className="modal-dialog modal-dialog-centered">*/}
//         {/*            <div className="modal-content">*/}
//         {/*                <div className="modal-body">*/}
//         {/*                    <form>*/}
//         {/*                        <input type="text" name="Time" value={cardData.Time} onChange={handleInputs} className="form-control mb-3" />*/}
//         {/*                        <div className="d-flex justify-content-between text-center">*/}
//         {/*                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>*/}
//         {/*                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"*/}
//         {/*                                    onClick={()=>reset()}>Close</button>*/}
//         {/*                        </div>*/}
//         {/*                    </form>*/}
//         {/*                </div>*/}
//         {/*            </div>*/}
//         {/*        </div>*/}
//         {/*    </div>*/}
//         {/* Modal  */}
//         {/*<div className="modal fade" id="id5" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">*/}
//         {/*        <div className="modal-dialog modal-dialog-centered">*/}
//         {/*            <div className="modal-content">*/}
//         {/*                <div className="modal-body">*/}
//         {/*                    <form>*/}
//         {/*                        <input type="text" name="Address"  value={cardData.Address} onChange={handleInputs} className="form-control mb-3" />*/}
//         {/*                        <div className="d-flex justify-content-between text-center">*/}
//         {/*                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>*/}
//         {/*                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"*/}
//         {/*                                    onClick={()=>reset()}>Close</button>*/}
//         {/*                        </div>*/}
//         {/*                    </form>*/}
//         {/*                </div>*/}
//         {/*            </div>*/}
//         {/*        </div>*/}
//         {/*    </div>*/}
//
//         {
//           dummydata?.map((val,index)=>{
//             return(
//                <Modal
//                key={index+1}
//                id={`id${index+1}`}
//                //reset={reset}
//           //handleInputs={handleInputs1(index)}
// //onChange={handleInputs}
//            //     onChange={(e) => {
//            //    name = e.target.value;
//            // setCardData([...cardData]);
//            //      // setDummy([...dummy])
//            //     }}
//
// reset={()=> {
//
//   setCardData({
//     ...cardData, StaticData1: "TOGETHER",
//     StaticData2: "WITH THEIR FAMILIES",
//     BrideName: "Larisa",
//     StaticData3: "AND",
//     GroomName: "Reyansh",
//     StaticData4: "INVITE YOU TO CELEBRATE",
//     StaticData5: "THEIR MARRIAGE",
//     Date: "10.10.2020",
//     Time: "10 AM IN THE MORNING",
//     Address: "BLOSSOM GARDEN WEST COAST"
//   })
// }
//             }
//                onChange={(e) => {
//                  const name = e.target.name;
//                  const value = e.target.value;
//                  setCardData({...cardData, [name]: value});
//
//                      }}
//            name={val[0]}
//          data={val[1]}
//
//
//
//                />
//             )
//           })
//         }
//
//
//         <div className="col-md-12 text-center mt-4">
//                     <button  onClick={PostData} className="btn" style={{
//                       borderRadius: "50px", background: "#FF3767",
//                       color: "#fff", padding: "10px 20px"
//                     }}>Preview</button>
//                 </div>
//         </>
//
//   )
// }
//
// export default Card2

import React, { useState } from 'react'
import Header from '../../Header'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import useProfileApi from '../../../api/useProfileApi'
import { useNavigate } from 'react-router'
import useQueryParams from '../../../hooks/useQueryParams'
import card from '../../Card'
import Modal from '../../Modal'
import * as _ from 'lodash-es'
import card1 from '../../img/Wedding/card1.png'
import card2 from '../../img/Wedding/card2.png'
import card3 from '../../img/Wedding/card3.png'
import progress from '../../ProgressBar'

const Card2 = () => {
  const navigate = useNavigate()
  const id = useQueryParams()
  const { id: id2 } = id
  console.log(id2)
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

  const [cardData, setCardData] = useState()

  const [brideData, setBrideData] = useState({
    BrideName: 'Anamika',
    StaticData1: 'Weds',
    BrideFatherName: 'Sandeep',
    StaticData2: 'WEDDING INVITAION',
    BrideMotherName: '17TH July 2022'
  })
  const [groomData, setGroomData] = useState({
    GroomName: 'Anamika Agrawal',
    StaticData3: 'Daughter of',
    GroomFatherName: 'Mr. Shubham agrawal',
    GroomMotherName: 'Mrs. Monika Agrawal',
    StaticData4: 'With',
    GroomGrandFatherName: 'Sandeep Rawat',
    StaticData5: 'Son of',
    GroomGrandMotherName: 'Mr. Shubham agrawal',
    Grrom: 'Mrs. Monika Agrawal',
    StaticData6: 'TOGETHER WITH THEIR',
    StaticData7: 'FAMILY AND FRIENDS'
  })
  const groom = [
    'GroomName',
    'StaticData3',
    'GroomFatherName',
    'GroomMotherName',
    'StaticData4',
    'GroomGrandFatherName',
    'StaticData5',
    'GroomGrandMotherName',
    'Grrom',
    'StaticData6',
    'StaticData7',
    'Anamika Agrawal',
    'Daughter of',
    'Mr. Shubham agrawal',
    'Mrs. Monika Agrawal',
    'With',
    'Sandeep Rawat',
    'Son of',
    'Mr. Shubham agrawal',
    'Mrs. Monika Agrawal',
    'TOGETHER WITH THEIR',
    'FAMILY AND FRIENDS'
  ]

  const bride = [
    'BrideName',
    'StaticData1',
    'BrideFatherName',
    'StaticData2',
    'BrideMotherName',
    'Anamika',
    'Weds',
    'Sandeep',
    'WEDDING INVITAION',
    '17TH July 2022'
  ]

  const [rsvpData, setRsvpData] = useState({
    StaticData8: 'RSVP',
    ProgramName: 'Waiting to meet you all in the wedding',
    StaticData9: 'Venue',
    _Date: 'Sunday, 17th July 2022',

    Venue: 'Hotel Brooklyn, Rajpur Road, Delhi'
  })

  const rsvp = [
    'StaticData8',
    'ProgramName',
    'StaticData9',
    '_Date',

    'Venue',
    'RSVP',
    'Waiting to meet you all in the wedding',
    'Venue',
    'Sunday, 17th July 2022',

    'Hotel Brooklyn, Rajpur Road, Delhi'
  ]

  // console.log(d[3])
  // console.log({d1})

  let dummydata = []
  dummydata = Object.entries(brideData)
  let dummyData1 = []
  dummyData1 = Object.entries(groomData)
  let dummyData2 = []
  dummyData2 = Object.entries(rsvpData)

  // let stat=Object.entries((rsvpData))
  //   let stat1=Object.entries((groomData))
  //   dummyData2=[{stat},{stat1}]

  // console.log({dummyData2})

  // setCardData1(dummydata)
  //   console.log(cardData1)

  //[ console.log({cardData1})
  //console.log({cardData})
  //   const reset=()=>{
  //
  //     setCardData({...cardData, StaticData1:"TOGETHER",
  //       StaticData2:"WITH THEIR FAMILIES",
  //       BrideName: "Larisa",
  //       StaticData3:"AND",
  //       GroomName: "Reyansh",
  //       StaticData4:"INVITE YOU TO CELEBRATE",
  //       StaticData5:"THEIR MARRIAGE",
  //       Date: "10.10.2020",
  //       Time:"10 AM IN THE MORNING",
  //       Address:"BLOSSOM GARDEN WEST COAST"})
  //   }

  // const handleInputs = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setCardData({...cardData, [name]: value});
  // };

  //console.log({cardData})

  // const handleInputs = index => e => {
  //
  //   let newArr = [...cardData];
  //   newArr[index] = e.target.value;
  //
  //   setCardData(newArr);
  // }

  // _.mapValues(cardData , function(num) { console.log(num) });

  const PostData = async (e) => {
    e.preventDefault()
    let bridename = brideData.BrideName
    let groomName = brideData.BrideFatherName
    let date = brideData.BrideMotherName
    let staticdata1 = brideData.StaticData1
    let staticdata2 = brideData.StaticData2
    let staticdata3 = groomData.StaticData3
    let staticdata4 = groomData.StaticData4
    let staticdata5 = groomData.StaticData5
    let staticdata6 = groomData.StaticData6
    let staticdata7 = groomData.StaticData7
    let staticdata8 = rsvpData.StaticData8
    let staticdata9 = rsvpData.StaticData9
    let groomname = groomData.GroomName
    let groomfather = groomData.GroomFatherName
    let groommother = groomData.GroomMotherName
    let brideName = groomData.GroomGrandFatherName
    let brideFathername = groomData.GroomGrandMotherName
    let grrom = groomData.Grrom

    let text = rsvpData.ProgramName
    let venue = rsvpData.Venue
    let _date = rsvpData._Date

    // let Data = data;
    //
    // let len = Data.length;

    // const obj = Object.assign({}, Data);
    // console.log({id})
    //
    let Details

    Details = [
      { bridename, staticdata1, groomName, staticdata2, date },
      {
        groomname,
        staticdata3,
        groomfather,
        groommother,
        staticdata4,
        brideName,
        staticdata5,
        brideFathername,
        grrom,
        staticdata6,
        staticdata7
      },
      { staticdata8, text, staticdata9, venue, _date }
    ]

    //console.log({Details});

    const res = await fetch(`http://localhost:3001/api/card1/preview`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id2,
        Details,
        UserId: profile.id
      })
    })

    const card_data = await res.json()
    console.log(card_data.id)
    setCardData(card_data.id)

    navigate(`/preview?id=${card_data.id}`)
  }

  //console.log({dummyData2})
  // dummyData2?.map((val,index)=>{
  //   console.log({index})
  // console.log(val.stat1)
  // })

  // const [dummydata,setDummyData]=useState([])
  //
  // setDummyData(Object.entries((cardData))
  // console.log({dummydata})

  //
  //   dummydata.map((val,index)=>{
  //     console.log({val})
  //   })
  // dummyData2?.map((val,index)=>{
  //   console.log(val)
  // })
  return (
    <>
      <Header />
      <div className="container" style={{ position: 'relative' }}>
        <div className="row">
          <div className="col-md-4">
            <div className="card-box">
              <div
                style={{
                  background: `url(${card1}) no-repeat center/cover`,
                  textAlign: 'center',
                  width: '100%',
                  fontFamily: 'Lora',
                  color: '#7132A1',
                  height: '100%',
                  padding: '100px 0'
                }}
              >
                <h2 data-bs-toggle="modal" data-bs-target="#id1" style={{ paddingTop: '105px' }}>
                  {' '}
                  {brideData.BrideName}
                </h2>
                <p style={{ color: '#CC8935' }}>{brideData.StaticData1}</p>
                <h2 data-bs-toggle="modal" data-bs-target="#id3">
                  {brideData.BrideFatherName}
                </h2>
                <p className="mb-0 mt-3" style={{ fontSize: 'small' }}>
                  <strong>{brideData.StaticData2}</strong>
                </p>
                <p data-bs-toggle="modal" data-bs-target="#id5" style={{ fontSize: 'small' }}>
                  {brideData.BrideMotherName}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box">
              <div
                style={{
                  background: `url(${card2}) no-repeat center/cover`,
                  textAlign: 'center',
                  width: '100%',
                  fontFamily: 'Lora',
                  color: '#7132A1',
                  height: '100%',
                  padding: '100px 0'
                }}
              >
                <h4 data-bs-toggle="modal" data-bs-target="#id6" style={{ paddingTop: '75px' }}>
                  {groomData.GroomName}
                </h4>
                <p style={{ color: '#CC8935', fontSize: '10px', marginBottom: '0' }}>
                  {groomData.StaticData3} <br />
                  <span data-bs-toggle="modal" data-bs-target="#id8">
                    {groomData.GroomFatherName}
                  </span>{' '}
                  &{' '}
                  <span data-bs-toggle="modal" data-bs-target="#id9">
                    {groomData.GroomMotherName}
                  </span>
                </p>
                <p style={{ color: '#CC8935', marginTop: '10px', marginBottom: '5px' }}>{groomData.StaticData4}</p>
                <h4 data-bs-toggle="modal" data-bs-target="#id11" className="mb-0">
                  {groomData.GroomGrandFatherName}
                </h4>
                <p style={{ color: '#CC8935', fontSize: '10px', marginBottom: '0' }}>
                  {groomData.StaticData5}
                  <br />
                  <span data-bs-toggle="modal" data-bs-target="#id13">
                    {groomData.GroomGrandMotherName}
                  </span>{' '}
                  &{' '}
                  <span data-bs-toggle="modal" data-bs-target="#id14">
                    {groomData.Grrom}
                  </span>
                </p>
                <p className="mb-0 mt-3" style={{ color: '#CC8935', fontSize: 'small' }}>
                  {groomData.StaticData6}
                </p>
                <p style={{ color: '#CC8935', fontSize: 'small' }}>{groomData.StaticData7}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box">
              <div
                style={{
                  background: `url(${card3}) no-repeat center/cover`,
                  textAlign: 'center',
                  width: '100%',
                  fontFamily: 'Lora',
                  color: '#7132A1',
                  height: '100%',
                  padding: '100px 0'
                }}
              >
                <h4 style={{ paddingTop: '75px' }}>{rsvpData.StaticData8}</h4>
                <p data-bs-toggle="modal" data-bs-target="#id18" style={{ color: '#CC8935', fontSize: '12px' }}>
                  {rsvpData.ProgramName}
                </p>
                <h4>{rsvpData.StaticData9}</h4>
                <p data-bs-toggle="modal" data-bs-target="#id21" style={{ color: '#CC8935', fontSize: '12px' }}>
                  {rsvpData.Venue}
                </p>
                <p
                  data-bs-toggle="modal"
                  data-bs-target="#id20"
                  className="mb-0 mt-3"
                  style={{ color: '#CC8935', fontSize: 'small' }}
                >
                  {rsvpData._Date}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      {/* Modal  */}
      {/*<div className="modal fade" id="id1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">*/}
      {/*        <div className="modal-dialog modal-dialog-centered">*/}
      {/*            <div className="modal-content">*/}
      {/*                <div className="modal-body">*/}
      {/*                    <form>*/}
      {/*                        <input type="text" name="BrideName"  value={cardData.BrideName} onChange={handleInputs} className="form-control mb-3" />*/}
      {/*                        <div className="d-flex justify-content-between text-center">*/}
      {/*                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>*/}
      {/*                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"*/}
      {/*                                    onClick={()=>reset()}>Close</button>*/}
      {/*                        </div>*/}
      {/*                    </form>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/* Modal  */}
      {/*<div className="modal fade" id="id2" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">*/}
      {/*        <div className="modal-dialog modal-dialog-centered">*/}
      {/*            <div className="modal-content">*/}
      {/*                <div className="modal-body">*/}
      {/*                    <form>*/}
      {/*                        <input type="text" name="GroomName"  value={cardData.GroomName} onChange={handleInputs} className="form-control mb-3" />*/}
      {/*                        <div className="d-flex justify-content-between text-center">*/}
      {/*                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>*/}
      {/*                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"*/}
      {/*                                    onClick={()=>reset()}>Close</button>*/}
      {/*                        </div>*/}
      {/*                    </form>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/* Modal  */}
      {/*<div className="modal fade" id="id3" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">*/}
      {/*        <div className="modal-dialog modal-dialog-centered">*/}
      {/*            <div className="modal-content">*/}
      {/*                <div className="modal-body">*/}
      {/*                    <form>*/}
      {/*                        <input type="text" name="Date"  value={cardData.Date} onChange={handleInputs} className="form-control mb-3" />*/}
      {/*                        <div className="d-flex justify-content-between text-center">*/}
      {/*                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>*/}
      {/*                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"*/}
      {/*                                    onClick={()=>reset()}>Close</button>*/}
      {/*                        </div>*/}
      {/*                    </form>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/* Modal  */}
      {/*<div className="modal fade" id="id4" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">*/}
      {/*        <div className="modal-dialog modal-dialog-centered">*/}
      {/*            <div className="modal-content">*/}
      {/*                <div className="modal-body">*/}
      {/*                    <form>*/}
      {/*                        <input type="text" name="Time" value={cardData.Time} onChange={handleInputs} className="form-control mb-3" />*/}
      {/*                        <div className="d-flex justify-content-between text-center">*/}
      {/*                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>*/}
      {/*                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"*/}
      {/*                                    onClick={()=>reset()}>Close</button>*/}
      {/*                        </div>*/}
      {/*                    </form>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/* Modal  */}
      {/*<div className="modal fade" id="id5" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">*/}
      {/*        <div className="modal-dialog modal-dialog-centered">*/}
      {/*            <div className="modal-content">*/}
      {/*                <div className="modal-body">*/}
      {/*                    <form>*/}
      {/*                        <input type="text" name="Address"  value={cardData.Address} onChange={handleInputs} className="form-control mb-3" />*/}
      {/*                        <div className="d-flex justify-content-between text-center">*/}
      {/*                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>*/}
      {/*                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"*/}
      {/*                                    onClick={()=>reset()}>Close</button>*/}
      {/*                        </div>*/}
      {/*                    </form>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    </div>*/}

      {dummydata?.map((val, index) => {
        return (
          <Modal
            key={index + 1}
            id={`id${index + 1}`}
            onClick={() => {
              let name = bride[index]
              let value = bride[index + 5]

              console.log({ name, value })

              setBrideData({ ...brideData, [name]: [value] })
            }}
            onChange={(e) => {
              const name = e.target.name
              const value = e.target.value
              setBrideData({ ...brideData, [name]: value })
            }}
            name={val[0]}
            data={val[1]}
          />
        )
      })}

      {dummyData1?.map((val, index) => {
        return (
          <Modal
            key={index + 6}
            id={`id${index + 6}`}
            onClick={() => {
              let name = groom[index]
              let value = groom[index + 11]

              console.log({ name, value })

              setGroomData({ ...groomData, [name]: [value] })
            }}
            onChange={(e) => {
              const name = e.target.name
              const value = e.target.value
              setGroomData({ ...groomData, [name]: value })
            }}
            name={val[0]}
            data={val[1]}
          />
        )
      })}

      {dummyData2?.map((val, index) => {
        return (
          <Modal
            key={index + 17}
            id={`id${index + 17}`}
            onClick={() => {
              let name = rsvp[index]
              let value = rsvp[index + 5]

              console.log({ name, value })
              //    // setRsvpData({...rsvpData,[name]:[value]
              setRsvpData({
                ...rsvpData,
                [name]: [value]
                //      // StaticData8:"RSVP",
                //      // _Date:"Sunday, 17th July 2022",StaticData9:"Venue",
                //      // Venue:"Hotel Brooklyn, Rajpur Road, Delhi",
                //      // ProgramName: "Waiting to meet you all in the wedding"
              })
            }}
            onChange={(e) => {
              const name = e.target.name
              const value = e.target.value
              setRsvpData({ ...rsvpData, [name]: value })
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
    </>
  )
}

export default Card2
