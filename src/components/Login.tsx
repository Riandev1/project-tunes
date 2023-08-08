import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';

function Login() {
  const [loginText, setLoginText] = useState('');
  const [submitBtn, setSubmitBtn] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLoginText(event.target.value);
    if (event.target.value.length >= 3) {
      setSubmitBtn(false);
    }
  }

  async function createUsrLoadingScreen() {
    await createUser({ name: loginText });
    navigate('/search');
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    await createUsrLoadingScreen();
  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="login">
        <input
          id="login"
          type="text"
          data-testid="login-name-input"
          onChange={ handleChange }
        />
      </label>
      <button
        type="submit"
        data-testid="login-submit-button"
        disabled={ submitBtn }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
