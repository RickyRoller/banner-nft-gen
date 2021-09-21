import { FC, useRef } from 'react';
import styles from './banner-svg.module.scss';

interface Props {}

export const BannerSVG: FC<Props> = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  return <svg className={styles.SVG} viewBox="0 0 1500 500" ref={svgRef}></svg>;
};
