import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";



export default function StartPage() {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.viewM}>
        <View style={styles.textView}>
          <Text style={styles.headerText}>My Robot Pet M1v</Text>
        </View>
        <View style={styles.view1}>
          <Image source={require("../images/robot1.png")}/>
        </View>
        <View style={styles.view2}>
          <Pressable style={styles.btn} onPress={
            ()=> {
              navigation.navigate("Home");
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view1:{
    marginTop:35,
    justifyContent:'center',
    alignItems:"center",
  }
  ,view2:{
    justifyContent:'center',
    alignItems:"center",
    padding:50
  },
  btn: {
    backgroundColor: "black",
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
  },headerText:{
    fontSize:36,
    fontWeight:'900',
    // color:'#E41B17'
  }
});
