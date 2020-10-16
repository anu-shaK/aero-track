//Working Back Up of AirportAddScreen.js
// September 11, 2020

import React, { useContext, useState, useRef } from "react";
import { StyleSheet, View, TouchableOpacity, Button } from "react-native";

import * as Yup from "yup";

import { AppForm, AppFormField, MenuOptions } from "../components/forms";

import AppButton from "../components/AppButton";
//import AirportOptionValue from "../components/AirportOptionValue";
import colors from "../config/colors";
import handleAdd from "../utils/handleAdd";
import ListSeparator from "../components/ListSeparator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import Separator from "../components/Separator";
import themeContext from "../config/themeContext";
import AddNewField from "../components/AddNewField";
import { ScrollView } from "react-native-gesture-handler";

//Validation Scheme for Yup

const validationSchema = Yup.object().shape({
  code: Yup.string().required().min(1).max(4).label("Airport Code"),
  name: Yup.string().required().label("Airport Name"),
});

export default function AirportAddScreen() {
  const [newValue, setNewValue] = useState([]);
  const ref = useRef(newValue);
  const theme = useContext(themeContext);

  const removeField = (event, index) => {
    let array = [...ref.current];
    let result = [];
    result = array.filter((m) => {
      return m.key != index;
    });
    ref.current = result;
    setNewValue((value) => result);
    console.log(result.length);
  };

  const addField = () => {
    const key = 1 + Math.random();
    let temp = (
      <Button
        key={key}
        title="Delete"
        onPress={(event) => removeField(event, key)}
      />
    );

    setNewValue([...newValue, temp]);
  };
  ref.current = newValue;
  console.log(newValue.length);

  return (
    <Screen style={[styles.screen, { backgroundColor: theme.background }]}>
      {/* <ScrollView contentContainerStyle={styles.scrollView}> */}
      <>
        {/* Formik  */}
        <AppForm
          initialValues={{ code: "", name: "" }}
          onSubmit={(values, { resetForm }) => {
            handleAdd(values);
            resetForm();
          }}
          validationSchema={validationSchema}
        >
          <View style={styles.container}>
            <AppFormField
              name="code"
              autoCapitalize="characters"
              placeholder="Enter Airport Code"
              style={[
                styles.value,
                {
                  backgroundColor: theme.card,
                  color: theme.color,
                },
              ]}
            />

            <AppFormField
              name="name"
              autoCapitalize="words"
              placeholder="Enter Airport Name"
              style={[
                styles.value,
                { backgroundColor: theme.card, color: theme.color },
              ]}
            />
            <Separator />

            {/* <AirportOptionValue title="Wifi" exists="false" value="" />
              <AirportOptionValue
                title="Building PassKey"
                exists="false"
                value=""
              />
              <AirportOptionValue
                title="VHF Frequency"
                exists="false"
                value=""
              /> */}
          </View>
          <ScrollView>
            {newValue}
            <TouchableOpacity
              style={[
                styles.iconBorder,
                { backgroundColor: theme.card, borderColor: theme.addCircle },
              ]}
              onPress={() => addField()}
            >
              <MaterialCommunityIcons
                style={styles.icon}
                color={colors.add}
                name="plus"
                size={25}
              />
            </TouchableOpacity>
            <View style={styles.buttons}>
              {/* <View style={styles.add}>
                <AppButton title="Add" onPress={() => addField()} />
              </View> */}
              <View style={[styles.save]}>
                <MenuOptions title="Save" />
              </View>
            </View>
          </ScrollView>

          {/* <View style={styles.newField}>
              <TextInput placeholder="Enter New Field" style={styles.value} />
              <TextInput placeholder="Enter New Value" style={styles.value} />
            </View> */}
        </AppForm>
      </>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    // justifyContent: "flex-start",
    justifyContent: "space-between",
    //backgroundColor: colors.background,
    flex: 1,
  },
  scrollView: {
    flex: 1,
    justifyContent: "space-between",
  },
  container: { marginTop: Platform.OS === "android" ? 0 : 20 },
  iconBorder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    margin: 10,
    alignSelf: "center",
    elevation: 5,
    borderWidth: 1,
  },
  value: {
    width: "70%",
    fontSize: 15,
    // color: colors.medium,
    fontWeight: "bold",
    // backgroundColor: colors.white,
    // marginLeft: 15,
    alignSelf: "center",
    margin: 5,
    padding: Platform.OS === "android" ? 5 : 10,
    shadowColor: colors.medium,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 10,
  },
  add: {
    alignSelf: "center",
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
    marginLeft: 30,
  },
  save: {
    alignSelf: "center",
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  newField: {
    width: "100%",
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 30,
  },
  buttons: {
    flexDirection: "row",
  },
  newFieldContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    alignSelf: "center",
    elevation: 5,
    borderWidth: 1,
    shadowColor: colors.medium,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
});
