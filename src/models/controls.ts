interface ControlBase {
  type: ControlTypes.NumberSlider;
  title: string;
  label?: string;
  objectId: string;
  property: string;
  default: any;
}

export enum ControlTypes {
  NumberSlider,
}

export interface NumberSlider extends ControlBase {
  min: number;
  max: number;
}

export type TemplateControls = NumberSlider[];
