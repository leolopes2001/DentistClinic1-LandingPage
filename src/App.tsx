import SideBar from './components/SideBar';
import Providers from './contexts';
import LandingPage from './pages/LandingPage';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <Providers>
      <GlobalStyle />
      <SideBar variant='main_side_bar' />
      <LandingPage />
    </Providers>
  );
};

export default App;
