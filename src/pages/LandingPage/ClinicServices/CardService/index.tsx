import CircleIcon from '../../../../components/CircleIcon';
import Link from '../../../../components/common/Link';
import { Text } from '../../../../components/common/Text/style';
import Title from '../../../../components/common/Title';
import { LiStyled } from './style';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import useWindowSize from '../../../../hooks/useWindowSize';

interface ICardService {
  img: any;
  service: string;
  description: string;
}

const CardService = ({ img, description, service }: ICardService) => {
  const [width] = useWindowSize();

  return (
    <LiStyled data-aos='fade-up'>
      <div>
        <CircleIcon
          icon={img}
          size={width < 1200 ? 'mobile' : 'desktop'}
          animation={false}
        />
        <Title variant='title4' tag='h4'>
          {service}
        </Title>
      </div>

      <Text variant='text3'>{description}</Text>
      <Link variant='clinicService' href=''>
        Agendar <MdOutlineArrowForwardIos />
      </Link>
    </LiStyled>
  );
};

export default CardService;
