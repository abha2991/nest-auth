import React, {useEffect, useState} from 'react';
import useQueryParams from '../../../hooks/useQueryParams'
import Loading from '../../../components/Loading';
import AdminHeader from '../Header/AdminHeader';

const UpdateCardDetails=()=>{

  const id = useQueryParams();
  const {id: id2} = id
  //console.log({id2})
  const [cardData,setCardData]=useState();


  const getCardsOfUser = async (e) => {


    const res = await fetch(`http://localhost:3001/api/cardetails/getById`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        id:id2
      }),

    });

    const data = await res.json();
   // console.log(data)
    setCardData(data)



  };
  useEffect(() => {
    getCardsOfUser();
  }, [id2]);

  let name,value;
  const handleInputs=(e)=>{
    e.preventDefault();
 name=e.target.name;
 value=e.target.value;
    setCardData({...cardData, [name]: value});
  }


  const updateCardDetails = async (name,sale,total) => {

    //console.log({sale,total})


    const res = await fetch(`http://localhost:3001/api/cardetails/${id2}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        CardName:name,
        CardSalePrice:sale,
        CardTotalPrice:total
      }),

    });

    const data = await res.json();

//console.log({data})

if(data.message==="Successfully Updated")
{
  window.alert("Successfully Updated!!")
}

else
{
  window.alert("Something Went Wrong!!")
}

  };


  if(!cardData)
  {
    return (
        <>
          <Loading/>
        </>
    )
  }

  return(
      <>
        <AdminHeader />
           <div className="content-header sty-one">

        <ol className="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <i className="fa fa-angle-right"></i>/ Update Card Details
          </li>
        </ol>
      </div>
      <div className="content">
        <div className="card m-t-3">
          <div className="card-body">
            <div className="table-responsive">
              <div className="content-wrapper" style={{ minHeight: "auto" }}>
                <div className="input-group mycasetable-form ">

                </div>
                <table
                    id="example1"
                    className="table table-bordered table-striped dataTable no-footer"
                >
                  <thead>
                    <tr>
                      <th>Card Id</th>
                      <th>Card Name</th>
                      <th>Card Selling Price</th>
                      <th>Card Actual Price</th>
<th>Description</th>
                      <th>Action</th>
                        <th>Image</th>


                    </tr>
                  </thead>
                  <tbody>

                            <tr>
                              <td>{cardData?.id}</td>
                              <td>
              <input type="text" value={cardData?.CardName} name="CardName"  onChange={handleInputs}/>
                              </td>
                              <td><input type="text" value={cardData?.CardSalePrice} name="CardSalePrice"  onChange={handleInputs}/></td>
                              <td><input type="text" value={cardData?.CardTotalPrice} name="CardTotalPrice"  onChange={handleInputs}/></td>
<td>Description</td>
                              <td><button onClick={()=>updateCardDetails(cardData?.CardName,cardData?.CardSalePrice,cardData?.CardTotalPrice)}>Update</button></td>
 <td><img style={{maxWidth: "80px"}} src={"http://localhost:3001/assets/" + cardData.CardTemplates[0]}/></td>
                            </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      </>
  )

}


export default UpdateCardDetails
