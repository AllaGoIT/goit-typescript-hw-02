
import Modal from 'react-modal';
Modal.setAppElement('#root');
const ImageModal = ({modalIsOpen, afterOpenModal, closeModal, customStyles,data}) => {

     
  return (
       
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {/* <button onClick={closeModal}>close</button> */}
        <img  src={data.urls} alt={data.slug} />
      </Modal>
    </div>
  );
}
   

export default ImageModal;