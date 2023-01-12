import Link from '../../../components/common/Link';
import Title from '../../../components/common/Title';
import { FooterStyled, Logo } from './style';
import CompanyLogo from '../../../assets/svg/agendaConsultaLogo.svg';

const Footer = () => {
  return (
    <FooterStyled>
      <div className='content'>
        <section className='services'>
          <h3>Serviços</h3>
          <ul>
            <li>Clínica Geral</li>
            <li>Implante dentário</li>
            <li>Prótese dentária</li>
            <li>Clareamento</li>
            <li>Harmonização</li>
            <li>Aparelho Dental</li>
            <li>Alinhadores Invisíveis</li>
            <li>Botox</li>
            <li>Extração</li>
            <li>Limpeza Dentária</li>
          </ul>
        </section>
        <section className='howArrive'>
          <h3>Como Chegar</h3>
          <ul>
            <li>Rua Godolfredo Gonçalves</li>
            <li>Cep: 35681-047</li>
            <li>375 - Sala 01 - Centro</li>
            <li>(37) 99119-7849</li>
            <li>Itaúna - MG</li>
            <li>agendaconsulta.com</li>
          </ul>
          <Link href='' variant='primary'>
            Agendar Agora
          </Link>
          <p>Resp. Tec: Thiago Mendes - CRO/MG - 77798</p>
        </section>
        {/* <section className='additional_text'>
          <div>
            <img src={CompanyLogo} alt='Company Logo' />
            <Title variant='logo' tag='h1'>
              Agenda
              <span>Consulta</span>
            </Title>
          </div>
          <p>
            Proporcionamos a melhor experiência odontológica aliada a um
            atendimento humanizado.
          </p>
        </section> */}
      </div>
      <section className='all_rights_reserved'>
        <Logo>
          <img src={CompanyLogo} alt='Company Logo' />
          <Title variant='logo' tag='h1'>
            Agenda
            <span>Consulta</span>
          </Title>
        </Logo>
        <p>desenvolvido por © Agenda Consulta 2022 all rights reserved</p>
      </section>
    </FooterStyled>
  );
};

export default Footer;
