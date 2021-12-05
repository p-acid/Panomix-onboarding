import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Buttons = ({ currentTag, currentRegion, page }) => {
  const navigate = useNavigate();

  const index = PAGE.indexOf(page);

  const goSkip = () => {
    navigate(index === 3 ? '/dash-board' : `/onboarding/${PAGE[index + 1]}`);
  };

  const submitData = () => {
    fetch('http://192.168.0.8:8000/workspaces/wordsgroup', {
      method: 'POST',
      body: JSON.stringify({
        keywords: currentTag,
      }),
    });
    fetch('http://192.168.0.8:8000/workspaces/wordsgroup', {
      method: 'POST',
      body: JSON.stringify(),
    });
  };

  return (
    <BtnsWrapper>
      {page !== 'integration' && page !== 'workspace' && (
        <Button
          disabled={
            page === 'keyword'
              ? currentTag.length === 0
              : currentRegion.length === 0
          }
          onClick={goSkip}
        >
          Next
        </Button>
      )}
      {page === 'integration' && <Button onClick={submitData}>Submit</Button>}
      {page !== 'workspace' && <TextBtn onClick={goSkip}>{'Skip >'}</TextBtn>}
    </BtnsWrapper>
  );
};

export default Buttons;

const BtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 7rem;
`;

const Button = styled.p`
  padding: 0.8rem 11.25rem;
  font-weight: 500;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.pb.lightGrey : theme.pb.midBlue};
  color: ${({ theme, disabled }) => (disabled ? theme.pb.grey : 'white')};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 42px;
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  transition: 0.5s;

  &:hover {
    transform: ${({ disabled }) => !disabled && 'translateY(-2px)'};
    box-shadow: ${({ disabled }) =>
      !disabled && '0px 3px 7px rgba(9, 16, 55, 0.25)'};
  }

  &:active {
    transition: 0s;
    ${({ disabled, theme }) => {
      return (
        !disabled &&
        `transform: translateY(0px); background-color: ${theme.pb.darkBlue};`
      );
    }}
  }
`;

const TextBtn = styled.div`
  padding-top: 1rem;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.pb.midBlue};
  cursor: pointer;
  user-select: none;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.pb.midBlue};
  }
`;

const PAGE = ['workspace', 'keyword', 'location', 'integration'];
