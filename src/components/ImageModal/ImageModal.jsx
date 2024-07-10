
import Modal from 'react-modal';
Modal.setAppElement('#root');
const ImageModal = ({modalIsOpen, afterOpenModal, closeModal, customStyles,data}) => {

     
  return (
       
    <div>
    
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img src={data.urls.regular} alt={data.slug} />
      </Modal>
    </div>
  );
}
   

export default ImageModal;