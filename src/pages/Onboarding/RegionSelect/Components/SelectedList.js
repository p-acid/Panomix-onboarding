import React from 'react';
import styled, { keyframes } from 'styled-components';

const SelectedList = ({ list, isVisible, setCurrentTag, handleCurrentTag }) => {
  return (
    <TagWrapper className="selectedList" isVisible={isVisible}>
      {list.map((item, idx) => (
        <Tag
          key={idx}
          onClick={() => {
            handleCurrentTag(item);
          }}
        >
          <TagName>{item}</TagName>
          <i className="fas fa-minus" />
        </Tag>
      ))}
      <Tag
        onClick={() => {
          setCurrentTag([]);
        }}
        clear
      >
        Clear
      </Tag>
    </TagWrapper>
  );
};

export default SelectedList;

const Mount = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const TagWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  visibility: ${({ isVisible }) => !isVisible && 'hidden'};
`;

const Tag = styled.li`
  margin: 0.3rem 0.15rem;
  padding: 8px 14px;
  color: ${({ theme }) => theme.pb.midBlue};
  border-radius: 46px;
  outline: ${({ theme, clear }) => !clear && `1px solid ${theme.pb.midBlue}`};
  font-size: 14px;
  text-align: center;
  line-height: 16px;
  cursor: pointer;
  animation: ${Mount} 0.5s;
`;

const TagName = styled.span`
  padding-right: 6px;
`;
