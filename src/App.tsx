import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';
import Album from './components/Album';
import Notfound from './components/Notfound';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
        <Route path="/*" element={ <Notfound /> } />
      </Routes>
    </div>
  );
}

export default App;
