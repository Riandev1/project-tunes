import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';

function Header() {
  const [loading, setLogin] = useState(false);
  const [nameUser, setNameUser] = useState('');
  useEffect(() => {
    const getFetch = async () => {
      setLogin(true);
      const name = await getUser();
      setNameUser(name.name);
      setLogin(false);
    };
    getFetch();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (

    <header
      data-testid="header-component"
    >
      <p data-testid="header-user-name">{nameUser}</p>

      <nav>
        <NavLink to="/search" data-testid="link-to-search">
          Pesquisar
        </NavLink>

        <NavLink to="/favorites" data-testid="link-to-favorites">
          Seus Favoritos
        </NavLink>

        <NavLink to="/profile" data-testid="link-to-profile">
          Seu Perfil
        </NavLink>

      </nav>
    </header>
  );
}
export default Header;
