import { ThemeProvider } from 'styled-components';
import { IDefaultContextProps } from './types';
import theme from '../styles/themes/default';
import { SideBarProvider } from './SideBarProvider';

const Providers = ({ children }: IDefaultContextProps) => {
  return (
    <SideBarProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SideBarProvider>
  );
};

export default Providers;
