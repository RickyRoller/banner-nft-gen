import { Template } from 'models/templates';
import { initLinePattern } from 'template-components/line-pattern';
import { bannerHeight, bannerPadding } from './templateVars';
import { initPFPSelector } from '../template-components/pfp';

const linePattern1 = initLinePattern('Pattern1');
const PFPSelector = initPFPSelector('PFPSelector');

export const PFPLeft: Template = {
  key: 'PFPLeft',
  objects: [linePattern1, PFPSelector],
};
