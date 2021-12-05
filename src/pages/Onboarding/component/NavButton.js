import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavButton = ({ item, pageIdx }) => {
  const { name, path, idx } = item;

  return (
    <Link to={`/onboarding/${path}`} key={idx}>
      <Wrapper>
        <Circle isActivate={pageIdx < idx}>{idx + 1}</Circle>
        <Button>{name}</Button>
      </Wrapper>
    </Link>
  );
};

export default NavButton;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Circle = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: ${({ theme, isActivate }) => (isActivate ? theme.pb.grey : 'white')};
  background-color: ${({ theme, isActivate }) =>
    isActivate ? theme.pb.lightGrey : theme.pb.midBlue};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: 0.5s;
`;

const Button = styled.p`
  position: absolute;
  margin-top: 2.5rem;
  padding: 7px 0;
  width: 100px;
  border-radius: 9px;
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.pb.midBlue};
`;
