import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ScrollButton from './ScrollButton';
import TagItem from './TagItem';

const TagList = ({ list, currentTag, handleCurrentTag }) => {
  const [limit, setLimit] = useState(15);

  return (
    <Wrapper>
      <SubWrapper>
        <TagBox>
          {list.slice(0, limit).map(item => (
            <TagItem
              key={item.id}
              item={item}
              currentTag={currentTag}
              handleCurrentTag={handleCurrentTag}
            />
          ))}
        </TagBox>
        {limit >= 15 && <Gradient />}
      </SubWrapper>
      {limit <= 15 ? (
        <LoadMore onClick={() => setLimit()}>
          Load More
          <Icon
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M9.57157 5C9.57157 4.49206 9.23294 4.15344 8.72501 4.15344H5.8467V1.27513C5.8467 0.767194 5.50808 0.42857 5.00014 0.42857C4.4922 0.42857 4.15358 0.767194 4.15358 1.27513V4.15344H1.27527C0.767335 4.15344 0.428711 4.49206 0.428711 5C0.428711 5.50793 0.767335 5.84656 1.27527 5.84656H4.15358V8.72487C4.15358 9.2328 4.4922 9.57143 5.00014 9.57143C5.50808 9.57143 5.8467 9.2328 5.8467 8.72487V5.84656H8.72501C9.14829 5.84656 9.57157 5.50793 9.57157 5Z"
              fill="#666666"
            />
          </Icon>
        </LoadMore>
      ) : (
        <ScrollButton />
      )}
    </Wrapper>
  );
};

export default TagList;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SubWrapper = styled.div`
  position: relative;
`;

const TagBox = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const Gradient = styled.div`
  position: absolute;
  bottom: 0.1rem;
  width: 100%;
  height: 60px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 85.42%
  );
`;

const LoadMore = styled.span`
  display: inline-block;
  padding: 8px 14px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 46px;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: white;
  background-color: ${({ theme }) => theme.pb.midBlue};
  cursor: pointer;
  transition: 1s;
`;

const Icon = styled.svg`
  margin-left: 0.5rem;

  path {
    fill: white;
  }
`;
