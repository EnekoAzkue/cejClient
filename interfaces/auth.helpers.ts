import KaotikaUser from './KaotikaUser';

interface AuthenticateUserReturnValue {
  statusCode: number;
  user: KaotikaUser;
}

export type { AuthenticateUserReturnValue };
