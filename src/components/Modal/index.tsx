import { MouseEvent, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { IModalProps } from './Modal';
import { Overlay, Wrapper } from './style';

const Modal = ({ children, onRequestClose, visible, ...rest }: IModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) onRequestClose();
  };

  useEffect(() => {
    if (!visible) return;

    document.body.classList.add('hide-scroll');

    return () => document.body.classList.remove('hide-scroll');
  }, [visible]);

  return ReactDOM.createPortal(
    <Overlay ref={modalRef} onClick={handleOutsideClick}>
      <Wrapper {...rest}>{children}</Wrapper>
    </Overlay>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;
