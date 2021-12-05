import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'ap-northeast-2_lEkgeOVvH',
  ClientId: '2de076iqjoovve9csnt8lo0hde',
};

export default new CognitoUserPool(poolData);
