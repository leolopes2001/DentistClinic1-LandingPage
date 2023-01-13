import { RefObject, useEffect, useRef, useState } from 'react';
import { useSideBar } from '../../contexts/SideBarProvider';
import Header from './Header';
import Home from './Home';
import Aos from 'aos';
import ClinicServices from './ClinicServices';
import YourTimeHasCome from './YourTimeHasCome';
import Depositions from './Depositions';
import Professionals from './Professionals';
import Footer from './Footer';
import PatientSay from './PatientSays';
import Benefits from './Benefits';
import 'aos/dist/aos.css';

export interface IPages {
  id?: string;
  innerRef: RefObject<HTMLElement>;
}

const LandingPage = () => {
  const { setSectionActiveSideBar } = useSideBar();
  const homeRef = useRef<HTMLElement>(null);
  const clinicServiceRef = useRef<HTMLDivElement>(null);
  const schedulesRef = useRef<HTMLDivElement>(null);
  const dentistRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);
  const depositionsRef = useRef<HTMLElement>(null);
  const patientsRef = useRef<HTMLElement>(null);

  const [sectionActive, setSectionActive] = useState<string>('');

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const options = {
    threshold: [0, 0.6, 1],
  };

  const handleObserver = (section: string, ratio: number) => {
    if (ratio < 0.59) return;

    setSectionActiveSideBar(section);
    setSectionActive(section);
  };

  useEffect(() => {
    const observerHome = new IntersectionObserver(
      (entries) => handleObserver('home', entries[0].intersectionRatio),
      options
    );

    const observerServices = new IntersectionObserver(
      (entries) => handleObserver('services', entries[0].intersectionRatio),
      options
    );

    const observerSchedules = new IntersectionObserver(
      (entries) => handleObserver('schedules', entries[0].intersectionRatio),
      options
    );

    const observerBenefits = new IntersectionObserver(
      (entries) => handleObserver('schedules', entries[0].intersectionRatio),
      options
    );

    const observerDepositions = new IntersectionObserver(
      (entries) => handleObserver('schedules', entries[0].intersectionRatio),
      options
    );

    const observerDentists = new IntersectionObserver(
      (entries) => handleObserver('dentists', entries[0].intersectionRatio),
      options
    );

    const observerPatients = new IntersectionObserver(
      (entries) => handleObserver('dentists', entries[0].intersectionRatio),
      options
    );

    const observerFooter = new IntersectionObserver(
      (entries) => handleObserver('footer', entries[0].intersectionRatio),
      options
    );

    observerHome.observe(homeRef?.current as HTMLElement);
    observerServices.observe(clinicServiceRef?.current as HTMLElement);
    observerSchedules.observe(schedulesRef?.current as HTMLElement);
    observerDentists.observe(dentistRef?.current as HTMLElement);
    observerFooter.observe(footerRef?.current as HTMLElement);
    observerPatients.observe(patientsRef?.current as HTMLElement);
    observerBenefits.observe(benefitsRef?.current as HTMLElement);
    observerDepositions.observe(patientsRef.current as HTMLElement);
  }, []);

  return (
    <>
      <Header sectionActive={sectionActive} />
      <Home id='home' innerRef={homeRef} />
      <ClinicServices id='services' innerRef={clinicServiceRef} />
      <YourTimeHasCome id='schedules' innerRef={schedulesRef} />
      <Benefits innerRef={benefitsRef} />
      <Depositions innerRef={depositionsRef} />
      <Professionals id='dentists' innerRef={dentistRef} />
      <PatientSay innerRef={patientsRef} />
      <Footer id='footer' innerRef={footerRef} />
    </>
  );
};

export default LandingPage;
