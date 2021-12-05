import React from 'react';
import styled, { keyframes } from 'styled-components';

const DataCard = ({ item }) => {
  const { id, img, title, button, content, isActivate } = item;

  return (
    <Wrapper isActivate={isActivate} key={id}>
      <TitleLogo>{img}</TitleLogo>
      <TitleText>{title}</TitleText>
      <ContentText>{content}</ContentText>
      {isActivate ? (
        button
      ) : (
        <Icon
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M0 16C0 7.16344 7.16344 0 16 0V0C24.8366 0 32 7.16344 32 16V16C32 24.8366 24.8366 32 16 32V32C7.16344 32 0 24.8366 0 16V16Z"
            fill="#3C6DBA"
          />
          <path
            d="M21.9131 11.6181C21.4162 11.1749 20.6708 11.1749 20.1739 11.6181L13.739 18.0549L11.8263 15.6645C11.3294 15.2213 10.584 15.2213 10.0871 15.6645C9.5902 16.1077 9.5902 16.7725 10.0871 17.2158L12.8694 20.3819C13.1178 20.6035 13.3663 20.7143 13.739 20.7143C14.1117 20.7143 14.3601 20.6035 14.6086 20.3819L21.9131 13.1694C22.41 12.7262 22.41 12.0614 21.9131 11.6181Z"
            fill="white"
          />
        </Icon>
      )}
    </Wrapper>
  );
};

export default DataCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 8px 32px 8px;
  width: 180px;
  height: 220px;
  border-radius: 4px;
  border: 0.5px soild #f5f5f5;
  box-shadow: ${({ isActivate }) =>
    isActivate && '0px 1px 3px rgba(9, 16, 55, 0.4)'};
  background-color: ${({ theme, isActivate }) =>
    !isActivate && theme.pb.lightGrey};
  cursor: ${({ isActivate }) => isActivate && 'pointer'};
  transition: 0.35s;

  &:hover {
    transform: ${({ isActivate }) => isActivate && 'translateY(-2px)'};
    box-shadow: ${({ isActivate }) =>
      isActivate && '0px 3px 7px rgba(9, 16, 55, 0.15)'};
    background-color: ${({ theme }) => theme.pb.lightGrey};
  }
`;

const TitleText = styled.p`
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  font-weight: normal;
`;

const ContentText = styled.p`
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #000f1f;
  margin-top: 8px;
  margin-bottom: 24px;
  color: #666666;
`;

const TitleLogo = styled.div`
  width: 64px;
  height: 35.56px;
  margin: 29.33px 42.07px;
`;

const ScaleUp = keyframes`
  from {
    transform: scale(0);
  } to {
    transform: scale(1);
  }
`;

const Icon = styled.svg`
  animation: ${ScaleUp} 0.5s;
`;
