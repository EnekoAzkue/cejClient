import { GoogleAuth } from 'react-native-google-auth';
import type { LogoutProps } from '../interfaces/Logout';
import styled from 'styled-components/native';
import Text from './Text';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';

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

const Logout = () => {
  const setUser = useContext(UserContext)

  async function logOut() {

      console.log("Logging out")
      await GoogleAuth.signOut();
      setUser(null)

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
