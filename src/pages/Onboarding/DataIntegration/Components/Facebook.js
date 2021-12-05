import React, { useState } from 'react';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const Facebook = ({ func }) => {
  const [userInfo, setUserInfo] = useState({});
  // useEffect(() => {
  //   fetch('http://192.168.0.8:8000/auth/facebook/tokens', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: userInfo.email,
  //       access_token: userInfo.access_token,
  //       refresh_token: userInfo.refresh_token,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setUserInfo(data.data);
  //     });
  // }, [userInfo]);

  const responseFacebook = response => {
    const { name, email, accessToken, status, error } = response;

    if (!(status || error)) {
      setUserInfo({
        name: name,
        email: email,
        access_token: accessToken,
        refresh_token: '',
      });
      func(prev => {
        return { ...prev, facebookAds: false };
      });

      localStorage.setItem('facebookAds', 'false');
    }
  };

  return (
    <FacebookLogin
      appId="641021357307277"
      autoLoad={false}
      version="12.0"
      fields="name,email"
      scope="public_profile,email,ads_management,ads_read,pages_manage_ads"
      responseType="code"
      render={renderProps => (
        <IntegrateButton onClick={renderProps.onClick}>
          <IntegrateSpan>integrate</IntegrateSpan>
        </IntegrateButton>
      )}
      callback={responseFacebook}
    />
  );
};

export default Facebook;

const IntegrateButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 32px;
  border: 1px solid #3c6dba;
  border-radius: 43px;
  padding: 8px 14px;
  cursor: pointer;
  background-color: white;
`;

const IntegrateSpan = styled.span`
  width: 56px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #3c6dba;
`;
