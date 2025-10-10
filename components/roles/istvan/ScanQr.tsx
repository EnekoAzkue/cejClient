import ScreenContainer from '../../ScreenContainer';
import { ScreenBackgroundImgSrc } from '../../../constants';
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

const ScanQr = () => {
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);

  const setGeneralModalMessage = useContext(ModalContext);

  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned,
  });

  function onCodeScanned(codes: Code[]) {
    const codeValue = codes[0].value;
    console.log(codeValue);
    setIsCameraOpen(false);
  }

  async function handlePress() {
    if (hasPermission) {
      setIsCameraOpen(true);
    } else {
      const userGavePermission: boolean = await requestPermission();

      if (!userGavePermission) {
        setGeneralModalMessage(
          'Istvan, you have to give permission to be able to scan QR codes.',
        );
      }
    }
  }

  return isCameraOpen ? (
    <Camera
      device={device}
      isActive={true}
      style={StyleSheet.absoluteFill}
      codeScanner={codeScanner}
    />
  ) : (
    <ScreenContainer backgroundImgSrc={ScreenBackgroundImgSrc.SCAN_QR}>
      <Pressable onPress={handlePress}>
        <Text>Open camera to scan QR</Text>
      </Pressable>
    </ScreenContainer>
  );
};

export default ScanQr;
