import "../CSS/Modal.css";

const Modal = ({ displayModal, closeModal, image, text }) => {
  const divStyle = {
    display: displayModal ? "block" : "none",
  };
  //   vérifie la valeur de la modal si elle est vrai affiche en block sinon display en none

  const handleCloseModal = () => {
    closeModal();
  };
  //constante pour fermer la modal

  const handleCloseButtonClick = (e) => {
    e.stopPropagation();
    handleCloseModal();
  };
  //idem mais sur le bouton fermeture + empeche la propagation du clic sur le contenu + appel de la fonction pour fermer la modal vu au dessus

  return (
    <div className="modal" onClick={handleCloseModal} style={divStyle}>
      {/* logique d'affichage de la modal en fonction du display  */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* permet de ne pas fermer la modal si on clique sur le contenu ne remonte pas vers la classname modal*/}
        <span className="close" onClick={handleCloseButtonClick}>
          &times;
          {/*au clique déclenche la fonction handleCloseButtonClick  donc la fermeture */}
        </span>
        <img src={image} alt="Modal Content" />
        <p>{text}</p>
        {/* affichage du text et de l'image dans la modal */}
      </div>
    </div>
  );
};

// export default Modal;

// import './App.css'
// import React, { useState } from 'react';
// import Modal from './components/Modal'

// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const imageUrl = '';
//   const modalText = '';

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <img
//         src='https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/800px-Carapuce-RFVF.png'
//         alt=""
//         onClick={openModal}
        
//       />
//       <button onClick={openModal}>test</button>
//       <Modal
//         displayModal={isModalOpen}
//         closeModal={closeModal}
//         image={imageUrl}
//         text={modalText}
//       />
//     </div>
//   );
// }
// export default App;
