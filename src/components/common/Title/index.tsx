import { ReactNode } from 'react';

import { BaseTitle, Wrapper } from './style';

export interface IBaseTitleProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: ReactNode;
  variant:
    | 'logo'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'title4'
    | 'title5'
    | 'title6'
    | 'numberCompany';
  main_title?: boolean;
  animation?: boolean;
}

export const Title = ({
  animation = true,
  children,
  tag,
  variant,
  className,
  main_title,
}: IBaseTitleProps) => {
  const getAnimation = () => animation && { 'data-aos': 'fade-right' };

  return (
    <>
      {main_title ? (
        <Wrapper {...getAnimation()}>
          <div className='box_title'>
            <div className='circle' />
            <BaseTitle tag={tag} variant={variant} className={className}>
              {children}
            </BaseTitle>
          </div>
          <div className='line' />
        </Wrapper>
      ) : (
        <BaseTitle
          tag={tag}
          variant={variant}
          className={className}
          {...getAnimation()}
        >
          {children}
        </BaseTitle>
      )}
    </>
  );
};

export default Title;
