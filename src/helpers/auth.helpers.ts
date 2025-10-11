import type { AuthenticateUserReturnValue } from '../interfaces/auth.helpers';

export async function authenticateUser(
  endpoint: string,
  idToken: string,
): Promise<AuthenticateUserReturnValue> {
  const response = await fetch(
    `https://cej-server.onrender.com/user/${endpoint}`,
    {
      method: 'POST',
      body: JSON.stringify({ idToken }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const { user } = await response.json();

  const authenticationAttemptResult = {
    statusCode: response.status,
    user,
  };

  return authenticationAttemptResult;
}
