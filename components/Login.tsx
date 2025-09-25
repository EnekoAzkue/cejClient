import { GoogleAuth } from 'react-native-google-auth';
import { View, Pressable, Text } from 'react-native';
import type { LoginProps } from '../interfaces/Login';

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
    <View>
      <Pressable
        onPress={logIn}
        style={({ pressed }) => [{ opacity: pressed ? 0.2 : 1 }]}
      >
        <Text>Log in with Google</Text>
      </Pressable>
    </View>
  );
};

export default Login;
