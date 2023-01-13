import { useSideBar } from '../../../contexts/SideBarProvider';
import Link from '../../common/Link';
import { navLiksData } from '../../../components-mock.json';

const MainSideBar = () => {
  const { isSideBarOpen, setIsSideBarOpen, sectionActiveSideBar } =
    useSideBar();

  const handleClick = () => setIsSideBarOpen(false);

  const getClass = (id: string): string => {
    let class_name = '';

    if (isSideBarOpen) class_name += 'animation';

    if (id === sectionActiveSideBar) {
      class_name += ' active';
    }

    return class_name;
  };

  return (
    <>
      <nav>
        {navLiksData.map(({ id, name }) => (
          <Link
            key={id}
            variant='navLink'
            href={`#${id}`}
            className={getClass(id)}
            onClick={handleClick}
          >
            {name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default MainSideBar;
