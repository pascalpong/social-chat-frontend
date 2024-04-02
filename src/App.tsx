import Routes from './routes'
import './App.css';
import ScrollTop from './components/ScrollTop';
import { CssVarsProvider } from '@mui/joy';

function App() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <ScrollTop>
        <Routes />
      </ScrollTop>
    </CssVarsProvider> 
  );
}

export default App;
