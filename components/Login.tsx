import { GoogleAuth } from 'react-native-google-auth';
import type { LoginProps } from '../interfaces/Login';
import styled from 'styled-components/native';
import Text from './Text';
import { authenticateUser } from '../helpers/auth.helpers';

const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.Pressable`
  width: 235px;
  height: 98px;
`;

const LoginButtonBackgroundImage = styled(BackgroundImage)`
  filter: drop-shadow(0 0 10px #000000);
`;

const LoginButtonText = styled(Text)`
  text-align: center;
`;

const Login = ({ setUser, setErrorModalMessage, setIsLoading }: LoginProps) => {
  async function logIn() {
    try {
      const loginAttemptResult = await GoogleAuth.signIn();
      setIsLoading?.(true);

      if (loginAttemptResult.type === 'success') {
        const idToken: string = loginAttemptResult.data.idToken;

        const authenticationAttemptStatusCode: number = await authenticateUser(
          'log-in',
          idToken,
        );

        if (authenticationAttemptStatusCode <= 201) {
          setUser(loginAttemptResult.data.user);
        } else {
          await GoogleAuth.signOut();

          if (authenticationAttemptStatusCode === 500) {
            setErrorModalMessage('Alas! Your identity could not be verified.');
          } else {
            setErrorModalMessage('Get out of here! You are not worthy.');
          }
        }
      }
    } catch {
      setErrorModalMessage(
        'Oh no! The authentication process with your Google account failed.',
      );
    } finally {
      setIsLoading?.(false);
    }
  }

  return (
    <BackgroundImage
      source={require('../assets/images/old-school-entrance.png')}
    >
      <LoginButton onPress={logIn}>
        <LoginButtonBackgroundImage
          source={require('../assets/images/login-button.png')}
          imageStyle={{ resizeMode: 'contain' }}
        >
          <LoginButtonText>Log in with Google</LoginButtonText>
        </LoginButtonBackgroundImage>
      </LoginButton>
    </BackgroundImage>
  );
};

export default Login;
