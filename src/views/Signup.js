// //we need to set up a signup, with username,email, password, and confirm password
// //then it needs to confirm that its created followed by redirecting us to the login page.
// //will need some background images and css formatting of the cards.
// import { useState, useEffect } from 'react';
// import { db } from '../firebase-config';
// import { collection, getDocs, addDoc } from 'firebase/firestore'
// import { Form } from 'react-router-dom';

// function Signup() {
//     const [newFirstName, setNewFirstName] = useState('');
//     const [newLastName, setNewLastName] = useState('');
//     const [newEmail, setNewEmail] = useState('');
//     const [newUsername, setNewUsername] = useState('');
//     const [newPassword, setNewPassword] = useState('');
//     const [newCnfmPW, setNewCnfmPW] = useState('');

//     const [users, setUsers] = useState([]);
//     const usersCollectionRef = collection(db, "users");


//     const createUser = async () => {
//         await addDoc(usersCollectionRef, {
//             fname: newFirstName,
//             lname: newLastName,
//             email: newEmail,
//             username: newUsername,
//             password: newPassword,
//             cnfmpw: newCnfmPW,
//         })
//     };


//     return (
        
//         <div className="container">
//             <div>
//                 <input placeholder='First Name' onChange={(event) => { setNewFirstName(event.target.value); }} />
//                 <input placeholder='Last Name' onChange={(event) => { setNewLastName(event.target.value); }} />
//                 <input placeholder='Email' onChange={(event) => { setNewEmail(event.target.value); }} />
//                 <input placeholder='Username' onChange={(event) => { setNewUsername(event.target.value); }} />
//                 <input placeholder='Password' type="password" onChange={(event) => { setNewPassword(event.target.value); }} />
//                 <input placeholder='Confirm Password' type="password" onChange={(event) => { setNewCnfmPW(event.target.value); }} />
//                 <button onClick={createUser}>Submit</button>
//             </div>
//         </div>
//          );
// }

// export default Signup;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">TCB Productions Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;