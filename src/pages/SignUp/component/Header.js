import React from 'react';
import styled from 'styled-components';

const Header = ({ children }) => {
  const { title, subtitle } = children;

  return (
    <HeaderBox>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.header`
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.03em;
  color: #194384;
`;

const Subtitle = styled.p`
  margin-top: 1rem;
  margin-bottom: 5rem;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: black;
`;
