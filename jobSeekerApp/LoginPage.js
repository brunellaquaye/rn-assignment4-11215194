import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";

const LoginPage = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const HandleLogin = () => {
    if (name.trim() === "" || email.trim() === "")
    {
      Alert.alert("Please enter a valid name and email address")
    }else{
      //Here when the login button is pressed, It navigates to the HomeScreen and sends along the name and email parameters
      navigation.navigate("HomeScreen", {name, email});
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Jobizz</Text>
      <Text style={styles.title}>Welcome Back👋</Text>
      <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>

      <View>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText = {text => setName(text)}
          placeholder="Name"
          placeholderTextColor="#AFB0B6"
        />

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          placeholderTextColor="#AFB0B6"
        />

        <View>
          <TouchableOpacity>
            <Text
              style={styles.buttonText}
              onPress={HandleLogin}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: "space-around", flexDirection: "row", marginBottom: 30}}>
          <View style={styles.span}></View>
          <Text style={styles.subtitle1}>Or continue with</Text>
          <View style={styles.span}></View>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row" , marginBottom: 30, width:216, alignItems:"center", alignSelf:"center" }}>
        <View style={{backgroundColor:"#FFFFFF", borderRadius: 100,padding:15}}>
           <Image style={styles.icon} source={require("./assets/Vector.png")} /> 
           </View>
           <View style={{backgroundColor:"#FFFFFF", borderRadius: 100,padding:15}}>
           <Image style={styles.icon} source={require("./assets/flat-color-icons_google.png")} /> 
           </View>
           <View style={{backgroundColor:"#FFFFFF", borderRadius: 100,padding:15}}>
           <Image style={styles.icon} source={require("./assets/Vector-3.png")} /> 
           </View>
           
        </View>


        <Text style={styles.subtitle2}>
          Haven't an account?<Text style={{color:"#356899"}}> Register</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFD",
  },
  name: {
    color: "#356899",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 120,
    marginLeft: 20,
    textAlign: "left",
  },
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    textAlign: "left",
  },
  subtitle: {
    color: "#AFB0B6",
    fontSize: 14,
    fontWeight: "light",
    marginLeft: 20,
    marginTop: 8,
    marginBottom: 30,
  },
  input: {
    color: "black",
    fontSize: 14,
    fontWeight: "light",
    marginLeft: 20,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: "#AFB0B6",
    height: 48,
    width: 340,
    padding: 10,
  },
  buttonText: {
    color: "white",
    backgroundColor: "#356899",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    fontSize: 14,
    fontWeight: "light",
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#AFB0B6",
    height: 48,
    width: 340,
    padding: 15,
  },
  span: {
    width: 100,
    height: 1,
    backgroundColor: "#AFB0B6",
    marginHorizontal: 35,
    marginTop: 20,
    marginleft: 20,
  },
  subtitle1: {
    color: "#AFB0B6",
    fontSize: 14,
    fontWeight: "light",
    marginLeft: 5,
    marginTop: 8,
    marginBottom: 30,
  },
  subtitle2: {
    color: "#AFB0B6",
    fontSize: 14,
    fontWeight: "light",
    marginLeft: 5,
    marginTop: 8,
    marginBottom: 30,
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
  },
  icon:{
    backgroundColor: "#FFFFFF",
    borderRadius:50,
    alignItems: "center",
  }
});

export default LoginPage;
