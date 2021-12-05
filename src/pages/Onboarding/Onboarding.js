import React, { useState } from 'react';
import { Routes, Route, useParams } from 'react-router';
import styled from 'styled-components';
import KeywordSelect from './KeywordSelect/KeywordSelect';
import RegionSelect from './RegionSelect/RegionSelect';
import DataIntegration from './DataIntegration/DataIntegration';
import Nav from './component/Nav';
import Header from './component/Header';
import Buttons from './component/Buttons';
import WorkSpace from './WorkSpace/WorkSpace';

const Onboarding = props => {
  const params = useParams();
  const page = params['*'];

  const [contentMargin, setContentMargin] = useState();
  const [currentTag, setCurrentTag] = useState(
    localStorage.getItem('keyword')?.split(',') || []
  );
  const [currentRegion, setCurrentRegion] = useState(
    localStorage.getItem(page)?.split(',') || []
  );
  const [isListOn, setIsListOn] = useState('');

  return (
    <Wrapper onClick={e => setIsListOn(e.target.id)}>
      <FixedWrapper>
        <Nav page={page} />
        <Header page={page}>{HEADER_TEXT}</Header>
      </FixedWrapper>
      <ContentsWrapper page={page} contentMargin={contentMargin}>
        <Routes>
          <Route path="workspace" element={<WorkSpace />} />
          <Route
            path="keyword"
            element={
              <KeywordSelect
                isListOn={isListOn}
                currentTag={currentTag}
                setCurrentTag={setCurrentTag}
                contentMargin={contentMargin}
                setContentMargin={setContentMargin}
                page={page}
              />
            }
          />
          <Route
            path="location"
            element={
              <RegionSelect
                currentRegion={currentRegion}
                setCurrentRegion={setCurrentRegion}
                contentMargin={contentMargin}
                setContentMargin={setContentMargin}
              />
            }
          />
          <Route path="integration" element={<DataIntegration />} />
        </Routes>
        <Buttons
          page={page}
          currentTag={currentTag}
          currentRegion={currentRegion}
        />
      </ContentsWrapper>
    </Wrapper>
  );
};

export default Onboarding;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FixedWrapper = styled.div`
  position: fixed;
  z-index: 5;
  background-color: white;
`;

const ContentsWrapper = styled.div`
  padding-top: ${({ page }) => (page !== 'workspace' ? '17.5625rem' : '24rem')};
`;

const HEADER_TEXT = {
  workspace: {
    title: (
      <>
        Welcome to Playbook!
        <br />
        Now, let's get to work.
      </>
    ),
    subTitle: (
      <>
        Please create your workspace
        <br />
        Don't worry, you can always create another one
        <br />
        or update settings later.
      </>
    ),
  },
  keyword: {
    title: <>Please select your business keyword</>,
    subTitle: (
      <>
        Please select keywords that describes your business the best.
        <br />
        Don't worry, you can always update.
      </>
    ),
  },
  location: {
    title: <>Please select main target region</>,
    subTitle: (
      <>
        Don't worry, you can always update.
        <br />
        Please set location targeting to promote your business
      </>
    ),
  },
  integration: {
    title: <>Please select data source to integrate</>,
    subTitle: (
      <>
        Please select that you want to get campaign data from.
        <br />
        Don't worry, you can always update.
      </>
    ),
  },
};
