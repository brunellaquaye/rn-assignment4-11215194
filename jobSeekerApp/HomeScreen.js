import React from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from "react-native";
import Search from "./components/Search";
import Card from "./components/Card";
import { SafeAreaView } from "react-native-safe-area-context";
import PopularCard from "./components/PopularCard";

const featuredJobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Google",
    location: "Accra, Ghana",
    date: "1d ago",
    salary: "$120,000",
    logo: require("./assets/flat-color-icons_google.png"),
    backgroundColor: "#5386E4",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Apple",
    location: "Tema, Accra",
    date: "2d ago",
    salary: "$130,000",
    logo: require("./assets/Vector.png"),
    backgroundColor: "#04284A",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Facebook",
    location: "Seattle, WA",
    date: "3d ago",
    salary: "$110,000",
    logo: require("./assets/Vector-3.png"),
    backgroundColor: "#5386E4",
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Apple",
    location: "Accra, Ghana",
    date: "1d ago",
    salary: "$120,000",
    logo: require("./assets/Vector.png"),
    backgroundColor: "#04284A",
  },
  {
    id: 5,
    title: "Product Manager",
    company: "Apple",
    location: "Tema, Accra",
    date: "2d ago",
    salary: "$130,000",
    logo: require("./assets/Vector.png"),
    backgroundColor: "#5386E4",
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "Google",
    location: "Seattle, WA",
    date: "3d ago",
    salary: "$110,000",
    logo: require("./assets/flat-color-icons_google.png"),
    backgroundColor: "#04284A",
  },
  {
    id: 7,
    title: "Software Engineer",
    company: "Google",
    location: "Accra, Ghana",
    date: "1d ago",
    salary: "$120,000",
    logo: require("./assets/flat-color-icons_google.png"),
    backgroundColor: "#5386E4",
  },
  {
    id: 8,
    title: "Product Manager",
    company: "Google",
    location: "Tema, Accra",
    date: "2d ago",
    salary: "$130,000",
    logo: require("./assets/flat-color-icons_google.png"),
    backgroundColor: "#04284A",
  },
  {
    id: 9,
    title: "Data Scientist",
    company: "Facebook",
    location: "Seattle, WA",
    date: "3d ago",
    salary: "$110,000",
    logo: require("./assets/Vector.png"),
    backgroundColor: "#5386E4",
  },
  {
    id: 10,
    title: "Software Engineer",
    company: "Facebook",
    location: "Accra, Ghana",
    date: "1d ago",
    salary: "$120,000",
    logo: require("./assets/Vector.png"),
    backgroundColor: "#04284A",
  },
  {
    id: 11,
    title: "Product Manager",
    company: "Facebook",
    location: "Tema, Accra",
    date: "2d ago",
    salary: "$130,000",
    logo: require("./assets/Vector.png"),
    backgroundColor: "#04284A",
  },
];

const popularJobs = [
  {
    id: 1,
    title: "Jr Executive",
    company: "Burger King",
    location: "Los Angels, Us",
    
    salary: "$96,000/y",
    logo: require("./assets/burger-king.png"),
    
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Beats",
    location: "Florida, US",
    
    salary: "$84,000/y",
    logo: require("./assets/beats.png"),
    
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Facebook",
    location: "Seattle, WA",
    
    salary: "$110,000/y",
    logo: require("./assets/Vector-3.png"),
    
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Burger King",
    location: "Florida, US",
    
    salary: "$120,000/y",
    logo: require("./assets/burger-king.png"),
    
  },
  {
    id: 5,
    title: "Product Manager",
    company: "Beats",
    location: "New York , US",
    
    salary: "$130,000/y",
    logo: require("./assets/beats.png"),
    
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "Google",
    location: "Seattle, WA",
    
    salary: "$110,000/y",
    logo: require("./assets/flat-color-icons_google.png"),
    
  },
  {
    id: 7,
    title: "Software Engineer",
    company: "Google",
    location: "Accra, Ghana",
    
    salary: "$120,000/y",
    logo: require("./assets/flat-color-icons_google.png"),
    
  },
  {
    id: 8,
    title: "Product Manager",
    company: "Facebook",
    location: "Florida, US",
    
    salary: "$130,000/y",
    logo: require("./assets/flat-color-icons_google.png"),
    
  },
  {
    id: 9,
    title: "Data Scientist",
    company: "Burger King",
    location: "Seattle, WA",
    
    salary: "$110,000/y",
    logo: require("./assets/burger-king.png"),
    
  },
  {
    id: 10,
    title: "Software Engineer",
    company: "Beats",
    location: "Accra, Ghana",
    
    salary: "$120,000/y",
    logo: require("./assets/beats.png"),
    
  },
  {
    id: 11,
    title: "Product Manager",
    company: "Burger King",
    location: "Accra, Ghana",
    
    salary: "$130,000/y",
    logo: require("./assets/burger-king.png"),
    
  },
];

//With this I use collect the name and email info that was passed in the Login screen and the display it in the homescreen.
const HomeScreen = ({route}) => {
  const{name, email}= route.params;

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
        <View
          style={{
            marginTop: 60,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{email}</Text>
          </View>
          <Image
            style={{ marginRight: 10 }}
            source={require("./assets/Ellipse.png")}
          />
          {/* Add the red dot to signify a notification */}
        </View>
        <Search />
        <View style={styles.feature}>
          <Text style={styles.title2}>Featured Jobs</Text>
          <Text style={{ color: "#95969D" }}>See all</Text>
        </View>

        {/* Use the flatlist to render the card component. The styling of the card is done in the card.js(the card component) */}
        <FlatList
          data={featuredJobs}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity>
            <Card
              title={item.title}
              company={item.company}
              location={item.location}
              salary={item.salary}
              logo={item.logo}
              backgroundColor={item.backgroundColor}
            />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />

        <View style={styles.feature}>
          <Text style={styles.title2}>Featured Jobs</Text>
          <Text style={{ color: "#95969D" }}>See all</Text>
        </View>

        <View>
          <FlatList
            data= {popularJobs}
            //vertical
            showsVerticalScrollIndicator={false}

            renderItem={({item})=>(
              <TouchableOpacity>
                <PopularCard
                title = {item.title}
                company={item.company}
                salary={item.salary}
                location={item.location}
                logo={item.logo}
              />
              </TouchableOpacity>
              
            )}
             

          />
        </View>
      </View>
     
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFD",
  },
  title: {
    color: "#0D0D26",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    textAlign: "left",
  },
  subtitle: {
    color: "#AFB0B6",
    fontSize: 20,
    fontWeight: "400px",
    marginLeft: 20,
    marginBottom: 30,
  },
  title2: {
    color: "#0D0D26",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
  },
  feature: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    textAlign: "center",
  },
});

export default HomeScreen;
