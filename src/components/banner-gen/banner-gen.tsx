import { FC, useContext, useEffect } from 'react';
import styles from './banner-gen.module.scss';
import { Tile } from 'components/tile';
import tileStyles from 'components/tile/tile.module.scss';
import { BannerSVG } from 'components/banner-svg';
import { Controls } from 'components/controls';
import { useDispatch, useSelector } from 'react-redux';
import { selectTemplate, selectTemplateId } from 'state/app/selectors';
import { TemplateSelector } from 'components/template-selector';
import { modalContext } from 'hooks/modalContext';
import { TemplateKeys } from 'banner-templates';
import { deployControls, setTemplateId } from 'state/app/actions';
import { MintModal } from '../mint-modal';

export const BannerGen: FC = () => {
  const dispatch = useDispatch();
  const templateId = useSelector(selectTemplateId);
  const template = useSelector(selectTemplate);
  const { handleModal } = useContext(modalContext);
  const mintDisabled = false;

  useEffect(() => {
    if (template !== undefined) {
      dispatch(deployControls(template.objects));
    }
  }, [template]);

  const onTemplateSelect = (t: TemplateKeys) => {
    closeModal();
    dispatch(setTemplateId(t));
  };

  const openTemplateModal = () => {
    handleModal(<TemplateSelector onSelect={onTemplateSelect} />, {
      open: true,
      title: 'Choose a template',
    });
  };

  const openMintModal = () => {
    handleModal(<MintModal onCancel={closeModal} />, {
      open: true,
      title: 'Mint your creation!',
    });
  };

  const closeModal = () => {
    handleModal(null, { open: false });
  };

  return (
    <Tile className={styles.BannerGen}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={tileStyles.title}>Twitter banner generator</div>
          <div className={tileStyles.subTitle}>
            Use the controls below to generate a unique twitter banner image.
            When you're happy with the result, mint it as an NFT!
          </div>
        </div>
        <button
          className={styles.mint}
          disabled={mintDisabled}
          onClick={openMintModal}
        >
          Mint
        </button>
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
