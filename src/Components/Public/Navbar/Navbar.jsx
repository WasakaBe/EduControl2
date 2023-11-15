import React, { useState } from 'react';
import './Navbar.css';
import { logo } from '../../../Images/Index';
export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className='container-navbar'>
        <div className='container-nav'>
          <div className='enlaces'>
            <div className='iconss'>
              <a href='/' className='aa'>
              <img className='logo' src={logo} alt='' />    
               <span>Edu Control</span>     
            </a>
            
            </div>
          </div>

          <div className='enlaces'>
            <ul className='ul'>
              <li>
                <a href='/'>Inicio</a>
              </li>
              <li>
                <a href='/Acerca'>Acerca</a>
              </li>
              <li>
                <a href='/Servicios'>Servicios</a>
              </li>
              <li>
                <a href='/Login'>Iniciar Sesion</a>
              </li>
            </ul>
          </div>

           {/* Botón de hamburguesa */}
           <div className={`hamburguer-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className='bar' />
            <div className='bar' />
            <div className='bar' />
          </div>

          {/* Menú responsivo */}
          {isMenuOpen && (
            <div className='enlaces-responsive'>
              <ul className='ul1'>
                <li>
                  <a href='/Inicio'>Inicio</a>
                </li>
                <li>
                  <a href='/Acerca'>Acerca</a>
                </li>
                <li>
                  <a href='/Servicios'>Servicios</a>
                </li>
                <li>
                  <a href='/Login'>Iniciar Sesion</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}