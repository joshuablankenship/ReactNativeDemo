// @ts-ignore
import {ISSUER, CLIENT_ID, REDIRECT_URL} from 'react-native-dotenv';
const config = {
  issuer: ISSUER,
  clientId: CLIENT_ID,
  redirectUrl: REDIRECT_URL,
  scopes: ['openid', 'profile'],
};

export default config;
