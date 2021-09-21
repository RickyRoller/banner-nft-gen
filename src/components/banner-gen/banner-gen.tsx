import { FC, useContext } from 'react';
import styles from './banner-gen.module.scss';
import { Tile } from 'components/tile';
import tileStyles from 'components/tile/tile.module.scss';
import { BannerSVG } from 'components/banner-svg';
import { Controls } from 'components/controls';
import { useSelector } from 'react-redux';
import { selectTemplateId } from 'state/app/selectors';
import { TemplateSelector } from 'components/template-selector';
import { modalContext } from 'hooks/modalContext';

export const BannerGen: FC = () => {
  const templateId = useSelector(selectTemplateId);
  const { handleModal } = useContext(modalContext);

  const openTemplateModal = () => {
    handleModal(<div>Template Modal Here</div>, {
      open: true,
      title: 'Choose a template',
    });
  };

  return (
    <Tile className={styles.BannerGen}>
      <div className={tileStyles.title}>Twitter banner generator</div>
      <div className={tileStyles.subTitle}>
        Use the controls below to generate a unique twitter banner image. When
        you're happy with the result, mint it as an NFT!
      </div>

      <div className={styles.bannerGenerator}>
        {templateId === null ? (
          <div className={styles.noTemplate}>
            <button onClick={openTemplateModal}>Select a template</button>
          </div>
        ) : (
          <BannerSVG />
        )}
      </div>

      <div className={styles.controls}>
        <Controls />
      </div>
    </Tile>
  );
};
