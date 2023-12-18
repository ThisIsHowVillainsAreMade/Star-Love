import '../CSS/Modal.css'

const Modal = ({ displayModal, closeModal, image }) => {
  const divStyle = {
    display: displayModal ? "flex" : "none",
  };

  const handleCloseModal = () => {
    closeModal();
  };
  const handleModalClick = (e) => {
    e.stopPropagation(); 
  };

  const handleCloseButtonClick = (e) => {
    e.stopPropagation(); 
    handleCloseModal(); 
  };

  return (
    <div className="modal" onClick={handleCloseModal} style={divStyle}>
      <div className="modal-content" onClick={handleModalClick}>
        <span className="close" onClick={handleCloseButtonClick}>
          &times;
        </span>
        <img src={image} />
      </div>
    </div>
  );
};

export default Modal;


// function App() {

//     const [isModalOpen, setIsModalOpen] = useState(false);
  
//     const openModal = () => {
//       setIsModalOpen(true);
//     };
  
//     const closeModal = () => {
//       setIsModalOpen(false);
//     };
//     return (
//       <div>
//         <RouterProvider router={router} />
//         <img
//       src=''
//       onClick={openModal}
//     />
//         <Modal displayModal={isModalOpen} closeModal={closeModal} image='' />
//       </div>
//     );
//   }