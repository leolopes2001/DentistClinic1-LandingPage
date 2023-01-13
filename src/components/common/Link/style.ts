import styled, { css } from 'styled-components';
import convertToRem from '../../../utils/convertToRem';
import { ILinkProps } from './Link';

const LinkVariant = {
  primary: css`
    width: 100%;
    transition: all 600ms !important;
    max-width: ${convertToRem(180)};
    height: ${convertToRem(48)};
    margin-right: 7rem;

    border: 2px solid ${({ theme }) => theme.colors.primary};
    z-index: 999;
    position: relative;

    font-weight: 700;
    font-size: ${convertToRem(20)};
    line-height: ${convertToRem(23)};

    color: ${({ theme }) => theme.colors.primary};

    font-weight: 700;
    font-size: ${convertToRem(14)};
    line-height: ${convertToRem(16)};
    gap: 0.4rem;
    margin-top: 1rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.whiteFixed};
    }
    svg {
      font-size: 1.4rem;
    }
    border-radius: ${convertToRem(4)};
  `,
  navLink: css`
    font-weight: 400;
    font-size: ${convertToRem(20)};
    line-height: ${convertToRem(23)};
    color: ${({ theme }) => theme.colors.grey6};
  `,
  clinicService: css`
    transition: all 600ms !important;
    padding: 8px 16px;
    width: 112px;
    height: 29px;
    border: 1px solid #de0d1d;
    border-radius: 26px;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    color: #de0d1d;
    gap: 0.4rem;

    &:hover {
      color: ${({ theme }) => theme.colors.whiteFixed};
      background-color: ${({ theme }) => theme.colors.primary};
    }

    @media (min-width: 1200px) {
      width: 182px;
      height: 48px;
      font-size: 16px;
      line-height: 24px;
    }
  `,
  benefit: css`
    transition: all 600ms !important;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 1200px) {
      font-size: 12px;
      line-height: 16px;
    }
  `,

  youtube: css`
    font-family: 'Poppins';
    font-style: normal;
    inset: 0;
    padding: 8px 16px;
    gap: 8px;
    position: absolute;
    width: 179px;
    height: 40px;
    background: #fdfdfd;
    border-radius: 41px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #373f43;
    top: 86%;
    left: 50%;
    transform: translate(-50%);
    transition: all 400ms;

    > svg:nth-child(1) {
      width: 25px;
      height: 25px;
      color: ${({ theme }) => theme.colors.primary};
      position: relative;
      z-index: 9999;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.whiteFixed};
      background: ${({ theme }) => theme.colors.primary};

      > svg {
        color: ${({ theme }) => theme.colors.whiteFixed};
      }
    }

    @media (min-width: 1200px) {
      width: 250px;
      height: 54px;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      top: 83%;
      color: #373f43;
    }
  `,
};

export const LinkStyled = styled.a<ILinkProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: 'Raleway';
  font-style: normal;
  cursor: pointer;
  text-decoration: none;
  ${({ variant }) => LinkVariant[variant]}
`;
