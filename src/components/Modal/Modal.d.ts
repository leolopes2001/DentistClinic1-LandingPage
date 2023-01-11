import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

export interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  onRequestClose: () => void;
  visible: boolean;
}
