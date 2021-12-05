import React from 'react';
import styled from 'styled-components';
import Header from '../SignUp/component/Header';
import SubmitBox from './component/SubmitBox';

const SignIn = props => {
  return (
    <Wrapper>
      <Header>
        {{
          title: 'Sign in',
          subtitle: 'Please Type your Email and Password!',
        }}
      </Header>
      <SubmitBox />
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 15rem;
`;
