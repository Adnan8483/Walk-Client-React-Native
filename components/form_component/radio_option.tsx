import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import {
  TextInput,
  Text,
  RadioButton,
} from "react-native-paper";
import storageKeys from '../../constants/AppDefaults';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RadioOption = ({ question, options }) => {


  const [selectedRadioOption, setselectedRadioOption] = useState('')

  

  return (
    <View style={styles.container}>
      <Text
        style={styles.question}
        variant="titleMedium" >
        {question}
      </Text>
      <FormRadioButton options={options} />
    </View>
  );
}

const FormRadioButton = ({ options }) => {
  const [radioSelectedOption, setSelectedRadioOption] = React.useState('');

  console.log("redio clicked: ", radioSelectedOption)


  // useEffect(() => {

  //   AsyncStorage.getItem(storageKeys.COMPLETE_JSON)
  //     .then((COMPLETEJSON) => {
  //       if (COMPLETEJSON != null) {

  //         COMPLETEJSON.map((house) => {
  //           if (house.address == address) {}
  //         })


  //         if (objWithIdIndex > -1) {
  //           COMPLETEJSON.splice(objWithIdIndex, 1);
  //           COMPLETEJSON.push(homeArray);
  //           AsyncStorage.setItem(storageKeys.COMPLETE_JSON, COMPLETEJSON);
  //         } else {
  //           COMPLETEJSON.push(homeArray);
  //           AsyncStorage.setItem(storageKeys.COMPLETE_JSON, COMPLETEJSON);
  //         }
  //       }    
  //     })
  // }, [])

  return (

    <RadioButton.Group
      onValueChange={(newValue) => setSelectedRadioOption(newValue)}
      value={radioSelectedOption}
    >
      {options.map((option: string) => {
        return (
          <View style={{flexDirection: 'row'}}>
            <RadioButton.Android  key={option} color='rgb(15, 107, 245)' value={option} />
            <TouchableOpacity onPress={() => setSelectedRadioOption(option)}>
            <Text style={{fontSize:17, marginTop:8}}>{option}</Text>
            </TouchableOpacity>
          </View>
        );
      })}

    </RadioButton.Group>
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
    marginBottom: 10
  },
})


