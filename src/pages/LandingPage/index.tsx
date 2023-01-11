import { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Section from '../help/Section';
import { DivTest, DivTest2 } from './style';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ClinicServices from './ClinicServices';
import YourTimeHasCome from './YourTimeHasCome';
import Depositions from './Depositions';
import Professionals from './Professionals';
import Footer from './Footer';
import PatientSay from './PatientSays';

const LandingPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Header />
      <Home />
      <ClinicServices />
      <YourTimeHasCome></YourTimeHasCome>
      
      <ClinicServices />
      <Depositions />
      <Professionals />
      <PatientSay/>
      <Footer /> 
    </>
  );
};

export default LandingPage;
