
import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

function Login() {

  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log({email,password})

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log({email,password})
    const form = {
      email,
      password
    };

    console.log({form})
    const { data } = await axios.post("http://localhost:3001/login", form);

    console.log({data})
    if (data.status === parseInt('400')) {
      window.alert(data.response)
    } else  if (data.status === parseInt('201')){
      window.alert("Logged In Successfully")
    }
  };
  return (
    <>

     <input type="email" onChange={(e) => setEmail(e.target.value)}
            value={email} name="email" placeholder="Enter email"></input>
     <input type="password" name="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"></input>

     <button  onClick={handleSubmit}>Login</button>

   </>
  );
}

export default Login;
