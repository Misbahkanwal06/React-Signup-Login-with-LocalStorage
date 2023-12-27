import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {

  const [FullName, setFullName] = useState('');
  console.log(FullName);
  const [email, setEmail] = useState('');
  console.log(email);
  const [password, setPassword] = useState('');
  console.log(password);


  const SubmitSignup = (e) => {
    e.preventDefault();

    // (FullName == FullName && email == email && password == password )?
    // const payload =  { 
    //   "FullName": FullName,
    //   "Email" : email,
    //   "Password": password,
    //    }

    const payload = {
      FullName, email, password,
    }

    if (FullName === "") { alert("please Enter Name fields") }
    else if (email === "") { alert("please Enter Email fields") }
    else if (password === "") { alert("please Enter Password fields") }
    else {
      console.log(payload);
      localStorage.setItem("SignUpdata", JSON.stringify([payload]));
    }

  } 


  return (
    <>
      <div className='container text-center  p-4'>
        <h1>Signup </h1>
        <Form onSubmit={SubmitSignup} className='container text-center' >
          <Form.Group className="mb-3" controlId="formGroupEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="text" value={FullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter your Full Name" />
            {/* {email} */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            {/* {email} */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            {/* {password} */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <p>Already a member? <Link to="/Login">Login</Link></p>
          </Form.Group>

          <Button variant="primary" type="submit" >
            Sign up
          </Button>
        </Form>

      </div></>
  )
}

export default Signup;
