import React from 'react';
import styled from 'styled-components';

const SearchList = ({
  isListOn,
  fetchList,
  currentTag,
  searchInput,
  setSearchInput,
  handleCurrentTag,
}) => {
  const isFocused = isListOn || searchInput;

  const addKeyword = () => {
    fetchList.unshift({ id: fetchList.length + 1, tagName: searchInput });

    handleCurrentTag(searchInput);

    setSearchInput('');
  };

  const filSearchInput = searchInput.toUpperCase();

  const filtered = fetchList
    .filter(({ tagName }) => tagName.toUpperCase().includes(filSearchInput))
    .sort(
      (a, b) =>
        a.tagName.toUpperCase().indexOf(filSearchInput) -
        b.tagName.toUpperCase().indexOf(filSearchInput)
    );

  const regex = new RegExp(searchInput, 'gim');

  return (
    <Box>
      <Wrapper id="SearchList" isFocused={isFocused}>
        {filtered.length > 0 ? (
          filtered.slice(0, 14).map(item => {
            const { id, tagName } = item;
            const isSelected = currentTag.includes(tagName);
            const filteredName = tagName
              .replace(regex, str => {
                return `**${str}**`;
              })
              .split('**')
              .map(item => {
                return searchInput.toUpperCase() === item.toUpperCase() ? (
                  <strong>{item}</strong>
                ) : (
                  item
                );
              });
            return (
              <Item
                key={id}
                isSelected={isSelected}
                onClick={() => {
                  handleCurrentTag(tagName);
                  setSearchInput('');
                }}
              >
                <span>{filteredName}</span>
              </Item>
            );
          })
        ) : (
          <None id="None">
            No Results for <span>"{searchInput}"</span>
          </None>
        )}
        {!filtered.find(
          item => item.tagName.toUpperCase() === searchInput.toUpperCase()
        ) && (
          <Item
            onClick={() => {
              addKeyword();
            }}
            keyword
          >
            <Icon
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 0.999999 4.13401 0.999999 8C0.999999 11.866 4.13401 15 8 15ZM10.7936 7.36506C11.1746 7.36506 11.4286 7.61903 11.4286 7.99998C11.4286 8.38094 11.1111 8.6349 10.7936 8.6349L8.6349 8.6349L8.6349 10.7936C8.6349 11.1746 8.38093 11.4286 7.99998 11.4286C7.61903 11.4286 7.36506 11.1746 7.36506 10.7936L7.36506 8.6349L5.20633 8.6349C4.82538 8.6349 4.57141 8.38094 4.57141 7.99998C4.57141 7.61903 4.82538 7.36506 5.20633 7.36506L7.36506 7.36506L7.36506 5.20633C7.36506 4.82538 7.61903 4.57141 7.99998 4.57141C8.38093 4.57141 8.6349 4.82538 8.6349 5.20633L8.6349 7.36506L10.7936 7.36506Z"
                fill="#3C6DBA"
              />
            </Icon>
            Add <Keyword>"{searchInput}"</Keyword>
          </Item>
        )}
      </Wrapper>
    </Box>
  );
};

export default SearchList;

const Box = styled.div`
  border-top: none;
`;

const Wrapper = styled.ul`
  position: absolute;
  width: 600px;
  border: 0.5px solid #f5f5f5;
  border-radius: 20px;
  list-style: none;
  text-align: left;
  font-size: 14px;
  background-color: white;
  box-shadow: 0px 1px 3px rgba(9, 16, 55, 0.4);
  z-index: 3;
`;

const Item = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.pb.darkBlue : theme.pb.grey};
  color: ${({ keyword, theme }) => keyword && theme.pb.darkBlue};
  background-color: ${({ isSelected, theme }) =>
    isSelected && theme.pb.lightBlue};
  background-size: 12px;

  strong {
    font-weight: 500;
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.pb.darkBlue : theme.pb.midBlue};
  }

  &:hover *,
  &:hover {
    color: ${({ theme }) => theme.pb.darkBlue};
    background-color: ${({ theme }) => theme.pb.lightBlue};
    fill: ${({ theme }) => theme.pb.darkBlue};
  }

  &:first-child {
    padding-top: 0.75rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &:last-child {
    padding-bottom: 0.75rem;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const Icon = styled.svg`
  margin-right: 5px;
  transform: translateY(2px);
`;

const Keyword = styled.strong`
  font-weight: bold;
`;

const None = styled.div`
  margin: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.pb.grey};
`;
