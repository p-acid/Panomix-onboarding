import React from 'react';
import styled from 'styled-components';

const Form = ({ formInfo, input, handleInput, submitInput, status }) => {
  const { title, type } = formInfo;

  const filStatus = type === 'existing' ? !status : status;

  return (
    <Wrapper
      onSubmit={e => {
        e.preventDefault();
        submitInput(input, type);
      }}
    >
      <Text>{title}</Text>
      <Input
        name={type}
        onChange={handleInput}
        value={input}
        placeholder="Workspace Name"
        autoComplete="off"
      />
      {input && (
        <Notice isCorrect={filStatus}>
          {NOTICE[type][filStatus ? 'correct' : 'incorrect']}
        </Notice>
      )}
      <Button isStatusOn={input} disabled={!(Boolean(input) && filStatus)}>
        {type === 'existing' ? 'Request Access' : 'Next'}
      </Button>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Text = styled.p`
  margin-bottom: 0.5rem;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.pb.black};
`;

const Input = styled.input`
  padding: 0.75rem 1.25rem;
  width: 100%;
  border: 0.5px solid #f5f5f5;
  box-shadow: 0px 1px 3px rgba(9, 16, 55, 0.4);
  border-radius: 20px;
  line-height: 16px;
  font-size: 14px;
`;

const Button = styled.button`
  position: absolute;
  transform: ${({ isStatusOn }) =>
    !isStatusOn ? 'translateY(4.75rem)' : 'translateY(6.2rem)'};
  padding: 0.8rem 11.25rem;
  width: 400px;
  font-weight: 500;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.pb.lightGrey : theme.pb.midBlue};
  color: ${({ theme, disabled }) => (disabled ? theme.pb.grey : 'white')};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 42px;
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.pb.darkBlue};
  }
`;

const Notice = styled.p`
  position: absolute;
  transform: translateY(4.5rem);
  margin: 0.5rem 1.25rem;
  font-size: 12px;
  color: ${({ isCorrect, theme }) =>
    isCorrect ? theme.info.green : theme.notice};
`;

const NOTICE = {
  create: {
    correct: 'Workspace name avaliable',
    incorrect: 'Workspace name not avaliable',
  },
  existing: {
    correct: 'Workspace found!',
    incorrect: 'Workspace not found',
  },
};
