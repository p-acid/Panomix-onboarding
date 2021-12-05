import React, { useState } from 'react';
import styled from 'styled-components';
import DataCard from './Datacard';
import Facebook from './Components/Facebook';
import GoogleAds from './Components/GoogleAds';
import GoogleAnalytics from './Components/GoogleAnalytics';
import FacebookAdsIcon from './Components/SocialIcons/FacbookAdsIcon';
import GoogleAdsIcon from './Components/SocialIcons/GoogleAdsIcon';
import GoogleAnalyticsIcon from './Components/SocialIcons/GoogleAnalyticsIcon';

const DataIntegration = () => {
  const [isActivate, setIsActivate] = useState({
    facebookAds: localStorage.getItem('facebookAds')
      ? JSON.parse(localStorage.getItem('facebookAds'))
      : true,
    googleAds: localStorage.getItem('googleAds')
      ? JSON.parse(localStorage.getItem('googleAds'))
      : true,
    googleAnalytics: localStorage.getItem('googleAnalytics')
      ? JSON.parse(localStorage.getItem('googleAnalytics'))
      : true,
  });

  const AD_DATA = createAdData(isActivate, setIsActivate);

  return (
    <MainWrapper>
      <CardWrapper>
        <AdBox>
          {AD_DATA.map((item, idx) => (
            <DataCard key={idx} item={item} />
          ))}
        </AdBox>
      </CardWrapper>
    </MainWrapper>
  );
};

export default DataIntegration;

const MainWrapper = styled.main`
  height: 100%;
  margin: 0 5em;
`;

const CardWrapper = styled.div`
  display: flex;
`;

const AdBox = styled.div`
  display: flex;
`;

const createAdData = (state, setState) => {
  const { facebookAds, googleAds, googleAnalytics } = state;

  return [
    {
      id: 0,
      title: 'Facebook Ads',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button: <Facebook func={setState} />,
      img: <FacebookAdsIcon />,
      isActivate: facebookAds,
    },
    {
      id: 1,
      title: 'Google Ads',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button: <GoogleAds func={setState} />,
      img: <GoogleAdsIcon />,
      isActivate: googleAds,
    },
    {
      id: 2,
      title: 'Google Analytics',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button: <GoogleAnalytics func={setState} />,
      img: <GoogleAnalyticsIcon />,
      isActivate: googleAnalytics,
    },
  ];
};
