import { FooterStyled } from './style';

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
          <button>Agendar Agora</button>
          <p>Resp. Tec: Thiago Mendes - CRO/MG - 77798</p>
        </section>
        <section>
          <img src='' alt='' />
          <p>desenvolvido por © Agenda Consulta 2023 all rights reserved</p>
        </section>
      </div>
    </FooterStyled>
  );
};

export default Footer;
