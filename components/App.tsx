import { User, GoogleAuth, GoogleAuthScopes } from 'react-native-google-auth';
import { useState, useEffect } from 'react';
import Login from './Login';

const App = () => {
  const [isConfigured, setIsConfigured] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    configureGoogleAuth();
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

      const response = await fetch(
        'https://example.com/' /* TODO: Specify API route when it is implemented */,
        {
          method: 'POST',
          body: JSON.stringify({ idToken }),
        },
      );

      if (response.ok) {
        setUser(currentUser);
      } else {
        await GoogleAuth.signOut();

        // TODO: Display error message
      }
    }

    setIsConfigured(true);
  }

  async function getIdToken(): Promise<string> {
    let tokens;

    const isIdTokenExpired: boolean = await GoogleAuth.isTokenExpired();

    if (isIdTokenExpired) {
      tokens = await GoogleAuth.refreshTokens();
    } else {
      tokens = await GoogleAuth.getTokens();
    }

    const { idToken } = tokens;

    return idToken;
  }

  if (isConfigured) {
    return !user ? (
      <Login setUser={setUser} />
    ) : null /* TODO: Return the Main component */;
  }
};

export default App;
