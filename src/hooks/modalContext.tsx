import { FC, createContext } from 'react';
import { ModalData, modalDataDefaults, useModal } from './useModal';
import { Modal } from '../components/modal';

interface ModalContext {
  modal: ModalData;
  handleModal: (content: JSX.Element | null, data: Partial<ModalData>) => void;
  modalContent: JSX.Element | null;
}

const modalContext = createContext<ModalContext>({
  modal: modalDataDefaults,
  handleModal: () => {},
  modalContent: null,
});
const { Provider } = modalContext;

const ModalProvider: FC = ({ children }) => {
  let { modal, handleModal, modalContent } = useModal();
  return (
    <Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {children}
    </Provider>
  );
};

export { modalContext, ModalProvider };
