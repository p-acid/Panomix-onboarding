import React from 'react';
import styled from 'styled-components';
import Header from './component/Header';
import SubmitBox from './component/SubmitBox';

const SignUp = props => {
  return (
    <Wrapper>
      <Header>
        {{
          title: 'Welocome to Playbook!',
          subtitle:
            'Now you can join us on your effective advertising journey!',
        }}
      </Header>
      <SubmitBox />
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(50%);
`;
