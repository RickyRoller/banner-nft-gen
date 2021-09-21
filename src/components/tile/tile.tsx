import { FC } from 'react';
import styles from './tile.module.scss';
import cx from 'classnames';

interface Props {
  className?: string;
}

export const Tile: FC<Props> = ({ children, className }) => {
  return <div className={cx(styles.Tile, className)}>{children}</div>;
};
