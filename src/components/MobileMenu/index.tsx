import { useCallback } from 'react';
import { useSideBar } from '../../contexts/SideBarProvider';
import { MobileMenuStyled } from './stlye';

const MobileMenu = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useSideBar();

  const handleMenuClick = useCallback(() => {
    console.log("clicou ");
    
    setIsSideBarOpen((prev) => !prev);
  }, []);

  return (
    <MobileMenuStyled
      isSideBarOpen={isSideBarOpen}
      onClick={handleMenuClick}
      className='mobile-menu'
    >
      <div className='line1 line-menu' />
      <div className='line2 line-menu' />
      <div className='line3 line-menu' />
    </MobileMenuStyled>
  );
};

export default MobileMenu;
