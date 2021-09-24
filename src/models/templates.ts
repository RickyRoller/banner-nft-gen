import { TemplateKeys } from 'banner-templates';
import { TemplateControls } from './controls';

export enum TemplateObjectTypes {
  NFT,
  LINE_PATTERN,
}

export enum CutoutType {
  CIRCLE,
}

export interface Template {
  key: TemplateKeys;
  objects: TemplateObjects[];
  controls: TemplateControls;
}

export interface BaseTemplateObject {
  type: TemplateObjectTypes;
  id: string;
}

export interface TemplateObjectNFT extends BaseTemplateObject {
  cutout: CutoutType;
  height: number;
  width: number;
  x: number;
  y: number;
}

export type TemplateObjects = BaseTemplateObject | TemplateObjectNFT;
