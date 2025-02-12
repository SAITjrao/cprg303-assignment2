import React from "react";
import { Text, View, StyleSheet, Image, Linking, TouchableOpacity } from "react-native";

export default function Edmonton() {

    const openCity = () => {
            Linking.openURL('https://www.edmonton.ca/');
        }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Edmonton!</Text>
      <Image source={require('../../assets/edmonton.jpg')} />
      <TouchableOpacity onPress={openCity}>
        <Text style={styles.link}>Go to city page</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Interesting Facts</Text>
      <Text style={styles.bullet}>Known as Canada's "Festival City," hosting over 50 festivals annually, including the Edmonton Fringe Festival.</Text>
      <Text style={styles.bullet}>Home to West Edmonton Mall, one of the largest shopping malls in North America.</Text>
      <Text style={styles.bullet}>The capital of Alberta, with a rich history and vibrant arts and culture scene</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    fontSize: 20,
    color: 'blue',
    fontWeight: "semibold",
    marginBottom: 5
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold"
  },
  bullet: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: "center"
  }
});