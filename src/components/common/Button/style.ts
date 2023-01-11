import styled, { css } from 'styled-components';
import { IButtonProps } from './Button';

const ButtonVariant = {
  default: css`
    color: red;
  `,
  primary: css`
    padding: 16px 42px;
    width: 199.38px;
    height: 48px;
    background: #de0d1d;
    border-radius: 10px;
    color: blue;
    width: 100px;
    height: 16px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  `,
  secondary: css`
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;

    position: absolute;
    width: 112px;
    height: 29px;
    left: 203px;
    top: 1034px;

    background: #20c5af;
    border-radius: 26px;

    width: 68px;
    height: 13px;

    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;

    color: #ffffff;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  `,
  terceary: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    padding: 16px 42px;
    gap: 10px;

    position: absolute;
    width: 162px;
    height: 48px;
    left: 16px;
    top: 2100px;

    border: 1px solid #20c5af;
    border-radius: 10px;
    width: 78px;
    height: 16px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: #20c5af;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  `,
  linkab: css`
    position: absolute;
    width: 86px;
    height: 16px;
    left: 224px;
    top: 2514px;

    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;

    /* identical to box height */

    color: #1eb8a4;
  `,
  youtube: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;

    position: absolute;
    width: 179px;
    height: 40px;
    left: 145px;
    top: 3285px;

    background: #ffffff;
    border-radius: 41px;
    width: 103px;
    height: 18px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;

    /* identical to box height */
    text-transform: capitalize;

    color: #373f43;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
  `,
};
export const ButtonStyled = styled.button<IButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-style: normal;
  transition: 0.3s;
  background-color: transparent;
  border-radius: 4px;

  &:hover {
    filter: brightnees(1.2);
  }

  ${({ variant }) => ButtonVariant[variant || 'default']}
`;
