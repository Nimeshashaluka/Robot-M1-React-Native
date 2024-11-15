import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

// Import the image
const backgroundImage = require('../images/loginbacground.jpg'); // Adjust the path if needed

export default function LoginScreen() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
    <StatusBar hidden={true}/>

      <View style={styles.container}>
        <Text style={styles.title}>ROBOT M1 LOGIN</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#fff"
          inputMode={"text"}
          onChangeText={(text) => {
            setUsername(text);
          }}
        />
        
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#fff"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        
        <TouchableOpacity style={styles.button} onPress={
            async()=>{
                {
                    let response = await fetch(
                      "http://192.168.240.97:8080/RobotM1/SignIn",
                      {
                        method: "POST",
                        body: JSON.stringify({
                          username: username,
                          password: password,
                        }),
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    );
                    if (response.ok) {
                      let json = await response.json();
    
                      if (json.success) {
                        let user = json.user;
                        Alert.alert(
                          "Success","LogIn Success!!"
                        );
    
                        try {
                          await AsyncStorage.setItem("user", JSON.stringify(user));
                        } catch (e) {}
    
                        navigation.navigate("Home");
                      } else {
                        Alert.alert("Error", json.message);
                      }
                    }
                  }
            }
        }>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
    rowGap:10,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#fff',
    marginBottom: 15,
    fontSize:18,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#E41B17',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,

  },
  buttonText: {
    color: '#fff',
    fontSize: 21,
    fontWeight: 'bold',
  },
});
