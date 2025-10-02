import { GoogleAuth } from 'react-native-google-auth';
import styled from 'styled-components/native';
import Text from './Text';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import { LogoutContext } from '../contexts/LogoutContext'; 

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
  const setLogoutModalMessage = useContext(LogoutContext)
  async function logOut() {

      console.log("Logging out")
      await GoogleAuth.signOut();
      setUser(null)
      setLogoutModalMessage( "The gate closes behind you.\n Session over.")

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
