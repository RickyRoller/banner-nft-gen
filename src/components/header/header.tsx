import { FC, useEffect, useState } from 'react';
import styles from './header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { connectUserWallet } from '../../state/app/actions';
import {
  selectUserAddress,
  selectWalletStatus,
} from '../../state/app/selectors';
import { WalletStatus } from '../../models/WalletStatus';

export const Header: FC = () => {
  const dispatch = useDispatch();
  const walletStatus = useSelector(selectWalletStatus);
  const userAddress = useSelector(selectUserAddress);
  const [dAddress, setDAddress] = useState<string>('');

  useEffect(() => {
    setDAddress(`${userAddress.substr(0, 4)}...${userAddress.substr(-4)}`);
  }, [userAddress]);

  const userConnected = walletStatus === WalletStatus.CONNECTED;
  const connectDisabled = [
    WalletStatus.ERROR,
    WalletStatus.CONNECTING,
  ].includes(walletStatus);

  const connect = () => {
    dispatch(connectUserWallet());
  };

  return (
    <div className={styles.Header}>
      {userConnected ? (
        <span className={styles.address}>{dAddress}</span>
      ) : (
        <button
          className={styles.connect}
          disabled={connectDisabled}
          onClick={connect}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};
