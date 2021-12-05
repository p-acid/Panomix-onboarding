import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './component/Form';
import { TEST_URL } from '../../../config';

const WorkSpace = () => {
  const [workspaceData, setWorkspaceData] = useState({
    create: {
      val: localStorage.getItem('create') || '',
      isCorrect: false,
    },
    existing: { val: '', isCorrect: false },
    typingTimeout: 0,
  });

  const { create, existing, typingTimeout } = workspaceData;

  const handleTimeout = (name, value) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setWorkspaceData(prev => {
      return {
        ...prev,
        typingTimeout:
          value &&
          setTimeout(() => {
            setWorkspaceData(prev => ({
              ...prev,
              [name]: {
                ...workspaceData[name],
                val: value,
                isCorrect: !workspaceData[name].isCorrect,
              },
            }));
          }, 500),
      };
    });
  };

  const handleInput = ({ target }) => {
    const { name, value } = target;

    setWorkspaceData(prev => {
      return {
        ...prev,
        [name]: {
          ...workspaceData[name],
          val: value,
        },
      };
    });

    handleTimeout(name, value);
  };

  const submitData = (data, type) => {
    if (type === 'create') {
      fetch(`${TEST_URL}/workspaces`, {
        method: 'POST',
        body: JSON.stringify({ name: data }),
      });
      localStorage.setItem(type, data);
    } else {
      fetch(`${TEST_URL}/workspaces/${data}`, {
        // workspaces/${workspace name}
        method: 'GET',
      })
        .then(res => res.json())
        .then();
      // link to success page or alert failure
    }
  };

  return (
    <Wrapper>
      <Form
        formInfo={FORM_DATA.create}
        input={create.val}
        handleInput={handleInput}
        submitInput={submitData}
        status={create.isCorrect}
      />
      <Text>Or</Text>
      <Form
        formInfo={FORM_DATA.existing}
        input={existing.val}
        handleInput={handleInput}
        submitInput={submitData}
        status={existing.isCorrect}
      />
    </Wrapper>
  );
};

export default WorkSpace;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  padding: 5rem 0 2rem;
  font-size: 16px;
  line-height: 19px;
`;

const FORM_DATA = {
  create: {
    title: 'Give it a name!',
    type: 'create',
  },
  existing: {
    title: 'Already know your workspace name?',
    type: 'existing',
  },
};
