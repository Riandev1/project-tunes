import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';
import Album from './components/Album';
import Notfound from './components/Notfound';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" Component={ Login } />
      <Route Component={ Layout }>
        <Route path="/search" Component={ Search } />
        <Route path="/album/:id" Component={ Album } />
        <Route path="/*" Component={ Notfound } />
      </Route>
    </Routes>
  );
}

export default App;
