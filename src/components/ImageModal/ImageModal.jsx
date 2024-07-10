

import Modal from 'react-modal';
Modal.setAppElement('#root');
const ImageModal = ( {data:{ urls, slug },modalIsOpen,afterOpenModal,closeModal,customStyles}) => {

     
  return (
       
    <div>
      
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img src={urls.regular} alt={slug} />
      </Modal>
    </div>
  );
}
   

export default ImageModal;