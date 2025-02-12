import { StyleSheet, Text, View } from 'react-native';
import Sign_in from '../components/sign_in';
import Welcome from '../components/welcome';
import { useState } from 'react';

export default function App() {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  return (
    <View style={styles.container}>
        {isSignedIn ? <Welcome /> : <Sign_in setIsSignedIn={setIsSignedIn} />}
    </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

