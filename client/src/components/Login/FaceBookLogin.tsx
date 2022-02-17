
import axios from "axios";
import React,{useState} from 'react';


function FaceBookLogin() {
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();



    const { data } = await axios.get("http://localhost:3001/facebook/facebook");

    console.log({data})

    if (data.status === parseInt('400')) {
      window.alert(data.response)
    } else  if (data.status === parseInt('201')){
      window.alert("Registered Successfully")
    }
  };

  return (
   <>
 <button  onClick={handleSubmit}>Login With Facebook</button>

   </>
  );
}

export default FaceBookLogin;
