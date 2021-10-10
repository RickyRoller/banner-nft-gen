import { ControlTypes } from '../models/controls';
import { BaseTemplateObject, TemplateObjectTypes } from '../models/templates';
import { bannerHeight, bannerPadding } from '../banner-templates/templateVars';

const NFTHeight = bannerHeight - bannerPadding * 2;

export const initPFPSelector = (id: string): BaseTemplateObject => ({
  type: TemplateObjectTypes.PFP,
  id,
  title: 'PFP Controls',
  controls: [
    {
      type: ControlTypes.PFPSelector,
      title: 'PFP Selector',
      objectId: id,
      property: 'url',
      default: '',
    },
    {
      type: ControlTypes.NumberSlider,
      title: 'Height',
      objectId: id,
      property: 'height',
      default: NFTHeight,
      min: 200,
      max: NFTHeight,
    },
    {
      type: ControlTypes.NumberSlider,
      title: 'Width',
      objectId: id,
      property: 'width',
      default: NFTHeight,
      min: 200,
      max: NFTHeight,
    },
    {
      type: ControlTypes.NumberSlider,
      title: 'X Position',
      objectId: id,
      property: 'positionX',
      default: bannerPadding,
      min: 0,
      max: 1000,
    },
    {
      type: ControlTypes.NumberSlider,
      title: 'Y Position',
      objectId: id,
      property: 'positionY',
      default: bannerPadding,
      min: 0,
      max: 1000,
    },
  ],
});

export type PFPControlState = {
  id: string;
  url: string;
  positionX: number;
  positionY: number;
  height: number;
  width: number;
};

export const renderPFP = ({
  id,
  url,
  height,
  width,
  positionX,
  positionY,
}: PFPControlState) => {
  return (
    <image
      key={id}
      href={url}
      height={height}
      width={width}
      x={positionX}
      y={positionY}
    />
  );
};
