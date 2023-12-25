import { useEffect } from 'react';

export function useThankModal(showThankModal: boolean, closeModal: () => void, openThankModal: () => void) {
  useEffect(() => {
    if (showThankModal) {
      closeModal();
      openThankModal();
    }
  }, [showThankModal]);
}
