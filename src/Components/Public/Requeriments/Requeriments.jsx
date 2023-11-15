import React from 'react'
import './Req.css'
export default function Requeriments() {
  return (
    <div>
      <div className='container-req'>
          <div className='requeriments'>
            <h2>INSCRIPCIONES</h2>
                <div className='linea'></div>
          </div>
          <div className='dates-requeriments'>
            <p>Estos son los requerimientos para la inscripción del alumno (a), para formar parte de la institución:</p>

              <ul>
                  <li><p><ion-icon name="caret-forward"></ion-icon>Copia de Acta de Nacimiento</p></li>
                  <li><p><ion-icon name="caret-forward"></ion-icon>Copia de la CURP (Actualizada)</p></li>
                  <li><p><ion-icon name="caret-forward"></ion-icon>Constancia de estudios con promedio</p></li>
                  <li><p><ion-icon name="caret-forward"></ion-icon>2 fotografías tamaño infantil</p></li>
                  <li><p><ion-icon name="caret-forward"></ion-icon>Copia del INE/IFE (Tutor)</p></li>
                  <li><p><ion-icon name="caret-forward"></ion-icon>Comprobante de domicilio</p></li>
                  <li><p><ion-icon name="caret-forward"></ion-icon>Cubrir costo de la ficha</p></li>
                  <li><p><ion-icon name="caret-forward"></ion-icon>Presentarse el interesado con el tutor</p></li>
              </ul>
          </div>
          <div className='req'>
                 <p> La expedición de fichas se llevará a cabo a partir del <span>13 de febrero al 16 de junio del presente año</span> </p>
              <p>El horario de atención es de <span>9:00 a.m. a 14:00 p.m.</span> </p>         
          </div>


      </div>
    </div>
  )
}
