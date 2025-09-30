import { User } from 'react-native-google-auth';

export interface LogoutProps {
  setUser(user: User | null): void;
  setErrorModalMessage(errorModalMessage: string): void;
}
