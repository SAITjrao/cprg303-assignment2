import { StyleSheet, Text, View } from 'react-native';
import Sign_in from '../components/sign_in';

export default function App() {
  return (
    <View style={styles.container}>
      <Sign_in />
    </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

