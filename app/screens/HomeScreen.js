import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, FlatList, ActivityIndicator, Text } from "react-native";
import { SearchBar } from "react-native-elements";

import AirportCard from "../components/AirportCard";
import firebase from "../config/firebase";
import handleDelete from "../utils/handleDelete";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Screen from "../components/Screen";
import Separator from "../components/Separator";

import themeContext from "../config/themeContext";

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Setting a timer"]); // TODO : Remove when fixed - warning cuz on android, timer is being set for 5min ~? firestore/database issue

export default function HomeScreen({ navigation }) {
  const theme = useContext(themeContext); //context for dark theme

  /* Database Code Starts */
  const db = firebase.firestore();
  const [initialAirportData, setInitialAirportData] = useState(); //for pulling out data from firestore

  const [loading, setLoading] = useState(false); //for activity indicator of flatlist ???

  const [searchText, setSearchText] = useState(""); //for the searchBar text

  useEffect(() => {
    const unsubscribe = db
      .collection("Airports")
      .orderBy("Name")
      .onSnapshot((querySnapshot) => {
        const initialAirportData = querySnapshot.docs.map(
          (documentSnapshot) => {
            return {
              ...documentSnapshot.data(),
            };
          }
        );
        setInitialAirportData(initialAirportData);
        setAirportList(initialAirportData);

        if (loading) {
          setLoading(false);
        }
      });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }
  /* Database Code Ends */

  /* For Searching Flatlist */
  const [airportList, setAirportList] = useState();

  const searchAirport = (searchText) => {
    if (searchText === "") {
      setInitialAirportData((data) => airportList);
    }
    const queryAirport = airportList.filter((query) => {
      let Code = query.Code.toLowerCase();
      let Name = query.Name.toLowerCase();
      let airport = searchText.toLowerCase();
      return Code.indexOf(airport) > -1 || Name.indexOf(airport) > -1;
    });

    return setInitialAirportData((airportList) => queryAirport);
  };

  /* FlatList Search Ends */
  return (
    <Screen style={[styles.screen, { backgroundColor: theme.background }]}>
      {/* <AppTextInput icon="search" placeholder="Enter Airport Code" /> */}

      <SearchBar
        placeholder="Enter Airport Code or Name"
        editable={true}
        platform={Platform.OS === "android" ? "android" : "ios"}
        containerStyle={{
          marginLeft: 10,
          marginRight: 10,
          borderColor: Platform.OS === "android" ? "#333" : "white",
          borderRadius: 10,
          width: "90%",
          backgroundColor: theme.card,
        }}
        inputContainerStyle={{
          backgroundColor: theme.card,
        }}
        inputStyle={{ fontSize: 15, color: theme.color }}
        cancelButtonProps={{ color: "tomato" }}
        clearIcon={{ color: theme.color }}
        cancelIcon={{ color: theme.color }} //backspace key on android search bar
        searchIcon={{ color: theme.color }}
        value={searchText}
        onChangeText={(searchText) => {
          setSearchText(searchText);
          searchAirport(searchText);
        }}
      />
      <Separator />
      <FlatList
        data={initialAirportData}
        keyExtractor={(message) => message.Code}
        ListEmptyComponent={
          <Text
            style={{
              fontSize: 15,
              color: theme.color,
              fontWeight: "bold",
              paddingTop: 15,
            }}
          >
            No airports found
          </Text>
        }
        renderItem={({ item }) => (
          <AirportCard
            name={item.Name}
            code={item.Code}
            onPress={() => navigation.navigate("Airport Details", item)}
            renderLeftActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    // backgroundColor: colors.background,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 0 : 10,
  },
});
