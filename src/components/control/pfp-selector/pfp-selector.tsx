import { FC, useContext } from 'react';
import styles from './pfp-selector.module.scss';
import { ControlBase } from '../../../models/controls';
import { modalContext } from '../../../hooks/modalContext';
import { PfpSelectorModal } from './pfp-selector-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAddress } from '../../../state/app/selectors';
import { connectUserWallet } from '../../../state/app/actions';
import { OpenSeaNFT } from '../../../models/nft';

interface Props {
  control: ControlBase;
  onSelect: (url: string) => void;
}

export const PfpSelector: FC<Props> = ({ control, onSelect }) => {
  const dispatch = useDispatch();
  const userAddress = useSelector(selectUserAddress);
  const { handleModal } = useContext(modalContext);

  const pfpSelected = ({ url }: OpenSeaNFT) => {
    onSelect(url);
    closeModal();
  };

  const openModal = async () => {
    // if (userAddress === '') {
    //   await dispatch(connectUserWallet());
    // }

    handleModal(
      <PfpSelectorModal onSelect={pfpSelected} onCancel={closeModal} />,
      {
        open: true,
        title: 'Select one of your amazing PFPs',
      },
    );
  };

  const closeModal = () => {
    handleModal(null, { open: false });
  };

  return (
    <div className={styles.PfpSelector}>
      <button className={styles.openModal} onClick={openModal}>
        Select your PFP NFT
      </button>
    </div>
  );
};
