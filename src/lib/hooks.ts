import { useEffect } from 'react';

export function useThankModal(success: boolean, closeModal: () => void, openThankModal: () => void) {
  useEffect(() => {
    if (success) {
      closeModal();
      openThankModal();
    }
  }, [success]);
}
