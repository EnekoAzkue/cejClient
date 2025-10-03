import styled from 'styled-components/native';
import type { LogXButtonProps } from '../interfaces/LogXButton';
import { useState } from 'react';
import Animated from 'react-native-reanimated';
import { Pressable } from 'react-native';
import Text from './Text';

const LogXButtonBackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 10px #000000);
`;

const LogXButtonText = styled(Text)`
  text-align: center;
`;

const LogXButton = ({ onPress, text }: LogXButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  function handlePressIn() {
    setIsPressed(true);
  }

  function handlePressOut() {
    setIsPressed(false);
  }

  return (
    <Animated.View
      style={{
        width: 235,
        height: 98,
        opacity: isPressed ? 0.75 : 1,
        transitionProperty: 'opacity',
        transitionDuration: 175,
      }}
    >
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
      >
        <LogXButtonBackgroundImage
          source={require('../assets/images/log-x-button.png')}
          imageStyle={{ resizeMode: 'contain' }}
        >
          <LogXButtonText>{text}</LogXButtonText>
        </LogXButtonBackgroundImage>
      </Pressable>
    </Animated.View>
  );
};

export default LogXButton;
