import React from 'react';
import { View, Text, Image , StyleSheet,} from 'react-native';

const PopularCard = ({logo, title, company, salary, location}) => {
  return (
    <View style = {styles.container}>
      <View>
        <Image style={styles.logo}source = {logo}/>
      </View>
      <View style={{marginLeft:15, marginRight:30}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.company}>{company}</Text>
      </View>
      <View style={{}}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    alignItems:"center",
    marginHorizontal:20,
    marginVertical:10,
    backgroundColor:"#FFFFFF",
    borderRadius:15,
    padding:20
  },
  logo:{
    width:45,
        height:45,
  },
  title:{
    fontSize:14,
    fontWeight:"bold"

  },
  company:{
    fontSize:12,
    color:"#AFB0B6"
  },
  salary:{
    fontSize:12,
    alignSelf:"flex-end",
    fontWeight:"bold"
  },
  location:{
    fontSize:13,
    color:"#AFB0B6"
  }
 })

export default PopularCard;
