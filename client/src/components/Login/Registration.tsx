
import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

function Registration() {

  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  console.log({name,email,password})

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log({name,email,password})
    const form = {
      name,
      email,
      password
    };

    console.log({form})
    const { data } = await axios.post("http://localhost:3001/register", form);

    if (data.status === parseInt('400')) {
      window.alert(data.response)
    } else  if (data.status === parseInt('201')){
      window.alert("Registered Successfully")
    }
  };
  return (
    <>
<input type="text" onChange={(e) => setName(e.target.value)}
       value={name} name="name" placeholder="Enter Name"></input>
     <input type="email" onChange={(e) => setEmail(e.target.value)}
            value={email} name="email" placeholder="Enter email"></input>
     <input type="password" name="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"></input>

     <button  onClick={handleSubmit}>Register</button>

   </>
  );
}

export default Registration;
