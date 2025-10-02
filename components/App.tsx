import { User, GoogleAuth, GoogleAuthScopes } from 'react-native-google-auth';
import { useState, useEffect } from 'react';
import Login from './Login';
import SplashScreen from './SplashScreen';
import { verifyIdToken } from '../helpers/auth.helpers';
import ErrorModal from './ErrorModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import Main from './Main';
import { UserContext } from '../contexts/UserContext';
import CircleSpinner from './Spinner';
import LogoutModal from './LogoutModal';
import { LogoutContext } from '../contexts/LogoutContext';

const App = () => {
  const [isConfigured, setIsConfigured] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [errorModalMessage, setErrorModalMessage] = useState<string>('');
  const [logoutModalMessage, setLogoutModalMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      configureGoogleAuth();
    }, 3000);
  }, []);

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

      const isIdTokenValid: boolean = await verifyIdToken(
        'access-logged-in',
        idToken,
      );

      if (isIdTokenValid) {
        setUser(currentUser);
      } else {
        await GoogleAuth.signOut();

        setErrorModalMessage(
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
        <ErrorModal
          message={errorModalMessage}
          setMessage={setErrorModalMessage}
        />
        <LogoutModal
          message={logoutModalMessage}
          setMessage={setLogoutModalMessage}
        />
        {isConfigured ? (
          !user ? (
            <>
              <Login
                setUser={setUser}
                setErrorModalMessage={setErrorModalMessage}
                setIsLoading={setIsLoading}
                />

              {isLoading && <CircleSpinner />}
            </>
          ) : 
          <LogoutContext value={setLogoutModalMessage}>
            <Main />
          </LogoutContext>


        ) : (
          <SplashScreen />
        )}
      </SafeAreaView>
    </UserContext>
  );
};

export default App;
