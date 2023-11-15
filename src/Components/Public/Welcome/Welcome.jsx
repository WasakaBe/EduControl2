import React from 'react';
import './Welcome.css';
import { Mision, Vision } from '../../../Buttons';

import './Welcome.css';

export default function Welcome() {
  return (
    <div>
      <div className='welcome'>
        <h2>BIENVENIDO AL C.B.T.A.5</h2>
        <div className='linea'></div>
        <p>
          El Centro de Bachillerato Tecnológico Agropecuario No. 5 inicia sus
          actividades el 02 de octubre de 1972 en la ciudad de Huejutla de Reyes
          Hidalgo, se encuentra localizado al norte de la ciudad, sobre el
          Boulevard Adolfo López Mateos s/n colonia aviación civil. Es un gran
          privilegio poder forjar a las futuras generaciones desde hace ya
          aproximadamente 50 años y de esta manera estar contribuyendo a nuestra
          comunidad, el C.B.T.A. 5 de Huejutla, Hgo. ha formado técnicos de
          calidad, con un claro compromiso social. ¡Bienvenidos!
        </p>
      </div>

      <div className='botones'>
              <Mision />
              <Vision />
      </div>

    </div>
  );
}
