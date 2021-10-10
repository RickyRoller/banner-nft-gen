import { FC, useCallback, useEffect, useState } from 'react';
import styles from './pfp-selector-modal.module.scss';
import { fetchPagedNFTs } from '../../../services/open-sea';
import { useSelector } from 'react-redux';
import { selectUserAddress } from '../../../../state/app/selectors';
import { LoadingOutlined } from '@ant-design/icons';
import cx from 'classnames';
import { OpenSeaNFT } from '../../../../models/nft';

interface Props {
  onSelect: (url: OpenSeaNFT) => void;
  onCancel: () => void;
}

export const PfpSelectorModal: FC<Props> = ({ onSelect, onCancel }) => {
  const userAddress = useSelector(selectUserAddress);
  const [PFP, setPFP] = useState<OpenSeaNFT | undefined>();
  const [NFTs, setNFTs] = useState<OpenSeaNFT[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loadingNFTs, setLoadingNFTs] = useState<boolean>(true);

  useEffect(() => {
    loadNFTsByPage();
  }, []);

  const selectNFT = useCallback(
    (nft: OpenSeaNFT) => () => {
      setPFP(nft);
    },
    [],
  );

  const loadNFTsByPage = async () => {
    setLoadingNFTs(true);
    const data = await fetchPagedNFTs('', page);
    setNFTs(data);
    setLoadingNFTs(false);
  };

  const confirm = () => {
    if (PFP !== undefined) {
      const image = new Image();
      image.crossOrigin = 'anonymous';

      image.onload = (e) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        ctx?.drawImage(image, 0, 0);

        onSelect({
          ...PFP,
          url: canvas.toDataURL('image/jpeg'),
        });
      };

      image.src = PFP.url;
    }
  };

  if (loadingNFTs)
    return (
      <div className={styles.loadingNFTs}>
        <LoadingOutlined />
      </div>
    );

  if (!loadingNFTs && NFTs.length === 0)
    return (
      <div className={styles.noNFTs}>
        <span>There aren't any NFTs in this wallet :(</span>
      </div>
    );

  return (
    <div className={styles.PFPSelectorModal}>
      <div className={styles.pfps}>
        {NFTs.map((n: OpenSeaNFT) => (
          <div
            className={cx(styles.nft, { [styles.selected]: n.id === PFP?.id })}
            key={n.id}
            onClick={selectNFT(n)}
          >
            <img src={n.url} />
            <div className={styles.nftLabel}>
              <span className={styles.name}>{n.name}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <span>{'<'}</span>
        <span>{page + 1}</span>
        <span>{'>'}</span>
      </div>

      <div className={styles.footer}>
        <button className={styles.cancel} onClick={onCancel}>
          Cancel
        </button>
        <button
          className={styles.select}
          onClick={confirm}
          disabled={PFP === undefined}
        >
          Select
        </button>
      </div>
    </div>
  );
};
