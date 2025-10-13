import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { useContext } from 'react';
import { QRContext } from '../contexts/QRContext';
import { View, StyleSheet } from 'react-native';


const QR = () => {
  const logoFromFile = require('../../public/images/icon.png');
  const { email, isInside } = useContext(QRContext);

  return (
    <View style={styles.container}>

      <QRCode
        value={`email=${email}&isInside=${isInside}`}
        size={250}
        logo={logoFromFile}
        logoSize={40} 
      />
    </View>

);
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center', 
    alignItems: 'center',    
  }
});


export default QR;

