import React from 'react';
import styled from 'styled-components';

const Header = ({ children, page }) => {
  const { title, subTitle } = children[page];

  return (
    <HeaderBox>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.div`
  text-align: center;
  background-color: white;
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.pb.darkBlue};
`;

const SubTitle = styled.p`
  margin: 1rem 0 2rem;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: black;
`;
