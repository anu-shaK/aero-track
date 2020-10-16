import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import AirportDetails from "../screens/AirportDetails";
import colors from "../config/colors.js";

const Stack = createStackNavigator();
const AirportListingNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="My Airports"
      component={HomeScreen}
      options={{
        headerTitleAlign: "center",
        headerTintColor: colors.white,
        headerStyle: { backgroundColor: colors.header },
      }}
    />
    <Stack.Screen
      name="Airport Details"
      component={AirportDetails}
      options={{
        headerTitleAlign: "center",
        headerTintColor: colors.white,
        headerStyle: { backgroundColor: colors.header },
      }}
    />
  </Stack.Navigator>
);

export default AirportListingNavigator;
