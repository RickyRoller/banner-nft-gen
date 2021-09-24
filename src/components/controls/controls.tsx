import { Control } from 'components/control';
import { RangeControl } from 'components/control/range-control';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateControlValue } from 'state/app/actions';
import { selectControls } from 'state/app/selectors';
import styles from './controls.module.scss';

interface Props {}

export const Controls: FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const controls = useSelector(selectControls);

  const updateValue = (property: string) => (value: any) => {
    dispatch(updateControlValue({ property, value }));
  };

  return (
    <div className={styles.Controls}>
      <div className={styles.title}>Control the look of your banner</div>

      <div className={styles.containers}>
        {controls.map((c) => (
          <Control key={c.property} title={c.title}>
            <RangeControl control={c} onChange={updateValue(c.property)} />
          </Control>
        ))}
      </div>
    </div>
  );
};
