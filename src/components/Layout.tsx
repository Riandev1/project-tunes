import { Outlet } from 'react-router-dom';
import Header from './Header';
import './style.css';

function Layout() {
  return (
    <>
      <Outlet />
      <Header />
    </>
  );
}

export default Layout;
