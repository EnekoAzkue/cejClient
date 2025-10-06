import { User } from 'react-native-google-auth';

export interface LoginProps {
  setUser(user: User | null): void;
  setGeneralModalMessage(errorGeneralMessage: string): void;
  setIsLoading(loading: boolean): void;
}
