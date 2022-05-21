import React, { useState } from "react";
import Header from "../Header";
import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";
import { useNavigate,useParams } from 'react-router'
import useQueryParams from '../../hooks/useQueryParams'

import {useNavigate} from 'react-router';
import useProfileApi from '../../api/useProfileApi';

const TryCard = () => {
  const navigate = useNavigate()
  const id=useQueryParams();
  const {id: id2} = id
  console.log(id2)
  const {data: profile, status} = useProfileApi()
console.log({profile})
  //console.log(`Profile id is ${profile.id}`)
    console.log({status})

  const [brideData, setBrideData] = useState({
    BrideName: "",
    BrideFatherName: "",
    BrideMotherName: "",



  });
  const [groomData, setGroomData] = useState({
    GroomName: "",
    GroomFatherName: "",
    GroomMotherName: "",
    GroomGrandFatherName: "",

    GroomGrandMotherName: "",
    Grrom:""


  });


  const [rsvpData, setRsvpData] = useState({
    ProgramName: "",
    _Date:"",

    Venue:"",



  });
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBrideData({...brideData, [name]: value});
  };

  const handleInputs1 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setGroomData({...groomData, [name]: value});
  };
  const handleInputs2 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRsvpData({...rsvpData, [name]: value});
  };

  const [cardData, setCardData] = useState();

  const PostData = async (e) => {
    e.preventDefault();
    let bridename = brideData.BrideName;
    let groomName = brideData.BrideFatherName;
    let date = brideData.BrideMotherName;

    let groomname = groomData.GroomName;
    let groomfather = groomData.GroomFatherName;
    let groommother = groomData.GroomMotherName;
    let brideName = groomData.GroomGrandFatherName;
    let brideFathername = groomData.GroomGrandMotherName;
    let grrom = groomData.Grrom;


    let text=rsvpData.ProgramName;
    let venue=rsvpData.Venue;
    let _date=rsvpData._Date;



    // let Data = data;
    //
    // let len = Data.length;

    let email=profile.email;
    console.log({email})








    // const obj = Object.assign({}, Data);
    // console.log({id})
    //
   let Details;

    Details = [{bridename, groomName, date},
      {groomname, groomfather, groommother, brideName,brideFathername,grrom}, {text,venue,_date}]


    console.log({Details});

    const res = await fetch(`http://localhost:3001/api/card1/create`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id:id2,
        Details,
        UserId:profile.id,

      }),


    });

    const card_data= await res.json();
    console.log(card_data.id)
    setCardData(card_data.id)

    navigate(`/preview?id=${card_data.id}`)

  };


  return (
      <>
            <Header />
            <div className="container" style={{ position: "relative" }}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card-box">
                            <div style={{
                              background: `url(${card1}) no-repeat center/cover`,textAlign: "center", width: "100%", fontFamily: 'Lora', color: "#7132A1", height: "100%", padding: "100px 0"
                            }}>
                                <h2 data-bs-toggle="modal" data-bs-target="#id1" style={{ paddingTop: "105px" }}>ANAMIKA</h2>
                                <p style={{ color: "#CC8935" }}>Weds</p>
                                <h2  data-bs-toggle="modal" data-bs-target="#id2">SANDEEP</h2>
                                <p className="mb-0 mt-3" style={{ fontSize: "small" }}><strong>WEDDING INVITAION</strong></p>
                                <p data-bs-toggle="modal" data-bs-target="#id3" style={{ fontSize: "small" }}>17TH JULY 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-box">
                            <div style={{
                              background: `url(${card2}) no-repeat center/cover`,
                              textAlign: "center", width: "100%", fontFamily: 'Lora', color: "#7132A1", height: "100%", padding: "100px 0"
                            }}>
                                <h4 data-bs-toggle="modal" data-bs-target="#id4" style={{ paddingTop: "75px" }}>Anamika Agrawal</h4>
                                <p  style={{ color: "#CC8935", fontSize: "10px", marginBottom: "0" }}>Daughter of <br /><span  data-bs-toggle="modal" data-bs-target="#id5">Mr. Shubham agrawal</span> & <span  data-bs-toggle="modal" data-bs-target="#id6">Mrs. Monika Agrawal</span></p>
                                <p style={{ color: "#CC8935", marginTop: "10px", marginBottom: "5px" }}>With</p>
                                <h4 data-bs-toggle="modal" data-bs-target="#id7" className="mb-0">Sandeep Rawat</h4>
                                <p  style={{ color: "#CC8935", fontSize: "10px", marginBottom: "0" }}>Daughter of <br /><span  data-bs-toggle="modal" data-bs-target="#id8">Mr. Shubham agrawal</span> & <span  data-bs-toggle="modal" data-bs-target="#id9">Mrs. Monika Agrawal</span></p>
                                <p className="mb-0 mt-3" style={{ color: "#CC8935", fontSize: "small" }}>TOGETHER WITH THEIR</p>
                                <p style={{ color: "#CC8935", fontSize: "small" }}>FAMILY AND FRIENDS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-box">
                            <div style={{
                              background: `url(${card3}) no-repeat center/cover`,
                              textAlign: "center", width: "100%", fontFamily: 'Lora', color: "#7132A1", height: "100%", padding: "100px 0"
                            }}>
                                <h4 style={{ paddingTop: "75px" }}>RSVP</h4>
                                <p data-bs-toggle="modal" data-bs-target="#id10" style={{ color: "#CC8935", fontSize: "12px" }}>Waiting to meet you all in the wedding</p>
                                <h4>Venue</h4>
                                <p data-bs-toggle="modal" data-bs-target="#id11" style={{ color: "#CC8935", fontSize: "12px" }}>Hotel Brooklyn, Rajpur Road, Delhi</p>
                                <p data-bs-toggle="modal" data-bs-target="#id12" className="mb-0 mt-3" style={{ color: "#CC8935", fontSize: "small" }}>Sunday, 17th July 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>

        {/* Modal  */}
        <div className="modal fade" id="id1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="BrideName"
                                       placeholder="Bride Name" value={brideData.BrideName} onChange={handleInputs} className="form-control mb-3" />
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary" value={brideData.BrideName} onChange={handleInputs}>Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        {/* Modal  */}
        <div className="modal fade" id="id2" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id2" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="BrideFatherName"
                                       placeholder="Groom Name"
                                     value={brideData.BrideFatherName} onChange={handleInputs} className="form-control mb-3" />
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
        <div className="modal fade" id="id3" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id3" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="BrideMotherName"
                                       placeholder="Wedding Date" value={brideData.BrideMotherName} onChange={handleInputs} className="form-control mb-3" />
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
        <div className="modal fade" id="id4" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id4" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="GroomName"
                                       placeholder="Bride Name" value={brideData.GroomName} onChange={handleInputs1} className="form-control mb-3" />
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
        <div className="modal fade" id="id5" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id5" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="GroomMotherName"
                                       placeholder="Bride Father Name" value={brideData.GroomMotherName} onChange={handleInputs1} className="form-control mb-3" />
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
        <div className="modal fade" id="id6" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id5" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="GroomFatherName"
                                       placeholder="Bride's Mother Name" value={brideData.GroomFatherName} onChange={handleInputs1} className="form-control mb-3" />
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
        <div className="modal fade" id="id7" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id7" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="GroomGrandFatherName"
                                       placeholder="Groom Name" value={brideData.GroomGrandFatherName} onChange={handleInputs1} className="form-control mb-3" />
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
        <div className="modal fade" id="id8" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id8" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="GroomGrandMotherName"
                                       placeholder="Groom's Father Name" value={brideData.GroomGrandMotherName} onChange={handleInputs1} className="form-control mb-3" />
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
        <div className="modal fade" id="id9" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id9" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="ProgramName"
                                       placeholder="Groom's Mother Name" value={brideData.ProgramName} onChange={handleInputs1} className="form-control mb-3" />
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
        <div className="modal fade" id="id10" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id10" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="Date"
                                       placeholder="Message" value={brideData.Date} onChange={handleInputs2} className="form-control mb-3" />
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
        <div className="modal fade" id="id11" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id11" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="Venue"
                                       placeholder="Venue" value={brideData.Venue} onChange={handleInputs2} className="form-control mb-3" />
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
        <div className="modal fade" id="id12" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="id12" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name="_Date"
                                       placeholder="Wedding Date" value={brideData._Date} onChange={handleInputs2} className="form-control mb-3" />
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        <div className="col-md-12 text-center">
                    <button  onClick={PostData} className="btn" style={{
                      borderRadius: "50px", background: "#FF3767",
                      color: "#fff", padding: "10px 20px"
                    }}>Preview</button>
                </div>
        </>

  )
}

export default TryCard
