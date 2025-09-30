import styled from 'styled-components/native';

const BackgroundImage = styled.ImageBackground`
  min-height: 100%;
`;

const ScreenContainer = ({ children }) => {
  return (
    <BackgroundImage source={require('../assets/images/main-background.png')}>
      {children}
    </BackgroundImage>
  );
};

export default ScreenContainer;
