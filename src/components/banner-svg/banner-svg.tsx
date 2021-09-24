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
import { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deployControls } from 'state/app/actions';
import { selectControlsState, selectTemplate } from 'state/app/selectors';
import { renderLinePattern } from 'template-components/line-pattern';
import styles from './banner-svg.module.scss';

interface Props {}

export const BannerSVG: FC<Props> = () => {
  const dispatch = useDispatch();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const template = useSelector(selectTemplate);
  const controlsState = useSelector(selectControlsState);

  useEffect(() => {
    if (template !== undefined) {
      dispatch(deployControls(template.controls));
    }
  }, [template]);

  const templateToSvg = (template: Template) => {
    return template.objects.map((obj, i) => {
      let o;
      switch (obj.type) {
        case TemplateObjectTypes.NFT:
          o = obj as TemplateObjectNFT;
          return <circle key={i} cx={o.x} cy={o.y} r={o.width / 2} />;
        case TemplateObjectTypes.LINE_PATTERN:
          return renderLinePattern({
            width: bannerWidth,
            height: bannerHeight,
            padding: bannerPadding,
          })({
            angle: controlsState.angle,
            spread: controlsState.spread,
            strokeWidth: controlsState.strokeWidth,
            linePoints: controlsState.linePoints,
            noise: controlsState.noise,
          });
      }
    });
  };

  return (
    <svg
      className={styles.SVG}
      viewBox={`0 0 ${bannerWidth} ${bannerHeight}`}
      ref={svgRef}
    >
      {template !== undefined ? templateToSvg(template) : null}
    </svg>
  );
};
