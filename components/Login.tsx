import { GoogleAuth } from 'react-native-google-auth';
import type { LoginProps } from '../interfaces/Login';
import styled from 'styled-components/native';
import { authenticateUser } from '../helpers/auth.helpers';
import Button from './Button';
import { AuthenticateUserReturnValue } from '../interfaces/auth.helpers';
import { ButtonBackgroundImgSrc } from '../constants';

const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Login = ({
  setUser,
  setGeneralModalMessage,
  setIsLoading,
}: LoginProps) => {
  async function logIn() {
    try {
      setIsLoading?.(true);
      const loginAttemptResult = await GoogleAuth.signIn();

      if (loginAttemptResult.type === 'success') {
        const idToken: string = loginAttemptResult.data.idToken;

        const authenticationAttemptResult: AuthenticateUserReturnValue =
          await authenticateUser('log-in', idToken);

        if (authenticationAttemptResult.statusCode <= 201) {
          setUser(authenticationAttemptResult.user);
        } else {
          await GoogleAuth.signOut();

          if (authenticationAttemptResult.statusCode === 500) {
            setGeneralModalMessage(
              'Alas! Your identity could not be verified.',
            );
          } else {
            setGeneralModalMessage('Get out of here! You are not worthy.');
          }
        }
      }
    } catch {
      setGeneralModalMessage(
        'Oh no! The authentication process with your Google account failed.',
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <BackgroundImage
      source={require('../assets/images/old-school-entrance.png')}
    >
      <Button
        onPress={logIn}
        backgroundImgSrc={ButtonBackgroundImgSrc.ACOLYTE_THEMED}
        text={'Log in with Google'}
      />
    </BackgroundImage>
  );
};

export default Login;
