import { useSideBar } from '../../../contexts/SideBarProvider';
import Link from '../../common/Link';

const MainSideBar = () => {
  const { isSideBarOpen } = useSideBar();

  return (
    <>
      <nav>
        <Link
          variant='navLink'
          href=''
          className={isSideBarOpen ? 'animation' : ''}
        >
          Home
        </Link>
        <Link
          variant='navLink'
          href=''
          className={isSideBarOpen ? 'animation' : ''}
        >
          Tratamentos
        </Link>
        <Link
          variant='navLink'
          href=''
          className={isSideBarOpen ? 'animation' : ''}
        >
          Dentista
        </Link>
        <Link
          variant='navLink'
          href=''
          className={isSideBarOpen ? 'animation' : ''}
        >
          Agendamentos
        </Link>
        <Link
          variant='navLink'
          href=''
          className={isSideBarOpen ? 'animation' : ''}
        >
          Como chegar
        </Link>
      </nav>
    </>
  );
};

export default MainSideBar;
