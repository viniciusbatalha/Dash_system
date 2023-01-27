import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auths';

import './signup.css';
import logo from '../../assets/AccessLogo.png';

function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useContext(AuthContext);

  function handleSubmit(e){
    e.preventDefault();
    
    if(nome !== '' && email !== '' && password !== ''){
      signUp(email,password,nome)
    }

  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Sistema Logo" />
        </div>
          
        <form onSubmit={handleSubmit}>
          <h1>Registrar</h1>
          <input type="text" placeholder="Insira seu nome completo..." value={nome} onChange={ (e) => setNome(e.target.value)} required/>
          <input type="text" placeholder="email@email.com" value={email} onChange={ (e) => setEmail(e.target.value)} required/>
          <input type="password" placeholder="******" value={password} onChange={ (e) => setPassword(e.target.value)} required/>
          <button type="submit">Cadastrar</button>
        </form>

        <Link to="/">Já tem uma conta? Entre</Link>
      </div>
    </div>
  );
}

export default SignUp;