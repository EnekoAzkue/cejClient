export async function verifyIdToken(
  endpoint: string,
  idToken: string,
): Promise<boolean> {
  const { ok: isIdTokenValid } = await fetch(
    `https://example.com/user/${endpoint}` /* TODO: Replace "example.com" with a valid value */,
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
