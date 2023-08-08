import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import './style.css';

export default function Login() {
  const [button, setButton] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    setButton(newName.length >= 3);
  };

  const handleClick = async () => {
    setLoading(true);
    createUser({ name })
      .then(() => {
        setName('');
        setLoading(false);
        navigate('/search');
      });
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <input
        type="text"
        data-testid="login-name-input"
        placeholder="Insira seu nome"
        value={ name }
        onChange={ handleNameChange }
      />
      <button
        data-testid="login-submit-button"
        disabled={ !button }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </>
  );
}
