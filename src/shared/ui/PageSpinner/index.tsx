import { createPortal } from 'react-dom';
import { useStopScroll } from 'shared/hooks/useStopScroll.ts';
import { Spinner } from 'shared/ui/Spinner';

export const PageSpinner = () => {
  useStopScroll(true);
  return createPortal(
    <div className="flex-center bg-modal-backdropp fixed inset-0 z-101 h-screen w-screen">
      <Spinner />
    </div>,
    document.body
  );
};
