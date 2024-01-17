import "./Gallery.scss";

export default function GalleryModal({src, onClose}) {
    const handleBackgroundClick = (e) => {
        // Check if the clicked element is the modal background
        if (e.target.classList.contains('modal-background')) {
          onClose();
        }
      };
    
      const handleImageClick = (e) => {
        // Prevent the event from bubbling up to the background
        e.stopPropagation();
      };
    
      return (
        <div className="modal-background" onClick={handleBackgroundClick}>
          <div className="modal-content">
          <button onClick={onClose} className="modal-button">X</button>
            <img src={src} alt="Modal View" onClick={handleImageClick} />
           
          </div>
        </div>
      );
    };