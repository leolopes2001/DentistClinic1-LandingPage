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
    width: 76.21px;
    height: 69.83px;

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
    font-style: normal;
    position: absolute;
    width: 108.5px;
    height: 49.57px;
    background: #ffffff;
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
      gap: 0;
    }

    .content_box .text {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #3d3d3d;
      width: 100px;
    }

    .content_box .label {
      font-weight: 700;
      font-size: 42px;
      line-height: 41px;
      color: #000000;
    }
  `,
  three: css`
    position: absolute;
    width: 79.21px;
    height: 72.83px;
    background: #ffffff;
    border-radius: 10.3439px;
    
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
      line-height: 10px;
      text-align: center;
      color: #49545a;
      width: 50px;
      
    }

    .label {
      font-weight: 500;
      font-size: 7.75791px;
      line-height: 10px;
      text-align: center;
      color: #373f43;
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
