import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

//functional card component that will accept props for the card details
//In the main screen, FlatList will be used to render the functional component with the data that will be passed.absolutely
const Card = ({ title, company, location, salary, logo,backgroundColor }) => {
  return (
    <View>
      <View style={[styles.container , {backgroundColor}]}>

        <View style={{flexDirection:"row",marginLeft:20, marginTop:20}}>
          <View style={styles.logo}>
            <Image source={logo} />
          </View>

          <View style={{marginLeft:15}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.company}>{company}</Text>
          </View>
        </View>
        <View style = {{flexDirection:"row", justifyContent:"space-between"}}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 2,
    marginHorizontal: 5,
    rowGap:80,
    borderRadius: 24,
    width: 280,
    height: 186
  },
  logo: {
    backgroundColor: "white",
    borderRadius: 12,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
   title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
   },
   company: {
    color:"white",
    fontSize: 14,
    fontWeight: "light",
    textAlign: "left",
   },
   salary: {
    color:"white",
    fontSize:15,
    fontWeight: "light",
    textAlign: "left",
    marginLeft: 20
   },
   location: {
    color:"white",
    fontSize:15,
    fontWeight: "light",
    textAlign: "right",
    marginRight: 20

   },
});

export default Card;
