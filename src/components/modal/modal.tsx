import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { modalContext } from 'hooks/modalContext';
import styles from './modal.module.scss';
import { CloseOutlined } from '@ant-design/icons';

export const Modal = () => {
  const { modalContent, handleModal, modal } = useContext(modalContext);

  const close = () => {
    handleModal(null, { open: false });
    modal.onClose();
  };

  if (modal.open) {
    return ReactDOM.createPortal(
      <>
        <div className={styles.ModalOverlay} onClick={close} />

        <div className={styles.modal}>
          <div className={styles.header}>
            <span className={styles.title}>{modal.title}</span>
            <span className={styles.close} onClick={close}>
              <CloseOutlined />
            </span>
          </div>
          <div className={styles.body}>{modalContent}</div>
        </div>
      </>,
      document.querySelector('#modal-root') ?? document.body,
    );
  } else return null;
};
