import React, { useState } from "react";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import ViewCatalog from "./views/ViewCatalog";
import ViewCart from "./views/ViewCart";
import { UserAuthContextProvider } from "./UserAuthContext";

function App() {

  return (
    <Router>
      <Nav />
      <div>
      <UserAuthContextProvider>
      <Routes>
      

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/viewcatalog" element={<ViewCatalog />} />
      <Route path="/viewcart" element={<ViewCart />} />
      
      </Routes>
      </UserAuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
