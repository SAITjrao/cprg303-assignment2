import React from "react";
import { Text, View, Image, StyleSheet, Linking, TouchableOpacity } from "react-native";

const TabsScreen = () => {

    const openCity = () => {
        Linking.openURL('https://www.calgary.ca/home.html');
    }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Calgary!</Text>
      <Image source={require('../../assets/calgary.jpg')} />
      <TouchableOpacity onPress={openCity}>
              <Text style={styles.link}>Go to city page</Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Interesting Facts</Text>
        <Text style={styles.bullet}>Home to the famous Calgary Stampede, known as "The Greatest Outdoor Show on Earth."</Text>
        <Text style={styles.bullet}>Located near the Rocky Mountains, offering stunning natural scenery and outdoor activities.</Text>
        <Text style={styles.bullet}>Host city for the 1988 Winter Olympics, with Canada Olympic Park still in use today.</Text> 
    </View>
  );
};

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

export default TabsScreen;