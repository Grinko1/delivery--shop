import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface modalProps {
  isOpen: boolean;
  fromBottom?: boolean;
  className?: string;
  containerClassName?: string;
  children?: any;
  onClose: any;
}

const Modal = ({ isOpen, className, containerClassName, children, onClose }: modalProps) => {
  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.style.overflowY = 'hidden';
      return;
    }

    body.style.overflowY = 'auto';
  }, [isOpen]);

  if (!isOpen) return <></>;

  return (
    <div
      className={classNames(
        styles.overlay,
        {
          [styles['modal-open']]: isOpen
        },
        [className]
      )}
      onClick={onClose}
    >
      <div
        className={classNames(
          styles.container,
          {
            [styles['container-open']]: isOpen
          },
          [containerClassName]
        )}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default React.memo(Modal, (prevProps, nextProps) => prevProps.isOpen === nextProps.isOpen);
