import React, { useContext, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import * as Yup from "yup";

import { AppForm, AppFormField, MenuOptions } from "../components/forms";

import colors from "../config/colors";
import handleAdd from "../utils/handleAdd";
import ListSeparator from "../components/ListSeparator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import Separator from "../components/Separator";
import themeContext from "../config/themeContext";

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
  };

  const addField = () => {
    const key = 1 + Math.random();
    let temp = (
      <View key={key}>
        <View style={styles.newFieldContainer}>
          <View style={styles.textInput}>
            <TextInput
              autoCapitalize="words"
              placeholder="Enter Field"
              style={[
                styles.value,
                {
                  backgroundColor: theme.card,
                  color: theme.color,
                },
              ]}
            />
            <TextInput
              autoCapitalize="words"
              placeholder="Enter Value"
              style={[
                styles.value,
                { backgroundColor: theme.card, color: theme.color },
              ]}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.closeButton,
              {
                backgroundColor: theme.card,
                borderColor: theme.cardShadow,
              },
            ]}
            onPress={(event) => removeField(event, key)}
          >
            <MaterialCommunityIcons name="close" size={15} color={colors.add} />
          </TouchableOpacity>
        </View>
        <ListSeparator />
      </View>
    );

    setNewValue([...newValue, temp]);
  };
  ref.current = newValue;

  let val = { wifi: 123 };

  return (
    <Screen style={[styles.screen, { backgroundColor: theme.background }]}>
      <>
        {/* Formik  */}
        <AppForm
          initialValues={{ code: "", name: "" }}
          onSubmit={(values, { resetForm }) => {
            handleAdd(values); // to add to firestore -> in utils
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
              <View style={[styles.save]}>
                <MenuOptions title="Save" />
              </View>
            </View>
          </ScrollView>
        </AppForm>
      </>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "space-between",

    flex: 1,
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

    fontWeight: "bold",

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
