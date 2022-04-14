import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Countries from './views/Countries';
import Details from './views/Details';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="details/:country" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
