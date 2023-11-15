import React , { useState }from 'react'
import Modal from 'react-modal';
import './Vision.css'
export default function Vision() {
  const [isVisionModalOpen, setVisionModalOpen] = useState(false);

      const openVisionModal = () => {
        setVisionModalOpen(true);
      };
    
      const closeVisionModal = () => {
        setVisionModalOpen(false);
      };
  return (
    <div>
           <div className='buttons'>
               <button onClick={openVisionModal}>Visión</button>
       </div>
   <Modal
     isOpen={isVisionModalOpen}
     onRequestClose={closeVisionModal}
     contentLabel="Visión Modal"
     style={{
         content: {
           width: '70%',
           height: '40%',
           margin: 'auto',
           border:'none',
           borderStyle:'solid',
           borderColor: 'green',
         }
       }}
   >
    <button onClick={closeVisionModal} className='modal-exit'>X</button>
     <h2 className='modal-mision'>Visión</h2>
     <p className='modal-texto-mision'>Ser una institución educativa plenamente consolidada que represente una de las mejores opciones de educación tecnológica del nivel medio superior, donde la calidad sea el eje sobre el cual gire nuestra casa de estudios.</p>
     
   </Modal>
    </div>
  )
}
