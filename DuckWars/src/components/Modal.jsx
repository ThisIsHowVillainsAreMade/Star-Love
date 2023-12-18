import '../CSS/Modal.css'



const Modal = ({ displayModal, closeModal, image, text }) => {
  const divStyle = {
    display: displayModal ? 'block' : 'none',
  };
//   vérifie la valeur de modale

  const handleCloseModal = () => {
    closeModal();
  };
  //ferme le modale

  const handleCloseButtonClick = (e) => {
    e.stopPropagation();
    handleCloseModal();
  };
  //idem mais sur le bouton fermeture + empeche la propagation du clic sur le bouton fermé + appel de la fonction

  return (
    <div className="modal" onClick={handleCloseModal} style={divStyle}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleCloseButtonClick}>
          &times;
        </span>
        <img src={image} alt="Modal Content" />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Modal;

