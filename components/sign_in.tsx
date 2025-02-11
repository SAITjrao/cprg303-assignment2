import {useState, useEffect} from "react";
import {View, Text, StyleSheet, Button, TextInput, Alert} from "react-native";
import credentials from "../credentials.json";


const Sign_in = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const handleLogin = () => {
        //regex to check for 1 lowercase letter, 1 uppercase letter, 1 number & 1 special character
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

        if(username.length > 0 && username.length < 5){
            alert("Please enter a valid username that is atleast 5 characters long");
        }
        else if(!passwordRegex.test(password)){
            alert("Please enter a password that meets the requirements: 1 uppercase, 1 lowercase, 1 number & 1 special character")
        }
        else {
            const user = credentials.users.find(user => user.username === username && user.password === password);

            if(user){
                alert("Login success!");
            }
            else{
                alert("Invalid username/password. Please try again!");
            }
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} 
                placeholder="username" 
                value={username} 
                onChangeText={setUsername}
                />
            <TextInput style={styles.input} placeholder="password" value={password} onChangeText={setPassword}/>
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default Sign_in;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        width: 300
    },
    title: {
        fontSize: 40,
        marginBottom: 20,
        paddingBottom: 15,
        textAlign: "center"
    }   
})