import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style = {styles.search} >
        <AntDesign name="search1" size={24} color="#95969D" />
        <TextInput
          placeholder="Search for a job position"
          placeholderTextColor="#95969D"
          style={styles.input}
        />
      </View>
      <TouchableOpacity>
      <View style= {styles.menu}>
        <Image source = {require("../assets/filter.png")} />
      </View>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  
  },
search :{
flexDirection: "row",
width:250,
backgroundColor: "#F3F4F6",
borderRadius: 10,
padding: 10,
marginTop: 10,
marginBottom: 10,
marginLeft: 20,
}, 
input:{
  marginLeft: 10,
  fontSize: 16,
}, 
menu:{
  borderRadius: 10,
  backgroundColor: "#F3F4F6",
  marginRight: 30,
  padding: 10,
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 20,
}
});

export default Search;
