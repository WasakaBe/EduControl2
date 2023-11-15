import React from 'react'
//importamos sobre routes DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//public
import Home from '../Views/Public/Home';
import Login from '../Views/Public/Login';
import Acerca from '../Views/Public/Acerca'
import Cookies from '../Politiques/Cookies/Cookies';
import Terminos from '../Politiques/Terminos/Terminos';

export default function AppRoutes(){
  return(
    <div>
      <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Acerca" element={<Acerca />} />
            <Route exact path="/Cookies" element={<Cookies />} />
            <Route exact path="/Terminos" element={<Terminos />} />
        </Routes>
      </Router>
    </div>
  )
}