import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AirportAddScreen from "../screens/AirportAddScreen";
import colors from "../config/colors.js";

const Stack = createStackNavigator();
const AirportNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Add Airport"
      component={AirportAddScreen}
      options={{
        headerTitleAlign: "center",
        headerTintColor: colors.white,
        headerStyle: { backgroundColor: colors.header },
      }}
    />
  </Stack.Navigator>
);

export default AirportNavigator;
