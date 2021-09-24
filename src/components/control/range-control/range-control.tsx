import { FC } from 'react';
import styles from './range-control.module.scss';
import Slider from 'antd/lib/slider';
import { NumberSlider } from 'models/controls';

interface Props {
  control: NumberSlider;
  onChange: (val: number) => void;
}

export const RangeControl: FC<Props> = ({ control, onChange }) => {
  return (
    <div className={styles.RangeControl}>
      <Slider
        onChange={onChange}
        defaultValue={control.default}
        min={control.min}
        max={control.max}
      />
    </div>
  );
};
