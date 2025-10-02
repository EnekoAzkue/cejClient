export async function authenticateUser(
  endpoint: string,
  idToken: string,
): Promise<number> {
  const { status: statusCode } = await fetch(
    `https://cej-server.onrender.com/user/${endpoint}`,
    {
      method: 'POST',
      body: JSON.stringify({ idToken }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return statusCode;
}
