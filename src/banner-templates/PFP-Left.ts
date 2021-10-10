import { Template } from 'models/templates';
import { initLinePattern } from 'template-components/line-pattern';
import { bannerHeight, bannerPadding } from './templateVars';
import { initPFPSelector } from '../template-components/pfp';
import { initGen1 } from '../template-components/gen-1';

// const linePattern1 = initLinePattern('Pattern1');
const gen1 = initGen1('gen1');
const PFPSelector = initPFPSelector('PFPSelector');

export const PFPLeft: Template = {
  key: 'PFPLeft',
  objects: [gen1, PFPSelector],
};
