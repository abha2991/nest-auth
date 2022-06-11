import React,{useState} from "react"
import AdminHeader from '../Header/AdminHeader';




const EnterCardDetails=()=>{



  const [card, setCard] = useState({
    CardName: "",
    CardCategory: "",
    CardTotalPrice: 0,
    CardTemplates: [],
    CardDetails:[],
    CardSalePrice:0,
    NoOfPages:0
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCard({ ...card, [name]: value });
  };


  const EnterDetails= async () => {

    console.log(card.CardName)
    const res = await fetch(`http://localhost:3001/api/cardetails`,{
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        CardName:card.CardName,
        CardCategory:card.CardCategory,
        CardTotalPrice:Number(card.CardTotalPrice),
        CardTemplates:[card.CardTemplates],
        CardDetails:[card.CardDetails],
        CardSalePrice:Number(card.CardSalePrice),
        NoOfPages:Number(card.NoOfPages)

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
          <h1>Enter Card Details</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <i className="fa fa-angle-right"></i>/Enter Card Details
            </li>
          </ol>
        </div>

        <div className="content">
          <div className="card m-t-3">
            <div className="card-body">

                <input
                    className="form-control adminnews-form"
                    type="text"
                    placeholder="Card Name"
                    name="CardName"
                    value={card.CardName}
                    onChange={handleInput}
                />

                <input
                    className="form-control adminnews-form"
                    type="text"
                    name="CardCategory"
                    value={card.CardCategory}
                    onChange={handleInput}
                    placeholder="Card Category"
                />

                <input
                    className="form-control adminnews-form"
                    type="number"
                    placeholder="Card Total Price"
                    name="CardTotalPrice"
                    value={card.CardTotalPrice}
                    onChange={handleInput}
                />

                <input
                    className="form-control adminnews-form"
                    type="number"
                    placeholder="Card Sale Price"
                    name="CardSalePrice"
                    value={card.CardSalePrice}
                    onChange={handleInput}
                />



                <input
                    className="form-control adminnews-form"
                    type="number"
                    placeholder="No Of Pages"
                    name="NoOfPages"
                    value={card.NoOfPages}
                    onChange={handleInput}
                />




                <input
                    className="form-control adminnews-form"
                    type="text"
                    placeholder="Card Templates"
                    name="CardTemplates"
                    value={card.CardTemplates}
                    onChange={handleInput}
                />



                <input
                    className="form-control adminnews-form"
                    type="text"
                    placeholder="Card Details"
                    name="CardDetails"
                    value={card.CardDetails}
                    onChange={handleInput}
                />


                <button type="button" className="btn" style={{margin:"10px",width:"max-content",background:"#FF3767",color:"#fff"}} onClick={EnterDetails} >
                  Submit
                </button>

            </div>
          </div>
        </div>
      </div>
      </>
  )


}

export default EnterCardDetails

