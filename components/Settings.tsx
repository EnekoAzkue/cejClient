import ScreenContainer from './ScreenContainer';
import Logout from './Logout';

const Settings = () => {
  return (
    <ScreenContainer
      backgroundImgUrl={require('../assets/images/main-background.png')}
    >
      <Logout />
    </ScreenContainer>
  );
};

export default Settings;
