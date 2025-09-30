import ScreenContainer from './ScreenContainer';
import Logout from './Logout';
import { User } from 'react-native-google-auth';

interface SettingsProps {
  setUser(user: User | null): void;
  setErrorModalMessage(msg: string): void;
}

const Settings = ({ setUser, setErrorModalMessage }: SettingsProps) => {
  return (
    <ScreenContainer>
      <Logout
        setUser={setUser}
        setErrorModalMessage={setErrorModalMessage}
      />
    </ScreenContainer>
  );
};

export default Settings;
