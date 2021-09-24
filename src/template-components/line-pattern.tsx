import { ControlTypes, TemplateControls } from 'models/controls';
import {
  BaseTemplateObject,
  // TemplateObjectLinePattern,
  TemplateObjectTypes,
} from 'models/templates';
import { spline } from '../utils/spline';
import { randomUniform } from 'd3-random';

export const initLinePattern = (
  id: string,
): {
  object: BaseTemplateObject;
  controls: TemplateControls;
} => ({
  object: {
    type: TemplateObjectTypes.LINE_PATTERN,
    id,
  },
  controls: [
    // {
    //   type: ControlTypes.NumberSlider,
    //   parent: 'Pattern1',
    //   property: 'angle',
    //   min: 0,
    //   max: 359,
    // },
    {
      type: ControlTypes.NumberSlider,
      title: 'Pattern spread',
      objectId: id,
      property: 'spread',
      min: 4,
      max: 24,
      default: 12,
    },
    {
      type: ControlTypes.NumberSlider,
      title: 'Line width',
      objectId: id,
      property: 'strokeWidth',
      min: 1,
      max: 12,
      default: 4,
    },
    {
      type: ControlTypes.NumberSlider,
      title: 'Line points',
      objectId: id,
      property: 'linePoints',
      min: 4,
      max: 60,
      default: 45,
    },
    {
      type: ControlTypes.NumberSlider,
      title: 'Line variance',
      objectId: id,
      property: 'noise',
      min: 0,
      max: 10,
      default: 7,
    },
  ],
});

export interface LinePatternControlState {
  angle: number;
  spread: number;
  strokeWidth: number;
  linePoints: number;
  noise: number;
}

export const renderLinePattern =
  ({
    width,
    height,
    padding,
  }: {
    width: number;
    height: number;
    padding: number;
  }) =>
  ({
    angle,
    spread,
    strokeWidth,
    linePoints,
    noise,
  }: LinePatternControlState) => {
    // const rotations = Math.floor(angle / 90);
    // let scalePercent = angle / 90;
    // scalePercent = scalePercent > 1 ? scalePercent - rotations : scalePercent;
    // console.log(rotations, scalePercent);
    const colWidth = spread + strokeWidth;
    const rowHeight = Math.ceil(height / (linePoints - 1));
    const paths = [];

    const points = new Array(linePoints).fill(undefined);
    const randomNoise = randomUniform(-noise, noise);
    const splinePoints = points.map((a, i) => {
      const randX = randomNoise();
      return { x: randX, y: i * rowHeight };
    });
    const baseSpline = spline(splinePoints, 1, false);

    for (let x = -padding; x <= width + padding; x += colWidth) {
      paths.push(
        <path
          key={x}
          d={baseSpline}
          stroke="steelblue"
          strokeWidth={strokeWidth}
          fill="none"
          transform={`translate(${x}, 0)`}
        />,
      );
    }

    return (
      <g
        transform-origin={`${width / 2} ${height / 2}`}
        // transform={`rotate(${angle}) scale(${1 + 5 * scalePercent})`}
      >
        {paths}
      </g>
    );
  };
