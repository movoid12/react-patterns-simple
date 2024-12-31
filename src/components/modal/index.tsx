import { useState } from "react";
import ReactDOM from "react-dom";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  if (isOpen) {
    console.log("Modal is open");
  }

  return (
    <main className="container">
      <h2 className="title">Modal With Portal</h2>

      <button onClick={toggleModal} className="portal-btn">
        Open Modal
      </button>

      {isOpen &&
        ReactDOM.createPortal(
          <div className="portal">
            <div>
              <h2 className="title">Modal Title</h2>
              <p>This is a modal using Portal Pattern</p>
              <button onClick={toggleModal}>Close</button>
            </div>
          </div>,
          document.body
        )}
    </main>
  );
}
