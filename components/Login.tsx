import { GoogleAuth } from 'react-native-google-auth';
import type { LoginProps } from '../interfaces/Login';
import styled from 'styled-components/native';
import Text from './Text';

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

const Login = ({ setUser, setErrorModalMessage }: LoginProps) => {
  async function logIn() {
    try {
      const loginAttemptResult = await GoogleAuth.signIn();

      if (loginAttemptResult.type === 'success') {
        const idToken = loginAttemptResult.data.idToken;

        const response = await fetch(
          'https://example.com/' /* TODO: Specify API route when it is implemented */,
          {
            method: 'POST',
            body: JSON.stringify({ idToken }),
          },
        );

        if (response.ok) {
          setUser(loginAttemptResult.data.user);
        } else {
          await GoogleAuth.signOut();

          setErrorModalMessage('Alas! Your identity could not be verified.');
        }
      }
    } catch {
      setErrorModalMessage(
        'Oh no! The authentication process with your Google account failed.',
      );
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
