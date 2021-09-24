import { TemplateKeys, TemplatesMap } from 'banner-templates';
import { Template } from 'models/templates';
import { FC, useEffect, useState } from 'react';
import styles from './template-selector.module.scss';
import cx from 'classnames';

interface TemplateListItem {
  key: TemplateKeys;
  name: string;
}

const templatesToList = (templates: Template[]): TemplateListItem[] =>
  templates.map((t) => ({
    name: t.key,
    key: t.key,
  }));

const templatesList = templatesToList(Object.values(TemplatesMap));

interface Props {
  onSelect: (t: TemplateKeys) => void;
}

export const TemplateSelector: FC<Props> = ({ onSelect }) => {
  const [templates] = useState<TemplateListItem[]>(templatesList);
  const [selected, setSelected] = useState<TemplateListItem | undefined>();

  const confirm = () => {
    if (selected !== undefined) {
      onSelect(selected.key);
    }
  };

  return (
    <div className={styles.TemplateSelector}>
      <div className={styles.templateList}>
        {templates.map((t: TemplateListItem) => (
          <div
            className={cx(styles.templatePreview, {
              [styles.selected]: t.key === selected?.key,
            })}
            key={t.key}
            onClick={() => setSelected(t)}
          >
            {t.key}
          </div>
        ))}
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
        <div className={styles.templatePreview}>Testing</div>
      </div>

      <div className={styles.footer}>
        <button
          className={styles.primary}
          disabled={selected === undefined}
          onClick={confirm}
        >
          Select
        </button>
      </div>
    </div>
  );
};
