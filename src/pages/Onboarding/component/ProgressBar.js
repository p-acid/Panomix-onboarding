import React from 'react';
import styled from 'styled-components';

const ProgressBar = ({ currentPage }) => {
  return (
    <BarWrapper>
      <Bar percent={PERCENT[currentPage] * 100} />
    </BarWrapper>
  );
};

export default ProgressBar;

const BarWrapper = styled.div`
  margin: 0 auto;
  margin-top: -18px;
  width: 90%;
  height: 1px;
  background-color: #eeeeee;
`;

const Bar = styled.div`
  width: ${({ percent }) => `${percent}%`};
  height: 1px;
  background-color: ${({ theme }) => theme.pb.midBlue};
  transition: 0.5s;
`;

const PERCENT = [1 / 6, 1 / 2, 5 / 6, 1];
