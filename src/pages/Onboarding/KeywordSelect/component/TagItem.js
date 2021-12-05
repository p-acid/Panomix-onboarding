import React from 'react';
import styled from 'styled-components';

const TagItem = ({ item, currentTag, handleCurrentTag }) => {
  const { id, tagName } = item;
  const isSelected = currentTag.includes(tagName);

  const iconSize = !isSelected ? '10' : '16';

  return (
    <Tag
      key={id}
      isSelected={isSelected}
      onClick={() => handleCurrentTag(tagName)}
    >
      <TagName>{tagName}</TagName>
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox={`0 0 ${iconSize} ${iconSize}`}
        fill="none"
      >
        {isSelected ? (
          <path
            d="M12.3005 4.81317C11.9391 4.49082 11.3971 4.49082 11.0357 4.81317L6.35571 9.49448L4.96464 7.75598C4.60326 7.43363 4.06118 7.43363 3.6998 7.75598C3.33841 8.07832 3.33841 8.56184 3.6998 8.88419L5.72329 11.1868C5.90398 11.348 6.08467 11.4286 6.35571 11.4286C6.62675 11.4286 6.80744 11.348 6.98813 11.1868L12.3005 5.94138C12.6619 5.61904 12.6619 5.13552 12.3005 4.81317Z"
            fill="white"
          />
        ) : (
          <path
            d="M9.57157 5C9.57157 4.49206 9.23294 4.15344 8.72501 4.15344H5.8467V1.27513C5.8467 0.767194 5.50808 0.42857 5.00014 0.42857C4.4922 0.42857 4.15358 0.767194 4.15358 1.27513V4.15344H1.27527C0.767335 4.15344 0.428711 4.49206 0.428711 5C0.428711 5.50793 0.767335 5.84656 1.27527 5.84656H4.15358V8.72487C4.15358 9.2328 4.4922 9.57143 5.00014 9.57143C5.50808 9.57143 5.8467 9.2328 5.8467 8.72487V5.84656H8.72501C9.14829 5.84656 9.57157 5.50793 9.57157 5Z"
            fill="#666666"
          />
        )}
      </Icon>
    </Tag>
  );
};

export default TagItem;

const Tag = styled.span`
  display: flex;
  align-items: center;
  margin: 0.3rem 0.15rem;
  padding: 8px 14px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 46px;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${({ isSelected, theme }) => (isSelected ? 'white' : theme.pb.grey)};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.pb.midBlue : theme.pb.lightGrey};
  cursor: pointer;
  transition: 1s;

  &:hover {
    color: ${({ theme, isSelected }) => !isSelected && theme.pb.midBlue};
    outline: ${({ theme, isSelected }) =>
      !isSelected && `1px solid ${theme.pb.midBlue}`};

    svg {
      path {
        fill: ${({ theme, isSelected }) => !isSelected && theme.pb.midBlue};
      }
    }
  }
`;

const TagName = styled.span`
  margin-right: 0.5rem;
`;

const Icon = styled.svg``;
