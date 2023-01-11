import { ReactNode } from 'react';

export interface ILinkProps {
  href: string;
  variant: 'primary' | 'navLink' | 'clinicService';
  children: ReactNode;
}