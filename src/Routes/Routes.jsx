import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IndexPublic } from '../Pages';
import { IniciarSesion,RegisterAlumn,RegisterFamiliar ,RecuperarContrasena} from '../Formularios';
import { Futbol } from '../Secciones';
import { Becas } from '../Components/Public';
export default function AppRoutes(){
  return(
    <div>
      <Router>
        <Routes>
            <Route exact path="/" element={<IndexPublic />} />
            <Route path="/Login" element={<IniciarSesion />} />                     
            <Route path="/RegisterAlumn" element={<RegisterAlumn />} /> 
            <Route path="/RegisterFamiliar" element={<RegisterFamiliar />} /> 
            <Route path="/RecuperarCuenta" element={<RecuperarContrasena />} />
            <Route path="/Becas" element={<Becas />} />
            <Route path="/Futbol" element={<Futbol />} />                     
        </Routes>
      </Router>
    </div>
  )
}