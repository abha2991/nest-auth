import React,{useState} from "react";
import Header from "../../Header";
import card1 from "../../img/card31.jpg";
import card2 from "../../img/card32.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Card4 = () => {
  function useHover(styleOnHover, styleOnNotHover = {}) {
    const [style, setStyle] = React.useState(styleOnNotHover);

    const onMouseEnter = () => setStyle(styleOnHover)
    const onMouseLeave = () => setStyle(styleOnNotHover)

    return { style, onMouseEnter, onMouseLeave }
  }
  const hover1 = useHover({ border: "2px solid #cc9d55" })
  const hover2 = useHover({ border: "2px solid #cc9d55" })
  const hover3 = useHover({ border: "2px solid #cc9d55" })
  const hover4 = useHover({ border: "2px solid #cc9d55" })
  const hover5 = useHover({ border: "2px solid #cc9d55" })

  const [cardData, setCardData] = useState(
    [{data0:"Ishita Agrawal"},
      {data1:"Mohit Agrawal"},{data2:"Save the Date"},{data3:"12.01.2020"}]

  );



  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCardData({...cardData, [name]: value});
  };

 let card_data=[];
  card_data=[cardData];
  //console.log(typeof card_data)
 //console.log(card_data[0])

  card_data.map((val,index)=>{
 console.log(val)

  })

  if(card_data) {
    return (
        <>
            <Header/>
            <div className="container" style={{position: "relative"}}>
                <div className="row my-5">
                    <div className="col-md-4 mb-3">
                        <div className="card-box">
                            <div style={{
                              background: `url(${card1}) no-repeat center/cover`,
                              textAlign: "center",
                              width: "100%",
                              color: "#cc9d55",
                              fontFamily: "'Berkshire Swash', cursive",
                              height: "100%",
                              padding: "300px 0px 0px"
                            }}>
                                <div className="editable" {...hover1}>
                                    <h2 data-bs-toggle="modal" data-bs-target="#id0" style={{fontFamily: "'Berkshire Swash', cursive",}}>{cardData[0].data0}</h2>
                                    <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "transparent"}}/>
                                </div>
                                <h6>weds</h6>
                                <div className="editable" {...hover2}>
                                    <h2 data-bs-toggle="modal" data-bs-target="#id1" style={{fontFamily: "'Berkshire Swash', cursive"}}>{cardData[1].data1}</h2>
                                    <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "transparent"}}/>
                                </div>
                                <div className="editable mt-5 mb-0" {...hover3}>
                                    <h4 data-bs-toggle="modal" data-bs-target="#id2" className="mb-0">{cardData[2].data2}</h4>
                                    <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "transparent"}}/>
                                </div>
                                <div className="editable" {...hover4}>
                                    <h5 data-bs-toggle="modal" data-bs-target="#id3" className="mb-2">{cardData[3].data3}</h5>
                                    <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "transparent"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card-box">
                            <div style={{
                              background: `url(${card2}) no-repeat center/cover`,
                              textAlign: "center",
                              width: "100%",
                              fontStyle: "italic",
                              color: "#fff",
                              height: "100%",
                              padding: "130px 0px 30px"
                            }}>
                                <p style={{fontSize: "10px"}}>Mr. Om Prakash Ji Agrawal and Mrs. Poolki Bai Agrawal request<br/>the honor of your presence and blessings on the anspicious<br/>ocassion of the wedding ceremoney of their Grand Son</p>
                                <div className="editable" {...hover2}>
                                    <h2 data-bs-toggle="modal" data-bs-target="#id2" style={{
                                      fontFamily: "'Berkshire Swash', cursive",
                                      fontStyle: "normal",
                                      color: "#cc9d55"
                                    }}>Mohit Agrawal</h2>
                                    <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "transparent"}}/>
                                </div>
                                <p className="mb-0" style={{fontSize: "13px"}}>Son of</p>
                                <p style={{fontSize: "13px"}}>Mr. Rajiv Agrawal and Mrs. Rachna Agrawal</p>
                                <p className="mb-0" style={{fontSize: "13px"}}>Grand Son of</p>
                                <p style={{fontSize: "13px"}}>Mr. Rajesh Agrawal and Mrs. Anchal Agrawal</p>
                                <div className="editable" {...hover1}>
                                    <h2 data-bs-toggle="modal" data-bs-target="#id1" style={{
                                      fontFamily: "'Berkshire Swash', cursive",
                                      fontStyle: "normal",
                                      color: "#cc9d55"
                                    }}>Ishita Agrawal</h2>
                                    <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "transparent"}}/>
                                </div>
                                <p className="mb-0" style={{fontSize: "13px"}}>Son of</p>
                                <p style={{fontSize: "13px"}}>Mr. Anil Agrawal and Mrs. Ritu Agrawal</p>
                                <p className="mb-0" style={{fontSize: "13px"}}>Grand Son of</p>
                                <p style={{fontSize: "13px"}}>Mr. Rahul Agrawal and Mrs. Rema Agrawal</p>
                                <div className="editable" {...hover1}>
                                    <h3 data-bs-toggle="modal" data-bs-target="#id1" style={{
                                      fontFamily: "'Berkshire Swash', cursive",
                                      fontStyle: "normal",
                                      color: "#cc9d55"
                                    }}>All are welcome</h3>
                                    <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "transparent"}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card-box">
                            <div style={{
                              background: `url(${card2}) no-repeat center/cover`,
                              textAlign: "center",
                              width: "100%",
                              color: "#fff",
                              height: "100%",
                              padding: "100px 0px 30px"
                            }}>
                                <h1 style={{fontFamily: "'Berkshire Swash', cursive", color: "#cc9d55"}}>Functions</h1>
                                <div className="editable" {...hover1}>
                                    <h2 data-bs-toggle="modal" data-bs-target="#id1" style={{
                                      fontFamily: "'Berkshire Swash', cursive",
                                      color: "#cc9d55",
                                      marginBottom: "0",
                                      lineHeight: "normal"
                                    }}>Mehandi Ceremoney</h2>
                                    <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "#50024B"}}/>
                                </div>
                                <p style={{
                                  fontSize: "10px",
                                  maxWidth: "250px",
                                  margin: "auto"
                                }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <p style={{
                                  fontStyle: "italic",
                                  fontSize: "13px",
                                  marginBottom: "0"
                                }}>12 AM onwards, 25 Dec 2019</p>
                                <p style={{
                                  fontStyle: "italic",
                                  fontSize: "13px"
                                }}>Hotel Sayaji, Near Magneto Mall, Raipur</p>
                                <div className="editable" {...hover1}>
                                    <h2 data-bs-toggle="modal" data-bs-target="#id1" style={{
                                      color: "#cc9d55",
                                      fontFamily: "'Berkshire Swash', cursive",
                                      marginBottom: "0",
                                      lineHeight: "normal"
                                    }}>Tilak Ceremoney</h2>
                                    <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "#50024B"}}/>
                                </div>
                                <p style={{
                                  fontSize: "10px",
                                  maxWidth: "250px",
                                  margin: "auto"
                                }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <p style={{
                                  fontStyle: "italic",
                                  fontSize: "13px",
                                  marginBottom: "0"
                                }}>12 AM onwards, 25 Dec 2019</p>
                                <p style={{
                                  fontStyle: "italic",
                                  fontSize: "13px"
                                }}>Hotel Sayaji, Near Magneto Mall, Raipur</p>
                                <div className="editable" {...hover1}>
                                    <h2 data-bs-toggle="modal" data-bs-target="#id1" style={{
                                      color: "#cc9d55",
                                      fontFamily: "'Berkshire Swash', cursive",
                                      marginBottom: "0",
                                      lineHeight: "normal"
                                    }}>Reception Ceremoney</h2>
                                    <FontAwesomeIcon icon={faPenToSquare} style={{backgroundColor: "#50024B"}}/>
                                </div>
                                <p style={{
                                  fontSize: "10px",
                                  maxWidth: "250px",
                                  margin: "auto"
                                }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <p style={{
                                  fontStyle: "italic",
                                  fontSize: "13px",
                                  marginBottom: "0"
                                }}>12 AM onwards, 25 Dec 2019</p>
                                <p style={{
                                  fontStyle: "italic",
                                  fontSize: "13px"
                                }}>Hotel Sayaji, Near Magneto Mall, Raipur</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card-box">
                            <div style={{
                              background: `url(${card2}) no-repeat center/cover`,
                              textAlign: "center",
                              width: "100%",
                              color: "#fff",
                              height: "100%",
                              padding: "130px 0px 70px"
                            }}>
                                <h1 style={{
                                  fontFamily: "'Berkshire Swash', cursive",
                                  color: "#cc9d55"
                                }}>Special Message</h1>
                                <p style={{
                                  fontStyle: "italic",
                                  fontSize: "13px",
                                  maxWidth: "250px",
                                  margin: "auto",
                                  marginBottom: "20px"
                                }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p style={{
                                  fontStyle: "italic",
                                  fontSize: "13px",
                                  maxWidth: "250px",
                                  margin: "auto"
                                }}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card-box">
                            <div style={{
                              background: `url(${card2}) no-repeat center/cover`,
                              textAlign: "center",
                              width: "100%",
                              color: "#fff",
                              height: "100%",
                              padding: "200px 0px 0px"
                            }}>
                                <h2 style={{fontFamily: "'Berkshire Swash', cursive", color: "#cc9d55"}}>Rsvp</h2>
                                <p style={{
                                  fontSize: "13px",
                                  maxWidth: "250px",
                                  margin: "auto",
                                  marginBottom: "20px"
                                }}>Kindly respond by December 25</p>
                                <h2 style={{
                                  fontFamily: "'Berkshire Swash', cursive",
                                  color: "#cc9d55",
                                  marginTop: "30px"
                                }}>Venue</h2>
                                <p style={{
                                  fontSize: "13px",
                                  maxWidth: "250px",
                                  margin: "auto",
                                  marginBottom: "20px"
                                }}>Hotel Sayaji, Near Magneto Mall, Avanti Vihar, Raipur, Chattisgarh</p>
                                <p style={{
                                  fontStyle: "italic",
                                  fontSize: "16px",
                                  maxWidth: "250px",
                                  margin: "auto",
                                  marginBottom: "20px"
                                }}>1 Jan 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>

          {/* Modal  */}


          {card_data[0]?.map((val, index) => {
            return(
            <div className="modal fade" id={"id"+index} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby={"id"+index} aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <form>
                      <input type="text" name={"data"+index}   value={val} onChange={handleInputs}   className="form-control mb-3" />                         <div className="d-flex justify-content-between text-center">                             <button type="button" className="btn btn-primary">Save</button>                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>                         </div>                     </form>                 </div>             </div>         </div>     </div>
            )})}

          {/*{card1.map((val,index)=>{*/}

          {/*  <div className="modal fade" id={"id"+index+1} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">         <div className="modal-dialog modal-dialog-centered">             <div className="modal-content">                 <div className="modal-body">                     <form>                         <input type="text" name={"data"+index+1}  value={`cardData.data${index+1}`} onChange={handleInputs}   className="form-control mb-3" />                         <div className="d-flex justify-content-between text-center">                             <button type="button" className="btn btn-primary">Save</button>                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>                         </div>                     </form>                 </div>             </div>         </div>     </div>*/}

          {/*})}*/}

          {/* Modal  */} {/*<div className="modal fade" id="id2" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">*/} {/*        <div className="modal-dialog modal-dialog-centered">*/} {/*            <div className="modal-content">*/} {/*                <div className="modal-body">*/} {/*                    <form>*/} {/*                        <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3" />*/} {/*                        <div className="d-flex justify-content-between text-center">*/} {/*                            <button type="button" className="btn btn-primary">Save</button>*/} {/*                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/} {/*                        </div>*/} {/*                    </form>*/} {/*                </div>*/} {/*            </div>*/} {/*        </div>*/} {/*    </div>*/} {/* Modal  */}
          <div className="modal fade" id="id3" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id4" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id6" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id7" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id8" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id9" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id10" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id11" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id12" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id13" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id14" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id15" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id16" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id17" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id18" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id19" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id20" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id21" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id22" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id23" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id24" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id25" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          {/* Modal  */}
          <div className="modal fade" id="id26" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="" defaultValue="" placeholder="Enter Text" className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
  }
}

export default Card4
