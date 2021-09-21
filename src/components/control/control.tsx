import { FC } from 'react';
import styles from './control.module.scss';

interface Props {
  title: string;
}

export const Control: FC<Props> = ({ children, title }) => {
  return (
    <div className={styles.Control}>
      <div className={styles.label}>{title}</div>

      <div className={styles.input}>{children}</div>
    </div>
  );
};
