import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Route from './router';
import logo from './logo.svg';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className='App'>
          <Route />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
