import React, { useContext } from "react";
import { StyleSheet, FlatList, Clipboard } from "react-native";

import AirportData from "../components/AirportData";
import AppText from "../components/AppText";
import handleDelete from "../utils/handleDelete";
import ListItemCopyAction from "../components/ListItemCopyAction";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Screen from "../components/Screen";
import Separator from "../components/Separator";
import themeContext from "../config/themeContext";

//YellowBox.ignoreWarnings(["VirtualizedLists should never be nested"]); //TODO: Remove when fixed

export default function AirportDetails({ route }) {
  const theme = useContext(themeContext);
  const copyToClipboard = (value) => {
    Clipboard.setString(value);
  };

  // Extracting all airport details and storing in an object
  const airport = route.params;

  var j = 0;
  var airportDetails = [];
  for (var i in airport) {
    var obj = {
      ["id"]: j++,
      ["title"]: i,
      ["value"]: airport[i],
    };
    airportDetails.push(obj);
  }
  console.log(airportDetails);

  return (
    <Screen style={[styles.screen, { backgroundColor: theme.background }]}>
      <AppText style={[styles.head, { color: theme.color }]}>
        {airport.Code} - {airport.Name}
      </AppText>
      <Separator />
      <FlatList
        data={airportDetails}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) =>
          item.title != "Code" && item.title != "Name" ? (
            <AirportData
              title={item.title}
              value={item.value}
              renderRightActions={() => (
                <ListItemCopyAction
                  style={styles.copy}
                  onPress={() => copyToClipboard(item.value)}
                />
              )}
              renderLeftActions={() => (
                <ListItemDeleteAction
                  style={styles.delete}
                  onPress={() => handleDelete(item, airport.Code)}
                />
              )}
            />
          ) : null
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    // backgroundColor: colors.background,
    justifyContent: "center",
  },
  head: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
  },
  delete: {
    width: 50,
  },
  copy: {
    width: 50,
  },
});
