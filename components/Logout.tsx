import { GoogleAuth } from 'react-native-google-auth';
import type { LogoutProps } from '../interfaces/Logout';
import styled from 'styled-components/native';
import Text from './Text';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LogoutButton = styled.Pressable`
  width: 235px;
  height: 98px;
`;

const LogoutButtonBackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 10px #000000);
`;

const LogoutButtonText = styled(Text)`
  text-align: center;
`;

const Logout = ({ setUser, setErrorModalMessage }: LogoutProps) => {
  async function logOut() {
    try {
      await GoogleAuth.signOut();
      setUser(null);
    } catch {
      setErrorModalMessage('Oh no! Logout failed. Please try again.');
    }
  }

  return (
    <Container>
      <LogoutButton onPress={logOut}>
        <LogoutButtonBackgroundImage
          source={require('../assets/images/login-button.png')}
          imageStyle={{ resizeMode: 'contain' }}
        >
          <LogoutButtonText>Log Out</LogoutButtonText>
        </LogoutButtonBackgroundImage>
      </LogoutButton>
    </Container>
  );
};

export default Logout;
