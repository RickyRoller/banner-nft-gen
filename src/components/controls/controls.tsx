import { Control } from 'components/control';
import { RangeControl } from 'components/control/range-control';
import { FC } from 'react';
import styles from './controls.module.scss';

interface Props {}

export const Controls: FC<Props> = ({}) => {
  return (
    <div className={styles.Controls}>
      <div className={styles.title}>Control the look of your banner</div>

      <Control title="Var 1">
        <RangeControl steps={1} />
      </Control>
    </div>
  );
};
