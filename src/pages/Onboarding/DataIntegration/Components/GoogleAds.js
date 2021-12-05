/* global gapi */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GoogleAds = ({ func }) => {
  const [userInfo, setUserInfo] = useState({});
  // const fetchUserInfo = () => {
  //   fetch('http://192.168.0.8:8000/auth', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       name: userInfo.name,
  //       email: userInfo.email,
  //       access_token: userInfo.access_token,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(
  //       data => {
  //         setUserInfo(data.data);
  //       },
  //       [setUserInfo]
  //     );
  // };

  useEffect(() => {
    window.gapi.load('signin2', function () {
      const opts = {
        onsuccess: onSuccess,
        onfailure: onFailure,
        width: 84,
        height: 32,
        clientid:
          '653041411276-fo17aoncenmtj5acveh9t59h63d1dvv3.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/adwords',
      };
      gapi.signin2.render('Ads', opts);
    });
  }, []);

  const onSuccess = googleUser => {
    setUserInfo({
      name: googleUser.Au.hf,
      email: googleUser.Au.pv,
      access_toke: googleUser.wc.access_token,
    });
    func(prev => {
      return { ...prev, googleAds: false };
    });

    localStorage.setItem('googleAds', 'false');
    // fetchUserInfo();
  };

  const onFailure = error => {
    console.log(error);
  };

  return (
    <Wrapper>
      <AdsButton id="Ads" />
      <Text>integrate</Text>
    </Wrapper>
  );
};

export default GoogleAds;

const Wrapper = styled.div`
  position: relative;
`;

const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: none;
  font-size: 14px;
  color: #3c6dba;
  z-index: -1;
`;

const AdsButton = styled.div`
  .abcRioButtonContentWrapper {
    border: none;
  }

  .abcRioButtonIcon {
    display: none;
  }

  .abcRioButton {
    border: 1px solid #3c6dba;
    border-radius: 43px;
    box-shadow: none;
    background-color: inherit;
    background-image: none;
    color: #3c6dba;
    cursor: pointer;
    text-align: center;

    &:hover {
      box-shadow: none;
    }

    .abcRioButtonContents {
      position: static;
      font-family: Roboto;
      width: 56px;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      line-height: 16px;
      padding: 8px 14px;

      span {
        display: none;
      }
    }
  }
`;
