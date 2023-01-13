import { GridHeader, StyledSection } from './style';
import Title from '../../../components/common/Title';
import { Text } from '../../../components/common/Text/style';
import Prof1 from '../../../assets/svg/slider/professionals/prof1.svg';
import Prof2 from '../../../assets/svg/slider/professionals/prof2.svg';
import Prof3 from '../../../assets/svg/slider/professionals/prof3.svg';
import Prof4 from '../../../assets/svg/slider/professionals/prof4.svg';
import ProfessionalSlider from '../../../components/Slider/ProfessionalsSlider';
import useWindowSize from '../../../hooks/useWindowSize';
import { doctors_cards_slider } from '../../../components-mock.json';
import { IPages } from '..';

const DoctorsImages = {
  0: Prof1,
  1: Prof2,
  2: Prof3,
  3: Prof4,
};

const Professionals = ({ innerRef, id }: IPages) => {
  const [width] = useWindowSize();

  return (
    <StyledSection ref={innerRef} id={id}>
      <div className='content'>
        <GridHeader>
          <div>
            <Title tag='h3' variant='title2' main_title={true}>
              Profissionais
            </Title>
          </div>
          <Title tag='h3' variant='title3' className='general_clinic_title'>
            Vejas os seus dentistas
          </Title>
          <Text variant='text2' data-aos='fade-left'>
            Time formado por especialistas e profissionais experientes
          </Text>
        </GridHeader>

        {width > 1200 ? (
          <ul
            className={`doctors_list style_length_${doctors_cards_slider.length}`}
          >
            {doctors_cards_slider.map((doctor) => (
              <li key={doctor.id}>
                <img
                  src={DoctorsImages[doctor.id as 0 | 1 | 2 | 3]}
                  alt='Doctor image'
                />
                <p>{doctor.name}</p>
              </li>
            ))}
          </ul>
        ) : (
          <ProfessionalSlider />
        )}
      </div>
    </StyledSection>
  );
};

export default Professionals;
