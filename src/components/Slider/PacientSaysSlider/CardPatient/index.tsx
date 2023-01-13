import { CardPatientStyled } from './style';
import Patient0 from '../../../../assets/svg/patients/patient0.svg';
import Patient1 from '../../../../assets/svg/patients/patient1.svg';
import Patient2 from '../../../../assets/svg/patients/patient2.svg';
import { Label, Text } from '../../../common/Text/style';
import Title from '../../../common/Title';
import Star from "../../../../assets/svg/common/star.svg"


const ImagePatients = [Patient0, Patient1, Patient2];

interface ICardPatient {
  id: number;
  name: string;
  job: string;
  opinion: string;
}

const CardPatient = ({ id, name, job, opinion }: ICardPatient) => {
  return (
    <CardPatientStyled>
      <div className='patient'>
        <img src={ImagePatients[id]} alt='Patient photo' />
        <div>
          <Title variant='title5' tag='h6'>
            {name}
          </Title>
          <Label variant='label1'>{job}</Label>
        </div>
      </div>
      <div className='starts'>
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
      </div>
      <Text variant='text2' className='opinion'>
        {opinion}
      </Text>
    </CardPatientStyled>
  );
};

export default CardPatient;
