import ScreenContainer from '../../ScreenContainer';
import {
  ButtonBackgroundImgSrc,
  ScreenBackgroundImgSrc,
} from '../../../constants';
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../Button';
import useMetrics from '../../../hooks/use-metrics';
import QR from '../../QR';

const AcolyteAngeloLab = ({ route }) => {
  const [isQrOpen, setIsQrOpen] = useState<boolean>(false);
  const navigation = useNavigation();
  const { moderateScale } = useMetrics();

  const buttonFixedSize: number = 160;
  const scaleFactor: number = 0.2;
  const buttonCustomStyleObj = {
    width: moderateScale(buttonFixedSize, scaleFactor),
    height: moderateScale(buttonFixedSize, scaleFactor),
    position: 'absolute',
    bottom: '5%',
    overflow: 'hidden',
  };

  const toggleQr = () => setIsQrOpen(prev => !prev);

  return (
    <ScreenContainer
      backgroundImgSrc={ScreenBackgroundImgSrc.ACOLYTE_ANGELO_LAB}
    >
      <Button
        customStyleObj={buttonCustomStyleObj}
        onPress={toggleQr}
        backgroundImgSrc={ButtonBackgroundImgSrc.ACOLYTE_THEMED}
        text="Show QR"
      />
      {isQrOpen ? (
        <QR />
      ) : null}


      {/* TODO: Insert screen content */}
    </ScreenContainer>
  );
};

export default AcolyteAngeloLab;
