import styled, { css } from 'styled-components';
import convertToRem from '../../../utils/convertToRem';

interface ITextVariant {
  variant: 'text1' | 'text2' | 'text3' | 'text4';
}
interface ILabelVariant {
  variant: 'label1';
}

export const TextVariant = {
  text1: css`
    font-family: 'Red Hat Display';
    width: ${convertToRem(262)};
    font-weight: 400;
    font-size: ${convertToRem(12)};
    line-height: ${convertToRem(20)};
    color: ${({ theme }) => theme.colors.grey2};
    position: relative;
    z-index: 999;

    @media (min-width: 1200px) {
      width: ${convertToRem(449)};
      height: ${convertToRem(96)};
      font-size: ${convertToRem(20)};
      line-height: ${convertToRem(32)};
    }
  `,

  text2: css`
    font-family: 'Red Hat Display';
    width: 100%;
    font-weight: 400;
    font-size: ${convertToRem(12)};
    height: auto;
    line-height: ${convertToRem(20)};
    color: ${({ theme }) => theme.colors.grey5};
    text-align: justify;
    display: inline-flex;

    @media (min-width: 1200px) {
      font-size: ${convertToRem(20)};
      line-height: ${convertToRem(32)};

      display: flex;
      align-items: flex-end;
    }
  `,

  text3: css`
    width: ${convertToRem(144)};
    font-weight: 400;
    font-size: ${convertToRem(10)};
    line-height: ${convertToRem(16)};
    color: ${({ theme }) => theme.colors.grey5};

    @media (min-width: 1200px) {
      width: ${convertToRem(332)};
      height: ${convertToRem(56)};
      font-size: ${convertToRem(18)};
      line-height: ${convertToRem(28)};
    }
  `,

  text4: css`
    font-weight: 700;
    font-size: ${convertToRem(24)};
    line-height: ${convertToRem(32)};
    letter-spacing: ${convertToRem(0.374)};
    color: ${({ theme }) => theme.colors.whiteFixed};
    top: 80%;
    left: 50%;
    width: 100%;
    text-align: center;
    position: absolute;
    transform: translate(-50%, -10%);
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
    font-size: ${convertToRem(12)};
    line-height: ${convertToRem(14)};
    color: ${({ theme }) => theme.colors.grey6};

    @media (min-width: 900px) {
      font-size: ${convertToRem(18)};
      line-height: ${convertToRem(21)};
    }
  `,
};

export const Label = styled.label<ILabelVariant>`
  ${({ variant }) => LabelVariant[variant]}
`;
