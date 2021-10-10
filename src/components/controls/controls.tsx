import { Control } from 'components/control';
import { RangeControl } from 'components/control/range-control';
import {
  ControlBase,
  ControlTypes,
  NumberSlider,
  TemplateControls,
} from 'models/controls';
import { Template } from 'models/templates';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateControlValue } from 'state/app/actions';
import { selectTemplate } from 'state/app/selectors';
import { objectControlId } from 'utils/helpers';
import styles from './controls.module.scss';
import { PfpSelector } from '../control/pfp-selector';

interface Props {}

export const Controls: FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const template = useSelector(selectTemplate);

  const updateValue = (property: string) => (value: any) => {
    dispatch(updateControlValue({ property, value }));
  };

  const renderControlGroups = (t: Template) =>
    t.objects
      .filter((obj) => obj.controls.length > 0)
      .map((obj) => (
        <div key={obj.id} className={styles.controlGroup}>
          <div className={styles.title}>{obj.title}</div>
          {renderObjectControls(obj.controls)}
        </div>
      ));

  const renderObjectControls = (controls: TemplateControls) =>
    controls.map((control) => {
      let c;
      const controlId = objectControlId(control.objectId)(control.property);
      switch (control.type) {
        case ControlTypes.NumberSlider:
          c = control as NumberSlider;
          return renderRangeControl(controlId, c);
        case ControlTypes.PFPSelector:
          c = control as ControlBase;
          return renderPFPSelector(controlId, c);
      }
    });

  const renderRangeControl = (id: string, control: NumberSlider) => (
    <Control key={id} title={control.title}>
      <RangeControl control={control} onChange={updateValue(id)} />
    </Control>
  );

  const renderPFPSelector = (id: string, control: ControlBase) => (
    <Control key={id} title={control.title}>
      <PfpSelector control={control} onSelect={updateValue(id)} />
    </Control>
  );

  return (
    <div className={styles.Controls}>
      {template !== undefined ? (
        <>
          <div className={styles.title}>Control the look of your banner</div>

          <div className={styles.containers}>
            {renderControlGroups(template)}
          </div>
        </>
      ) : null}
    </div>
  );
};
