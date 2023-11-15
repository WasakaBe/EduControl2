import React , { useState }from 'react'
import Modal from 'react-modal';
import './Mision.css'
export default function Mision() {
  const [isMisionModalOpen, setMisionModalOpen] = useState(false);
  const openMisionModal = () => {
        setMisionModalOpen(true);
      };
    
      const closeMisionModal = () => {
        setMisionModalOpen(false);
      };

  return (
    <div>
           <div className='btn'>
               <button onClick={openMisionModal}>Misión</button>
       </div>

       
       <Modal
     isOpen={isMisionModalOpen}
     onRequestClose={closeMisionModal}
     contentLabel="Misión Modal"
     style={{
         content: {
           width: '80%',
           height: '40%',
           margin: 'auto',
           border:'none',
           borderStyle:'solid',
           borderColor: 'green',
         }
       }}
   >
     <button onClick={closeMisionModal} className='modal-exit'>X</button>
     <h2 className='modal-mision'>Misión</h2>
     <p className='modal-texto-mision'>Contribuir en la formación integral de individuos dotados de valores, conocimientos, habilidades y destrezas en el ámbito tecnológico y en el nivel bachillerato, que le permite incorporarse al trabajo productivo basado en competencias laborales como agente de cambio y /o continuar sus estudios en el nivel superior.</p>
     
   </Modal>
    </div>
  )
}
