import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import GoogleButton from "react-google-button";
import { useUserAuth } from "../UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();
  const { user, logout } = useUserAuth

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/viewcatalog");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3"> TCB Productions Login</h2>
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
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        {/* <div>
          <GoogleButton
            className="g-btn"
            type="dark"
          />
        </div> */}
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      <p>User Email :{user && user.email} </p>
    </>
  );
};

export default Login;







// // we need to set up a login page that has a nice background and a card that has a login
// // we need to then redirect to the viewcatalog page after logging in.

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// // import { auth, signInWithEmailAndPassword, } from "../firebase-config";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


  


// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, loading, error] = useAuthState(auth);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (loading) {
//       return;
//     }
    
//   }, [user, loading]);

//   const auth = getAuth();
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//     // Signed in 
//       const user = userCredential.user;
//       if (user) navigate("/viewcatalog");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;

    
//     });
  

  
//   return (
//     <div className="login">
//       <div className="login__container">
//         <input
//           type="text"
//           className="login__textBox"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="E-mail Address"
//         />
//         <input
//           type="password"
//           className="login__textBox"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button
//           className="login__btn"
//           onClick={() => signInWithEmailAndPassword(email, password)}
//         >
//           Login
//         </button>
//         <div>
//           Don't have an account? <Link to="/Signup">Signup</Link>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Login;