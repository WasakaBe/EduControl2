import React, { useState } from 'react';
import './Special.css';
import { admin,agricola,agropecuario,alimentos,des,ofimatica,prog } from '../../../Images/Index';
export default function SpecialtiesLogo() {
  const [menuActive, setMenuActive] = useState(false);

  const handleToggleClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className='special-in'>
      <div className='container-special-logo'>

        <div className='content-special'>
          <h2>Ofrece estas carreras tecnicas</h2>
          <span>[Oprima el Boton]</span>
        </div>

        <div className={`menu ${menuActive ? 'active' : ''}`}>
          <div className='toggle' onClick={handleToggleClick}>
          <ion-icon name="share-social"></ion-icon>
          </div>
          <ul>
            <li style={{ '--i': 0, '--clr': '#1877f2' }}>
              <a href='/Administracion'>
                <img src={admin} alt='' title='Tecnico en Administracion'/>
              </a>
            </li>
            <li style={{ '--i': 1, '--clr':  '#1877f2' }}>
              <a href='/Agricola'>
              <img src={agricola} alt='' title='Tecnico en Agricola'/>
              </a>
            </li>
            <li style={{ '--i': 2, '--clr': '#1877f2' }}>
              <a href='/Agropecuario'>
              <img src={agropecuario} alt='' title='Tecnico en Agropecuario'/>
              </a>
            </li>
            <li style={{ '--i': 3, '--clr': '#1877f2' }}>
              <a href='/Alimentos'>
              <img src={alimentos} alt='' title='Tecnico en Alimentos'/>
              </a>
            </li>
            <li style={{ '--i': 4, '--clr': '#1877f2' }}>
              <a href='/Desarrollo'>
              <img src={des} alt='' title='Tecnico en Desarrollo'/>
              </a>
            </li>
            <li style={{ '--i': 5, '--clr': '#1877f2' }}>
              <a href='/Ofimatica'>
              <img src={ofimatica} alt='' title='Tecnico en Ofimatica'/>
              </a>
            </li>
            <li style={{ '--i': 6, '--clr': '#1877f2' }}>
              <a href='/Programacion'>
              <img src={prog} alt='' title='Tecnico en Programacion'/>
              </a>
            </li>
            <li style={{ '--i': 7, '--clr': '#1877f2' }}>
              <a href='/Contabilidad'>
              <img src='https://cbta5.net/build/img/min/Contabilidad.jpg' alt='' title='Tecnico en Contabilidad'/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
