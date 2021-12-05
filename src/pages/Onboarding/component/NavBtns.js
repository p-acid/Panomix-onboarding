import React from 'react';
import styled from 'styled-components';
import NavButton from './NavButton';

const NavBtns = ({ list, pageIdx }) => {
  return (
    <Wrapper>
      {list.map((item, idx) => {
        return (
          <NavButton pageIdx={pageIdx} key={idx} item={{ ...item, idx: idx }} />
        );
      })}
    </Wrapper>
  );
};

export default NavBtns;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 80px;
`;
