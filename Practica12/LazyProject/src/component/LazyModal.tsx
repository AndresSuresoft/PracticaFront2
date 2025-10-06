// src/components/LazyModal.tsx

import "../index.css";

type LazyModalProps = {
  message: string;
  onClose: () => void;
};

const LazyModal: React.FC<LazyModalProps> = ({ message, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // evita cerrar al hacer click dentro
      >
        <h2>Modal</h2>
        <p>{message}</p>
        <button onClick={onClose} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default LazyModal;
