import React,{useState} from "react"
import AdminHeader from '../Header/AdminHeader';


const emptyObj = {

  x: 0,
  y: 0,
  font: ""
};

const EnterCaptionDetails=()=>{


  const [caption, setCaption] = useState([emptyObj]);
  const [card, setCard] = useState({
    Page: "",
    PreviewPage: "",
    Card: 0,

    CardId:0,

  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCard({ ...card, [name]: value });
  };


  const handleInputs1 = (i) => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCaption((existing) => {
      existing[i] = { ...existing[i], [name]: value };
      return [...existing];
    });
  };


  const addRow = () => setCaption((existing) => [...existing, emptyObj]);
  const deleteRow = (i) =>
      setCaption((existing) => existing.filter((_, index) => i !== index));

  const EnterDetails= async () => {

    let Caption = caption;
    console.log({Caption})
    const res = await fetch(`http://localhost:3001/api/cardcaptiondetails`,{
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        Page:card.Page,
        PreviewPage:card.PreviewPage,
        Card:Number(card.Card),
        CardId:Number(card.CardId),
        Caption


      }),

    });


    const data= await res.json();


    console.log({data})




  };




  return(


      <>

        <AdminHeader/>

        <div className="content-wrapper" style={{ height: "100vh" }}>
        <div className="content-header sty-one">
          <h1>Enter Caption Details</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <i className="fa fa-angle-right"></i>/Enter Caption Details
            </li>
          </ol>
        </div>

        <div className="content">
          <div className="card m-t-3">
            <div className="card-body">

                <input
                    className="form-control adminnews-form"
                    type="text"
                    placeholder="Page"
                    name="Page"
                    value={card.Page}
                    onChange={handleInput}
                />

                <input
                    className="form-control adminnews-form"
                    type="text"
                    name="PreviewPage"
                    value={card.PreviewPage}
                    onChange={handleInput}
                    placeholder="Preview Page"
                />

                <input
                    className="form-control adminnews-form"
                    type="number"
                    placeholder="Card"
                    name="Card"
                    value={card.Card}
                    onChange={handleInput}
                />

                <input
                    className="form-control adminnews-form"
                    type="number"
                    placeholder="Card Id"
                    name="CardId"
                    value={card.CardId}
                    onChange={handleInput}
                />



</div>


              <div className="col-md-12" style={{overflow: "auto"}}>
          <table className="table table-bordered table-hover table-bordered table-striped invoice-tablenew">
            <thead style={{ background: "#FF3767", color: "white" }}>
              <th style={{ textAlign: "center" }}>x</th>
              <th style={{ textAlign: "center" }}>y</th>
              <th style={{ textAlign: "center" }}>Font</th>

              <th></th>
            </thead>
            <tbody>
              {caption.map((obj, i) => (
                  <tr key={i}>
                  <td>
                    <input
                        type="number"
                        name="x"
                        value={obj.x}
                        onChange={handleInputs1(i)}
                    />
                  </td>
                  <td>
                    <input
                        type="number"
                        name="y"
                        value={obj.y}
                        onChange={handleInputs1(i)}
                    />
                  </td>
                  <td>
                    <input
                        type="text"
                        name="Font"
                        value={obj.Font}
                        onChange={handleInputs1(i)}
                    />
                  </td>

                  <td>
                    <button  className="btn" style={{width:"max-content",background:"#FF3767",color:"#fff"}} onClick={() => deleteRow(i)}>Remove Row</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <div className="col-md-12 justify-content-between d-md-flex d-block">
            <div className="text-center">
          <button onClick={addRow} className="btn" style={{width:"max-content",background:"#FF3767",color:"#fff"}}>Add Row</button></div>


                <button type="button" className="btn" style={{width:"max-content",background:"#FF3767",color:"#fff"}} onClick={EnterDetails} >
                  Submit
                </button>

            </div>
          </div>
        </div>
      </div>

      </>
  )


}

export default EnterCaptionDetails

