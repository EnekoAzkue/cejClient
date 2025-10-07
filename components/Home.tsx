import ScreenContainer from './ScreenContainer';
import { Text } from 'react-native';

const Home = () => {
  return (
    <ScreenContainer
      backgroundImgUrl={require('../assets/images/main-background.png')}
    >
      <Text>Home Screen</Text>
    </ScreenContainer>
  );
};

export default Home;
