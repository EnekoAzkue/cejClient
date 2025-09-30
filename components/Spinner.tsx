import { CircleFade, Fold, Swing, Chase, Bounce, Pulse, Grid, Circle } from 'react-native-animated-spinkit';
import { View, StyleSheet } from 'react-native';

function CircleSpinner() {
  return (
    <View style={styles.container}>
      <CircleFade size={80} color="#FFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center', 
    alignItems: 'center',    
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1000, 
  },
});

export default CircleSpinner;
