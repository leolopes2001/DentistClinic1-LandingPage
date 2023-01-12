import { useCallback, useEffect, useRef } from 'react';
import { useSideBar } from '../../contexts/SideBarProvider';
import useWindowSize from '../../hooks/useWindowSize';
import MainSideBar from './MainSideBar';
import { Overlay, SideBarStyled } from './style';

interface ISideBarProps {
  variant: 'main_side_bar';
}

interface ISideBarVariant {
  main_side_bar: JSX.Element;
}

const sideBarVariant: ISideBarVariant = {
  main_side_bar: <MainSideBar />,
};

const SideBar = ({ variant }: ISideBarProps) => {
  const sideBarRef = useRef<HTMLElement | null>(null);
  const [width] = useWindowSize();
  const { isSideBarOpen, setIsSideBarOpen } = useSideBar();

  const handleClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains('mobile-menu')) return;
    if (target.classList.contains('line-menu')) return;

    if (!sideBarRef.current?.contains(target)) {
      setIsSideBarOpen(false);
    }
  }, []);

  const clearDocument = useCallback(() => {
    document.body.classList.remove('hide-scroll');
    document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    if (isSideBarOpen) {
      document.body.classList.add('hide-scroll');
      document.addEventListener('mousedown', handleClick);
      return;
    }

    clearDocument();

    return () => clearDocument();
  }, [isSideBarOpen]);

  if (width > 1200) return null;

  return (
    <>
      <SideBarStyled
        variant={variant}
        ref={sideBarRef}
        isSideBarOpen={isSideBarOpen}
      >
        {sideBarVariant[variant]}
      </SideBarStyled>
      <Overlay isSideBarOpen={isSideBarOpen} />
    </>
  );
};
export default SideBar;
