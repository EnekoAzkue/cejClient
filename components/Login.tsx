import { GoogleAuth } from 'react-native-google-auth';
import type { LoginProps } from '../interfaces/Login';
import styled from 'styled-components/native';

const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.Pressable`
  width: 225px;
  height: 88px;
`;

const LoginButtonText = styled.Text`
  text-align: center;
`;

const Login = ({ setUser }: LoginProps) => {
  async function logIn() {
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
        // TODO: Display error message
      }
    } else {
      // TODO: Display error message
    }
  }

  return (
    <BackgroundImage
      source={require('../assets/images/old-school-entrance.png')}
    >
      <LoginButton onPress={logIn}>
        <BackgroundImage
          source={require('../assets/images/login-button.png')}
          imageStyle={{ resizeMode: 'contain' }}
          style={{ filter: 'drop-shadow(0 0 5px rgb(0 0 0 / 1))' }}
        >
          <LoginButtonText>Log in with Google</LoginButtonText>
        </BackgroundImage>
      </LoginButton>
    </BackgroundImage>
  );
};

export default Login;
