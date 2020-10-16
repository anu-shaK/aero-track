import firebase from "firebase";
import { Alert } from "react-native";

const handleAdd = (values) => {
  const db = firebase.firestore();
  db.collection("Airports")
    .doc(values.code)
    .set({
      Code: values.code,
      Name: values.name,
    })
    .then(function () {
      Alert.alert("Alert", "Airport added successfully");
    })
    .catch(function (error) {
      Alert.alert("Alert", "Error adding airport");
      console.log("Error", error);
    });
};

export default handleAdd;
