import styled, { css } from 'styled-components';
import convertToRem from '../../../utils/convertToRem';
import { ILinkProps } from './Link';

const LinkVariant = {
  primary: css`
    color: ${({ theme }) => theme.colors.whiteFixed};
    background-color: ${({ theme }) => theme.colors.primary};
    width: 162px;
    height: 48px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    @media (min-width: 1200px) {
      padding: 0;
      width: 100%;
      transition: all 600ms !important;
      z-index: 999;
      position: relative;
      width: 211px;
      height: 67px;
      font-size: ${convertToRem(20)};
      line-height: ${convertToRem(23)};

      svg {
        font-size: 1.2rem;
      }
    }

    :hover {
      filter: brightness(1.2);
    }
  `,
  secondary: css`
    gap: 10px;
    width: 168px;
    height: 48px;
    border: 1px solid #de0d1d;
    border-radius: 10px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    transition: 400ms !important;
    color: ${({ theme }) => theme.colors.primary};

    @media (min-width: 1200px) {
      gap: 5px;
      padding: 0;
      width: 202px;
      height: 63px;
      border: 1.2px solid #de0d1d;
      border-radius: 16px;
      font-weight: 600;
      font-size: 20px;
      line-height: 23px;
    }
    :hover{
      background-color: ${({theme}) => theme.colors.primary};
      color: ${({theme}) => theme.colors.whiteFixed};
    }
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
    width: ${convertToRem(112)};
    height: ${convertToRem(29)};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${convertToRem(26)};
    font-weight: 400;
    font-size: ${convertToRem(10)};
    line-height: ${convertToRem(13)};
    color: ${({ theme }) => theme.colors.primary};
    gap: 0.4rem;

    &:hover {
      color: ${({ theme }) => theme.colors.whiteFixed};
      background-color: ${({ theme }) => theme.colors.primary};
    }

    @media (min-width: 1200px) {
      width: ${convertToRem(182)};
      height: ${convertToRem(48)};
      font-size: ${convertToRem(16)};
      line-height: ${convertToRem(24)};
    }
  `,
  benefit: css`
    transition: all 600ms !important;
    font-weight: 500;
    font-size: ${convertToRem(18)};
    line-height: ${convertToRem(24)};
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 1200px) {
      font-size: ${convertToRem(12)};
      line-height: ${convertToRem(16)};
    }
  `,

  youtube: css`
    font-family: 'Poppins';
    inset: 0;
    padding: 8px 16px;
    gap: ${convertToRem(8)};
    position: absolute;
    width: ${convertToRem(179)};
    height: ${convertToRem(40)};
    background: ${({ theme }) => theme.colors.background};
    border-radius: ${convertToRem(41)};
    font-weight: 500;
    font-size: ${convertToRem(12)};
    line-height: ${convertToRem(18)};
    color: ${({ theme }) => theme.colors.grey2};
    top: 86%;
    left: 50%;
    transform: translate(-50%);
    transition: all 400ms;

    > svg:nth-child(1) {
      width: ${convertToRem(25)};
      height: ${convertToRem(25)};
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
      width: ${convertToRem(250)};
      height: ${convertToRem(54)};
      font-weight: 500;
      font-size: ${convertToRem(20)};
      line-height: ${convertToRem(30)};
      top: 83%;
      color: ${({ theme }) => theme.colors.grey2};
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
