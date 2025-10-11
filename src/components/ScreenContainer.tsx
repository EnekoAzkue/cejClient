import styled from 'styled-components/native';
import { PropsWithChildren } from 'react';
import type { ScreenContainerProps } from '../interfaces/ScreenContainer';

const BackgroundImage = styled.ImageBackground`
  height: 100%;
`;

const ScreenContainer = ({
  backgroundImgSrc,
  children,
}: PropsWithChildren<ScreenContainerProps>) => {
  return (
    <BackgroundImage source={backgroundImgSrc}>{children}</BackgroundImage>
  );
};

export default ScreenContainer;
