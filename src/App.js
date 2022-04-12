import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Cities from './views/Cities';
import Details from './views/Details';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Routes>
        <Route path="/" element={<Cities />} />
        <Route path="details/:city" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
