import "./Gallery.scss";

export default function GalleryModal({src, onClose}) {
    const handleBackgroundClick = (e) => {
        // Check if the clicked element is the modal background
        if (e.target.classList.contains('modal-background')) {
          onClose();
        } else if (e.target.classList.contains('modal-content')) {
          onClose();
        }
         else if (e.target.classList.contains('modal-img')) {
          onClose();
         }
      };
    
    
    
      return (
        <div className="modal-background" onClick={handleBackgroundClick}>
          <div className="modal-content">
          <button onClick={onClose} className="modal-button">X</button>
            <img src={src} className={'modal-img'} alt="Modal View" />
           
          </div>
        </div>
      );
    };