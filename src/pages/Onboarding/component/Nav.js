import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBtns from './NavBtns';
import ProgressBar from './ProgressBar';

const Nav = ({ page }) => {
  const [currentPage, setCurrentPage] = useState('workspace');

  const idx = NAV_LIST.findIndex(({ path }) => page === path);

  useEffect(() => {
    setCurrentPage(idx);
  }, [idx]);

  return (
    <NavWrapper>
      <NavBtns pageIdx={idx} list={NAV_LIST} />
      <ProgressBar currentPage={currentPage} />
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  position: relative;
  margin: 3rem auto 4.7rem;
  width: 24rem;
`;

const NAV_LIST = [
  {
    name: 'Workspace',
    path: 'workspace',
  },
  {
    name: 'Keyword',
    path: 'keyword',
  },
  {
    name: 'Location',
    path: 'location',
  },
  {
    name: 'Data Integration',
    path: 'integration',
  },
];
