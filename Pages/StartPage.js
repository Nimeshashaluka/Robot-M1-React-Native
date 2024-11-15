import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";



export default function StartPage() {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <StatusBar hidden={true}/>

      <SafeAreaView style={styles.viewM}>
        <View style={styles.textView}>
          <Text style={styles.headerText}>ROBOT-M1  1.0.1v</Text> 
        </View>
        <View style={styles.view1}>
          <Image source={require("../images/robot1.png")}/>
        </View>
        <View style={styles.view2}>
          <Pressable style={styles.btn} onPress={
            ()=> {
              navigation.navigate("LogIn");
            }
          }>
            <Text style={styles.btnText}>Get Started</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width:"100%",
    height:"100%",
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  view1:{
    justifyContent:'center',
    alignItems:"center",
  }
  ,view2:{
    justifyContent:'center',
    alignItems:"center",
    padding:50,
  },
  btn: {
    backgroundColor: "#E41B17",
    width: "80%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 22,
  },textView:{
    justifyContent:'center',
    alignItems:'center',
    height:"20%"
  },headerText:{
    marginTop:"10%",
    fontSize:34,
    fontWeight:'900',
    color:'#E41B17'
    
  }
});
