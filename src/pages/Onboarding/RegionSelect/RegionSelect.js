import React, { useState, useEffect } from 'react';
import TagItem from '../KeywordSelect/component/TagItem';
import SelectedList from '../RegionSelect/Components/SelectedList';
import ContinentList from './Components/ContinentList';
import { useFetch } from '../../../hooks/useFetch';
import styled from 'styled-components';

function RegionSelect({
  currentRegion,
  setCurrentRegion,
  setContentMargin,
  contentMargin,
}) {
  const [fetchData] = useFetch('/data/RegionSelect/RegionData.json');
  const { isLoading, isError, data } = fetchData;

  const [continent, setContinent] = useState('America');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const tab = data.filter(tab => tab.name === continent)[0];
    const country = tab && tab.countries;
    setCountries(country);
  }, [continent, fetchData]);

  const handleCurrentTag = tagName => {
    if (currentRegion.includes(tagName)) {
      setCurrentRegion(prev => {
        const arr = [...prev];
        arr.splice(prev.indexOf(tagName), 1);
        return arr;
      });
    } else {
      setCurrentRegion(prev => [...prev, tagName]);
    }
  };

  const len = currentRegion?.length;

  useEffect(() => {
    localStorage.setItem('location', currentRegion?.join(','));

    if (len < 1) {
      localStorage.removeItem('location');
    }
  }, [currentRegion, len]);

  useEffect(() => {
    setContentMargin(document.querySelector('.selectedList').clientHeight);
  });

  return (
    <Wrapper>
      <FixedWrapper>
        <SelectedList
          list={currentRegion}
          isVisible={len > 0}
          setCurrentTag={setCurrentRegion}
          handleCurrentTag={handleCurrentTag}
        />
        <br />
        <ContinentWrapper>
          <ContinentList continent={continent} setContinent={setContinent} />
        </ContinentWrapper>
      </FixedWrapper>
      <ContentsWrapper contentMargin={contentMargin}>
        {isError && <div>Something went wrong</div>}
        {isLoading ? (
          <div>loading</div>
        ) : (
          // <TagBox>
          //   <Tag isSelected={isSelectedAll} onClick={() => handleSelectedAll()}>
          //     <TagName>All locations</TagName>
          //     <i className={`fas fa-${isSelectedAll ? "check" : "plus"}`} />
          //   </Tag>
          <CountryWrapper>
            {countries &&
              countries.map(item => (
                <TagItem
                  key={item.code}
                  item={{ id: item.code, tagName: item.name }}
                  currentTag={currentRegion}
                  handleCurrentTag={handleCurrentTag}
                />
              ))}
          </CountryWrapper>
          /* </TagBox> */
        )}
      </ContentsWrapper>
    </Wrapper>
  );
}
export default RegionSelect;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

const FixedWrapper = styled.div`
  position: fixed;
  width: 600px;
  background-color: white;
  z-index: 5;
`;

const ContinentWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 350px;
  &:hover {
    transform: ${({ isFocused }) => !isFocused && 'translateY(-1px)'};
    transition: 0.25s;
  }
`;

const ContentsWrapper = styled.div`
  padding-top: ${({ contentMargin }) => `${7 + (contentMargin - 42) / 16}rem`};
`;

const CountryWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

// const TagBox = styled.section`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   /* width: 100%; */
// `;

// const Tag = styled.span`
//   margin: 0.3rem 0.15rem;
//   padding: 8px 14px;
//   box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
//   border-radius: 46px;
//   font-size: 14px;
//   line-height: 16px;
//   text-align: center;
//   color: ${({ isSelected, theme }) => (isSelected ? "white" : theme.pb.grey)};
//   background-color: ${({ theme, isSelected }) =>
//     isSelected ? theme.pb.midBlue : theme.pb.lightGrey};
//   cursor: pointer;
//   transition: 1s;
//   width: 50%; //all location btn
//   min-width: 250px;
//   i {
//     font-size: ${({ isSelected }) => isSelected && "10px"};
//   }
// `;

// const TagName = styled.span`
//   margin-right: 0.5rem;
// `;
