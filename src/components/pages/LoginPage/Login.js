import React, { useState, useContext } from 'react';
import { FormContainer, LoginPageContainer } from "../../shared/Layout";
import { Button, Input1, Input2, Logicon, ErrorMsg } from "../../shared/Comps";
import { AuthContext } from '../../shared/Auth';
import { useAuth }   from '../../../services/auth';
// import {peticionAlServidor} from '../../../services/api';

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { lerror } = useContext(AuthContext);
  const { signIn } = useAuth();

  const login = () => {
    signIn(username,password);
  }

  return (
    <LoginPageContainer>
      <FormContainer>
        <Logicon/>
        <Input2 type="text"
          placeholder={"Insert Username"}
          onChange={({ target }) => setUsername(target.value)} />

        <Input1 type="password"
          placeholder={"Insert Password"}
          onChange={({ target }) => setPassword(target.value)} />

        {lerror ? (<ErrorMsg> Error de autenticación</ErrorMsg>) : (<div></div>)} 

        <Button onClick={login}>Login</Button>
      </FormContainer>
    </LoginPageContainer>
  );
};

export default Login;