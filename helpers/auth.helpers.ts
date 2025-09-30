export async function verifyIdToken(
  endpoint: string,
  idToken: string,
): Promise<boolean> {
  const { ok: isIdTokenValid } = await fetch(
    `https://cej-server.onrender.com/user/${endpoint}`,
    {
      method: 'POST',
      body: JSON.stringify({ idToken }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return isIdTokenValid;
}
