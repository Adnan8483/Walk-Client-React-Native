import React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Modal,
  TouchableOpacity,
  Button,
} from "react-native";
import { Text } from "react-native-paper";
import { Checkbox } from "expo-checkbox";

export const CheckBoxs = ({ question }) => {
  const options = [
    { id: 1, txt: "first check", isChecked: false },
    { id: 2, txt: "second check", isChecked: false },
    { id: 3, txt: "third check", isChecked: false },
    { id: 4, txt: "fourth check", isChecked: false },
    { id: 5, txt: "fifth check", isChecked: false },
    { id: 6, txt: "sixth check", isChecked: false },
    { id: 7, txt: "seventh check", isChecked: false },
  ];

  const [checked, setChecked] = React.useState(false);

  console.log("Options:-", options);

  return (
    <View style={styles.container}>
      <Text style={styles.question} variant="titleMedium">
        {question}
      </Text>
      <View style={styles.wrapper}>
        <Checkbox
          value={checked}
          onValueChange={() => setChecked(!checked)}
          color={checked ? "#4630EB" : undefined}
        />
        <Text style={styles.text}>I have read and agreed with</Text>
      </View>
    </View>

    // <View style={styles.container}>
    //     <Text
    //         style={styles.question}
    //         variant="titleMedium" >
    //         {question}
    //     </Text>
    //     {options.map((option: string) => {
    //         return <Checkbox.Android
    //             status={checked ? "checked" : "unchecked"}
    //             onPress={() => {
    //                 setChecked(!checked);
    //             }}
    //         >
    //               <TouchableOpacity onPress={() =>  setChecked(!checked)}>
    //     <Text style={{fontSize:17, marginTop:8}}>{option}</Text>
    //     </TouchableOpacity>
    //         </Checkbox.Android>
    //     })}
    // </View>
  );
};

const FormCheckbox = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Checkbox.Item
      label={"label"}
      status={checked ? "checked" : "unchecked"}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.2,
    borderRadius: 10,
    padding: 10,
    borderColor: "black",
    marginVertical: 5,
  },
  question: {
    margin: 5,
    marginBottom: 10,
  },

  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 15,
  },
  text: {
    lineHeight: 30,
    marginLeft: 10,
  },
});
