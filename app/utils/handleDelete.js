import { Alert } from "react-native";
import firebase from "../config/firebase";

const handleDelete = (message, airport) => {
  const db = firebase.firestore();
  if (message.Code != null) {
    Alert.alert("Alert", "Are you sure you want to delete?", [
      {
        text: "Cancel",
        onPress: () => null,
      },
      {
        text: "Yes",
        onPress: () => {
          db.collection("Airports")
            .doc(message.Code)
            .delete()
            .then(function () {
              Alert.alert("Alert", "Airport Deleted");
            })
            .catch(function (error) {
              console.log("error", error);
            });
        },
      },
    ]);
  } else {
  }
};

export default handleDelete;
