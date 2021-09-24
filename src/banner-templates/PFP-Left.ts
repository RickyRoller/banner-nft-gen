import { ControlTypes } from 'models/controls';
import {
  CutoutType,
  Template,
  // TemplateObjectLinePattern,
  TemplateObjectNFT,
  TemplateObjectTypes,
} from 'models/templates';
import { initLinePattern } from 'template-components/line-pattern';
import { bannerHeight, bannerPadding } from './templateVars';

const NFTHeight = bannerHeight - bannerPadding * 2;

const linePattern1 = initLinePattern('Pattern1');

export const PFPLeft: Template = {
  key: 'PFPLeft',
  objects: [
    linePattern1.object,
    {
      type: TemplateObjectTypes.NFT,
      id: 'NFT',
      cutout: CutoutType.CIRCLE,
      height: NFTHeight,
      width: NFTHeight,
      x: NFTHeight / 2 + bannerPadding,
      y: bannerHeight / 2,
    },
  ],
  controls: [...linePattern1.controls],
};
