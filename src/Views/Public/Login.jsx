/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Navbar_public,Footer_public,Copy } from '../../Components/Public'
import './Login.css'
export default function Login() {
  return (
    <div>
      <Navbar_public/>
      <div className='Login-container'>
          <div className='form-container'>
            <form>
              <h2>Iniciar Sesion</h2>
            </form>
          </div>
      </div>
      <Footer_public/>
      <Copy/>
    </div>
  )
}
