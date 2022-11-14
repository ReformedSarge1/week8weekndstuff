//we need to set up a login page that has a nice background and a card that has a login
//we need to then redirect to the viewcatalog page after logging in.

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { auth, signInWithEmailAndPassword, } from "../firebase-config";
// import { useAuthState } from "react-firebase-hooks/auth";




// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, loading, error] = useAuthState(auth);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (loading) {
//       return;
//     }
//     if (user) navigate("/dashboard");
//   }, [user, loading]);
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