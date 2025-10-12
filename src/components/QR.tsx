import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { useContext } from 'react';
import { QRContext } from '../contexts/QRContext';

const QR = () => {
  const logoFromFile = require('../../public/images/icon.png');
  const { email, isInside } = useContext(QRContext);

  return (
    <QRCode
      value={`email=${email}&isInside=${isInside}`}
      size={180}
      logo={logoFromFile}
      logoSize={40}
      logoBackgroundColor="white"

    />
  );
};

export default QR;
