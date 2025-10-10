import ScreenContainer from '../../ScreenContainer';
import {
  ButtonBackgroundImgSrc,
  ScreenBackgroundImgSrc,
} from '../../../constants';
import {
  useCameraPermission,
  Camera,
  useCameraDevice,
  useCodeScanner,
  Code,
} from 'react-native-vision-camera';
import { Pressable, StyleSheet } from 'react-native';
import Text from '../../Text';
import { useContext, useState } from 'react';
import { ModalContext } from '../../../contexts/ModalContext';
import { useNavigation } from '@react-navigation/native';
import Button from '../../Button';
import useMetrics from '../../../hooks/use-metrics';

const ScanQr = ({ route }) => {
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);

  const setGeneralModalMessage = useContext(ModalContext);

  // Elements needed to display the camera
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned,
  });

  const navigation = useNavigation();
  const { tabBarStyle } = route.params;

  // Styling for the button used to close the camera
  const { windowWidth, horizontalScale } = useMetrics();
  const buttonFixedSize = 60;
  const buttonCustomStyleObj = {
    width: horizontalScale(buttonFixedSize),
    height: horizontalScale(buttonFixedSize),
    position: 'absolute',
    bottom: '5%',
    left: windowWidth / 2 - horizontalScale(buttonFixedSize / 2),
    borderRadius: '50%',
    overflow: 'hidden',
  };

  async function handlePress() {
    if (hasPermission) {
      toggleCameraAndNavigatorStates();
    } else {
      const userGavePermission: boolean = await requestPermission();

      if (!userGavePermission) {
        setGeneralModalMessage(
          'Istvan, you have to give permission to be able to scan QR codes.',
        );
      } else {
        toggleCameraAndNavigatorStates();
      }
    }
  }

  function toggleCameraAndNavigatorStates() {
    const updatedIsCameraOpen = !isCameraOpen;

    setIsCameraOpen(updatedIsCameraOpen);

    navigation.setOptions({
      tabBarStyle: updatedIsCameraOpen ? { display: 'none' } : tabBarStyle,
    });
  }

  function onCodeScanned(codes: Code[]) {
    // Get & log the scanned code's value
    const codeValue = codes[0].value;
    console.log(`The scanned code's value is "${codeValue}".`);

    toggleCameraAndNavigatorStates();
  }

  return isCameraOpen ? (
    <>
      <Camera
        device={device}
        isActive={true}
        style={StyleSheet.absoluteFill}
        codeScanner={codeScanner}
      />

      <Button
        customStyleObj={buttonCustomStyleObj}
        onPress={toggleCameraAndNavigatorStates}
        backgroundImgSrc={ButtonBackgroundImgSrc.CLOSE_CAMERA}
        text=""
      />
    </>
  ) : (
    <ScreenContainer backgroundImgSrc={ScreenBackgroundImgSrc.SCAN_QR}>
      <Pressable onPress={handlePress}>
        <Text>Open camera to scan QR</Text>
      </Pressable>
    </ScreenContainer>
  );
};

export default ScanQr;
