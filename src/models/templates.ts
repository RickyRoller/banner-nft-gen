import { TemplateKeys } from 'banner-templates';
import { TemplateControls } from './controls';

export enum TemplateObjectTypes {
  PFP,
  NFT,
  LINE_PATTERN,
}

export enum CutoutType {
  CIRCLE,
}

export interface Template {
  key: TemplateKeys;
  objects: TemplateObjects[];
}

export interface BaseTemplateObject {
  type: TemplateObjectTypes;
  id: string;
  title: string;
  controls: TemplateControls;
}

export interface TemplateObjectNFT extends BaseTemplateObject {
  cutout: CutoutType;
  height: number;
  width: number;
  x: number;
  y: number;
}

export type TemplateObjects = BaseTemplateObject | TemplateObjectNFT;
