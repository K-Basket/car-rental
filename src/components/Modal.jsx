import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ children, onClose }) {
  useEffect(() => {
    function handleKeyDown(evt) {
      if (evt.code === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  function handleBackdropClick(event) {
    if (event.currentTarget === event.target) {
      onClose();
    }
  }

  document.body.style.overflow = 'hidden'; // stop scroll

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </Backdrop>,
    modalRoot
  );
}
