import Link from '../../../components/common/Link';
import Title from '../../../components/common/Title';
import { FooterStyled } from './style';
import { IPages } from '..';
import { address, footer_services } from '../../../components-mock.json';
import { IoLogoWhatsapp } from 'react-icons/io';
import Logo from '../../../components/Logo';
import { MiniLogo } from '../../../components/MiniLogo';
import useWindowSize from '../../../hooks/useWindowSize';

const Footer = ({ innerRef, id }: IPages) => {
  const { cep, city, company, number_room_neighborhood, phone, street } =
    address;
  const [width] = useWindowSize();

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
            <li className='text'>{number_room_neighborhood}</li>
            <li className='text'>{city}</li>
            <li className='text'>{cep}</li>
            {width < 1200 && (
              <>
                <li className='text'>{phone}</li>
                <li className='text'>{company}</li>
              </>
            )}
          </ul>
          <Link href='' variant='primary'>
            Agendar Agora
          </Link>
        </section>
        {width > 1200 ? (
          <section className='additional_info'>
            <MiniLogo />
            <p className='additional_text_1'>
              Proporcionamos a melhor experiência odontológica aliada a um
              atendimento humanizado.
            </p>
            <p className='additional_text_2'>
              {phone} <IoLogoWhatsapp />
            </p>
            <a
              href='agendaconsulta.com'
              target='_blank'
              className='additional_text_3'
            >
              agendaconsulta.com
            </a>
          </section>
        ) : null}
        <p className='resp_tech'>Resp. Tec: Thiago Mendes - CRO/MG - 77798</p>
      </div>

      <section className='all_rights_reserved'>
        <div className='content'>
          <Logo animation={false} />
          <p className='text'>
            desenvolvido por © Agenda Consulta 2022 all rights reserved
          </p>
        </div>
      </section>
    </FooterStyled>
  );
};

export default Footer;
