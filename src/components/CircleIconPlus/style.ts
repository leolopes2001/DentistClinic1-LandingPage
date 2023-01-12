import styled, { css } from 'styled-components';
import { ContainerVaritantType } from '.';
import { SizeType } from '../CircleIcon/CircleIcon';

const ContainerVariantMobile = {
  one: css`
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
      font-family: 'Red Hat Display';
      font-style: normal;
      font-weight: 400;
      font-size: 7.75791px;
      line-height: 10px;
      text-align: center;
      color: #49545a;
      width: 50px;
    }

    .label {
      font-family: 'Red Hat Display';
      font-style: normal;
      font-weight: 500;
      font-size: 7.75791px;
      line-height: 10px;
      text-align: center;
      color: #373f43;
    }
  `,
  two: css`
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
    }

    .text {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 7.75791px;
      line-height: 9px;
      color: #3d3d3d;
      width: 80px;
    }

    .label {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 18.1018px;
      line-height: 22px;
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
      font-family: 'Red Hat Display';
      font-style: normal;
      font-weight: 400;
      font-size: 7.75791px;
      line-height: 10px;
      text-align: center;
      color: #49545a;
      width: 50px;
    }

    .label {
      font-family: 'Red Hat Display';
      font-style: normal;
      font-weight: 500;
      font-size: 7.75791px;
      line-height: 10px;
      text-align: center;
      color: #373f43;
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
    }

    .text {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 7.75791px;
      line-height: 9px;
      color: #3d3d3d;
      width: 80px;
    }

    .label {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 18.1018px;
      line-height: 22px;
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
      font-family: 'Red Hat Display';
      font-style: normal;
      font-weight: 400;
      font-size: 7.75791px;
      line-height: 10px;
      text-align: center;
      color: #49545a;
      width: 50px;
    }

    .label {
      font-family: 'Red Hat Display';
      font-style: normal;
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
  ${({ variant, size }) =>
    size === 'mobile'
      ? ContainerVariantMobile[variant]
      : ContainerVariantDesktop[variant]}
`;
