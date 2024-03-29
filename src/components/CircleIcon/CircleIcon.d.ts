export type SizeType = 'desktop' | 'mobile' | 'home_desktop';

export type CircleIconType =
  | 'toothCare'
  | 'bag'
  | 'clock'
  | 'folks'
  | 'internet'
  | 'toothbrush'
  | 'toothCareRemoved'
  | 'dentistBed'
  | 'tooth'
  | 'randomLogo'
  | 'toothSpatula'
  | 'addPerson'
  | 'brushing'
  | 'mouth'
  | 'verify';
  
export interface IGetProps {
  size: SizeType;
  'data-aos'?: string;
}
