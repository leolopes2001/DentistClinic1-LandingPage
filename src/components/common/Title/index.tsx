import { ReactNode } from 'react';

import { BaseTitle, Wrapper } from './style';

interface ITitleProps {
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
    | 'numberCompany';
  main_title?: boolean;
}

export const Title = ({
  children,
  tag,
  variant,
  className,
  main_title,
}: ITitleProps) => {
  return (
    <>
      {main_title ? (
        <Wrapper data-aos='fade-right'>
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
          data-aos='fade-right'
          className={className}
        >
          {children}
        </BaseTitle>
      )}
    </>
  );
};

export default Title;
