import { GoogleAuth } from 'react-native-google-auth';
import styled from 'styled-components/native';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import { LogoutContext } from '../contexts/LogoutContext';
import LogXButton from './LogXButton';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Logout = () => {
  const setUser = useContext(UserContext);
  const setLogoutModalMessage = useContext(LogoutContext);

  async function logOut() {
    await GoogleAuth.signOut();
    setUser(null);
    setLogoutModalMessage('The gate closes behind you.\nSession over.');
  }

  return (
    <Container>
      <LogXButton onPress={logOut} text={'Log out'} />
    </Container>
  );
};

export default Logout;
