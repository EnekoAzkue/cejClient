import KaotikaUser from './KaotikaUser';

interface UserContextInterface {
  user: KaotikaUser | null;
  setUser(user: KaotikaUser | null): void;
}

export type { UserContextInterface };
