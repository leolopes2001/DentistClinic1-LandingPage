import styled, { css } from 'styled-components';

const SliderWrapVariant = {
  type1: css`
    position: relative;

    .swiper {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      padding: 16px;
    }

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
    }

    .swiper-button-next,
    .swiper-button-prev {
      top: 50%;
      z-index: 99;
      width: 40px;
      height: 40px;
      margin: auto;
      line-height: 40px;
      position: absolute;
      text-align: center;
      transform: translateY(-50%);
      color: #000000;
      transition: all 0.4s ease 0s;
      border-radius: 50%;

      &:hover {
        color: #212121;
      }
      &:after {
        font-size: 14px;
      }
    }

    .swiper-button-prev {
      outline: 0;
      right: auto;
      left: -10px;
      &:after {
        margin-right: 3px;
      }
    }

    .swiper-button-next {
      outline: 0;
      left: auto;
      right: -10px;
      &:after {
        margin-left: 3px;
      }
    }

    .swiper-button-disabled {
      opacity: 0.1;
    }

    .swiper-button-prev {
      color: #718096;
    }

    .swiper-button-next {
      color: #718096;
    }

    .swiper-pagination-bullet:hover,
    .swiper-pagination-bullet-active {
      background-color: #ff7004;
      border-color: #ff7004;
      transform: scale(1);
      opacity: 1;
    }

    @media only screen and (max-width: 1200px) {
      .swiper-pagination-bullet {
        display: none;
      }
    }
  `,
  type2: css`
    position: relative;

    .swiper {
      /* width: 90%;
      margin-top: 30px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      padding: 2rem; */
    }

    .swiper {
      padding: 32px;
    }

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 8px;
      padding: 1rem;
    }

    .swiper-button-prev {
      color: grey;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    .swiper-button-next {
      color: grey;
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    .swiper-pagination-bullet-active {
      background-color: #718096;
    }

    /* ------------------- */
  `,

  type3: css`
    position: relative;
    max-width: 600px;
    .test {
      min-width: 220px;
      height: 400px;
      background-color: black;
      border-radius: 2rem;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 2rem;
      }
    }

    .swiper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;

      -webkit-transform: scaleX(-1) translateX(-1rem);
      transform: scaleX(-1) translateX(-1rem);
    }
  `,

  type4: css`
    .swiper {
      padding: 36px 0px;
    }

    .swiper-slide {
      display: flex;
      justify-content: center;
      height: 400px;

      & > div {
        min-height: 100%;
        max-width: 260px;
        min-width: 260px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .swiper-pagination-bullet-active {
      background-color: #718096;
    }

    .swiper-button-prev {
      color: #718096;
    }

    .swiper-button-next {
      color: #718096;
    }
  `,
  type5: css`
    position: relative;

    .swiper {
      height: 290px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      margin-top: 1rem;
      margin-bottom: 1rem;
      padding-bottom: 4rem;
      justify-content: center;
      padding: 0 1rem;

      @media (min-width: 900px) {
        height: 390px;
        padding-bottom: 6rem;
      }
    }

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      text-align: center;
      font-size: 18px;
      background-color: ${({ theme }) => theme.colors.background};

      & > div {
        background: #fff;
        min-width: 322px;
        max-width: 322px;
        height: 203px;
        border-radius: 20px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background-color: ${({ theme }) => theme.colors.whiteFixed};

        .patient {
          display: flex;
          align-items: center;
          gap: 1rem;
          height: 50px;
        }
        .patient img {
          object-fit: cover;
          width: 50px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.colors.primary};
        }

        .patient > div {
          height: 50px;
          display: flex;
          flex-direction: column;
          align-items: right;
          justify-content: space-evenly;
          h6,
          label {
            text-align: left;
          }
          label {
            font-style: italic;
          }
        }

        .starts {
          display: flex;

          gap: 0.2rem;
          img {
            width: 15px;
            height: 15px;
          }
        }

        @media (min-width: 900px) {
          min-width: 467px;
          max-width: 467px;
          height: 321px;
        
          p {
            max-width: 100%;
            margin: 0;
            padding: 0;
          }

          .patient img {
            width: 60px;
            height: 60px;
        
          }

          .starts {
            gap: 0.5rem;
            img {
              width: 22px;
              height: 22px;
            }
          }
        }
      }
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .swiper-button-next,
    .swiper-button-prev {
      inset: 0;
      top: 85%;
      z-index: 9999;
      width: 40px;
      height: 40px;

      line-height: 40px;
      position: absolute;
      text-align: center;
      color: #000000;
      transition: all 0.4s ease 0s;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
      margin: 0 auto;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.whiteFixed};
      }
      &:after {
        font-size: 14px;
      }

      @media (min-width: 900px) {
        left: 80%;
      }
    }

    .swiper-button-next {
      transform: translateX(25px);
    }
    .swiper-button-prev {
      transform: translateX(-25px);
    }

    .swiper-pagination-progressbar {
      display: none;
      position: absolute;
      bottom: 0;
      top: 90%;
      width: 80%;
      right: 0;
      @media (min-width: 900px) {
        display: block;
      }
    }

    .swiper-pagination-progressbar-fill {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  `,
};

export const SliderWrap = styled.div<{
  variant: 'type1' | 'type2' | 'type3' | 'type4' | 'type5';
}>`
  min-width: 0;

  ${({ variant }) => SliderWrapVariant[variant]}
`;
