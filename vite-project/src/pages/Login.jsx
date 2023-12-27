import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'

function Login() {

  const [email, setEmail] = useState('');
  // console.log(email);
  const [password, setPassword] = useState('');
  // console.log(password);

  const SubmitLogin = (e) => {
    e.preventDefault();
    
    const getsignupdata = localStorage.getItem("SignUpdata");
    // console.log(getsignupdata);

    const payload = { email, password }

    if (email === "") { alert("please Enter Email fields") }
    else if (password === "") { alert("please Enter Password fields") }
    else {
      if (getsignupdata && getsignupdata.length) {
        const userdata = JSON.parse(getsignupdata);
        // console.log(getsignupdata);
        const userLogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        console.log(userLogin);
        if (userLogin.length === 0) {
          alert("invalid");
        }
        else {
          console.log("Successful");
          alert("Suuccessfull login");
               
        }
      }
    }

  }

  return (
    <div className='container text-center  p-4'>
      <h1>Login </h1>
      <Form onSubmit={SubmitLogin} className='container text-center' >
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>

    </div>
  )
}

export default Login;
