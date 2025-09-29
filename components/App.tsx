import { User, GoogleAuth, GoogleAuthScopes } from 'react-native-google-auth';
import { useState, useEffect } from 'react';
import Login from './Login';
import SplashScreen from './SplashScreen';
import { verifyIdToken } from '../helpers/auth.helpers';

const App = () => {
  const [isConfigured, setIsConfigured] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

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

        // TODO: Display error message
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

  if (isConfigured) {
    return !user ? (
      <Login setUser={setUser} />
    ) : null /* TODO: Return the Main component */;
  } else {
    return <SplashScreen />;
  }
};

export default App;
