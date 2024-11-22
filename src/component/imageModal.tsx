import { Modal, ModalBody, ModalHeader } from "react-bootstrap";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentUrl: string;
  title: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  contentUrl,
  title,
}) => {
  return (
    <Modal show={isOpen} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {contentUrl.endsWith(".pdf") ? (
          <embed
            src={contentUrl}
            title="PDF Viewer"
            width="100%"
            height="500px"
            type="application/pdf"
          />
        ) : (
          <img src={contentUrl} alt="확대된 이미지" style={{ width: "100%" }} />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
