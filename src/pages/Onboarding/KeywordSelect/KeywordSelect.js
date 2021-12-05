import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFetch } from '../../../hooks/useFetch';
import TagList from './component/TagList';
import SearchList from './component/SearchList';
import SelectedList from './component/SelectedList';
import SearchBar from './component/SearchBar';

const KeywordSelect = ({
  isListOn,
  currentTag,
  setCurrentTag,
  contentMargin,
  setContentMargin,
  page,
}) => {
  const [searchInput, setSearchInput] = useState('');
  const [fetchData] = useFetch('/data/KeywordSelect/keywordList.json', []);
  const { data, isLoading, isError } = fetchData;

  const len = currentTag.length;

  const handleCurrentTag = tagName => {
    if (currentTag.includes(tagName)) {
      setCurrentTag(prev => {
        const arr = [...prev];
        arr.splice(prev.indexOf(tagName), 1);
        return arr;
      });
    } else {
      setCurrentTag(prev => [...prev, tagName]);
    }
  };

  const handleSearchInput = ({ target }) => {
    const { value } = target;
    setSearchInput(value);
  };

  useEffect(() => {
    if (currentTag.length > 0) {
      localStorage.setItem(page, [...currentTag].join(','));
    } else {
      localStorage.removeItem(page);
    }
  }, [currentTag, page]);

  useEffect(() => {
    setContentMargin(document.querySelector('.selectedList').clientHeight);
  });

  return (
    <Wrapper>
      <FixedWrapper>
        <SelectedList
          list={currentTag}
          isVisible={len > 0}
          setCurrentTag={setCurrentTag}
          handleCurrentTag={handleCurrentTag}
        />
        <SearchBar
          isListOn={isListOn}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSearchInput={handleSearchInput}
        />
      </FixedWrapper>
      <ContentsWrapper contentMargin={contentMargin}>
        {isListOn && searchInput && (
          <SearchList
            isListOn={isListOn}
            fetchList={data}
            currentTag={currentTag}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            handleCurrentTag={handleCurrentTag}
          />
        )}
        {isError && <div>Something has gone wrong</div>}
        {isLoading ? (
          <div>loading</div>
        ) : (
          <TagList
            list={data}
            currentTag={currentTag}
            handleCurrentTag={handleCurrentTag}
          />
        )}
      </ContentsWrapper>
    </Wrapper>
  );
};

export default KeywordSelect;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;
  max-width: 600px;
`;

const FixedWrapper = styled.div`
  position: fixed;
  width: 600px;
  background-color: white;
  z-index: 5;
`;

const ContentsWrapper = styled.div`
  padding-top: ${({ contentMargin }) => `${7 + (contentMargin - 42) / 16}rem`};
`;
