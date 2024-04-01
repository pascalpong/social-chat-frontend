
import Routes from './routes';
import ThemeCustomization from './themes';
import ScrollTop from './components/ScrollTop';
import { BrowserRouter as RouterProvider } from 'react-router-dom';

function App() {
  return (
    <RouterProvider>
      <ThemeCustomization>
        <ScrollTop>
          <Routes />
        </ScrollTop>
      </ThemeCustomization>
    </RouterProvider>
  );
}

export default App;
