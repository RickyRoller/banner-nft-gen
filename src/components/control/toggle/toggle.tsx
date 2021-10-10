import { FC, useState } from 'react';
import styles from './toggle.module.scss';
import { ControlBase } from '../../../models/controls';

interface Props {
  control: ControlBase;
  onSelect: (checked: boolean) => void;
}

export const Toggle: FC<Props> = ({ control, onSelect }) => {
  const [checked, setChecked] = useState<boolean>(control.default);
  const check = () => {
    setChecked(!checked);
    onSelect(!checked);
  };
  return (
    <div className={styles.Toggle}>
      <input type="checkbox" checked={checked} onChange={check} />
    </div>
  );
};
