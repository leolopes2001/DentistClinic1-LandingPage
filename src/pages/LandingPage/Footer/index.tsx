import Link from '../../../components/common/Link';
import Title from '../../../components/common/Title';
import { FooterStyled, Logo } from './style';
import CompanyLogo from '../../../assets/svg/agendaConsultaLogo.svg';
import { IPages } from '..';
import { address, footer_services } from '../../../components-mock.json';

const Footer = ({ innerRef, id }: IPages) => {
  const { cep, city, company, number_room_neighborhood, phone, street } =
    address;

  return (
    <FooterStyled ref={innerRef} id={id}>
      <div className='content'>
        <section className='services'>
          <Title tag='h3' variant='title6' animation={false}>
            Serviços
          </Title>
          <ul>
            {footer_services.map((name, id) => (
              <li key={id + name} className='text'>
                {name}
              </li>
            ))}
          </ul>
        </section>
        <section className='howArrive'>
          <Title tag='h3' variant='title6' animation={false}>
            Como Chegar
          </Title>
          <ul>
            <li className='text'>{street}</li>
            <li className='text'>{cep}</li>
            <li className='text'>{number_room_neighborhood}</li>
            <li className='text'>{phone}</li>
            <li className='text'>{city}</li>
            <li className='text'>{company}</li>
          </ul>
          <Link href='' variant='primary'>
            Agendar Agora
          </Link>
          <p className='text'>Resp. Tec: Thiago Mendes - CRO/MG - 77798</p>
        </section>
      </div>
      <section className='all_rights_reserved'>
        <Logo>
          <img src={CompanyLogo} alt='Company Logo' />
          <Title variant='logo' tag='h1'>
            Agenda
            <span>Consulta</span>
          </Title>
        </Logo>
        <p className='text'>desenvolvido por © Agenda Consulta 2022 all rights reserved</p>
      </section>
    </FooterStyled>
  );
};

export default Footer;
