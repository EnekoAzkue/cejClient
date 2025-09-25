import { User } from 'react-native-google-auth';

export interface LoginProps {
  setUser(user: User | null): void;
}
