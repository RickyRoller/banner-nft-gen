import { FC } from 'react';
import styles from './rand-gen.module.scss';
import { v4 } from 'uuid';

interface Props {
  onSelect: (id: string) => void;
}

export const RandGen: FC<Props> = ({ onSelect }) => {
  return (
    <div className={styles.RandGen}>
      <button className={styles.randGenButton} onClick={() => onSelect(v4())}>
        Regenerate
      </button>
    </div>
  );
};
