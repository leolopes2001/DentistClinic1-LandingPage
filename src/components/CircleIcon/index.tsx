import { CircleIconType, IGetProps, SizeType } from './CircleIcon';
import { Wrapper } from './style';
// Desktop Imgs-------------------
import { ReactComponent as ToothCareDesktop } from '../../assets/svg/desktop/toothCare.svg';
import { ReactComponent as BagDesktop } from '../../assets/svg/desktop/bag.svg';
import { ReactComponent as ClockDesktop } from '../../assets/svg/desktop/clock.svg';
import { ReactComponent as FolksDesktop } from '../../assets/svg/desktop/folks.svg';
import { ReactComponent as InternetDesktop } from '../../assets/svg/desktop/internet.svg';
import { ReactComponent as ToothbrushDesktop } from '../../assets/svg/desktop/toothbrush.svg';
import { ReactComponent as DentistBedDesktop } from '../../assets/svg/desktop/dentistBed.svg';
import { ReactComponent as ToothCareRemovedDesktop } from '../../assets/svg/desktop/toothCareRemoved.svg';
import { ReactComponent as RandomLogoDesktop } from '../../assets/svg/desktop/randomLogo.svg';
import { ReactComponent as ToothTwoDesktop } from '../../assets/svg/desktop/toothTwo.svg';
import { ReactComponent as ToothSpatulaDesktop } from '../../assets/svg/desktop/toothSpatula.svg';
import { ReactComponent as AddPersonDesktop } from '../../assets/svg/desktop/addPerson.svg';
import { ReactComponent as BrushingDesktop } from '../../assets/svg/desktop/brushing.svg';
import { ReactComponent as MouthDesktop } from '../../assets/svg/desktop/mouth.svg';
import { ReactComponent as VerifyDesktop } from '../../assets/svg/desktop/verify.svg';

// ----------------
// Mobile Imgs-------------------

import { ReactComponent as ToothCareMobile } from '../../assets/svg/mobile/toothCare.svg';
import { ReactComponent as BagMobile } from '../../assets/svg/mobile/bag.svg';
import { ReactComponent as ClockMobile } from '../../assets/svg/mobile/clock.svg';
import { ReactComponent as FolksMobile } from '../../assets/svg/mobile/folks.svg';
import { ReactComponent as InternetMobile } from '../../assets/svg/mobile/internet.svg';
import { ReactComponent as ToothbrushMobile } from '../../assets/svg/mobile/toothbrush.svg';
import { ReactComponent as DentistBedMobile } from '../../assets/svg/mobile/dentistBed.svg';
import { ReactComponent as ToothCareRemovedMobile } from '../../assets/svg/mobile/toothCareRemoved.svg';
import { ReactComponent as RandomLogoMobile } from '../../assets/svg/mobile/randomLogo.svg';
import { ReactComponent as ToothTwoMobile } from '../../assets/svg/mobile/toothTwo.svg';
import { ReactComponent as Tooth } from '../../assets/svg/mobile/tooth.svg';
import { ReactComponent as ToothSpatulaMobile } from '../../assets/svg/mobile/toothSpatula.svg';
import { ReactComponent as AddPersonMobile } from '../../assets/svg/mobile/addPerson.svg';
import { ReactComponent as BrushingMobile } from '../../assets/svg/mobile/brushing.svg';
import { ReactComponent as MouthMobile } from '../../assets/svg/mobile/mouth.svg';
import { ReactComponent as VerifyMobile } from '../../assets/svg/mobile/verify.svg';

// Home Desktop--------------------------
import { ReactComponent as ToothSpatulaHomeDesktop } from '../../assets/svg/home_desktop/toothSpatula.svg';
import { ReactComponent as ToothCareHomeDesktop } from '../../assets/svg/home_desktop/toothCare.svg';
import { ReactComponent as RandomLogoHomeDesktop } from '../../assets/svg/home_desktop/randomLogo.svg';
import { ReactComponent as AddPersonHomeDesktop } from '../../assets/svg/home_desktop/addPerson.svg';
import { ReactComponent as MouthHomeDesktop } from '../../assets/svg/home_desktop/mouth.svg';
import { ReactComponent as BrushingHomeDesktop } from '../../assets/svg/home_desktop/brushing.svg';

interface ICircleIconProps {
  icon: CircleIconType;
  size: SizeType;
  animation?: boolean;
  className?: string;
}

const CircleIconVariantDesktop = {
  toothCare: <ToothCareDesktop />,
  bag: <BagDesktop />,
  clock: <ClockDesktop />,
  folks: <FolksDesktop />,
  internet: <InternetDesktop />,
  toothbrush: <ToothbrushDesktop />,
  toothCareRemoved: <ToothCareRemovedDesktop />,
  dentistBed: <DentistBedDesktop />,
  randomLogo: <RandomLogoDesktop />,
  toothTwo: <ToothTwoDesktop />,
  tooth: <></>,
  toothSpatula: <ToothSpatulaDesktop />,
  addPerson: <AddPersonDesktop />,
  brushing: <BrushingDesktop />,
  mouth: <MouthDesktop />,
  verify: <VerifyDesktop />,
};

const CircleIconVariantMobile = {
  toothCare: <ToothCareMobile />,
  bag: <BagMobile />,
  clock: <ClockMobile />,
  folks: <FolksMobile />,
  internet: <InternetMobile />,
  toothbrush: <ToothbrushMobile />,
  toothCareRemoved: <ToothCareRemovedMobile />,
  dentistBed: <DentistBedMobile />,
  randomLogo: <RandomLogoMobile />,
  toothTwo: <ToothTwoMobile />,
  tooth: <Tooth />,
  toothSpatula: <ToothSpatulaMobile />,
  addPerson: <AddPersonMobile />,
  brushing: <BrushingMobile />,
  mouth: <MouthMobile />,
  verify: <VerifyMobile />,
};

const CircleIconVariantHomeDesktop = {
  randomLogo: <RandomLogoHomeDesktop />,
  toothCare: <ToothCareHomeDesktop />,
  toothSpatula: <ToothSpatulaHomeDesktop />,
  bag: <BagDesktop />,
  clock: <></>,
  folks: <></>,
  internet: <></>,
  toothbrush: <></>,
  toothCareRemoved: <></>,
  dentistBed: <></>,
  toothTwo: <></>,
  tooth: <></>,
  addPerson: <AddPersonHomeDesktop />,
  brushing: <BrushingHomeDesktop/>,
  mouth: <MouthHomeDesktop/>,
  verify: <></>,
};

const CircleIcon = ({
  icon,
  size,
  animation = true,
  ...rest
}: ICircleIconProps) => {
  const getProps = (): IGetProps => {
    const props = { size, ...rest } as IGetProps;

    if (animation) {
      props['data-aos'] = 'fade-up';
    }

    return props;
  };

  const getSvgIcon = (): JSX.Element => {
    switch (size) {
      case 'desktop':
        return CircleIconVariantDesktop[icon];
      case 'mobile':
        return CircleIconVariantMobile[icon];
      case 'home_desktop':
        return CircleIconVariantHomeDesktop[icon];
    }
  };

  return <Wrapper {...getProps()}>{getSvgIcon()}</Wrapper>;
};
export default CircleIcon;
