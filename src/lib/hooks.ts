import { useEffect } from 'react';

export function useThankModal(success: boolean | undefined, setOpen: (open: boolean) => void, setOpenThank: (open: boolean) => void) {
  useEffect(() => {
    if (success) {
      setOpen(false);
      setOpenThank(true);
    }
  }, [success]);
}
