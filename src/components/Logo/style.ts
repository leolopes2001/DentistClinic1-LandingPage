import styled, { css } from 'styled-components';

export const LogoStyled = styled.div<{ company_logo_exists: boolean }>`
  display: flex;
  align-items: center;

  .container_img_logo {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary};
      }

      fill: ${({ theme }) => theme.colors.primary};
    }

    ${({ company_logo_exists }) => {
      if (company_logo_exists) {
        return css`
          .home {
            width: 51px;
            height: 45px;
          }
        `;
      } else {
        return css`
          .home {
            transform: scale(1.4);
          }
        `;
      }
    }}
  }
`;
