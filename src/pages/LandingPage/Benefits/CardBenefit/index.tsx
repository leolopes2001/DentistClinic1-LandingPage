import CircleIcon from '../../../../components/CircleIcon';
import Link from '../../../../components/common/Link';
import { Text } from '../../../../components/common/Text/style';
import Title from '../../../../components/common/Title';
import { LiStyled } from './style';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import useWindowSize from '../../../../hooks/useWindowSize';

export interface ICardBenefit {
  id: 0 | 1 | 2 | 3;
  title: string;
  text: string;
  btn: string;
}

const BenefitVariantImg: { 0: 'internet'; 1: 'clock'; 2: 'folks'; 3: 'bag' } = {
  0: 'internet',
  1: 'clock',
  2: 'folks',
  3: 'bag',
};

const CardBenefit = ({ id, title, text, btn }: ICardBenefit) => {
  const [width] = useWindowSize();

  return (
    <LiStyled data-aos='fade-up'>
      <div>
        <CircleIcon
          icon={BenefitVariantImg[id]}
          size={width < 1200 ? 'mobile' : 'desktop'}
          animation={false}
        />
        <Title variant='title4' tag='h4'>
          {title}
        </Title>
      </div>

      <Text variant='text3'>{text}</Text>
      <Link variant='benefit' href=''>
        {btn} <MdOutlineArrowForwardIos />
      </Link>
    </LiStyled>
  );
};

export default CardBenefit;
