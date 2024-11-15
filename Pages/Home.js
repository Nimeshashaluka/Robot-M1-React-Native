import React from 'react';
import { Alert, Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StatusBar } from 'expo-status-bar';

const image =require("../images/background2.jpg");

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <SafeAreaView style={styles.main1}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        
        <View style={styles.view1}>
          <Pressable style={styles.imageP} 
          onPress={async () => {
            Alert.alert("msg", "22222");
  
          
              const response = await fetch("http://192.168.17.127?state=2");
  
              if (response.ok) {
                Alert.alert("msg", "Done1");
              } else {
                Alert.alert("msg", "No");
              }
           
          }}>
            <Image source={require("../images/up.png")} style={styles.button} />
          </Pressable>
        </View>
        <View style={styles.main2}>
          <Pressable style={styles.imageP}
          onPress={async () => {
            Alert.alert("msg", "3333");
  
           
              const response = await fetch("http://192.168.17.127?state=3");
  
              if (response.ok) {
                Alert.alert("msg", "Done1");
              } else {
                Alert.alert("msg", "No");
              }
          
          }}>
            <Image
              source={require("../images/right.png")}
              style={styles.button}
            />
          </Pressable>

          <Pressable style={styles.imageP}
          
          onPress={async () => {
            Alert.alert("msg", "111111");
  
          
              const response = await fetch("http://192.168.17.127?state=1");
  
              if (response.ok) {
                Alert.alert("msg", "Done1");
              } else {
                Alert.alert("msg", "No");
              }
           
          }}>
            <Image
              source={require("../images/down.png")}
              style={styles.button}
            />
          </Pressable>
        </View>

        <View style={styles.view4}>
          <Pressable style={styles.imageP}
           onPress={async () => {
            Alert.alert("msg", "444");
  
          
              const response = await fetch("http://192.168.17.127?state=4");
  
              if (response.ok) {
                Alert.alert("msg", "Done1");
              } else {
                Alert.alert("msg", "No");
              }
           
          }}>
            <Image
              source={require("../images/left.png")}
              style={styles.button}
            />
          </Pressable>
        </View>

        <View style={styles.view5}>
          <Pressable onPress={async () => {
            Alert.alert("msg", "Stop");
  
          
              const response = await fetch("http://192.168.17.127?state=0");
  
              if (response.ok) {
                Alert.alert("msg", "Done1");
              } else {
                Alert.alert("msg", "No");
              }
           
          }}>
            <Image source={require("../images/stop-button.png")} style={styles.stopBtn}/>
          </Pressable>
        </View>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 30,
  },
  view4: {
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    // padding: 10,
  },
  main2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width:"100%",
    padding: 40,
    // backgroundColor:"red",
    marginLeft:20,
    marginTop:20,
    // marginRight:20,
  },
  main1:{
    justifyContent:"center",
    alignItems:'center'
  },
  view5: {
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    // padding: 20,
    marginTop:"20%",
    
  },
  imageP: {
    // backgroundColor: "red",
  },
  button: {
    width: 80,
    height: 80,
  },
  stopBtn:{
    width:200,
    height:200,
  }, image: {
    flex: 1,
    justifyContent: 'center',
  },
});
