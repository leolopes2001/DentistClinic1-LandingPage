import { useSideBar } from '../../../contexts/SideBarProvider';
import Link from '../../common/Link';

const MainSideBar = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useSideBar();

  const handleClick = () => setIsSideBarOpen(false);

  return (
    <>
      <nav>
        <Link
          variant='navLink'
          href='#home'
          className={isSideBarOpen ? 'animation' : ''}
          onClick={handleClick}
        >
          Home
        </Link>
        <Link
          variant='navLink'
          href='#services'
          className={isSideBarOpen ? 'animation' : ''}
          onClick={handleClick}
        >
          Tratamentos
        </Link>
        <Link
          variant='navLink'
          href='#dentists'
          className={isSideBarOpen ? 'animation' : ''}
          onClick={handleClick}
        >
          Dentista
        </Link>
        <Link
          variant='navLink'
          href='#schedules'
          className={isSideBarOpen ? 'animation' : ''}
          onClick={handleClick}
        >
          Agendamentos
        </Link>
        <Link
          variant='navLink'
          href='#footer'
          className={isSideBarOpen ? 'animation' : ''}
          onClick={handleClick}
        >
          Como chegar
        </Link>
      </nav>
    </>
  );
};

export default MainSideBar;
