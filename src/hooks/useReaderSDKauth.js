import {Alert} from 'react-native';
import {
  authorizeAsync,
  AuthorizeErrorNoNetwork,
  UsageError,
} from 'react-native-square-reader-sdk';
import useMobileAuth from '../hooks/useMobileAuth';

export default () => {
  const [auth, getAuth] = useMobileAuth();

  const waitForCode = async () => {
    const code = await getAuth();
  };

  const authorizeReaderSDK = async () => {
    waitForCode();
    try {
      const authCode = auth.authorization_code;
      // authCode is a mobile authorization code from the Mobile Authorization API
      const authorizedLocation = await authorizeAsync(authCode);
      // Authorized and authorizedLocation is available
    } catch (ex) {
      switch (ex.code) {
        case AuthorizeErrorNoNetwork:
          // Remind connecting to network
          break;
        case UsageError:
          let errorMessage = ex.message;
          if (__DEV__) {
            errorMessage += `\n\nDebug Message: ${ex.debugMessage}`;
            console.log(`${ex.code}:${ex.debugCode}:${ex.debugMessage}`);
          }
          Alert.alert('Error', errorMessage);
          break;
      }
    }
  };
  return authorizeReaderSDK;
};
