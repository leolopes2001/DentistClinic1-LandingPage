import styled, { css } from 'styled-components';

const SliderWrapVariant = {
  type1: css`
    .swiper {
      width: 90%;
      padding: 16px;
    }

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
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
      transition: all 0.4s ease 0s;
      border-radius: 50%;
      color: #718096;
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
  type3: css`
    width: 100%;
  
    max-width: 530px;

    .video_card {
      position: relative;
      border-radius: 2rem;
      width: 100%;
      

      max-width: 300px;
      height: 420px;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 2rem;
      }
    }

    .swiper {
      justify-content: end;
      align-items: flex-end;
     
    }

    .swiper-slide {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
    }
  `,

  type4: css`
    .swiper {
      padding: 36px 0px;
      margin-left: auto;
      margin-right: auto;
    }

    .swiper-slide {
      display: flex;
      justify-content: center;
      height: 400px;
      width: 100%;

      & > div {
        min-height: 100%;
        max-width: 260px;
        min-width: 235px;
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
  `,
  type5: css`
    .swiper {
      max-height: 265px;
      min-height: 265px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 1rem;
      margin-top: 0;
      margin-bottom: 1rem;
      padding-bottom: 4rem;
      padding: 0 1rem;

      @media (min-width: 900px) {
        min-height: 290px;
        min-height: 390px;
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
            justify-content: flex-start;
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
        .opinion {
          font-style: italic;
        }
        @media (min-width: 900px) {
          min-width: 467px;
          max-width: 467px;
          height: 321px;

          .opinion {
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
  variant: 'type1' | 'type3' | 'type4' | 'type5';
}>`
  min-width: 0;
  position: relative;

  .swiper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${({ variant }) => SliderWrapVariant[variant]}
`;
