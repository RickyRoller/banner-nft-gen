import { FC } from 'react';
import styles from './range-control.module.scss';

interface Props {
  steps: number;
}

export const RangeControl: FC<Props> = ({ steps }) => {
  return (
    <div className={styles.RangeControl}>
      <div className={styles.label}>Label Here</div>

      <div className={styles.input}></div>
    </div>
  );
};
