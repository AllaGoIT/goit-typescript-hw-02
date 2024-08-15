import Modal from "react-modal";
import { Photo } from "../../types";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

interface ImageModalProps {
  modalIsOpen: any;
  closeModal: any;
  data: Photo;
}
const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  data,
}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img src={data.urls.regular} alt={data.slug} />
      </Modal>
    </div>
  );
};

export default ImageModal;
