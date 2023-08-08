import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
