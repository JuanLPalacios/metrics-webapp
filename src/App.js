import { Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './views/Countries';
import Details from './views/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="details/:country" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
