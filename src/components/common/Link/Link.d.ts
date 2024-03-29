import { ReactNode } from 'react';

export interface ILinkProps {
  href?: string;
  variant:
    | 'primary'
    | 'navLink'
    | 'clinicService'
    | 'benefit'
    | 'youtube'
    | 'secondary';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
