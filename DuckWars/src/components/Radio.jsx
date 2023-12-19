import React, { useState } from 'react';
import '../CSS/Radio.css'
function Modal({ imageUrl, imgModal }) {
  const [displayModal, setDisplayModal] = useState(false);

  const handleImageClick = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <div>
      <img src={imageUrl} alt="Radio" onClick={handleImageClick} />

      {displayModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={imgModal} alt="Bouton radio" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;