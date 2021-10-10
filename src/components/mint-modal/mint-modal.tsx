import { ChangeEvent, FC, useEffect, useState } from 'react';
import styles from './mint-modal.module.scss';
import { LoadingOutlined } from '@ant-design/icons';
import Input from 'antd/lib/input';
import { convertSVGToDataURI } from 'utils/helpers';
import { MintService } from '../services/mint-service';

interface Props {
  onCancel: () => void;
}

export const MintModal: FC<Props> = ({ onCancel }) => {
  const [name, setName] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [creating, setCreating] = useState<boolean>(true);
  const mintDisabled = name === '' || url === '' || description === '';

  useEffect(() => {
    const svg = document.querySelector('svg[class*="banner-svg"]');
    if (svg !== null) {
      convertSVGToDataURI(svg).then(setUrl);
    }
  }, []);

  useEffect(() => {
    setCreating(url === '');
  }, [url]);

  const onChange =
    (fn: (val: string) => void) =>
    ({ target }: ChangeEvent<HTMLInputElement>) =>
      fn(target.value);

  const mint = async () => {
    const res = await MintService.mintNFT(url, name, description);
    console.log(res);
  };

  if (creating) {
    return (
      <div className={styles.creating}>
        <LoadingOutlined />
      </div>
    );
  }

  return (
    <div className={styles.MintModal}>
      <div className={styles.preview}>
        <img src={url} />
      </div>

      <div className={styles.form}>
        <div className={styles.container}>
          <div className={styles.label}>Name</div>
          <Input
            value={name}
            onChange={onChange(setName)}
            placeholder="Set NFT name"
          />
        </div>
        <div className={styles.container}>
          <div className={styles.label}>Description</div>
          <Input
            value={description}
            onChange={onChange(setDescription)}
            placeholder="Set NFT description"
          />
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.cancel} onClick={onCancel}>
          Cancel
        </button>
        <button className={styles.mint} disabled={mintDisabled} onClick={mint}>
          Mint NFT
        </button>
      </div>
    </div>
  );
};
