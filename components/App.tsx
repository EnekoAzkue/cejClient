import { User, GoogleAuth, GoogleAuthScopes } from 'react-native-google-auth';
import { useState, useEffect } from 'react';
import Login from './Login';
import SplashScreen from './SplashScreen';
import { authenticateUser } from '../helpers/auth.helpers';
import GeneralModal from './GeneralModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import Main from './Main';
import { UserContext } from '../contexts/UserContext';
import CircleSpinner from './Spinner';
import { ModalContext } from '../contexts/ModalContext';
import { socket, initSocket } from '../socket/socket';
import { SocketGeneralEvents } from '../constants';
import { handleConnection } from '../socket/handlers/connection';

const App = () => {
  const [isConfigured, setIsConfigured] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [generalModalMessage, setGeneralModalMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      configureGoogleAuth();
    }, 3000);
  }, []);

  useEffect(() => {
    if (user) {
      initSocket(user.email);

      return () => {
        socket.disconnect();
      };
    }
  }, [user]);

  async function configureGoogleAuth() {
    await GoogleAuth.configure({
      webClientId:
        '68777880712-79pl25jsa37639ibme1back16g29surs.apps.googleusercontent.com',
      scopes: [GoogleAuthScopes.EMAIL],
    });

    // Check if user is already signed in
    const currentUser: User | null = await GoogleAuth.getCurrentUser();

    if (currentUser) {
      const idToken: string = await getIdToken();

      const authenticationAttemptStatusCode: number = await authenticateUser(
        'access-logged-in',
        idToken,
      );

      if (authenticationAttemptStatusCode === 200) {
        setUser(currentUser);
      } else {
        await GoogleAuth.signOut();

        setGeneralModalMessage(
          'Whoops! You have been logged out because your identity could not be verified.',
        );
      }
    }

    setIsConfigured(true);
  }

  async function getIdToken(): Promise<string> {
    let tokens = await GoogleAuth.getTokens();

    const isIdTokenExpiredOrWillExpireSoon: boolean =
      tokens.expiresAt - Date.now() <= 300000;

    if (isIdTokenExpiredOrWillExpireSoon) {
      tokens = await GoogleAuth.refreshTokens();
    }

    const { idToken } = tokens;

    return idToken;
  }

  return (
    <UserContext value={setUser}>
      <SafeAreaView>
        <GeneralModal
          message={generalModalMessage}
          setMessage={setGeneralModalMessage}
        />

        {isConfigured ? (
          !user ? (
            <>
              <Login
                setUser={setUser}
                setGeneralModalMessage={setGeneralModalMessage}
                setIsLoading={setIsLoading}
              />

              {isLoading && <CircleSpinner />}
            </>
          ) : (
            <ModalContext value={setGeneralModalMessage}>
              <Main />
            </ModalContext>
          )
        ) : (
          <SplashScreen />
        )}
      </SafeAreaView>
    </UserContext>
  );
};

export default App;
