import React, { useState } from "react";
import Header from "../Header";
import { useNavigate,useParams } from 'react-router'
import useQueryParams from '../../hooks/useQueryParams'

// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
//image
import Bride from "../img/Bride.png";
import Groom from "../img/Groom.png";
import {useNavigate} from 'react-router';
import useProfileApi from '../../api/useProfileApi';
import {Navigate, useLocation} from 'react-router-dom';
import Loading from '../../components/Loading';

const emptyObj = {
    ProgramName: "",
    Date:"",
    Time:"",
    Venue:"",

};



const EditCard = () => {
    const navigate = useNavigate()
    const id=useQueryParams();
    const {id: id2} = id
    //console.log(id2)
    const {data: profile, status} = useProfileApi()
//console.log({profile})
    //console.log(`Profile id is ${profile.id}`)
  //   console.log({status})

    const [data, setData] = useState([emptyObj, emptyObj]);
    const [cardData, setCardData] = useState();
    const handleInputs1 = (i) => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((existing) => {
            existing[i] = {...existing[i], [name]: value};
            return [...existing];
        });
    };
    const addRow = () => setData((existing) => [...existing, emptyObj]);
    const deleteRow = (i) =>
        setData((existing) => existing.filter((_, index) => i !== index));


    const Preview = () => {
        navigate('/preview')
    }


    const [brideData, setBrideData] = useState({
        BrideName: "",
        BrideFatherName: "",
        BrideMotherName: "",
        BrideGrandFatherName: "",

        BrideGrandMotherName: "",
    });
    const [groomData, setGroomData] = useState({
        GroomName: "",
        GroomFatherName: "",
        GroomMotherName: "",
        GroomGrandFatherName: "",

        GroomGrandMotherName: "",
    });

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBrideData({...brideData, [name]: value});
    };

    const handleInputs2 = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setGroomData({...groomData, [name]: value});
    };

    console.log({id2})
    const PostData = async (e) => {
        e.preventDefault();
        let bridename = brideData.BrideName;
        let bridefather = brideData.BrideFatherName;
        let bridemother = brideData.BrideMotherName;
        let bridegrandfather = brideData.BrideGrandFatherName;
        let bridegrandmother = brideData.BrideGrandMotherName;
        let groomname = groomData.GroomName;
        let groomfather = groomData.GroomFatherName;
        let groommother = groomData.GroomMotherName;
        let groomgrandfather = groomData.GroomGrandFatherName;
        let groomgrandmother = groomData.GroomGrandMotherName;
        let Data = data;

        let len = Data.length;

        let email=profile.email;
        console.log({email})








        const obj = Object.assign({}, Data);
      console.log({id})

        let Details;
        let arr = [];
        Details = [{bridename, bridefather, bridemother, bridegrandfather, bridegrandmother},
            {groomname, groomfather, groommother, groomgrandfather, groomgrandmother}, Data[0], Data[1], Data[2]]
        // for(let i=0;i<len;i++)
        // {
        //    .push(Data[i])
        // }
        // var object = arr.reduce((obj, item) =>
        // ({...obj, [item.key]: item.value}) ,{});
        // var object1= arr.reduce((obj, item) =>
        //     {
        //         console.log({obj,item})
        //     }
        //    );
        // console.log({object})

//Details.push(arr)

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


// if(status==="success") {
    return (
        <>
    <Header />
            <div className="container my-5">
        <h3>Edit Card</h3>
        <form>
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <img src={Bride} style={{marginRight: "10px"}}/>
                        <h5 style={{color: "#00507D", fontFamily: "Lato"}}>Bride Details</h5>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="bride-name">Bride Name</label>
                        <input type="text" id="bride-name" className="form-control" name="BrideName"
                               placeholder="Bride Name" value={brideData.BrideName} onChange={handleInputs}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="father-name">Father’s Name</label>
                        <input type="text" name="BrideFatherName" id="father-name" className="form-control"
                               placeholder="Father’s  Name" value={brideData.BrideFatherName} onChange={handleInputs}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="mother-name">Mother’s Name</label>
                        <input type="text" name="BrideMotherName" id="mother-name" className="form-control"
                               placeholder="Mother’s Name" value={brideData.BrideMotherName} onChange={handleInputs}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="grand-father-name">Grand Father’s Name</label>
                        <input type="text" name="BrideGrandFatherName" id="grand-father-name" className="form-control"
                               placeholder="Grand Father’s Name" value={brideData.BrideGrandFatherName} onChange={handleInputs}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="grand-mother-name">Grand Mother’s Name</label>
                        <input type="text" name="BrideGrandMotherName" id="grand-mother-name" className="form-control"
                               placeholder="Grand Mother’s Name" value={brideData.BrideGrandMotherName} onChange={handleInputs}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <img src={Groom} style={{marginRight: "10px"}}/>
                        <h5 style={{color: "#00507D", fontFamily: "Lato"}}>Groom Details</h5>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="groom-name">Groom Name</label>
                        <input type="text" name="GroomName" id="groom-name" className="form-control"
                               placeholder="Groom Name" value={groomData.GroomName} onChange={handleInputs2}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="father-name">Father’s Name</label>
                        <input type="text" name="GroomFatherName" id="father-name" className="form-control"
                               placeholder="Father’s  Name" value={groomData.GroomFatherName} onChange={handleInputs2}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="mother-name">Mother’s Name</label>
                        <input type="text" name="GroomMotherName" id="mother-name" className="form-control"
                               placeholder="Mother’s Name" value={groomData.GroomMotherName} onChange={handleInputs2}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="grand-father-name">Grand Father’s Name</label>
                        <input type="text" name="GroomGrandFatherName" id="grand-father-name" className="form-control"
                               placeholder="Grand Father’s Name" value={groomData.GroomGrandFatherName} onChange={handleInputs2}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="grand-mother-name">Grand Mother’s Name</label>
                        <input type="text" name="GroomGrandMotherName" id="grand-mother-name" className="form-control"
                               placeholder="Grand Mother’s Name" value={groomData.GroomGrandMotherName} onChange={handleInputs2}/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6 text-center">
                    <a href="#" style={{textDecoration: "none"}}>
                        <FontAwesomeIcon icon={faCheck}/>&nbsp;Finish Editing
                    </a>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <p>Bride Photo</p>
                            <div className="file-drop-zone p-5">
                                <div>
                                    <button type="button" className="btn text-primary">
                                        <FontAwesomeIcon icon={faArrowUpFromBracket}/>&nbsp;&nbsp;Upload Photo
                                    </button>
                                    <input type="file" name="uploader_file_input"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p>Groom Photo</p>
                            <div className="file-drop-zone p-5">
                                <div>
                                    <button type="button" className="btn text-primary">
                                        <FontAwesomeIcon icon={faArrowUpFromBracket}/>&nbsp;&nbsp;Upload Photo
                                    </button>
                                    <input type="file" name="uploader_file_input"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-center my-3">Image size should be less than 5 mb</p>
                </div>
                <div className="col-md-6">
                    <h5 style={{color: "#00507D"}}>Special Message</h5>
                    <label htmlFor="message" className="mb-2">Special Message #1</label>
                    <textarea name="message" id="message" className="form-control mb-2"
                              placeholder="Enter your special message"></textarea>
                    <small className="d-block" style={{float: "right"}}>60 characters</small>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-12">
                    <h5 style={{color: "#00507D"}}>Programme Details</h5>
                </div>
                {data.map((obj, i) => (
                    // <div key={i}>
                    <div className="col-md-6" key={i}>
                        <div className="form-group mb-3">
                            <label htmlFor="program1">Programme Name #{i + 1}</label>
                            <input type="text" name="ProgramName" id="program1" value={obj.ProgramName}
                                   onChange={handleInputs1(i)} className="form-control" placeholder="Programme Name"/>
                        </div>
                        <div className="row">
                            <div className="col-md-6 form-group mb-3">
                                <label htmlFor="date1">Date</label>
                                <input type="date" value={obj.Date} onChange={handleInputs1(i)} name="Date" id="date1"
                                       className="form-control" placeholder="DD-MM-YYYY"/>
                            </div>
                            <div className="col-md-6 form-group mb-3">
                                <label htmlFor="time1">Time</label>
                                <input type="time" name="Time" value={obj.Time} onChange={handleInputs1(i)} id="time1"
                                       className="form-control" placeholder="Set Time"/>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="d-flex justify-content-between">
                                <label htmlFor="venue1">Venue</label>
                                <a href="#" style={{textDecoration: "none", color: "#757575"}}>Locate via google
                                    maps</a>
                            </div>
                            <textarea name="Venue" id="venue1" value={obj.Venue} onChange={handleInputs1(i)}
                                      className="form-control" placeholder="Enter your full Address"></textarea>
                        </div>
                         <button type="button" className="btn" style={{
                             borderRadius: "50px",
                             background: "rgba(0, 117, 255, 0.08)", color: "#0075FF"
                         }} onClick={() => deleteRow(i)}>Remove
                        Row</button>





                       </div>

                    // </div>

                ))}
                <div className="col-md-12 mt-5 mb-3 text-center">
                    <button type="button" onClick={addRow} className="btn" style={{
                        borderRadius: "50px",
                        background: "rgba(0, 117, 255, 0.08)", color: "#0075FF"
                    }}>+ADD MORE PROGRAMME</button>
                    </div>
                {/*<div className="col-md-12 text-center">*/}
                {/*    <button type="submit" onClick={Preview} className="btn" style={{*/}
                {/*        borderRadius: "50px", background: "#FF3767",*/}
                {/*        color: "#fff", padding: "10px 20px"*/}
                {/*    }}>Preview</button>*/}
                {/*</div>*/}
                <div className="col-md-12 text-center">
                    <button type="submit" onClick={PostData} className="btn" style={{
                        borderRadius: "50px", background: "#FF3767",
                        color: "#fff", padding: "10px 20px"
                    }}>Preview</button>
                </div>
            </div>
        </form>
    </div>
</>
    )
//}
// else
// {
//
//     return(
//     <Navigate to="/login" state={{ from: location }} />
//     )
// }




}

export default EditCard
