import styled, { css } from 'styled-components';

interface ITextVariant {
  variant: 'text1' | 'text2' | 'text3';
}
interface ILabelVariant {
  variant: 'label1';
}

export const TextVariant = {
  text1: css`
    width: 262px;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #373f43;
    position: relative;
    z-index: 999;

    @media (min-width: 1200px) {
      width: 449px;
      height: 96px;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      color: #373f43;
    }
  `,

  text2: css`
    width: 100%;
    font-weight: 400;
    font-size: 12px;
    height: auto;
    line-height: 20px;
    color: #49545a;
    text-align: justify;
    display: inline-flex;

    @media (min-width: 1200px) {
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      color: #49545a;
      display: flex;
      align-items: flex-end;
    }
  `,

  text3: css`
    width: 144px;
    left: 35px;
    top: 952px;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: #49545a;

    @media (min-width: 1200px) {
      width: 332px;
      height: 56px;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
    }
  `,
};

export const Text = styled.p<ITextVariant>`
  font-family: 'Raleway';
  font-style: normal;

  ${({ variant }) => TextVariant[variant || 'text1']}
`;

const LabelVariant = {
  label1: css`
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #606f76;

    @media (min-width: 900px) {
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
    }
  `,
};

export const Label = styled.label<ILabelVariant>`
  ${({ variant }) => LabelVariant[variant]}
`;
