import { Template } from 'models/templates';
import { PFPLeft } from './PFP-Left';

interface TempMap {
  PFPLeft: typeof PFPLeft;
}

export const TemplatesMap: TempMap = {
  PFPLeft,
};

export type TemplateKeys = keyof typeof TemplatesMap;
