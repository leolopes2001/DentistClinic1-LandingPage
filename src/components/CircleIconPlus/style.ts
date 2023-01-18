import styled, { css } from 'styled-components';
import { ContainerVaritantType } from '.';
import convertToRem from '../../utils/convertToRem';
import { SizeType } from '../CircleIcon/CircleIcon';
const ContainerVariantMobile = {
  one: css`
    position: absolute;
    width: ${convertToRem(79.21)};
    height: ${convertToRem(72.83)};
    background: ${({ theme }) => theme.colors.whiteFixed};
    border-radius: ${convertToRem(10.34)};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .content_box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 0.4rem;
    }

    .text {
      font-weight: 400;
      font-size: 7.75791px;
      font-size: ${convertToRem(7.75)};
      line-height: ${convertToRem(10)};
      text-align: center;
      color: #49545a;
      width: ${convertToRem(50)};
    }

    .label {
      font-weight: 500;
      font-size: ${convertToRem(7.75)};
      line-height: ${convertToRem(10)};
      text-align: center;
      color: ${({ theme }) => theme.colors.grey2};
    }
  `,
  two: css`
    font-family: 'Inter';
    font-style: normal;
    position: absolute;
    width: ${convertToRem(108.5)};
    height: ${convertToRem(49.57)};
    background: ${({ theme }) => theme.colors.whiteFixed};
    border-radius: 10.3439px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding-left: 1rem;

    .content_box {
      display: flex;
      flex-direction: column;
      align-items: right;
      justify-content: center;
    }

    .text {
      font-weight: 500;
      font-size: ${convertToRem(7.75)};
      line-height: ${convertToRem(9)};
      color: ${({ theme }) => theme.colors.grey4};
      width: ${convertToRem(80)};
    }

    .label {
      font-weight: 700;
      font-size: ${convertToRem(18.1)};
      line-height: ${convertToRem(22)};
      color: ${({ theme }) => theme.colors.blackFixed};
    }
  `,
  three: css`
    position: absolute;
    width: ${convertToRem(79.21)};
    height: ${convertToRem(72.83)};
    background: ${({ theme }) => theme.colors.whiteFixed};
    border-radius: ${convertToRem(10.34)};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .content_box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 0.4rem;
    }

    .text {
      font-weight: 400;
      font-size: 7.75791px;
      font-size: ${convertToRem(7.75)};
      line-height: ${convertToRem(10)};
      text-align: center;
      color: ${({ theme }) => theme.colors.grey5};
      width: ${convertToRem(50)};
    }

    .label {
      font-weight: 500;
      font-size: ${convertToRem(7.75)};
      line-height: ${convertToRem(10)};
      text-align: center;
      color: ${({ theme }) => theme.colors.grey2};
    }
  `,
};

const ContainerVariantDesktop = {
  one: css`
    position: absolute;
    width: ${convertToRem(76.21)};
    height: ${convertToRem(69.83)};

    .content_box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    opacity: 1 !important;
  `,
  two: css`
    font-family: 'Inter';

    position: absolute;
    width: ${convertToRem(108.5)};
    height: ${convertToRem(49.57)};
    background: ${({ theme }) => theme.colors.whiteFixed};
    border-radius: ${convertToRem(10.34)};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding-left: 1rem;

    .content_box {
      display: flex;
      flex-direction: column;
      align-items: right;
      justify-content: center;
      gap: 0;
    }

    .content_box .text {
      font-weight: 500;
      font-size: ${convertToRem(18)};
      line-height: ${convertToRem(22)};
      color: ${({ theme }) => theme.colors.grey4};
      width: ${convertToRem(100)};
    }

    .content_box .label {
      font-weight: 700;
      font-size: ${convertToRem(42)};
      line-height: ${convertToRem(41)};
      color: ${({ theme }) => theme.colors.blackFixed};
    }
  `,
  three: css`
    position: absolute;
    width: ${convertToRem(79.21)};
    height: ${convertToRem(72.83)};
    background: ${({ theme }) => theme.colors.whiteFixed};
    border-radius: ${convertToRem(10.34)};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .content_box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 0.4rem;
    }

    .text {
      color: ${({ theme }) => theme.colors.grey4};
      font-family: 'Red Hat Display';
      font-style: normal;
      font-weight: 500;
      font-size: 11.0916px;
      line-height: 15px;
      text-align: center;

      @media (min-width: 1200px) {
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
      }
    }

    .label {
      font-weight: 500;
      font-size: ${convertToRem(7.75)};
      line-height: ${convertToRem(10)};
      text-align: center;
      color: ${({ theme }) => theme.colors.grey2};
    }
  `,
};

export const Container = styled.div<{
  variant: ContainerVaritantType;
  size: SizeType;
}>`
  font-family: 'Raleway';
  font-style: normal;

  ${({ variant, size }) =>
    size === 'mobile'
      ? ContainerVariantMobile[variant]
      : ContainerVariantDesktop[variant]}
`;
