import styled from 'styled-components/native';

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const SplashScreen = () => {
  return <Image source={require('../assets/images/splash-screen.png')} />;
};

export default SplashScreen;
