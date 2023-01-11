import { useLayoutEffect, useState } from 'react';

const useWindowSize = (): number[] => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useLayoutEffect(() => {
    const getUpdatedSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', getUpdatedSize);
    getUpdatedSize();

    return () => window.removeEventListener('resize', getUpdatedSize);
  }, []);

  return size;
};

export default useWindowSize;
