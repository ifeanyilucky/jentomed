import { BrowserRouter } from 'react-router-dom';
import Route from './router';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route />
      </div>
    </BrowserRouter>
  );
}

export default App;
