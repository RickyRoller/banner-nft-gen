import { useState } from 'react';

export interface ModalData {
  open: boolean;
  title: string;
  onClose: () => void;
}

export const modalDataDefaults = {
  open: false,
  title: 'Modal',
  onClose: () => {},
};

export const useModal = () => {
  let [modal, setModal] = useState<ModalData>(modalDataDefaults);
  let [modalContent, setModalContent] = useState<JSX.Element | null>(null);

  let handleModal = (
    content: JSX.Element | null = null,
    data: Partial<ModalData>,
  ) => {
    setModal({
      ...modal,
      ...data,
    });
    if (content !== null) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, modalContent };
};
