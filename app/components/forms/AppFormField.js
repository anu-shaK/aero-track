import React from "react";
import { TextInput } from "react-native";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";

export default function AppFormField({ name, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <>
      <TextInput
        //placeholder="Enter Airport Code"
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
