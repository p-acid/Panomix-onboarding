import React, { useState } from 'react';
import styled from 'styled-components';
import SlackLogin from 'react-slack-login';

const Slack = () => {
  const onSuccess = slackUser => {
    console.log(slackUser);
  };
  return (
    <div>
      <SlackLogin
        redirectUrl="https://slack.com/oauth/v2/authorize"
        // onFailure={onFailed}
        // onSuccess={onSuccess}
        slackClientId="2670128650274.2764076849104"
        slackUserScope="commands incomming-webhook"
      />
    </div>
  );
};

export default Slack;
