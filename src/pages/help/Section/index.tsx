import { SectionStyled } from './style';

const Section = () => {
  return (
    <SectionStyled id='section'>
      <h1 data-aos='fade-right'>Title test</h1>
      <div className='content-s' data-aos='fade-up'></div>
      <div className='content-s' data-aos='fade-up'></div>
      <div className='content-s' data-aos='fade-up'></div>
    </SectionStyled>
  );
};
export default Section;
