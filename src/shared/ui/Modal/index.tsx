import { type FC, type ReactElement, type ReactNode, useEffect } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useStopScroll } from 'shared/hooks/useStopScroll.ts';
import { GhostButton } from 'shared/ui/Buttons/GhostButton.tsx';
import { Typography } from 'shared/ui/Typography';

export interface ModalProps {
  show: boolean;
  onClose: () => void;
  children?: ReactNode;
  title?: ReactElement | string;
  subtitle?: ReactElement | string;
}

export const Modal: FC<ModalProps> = ({
  show,
  children,
  onClose,
  title,
  subtitle,
}) => {
  useStopScroll(show);

  const onBackgroundClick = () => {
    onClose();
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (show) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [show, onClose]);

  if (!show) {
    return null;
  }

  return createPortal(
    <div
      aria-hidden={true}
      className="bg-modal-backdropp fixed inset-0 z-99"
      onClick={onBackgroundClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={true}
        aria-labelledby={title ? 'modal-title' : undefined}
        className="bg-light absolute top-1/2 left-1/2 max-h-[90vh] w-full -translate-1/2 overflow-y-auto rounded-3xl p-4 lg:w-auto lg:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <GhostButton Icon={X} onClick={onClose} />
        </div>
        <div className="flex-col-gap-8 mt-4">
          {(!!title || !!subtitle) && (
            <div className="flex-col-gap-2 text-center">
              {!!title && (
                <Typography id="modal-title" as="h3" type="title">
                  {title}
                </Typography>
              )}
              {!!subtitle && <Typography type="caption">{subtitle}</Typography>}
            </div>
          )}
          {!!children && children}
        </div>
      </div>
    </div>,
    document.body
  );
};
