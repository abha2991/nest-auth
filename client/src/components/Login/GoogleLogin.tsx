
import axios from "axios";
import React,{useState} from 'react';
import GoogleLogin from 'react-google-login';

function Google() {
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();



    const { data } = await axios.get("http://localhost:3001/google");

    console.log({data})

    if (data.status === parseInt('400')) {
      window.alert(data.response)
    } else  if (data.status === parseInt('201')){
      window.alert("Registered Successfully")
    }
  };
  const responseGoogle = (res: any) => {
    console.log(res);
  }
  return (
    <>
<button  onClick={handleSubmit}>Login With Google</button>

<a href="http://localhost:3001/google">Login</a>

   </>
  );
}

export default Google;
