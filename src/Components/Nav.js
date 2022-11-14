import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { UserAuthContextProvider } from '../UserAuthContext';



export default class Nav extends Component {

  // const logout = () => {
  //   signOut(auth);
  // };


  render() {
    // auth.onAuthStateChanged(user => {
    //   store.dispatch("fetchUser", user);
    // });

    // const user = computed(() => {
    //   return store.getters.user;
    // });

    // const signOut = async () => {
    //   await store.dispatch('logOut')
    //   router.push('/login')
    // }
    // const loggedOutLinks = document.querySelectorAll(".logged-out");
    // const loggedInLinks = document.querySelectorAll(".logged-in");

    // const setupUI = (user) => {
    //   if (user) {
    //     loggedInLinks.forEach(item => item.style.display = 'block');
    //     loggedOutLinks.forEach(item => item.style.display = 'none');
    //   } else {
    //     loggedInLinks.forEach(item => item.style.display = 'none');
    //     loggedOutLinks.forEach(item => item.style.display = 'block');
    //   }
    // }


    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Hello {{email}}</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
              </li>
              <li>
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
              <li>
                <Link className="nav-link" to="/viewcatalog">View Catalog</Link>
              </li>
              <li>
                <Link className="nav-link" to="/viewcart">View Cart</Link>
              </li>
              <li>
                <Link className="nav-link" onClick={UserAuthContextProvider.logOut} to="/login">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}