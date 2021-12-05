import React from 'react';
import styled from 'styled-components';

function ContinentList({ continent, setContinent, slides, setSlides }) {
  return (
    <ContinentBox>
      {CONTINENTS_DATA.map(tab => {
        const { id, name } = tab;
        return (
          <ContinentCard
            key={id}
            id={id}
            active={continent === name}
            onClick={() => setContinent(name)}
          >
            {name}
          </ContinentCard>
        );
      })}
    </ContinentBox>
  );
}
export default ContinentList;

const ContinentBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 40px;
  padding: 12px 58px 14px 57px;
  color: ${({ theme }) => theme.pb.midBlue};
  background-color: inherit;
  border: 0.5px solid
    ${({ theme, isFocused }) =>
      isFocused ? theme.pb.midBlue : theme.pb.lightGrey};
  border-radius: 20px;
  box-shadow: 0px 1px 3px rgba(9, 16, 55, 0.4);
  font-size: 1rem;
  text-align: center;
  line-height: 16px;

  &:hover {
    box-shadow: 0px ${({ isFocused }) => !isFocused && '3px 7px'}
      rgba(9, 16, 55, 0.4);
  }
`;

const ContinentCard = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  color: #3c6dba;
  background-color: white;
  border: none;
  font-size: 14px;
  text-align: center;
  line-height: 12px;
  cursor: pointer;
  ${({ active }) =>
    active ? 'padding-bottom: 22px; border-bottom: 4px solid #3C6DBA;' : ''}
`;

const CONTINENTS_DATA = [
  { id: 1, name: 'America' },
  { id: 2, name: 'Europe' },
  { id: 3, name: 'Asia' },
  { id: 4, name: 'Oceania' },
  { id: 5, name: 'Africa' },
];
