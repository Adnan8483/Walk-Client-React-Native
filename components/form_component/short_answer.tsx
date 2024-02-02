import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Text } from "react-native-paper";

export const ShortAnswer = ({ question }) => {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.question} variant="titleMedium">
        {question}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Type Here"
        textColor="black"
        cursorColor={"black"}
        activeOutlineColor="black"
        activeUnderlineColor="black"
      />
    </View>
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
  input: {
    height: 30,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",
    backgroundColor: "#f1f1f1",
    padding: 10,
  },
});
