import { CircleFade } from 'react-native-animated-spinkit'
import { View , StyleSheet} from 'react-native'

function CircleSpinner() {
  return (
    <View style={styles.container}>
      <CircleFade size={48} color="#FFF" />
    </View>
  )
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});


export default CircleSpinner