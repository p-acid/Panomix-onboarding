import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { useNavigate } from 'react-router';
import UserPool from '../../../utils/UserPool';
import styled from 'styled-components';

const SubmitBox = props => {
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userInput;

  const handleUserInput = ({ target }) => {
    const { name, value } = target;

    setUserInput(prev => ({ ...prev, [name]: value }));
  };

  const submit = e => {
    e.preventDefault();

    const user = new CognitoUser({ Username: email, Pool: UserPool });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        localStorage.setItem('token', data.accessToken.jwtToken);

        // eslint-disable-next-line no-console
        console.log('Success: ', data.accessToken.jwtToken);

        navigate('/onboarding/workspace');
      },
      onFailure: data => {
        // eslint-disable-next-line no-console
        console.error('Failure: ', data);
      },
      newPasswordRequired: data => {
        // eslint-disable-next-line no-console
        console.log('newPasswordRequired: ', data);
      },
    });
  };

  return (
    <Wrapper onSubmit={submit}>
      <Input
        name="email"
        value={email}
        placeholder="Type your Email"
        onChange={handleUserInput}
      />
      <Input
        type="password"
        name="password"
        value={password}
        placeholder="Type your Password"
        onChange={handleUserInput}
      />
      <Button>Login</Button>
    </Wrapper>
  );
};

export default SubmitBox;

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  width: 400px;
`;

const Input = styled.input`
  padding: 0.75rem 1.25rem;
  width: 100%;
  border: 0.5px solid #f5f5f5;
  box-shadow: 0px 1px 3px rgb(9 16 55 / 40%);
  border-radius: 20px;
  line-height: 16px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 0.8rem 11.25rem;
  font-weight: 500;
  background-color: #f6f6f6;
  color: #666666;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 25%);
  border-radius: 42px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
`;
