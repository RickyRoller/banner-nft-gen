export interface ControlBase {
  type: ControlTypes;
  title: string;
  label?: string;
  objectId: string;
  property: string;
  default: any;
}

export enum ControlTypes {
  NumberSlider,
  PFPSelector,
}

export interface NumberSlider extends ControlBase {
  min: number;
  max: number;
}

export type TemplateControls = (NumberSlider | ControlBase)[];
