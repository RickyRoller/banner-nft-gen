import {
  bannerHeight,
  bannerPadding,
  bannerWidth,
} from 'banner-templates/templateVars';
import {
  Template,
  // TemplateObjectLinePattern,
  TemplateObjectNFT,
  TemplateObjectTypes,
} from 'models/templates';
import { FC, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectControlsState, selectTemplate } from 'state/app/selectors';
import { renderLinePattern } from 'template-components/line-pattern';
import { objectControlId } from 'utils/helpers';
import styles from './banner-svg.module.scss';
import { renderPFP } from '../../template-components/pfp';

interface Props {}

export const BannerSVG: FC<Props> = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const template = useSelector(selectTemplate);
  const controlsState = useSelector(selectControlsState);

  const templateToSvg = (template: Template) => {
    return template.objects.map((obj, i) => {
      const controlId = objectControlId(obj.id);
      switch (obj.type) {
        case TemplateObjectTypes.PFP:
          return renderPFP({
            id: obj.id,
            url: controlsState[controlId('url')],
            positionX: controlsState[controlId('positionX')],
            positionY: controlsState[controlId('positionY')],
            height: controlsState[controlId('height')],
            width: controlsState[controlId('width')],
          });
        case TemplateObjectTypes.LINE_PATTERN:
          return renderLinePattern({
            patternId: obj.id,
            width: bannerWidth,
            height: bannerHeight,
            padding: bannerPadding,
            angle: controlsState[controlId('angle')],
            spread: controlsState[controlId('spread')],
            strokeWidth: controlsState[controlId('strokeWidth')],
            linePoints: controlsState[controlId('linePoints')],
            noise: controlsState[controlId('noise')],
          });
      }
    });
  };

  return (
    <svg
      className={styles.SVG}
      viewBox={`0 0 ${bannerWidth} ${bannerHeight}`}
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
    >
      {template !== undefined ? templateToSvg(template) : null}
    </svg>
  );
};
