import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,  
  TouchableHighlight,
  Animated,
  KeyboardAvoidingView,
} from "react-native";
import EnhancedImageViewing from "react-native-image-viewing/dist/ImageViewing";
import {  
  Text,
} from "react-native-paper";
import { Tabs, TabScreen } from "react-native-paper-tabs";
const { height, width } = Dimensions.get("window");
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../utils/Dimensions";
import { LinearScale } from "./form_component/linear_scale";
import { ShortAnswer } from "./form_component/short_answer";
import { RadioOption } from "./form_component/radio_option";
import { CheckBoxs } from "./form_component/check_box";
import storageKeys from "../constants/AppDefaults";
import AsyncStorage from "@react-native-async-storage/async-storage";
const HouseDetails = ({ route }) => {
  const { address, image, voter_info, form_data } = route.params;
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

//[ {address: 'adv' {},{}}, {address: 'adv' {},{}}, {address: 'adv' {},{}} ]

  // useEffect(() => {
  //   var homeArray = {'address': address};
  //   AsyncStorage.getItem(storageKeys.COMPLETE_JSON)
  //     .then((COMPLETEJSON) => {
  //       if (COMPLETEJSON != null) {
  //         const objWithIdIndex = COMPLETEJSON.findIndex((house) => house.address === address);
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
    <KeyboardAvoidingView style={styles.container} behavior={'padding' }>

      <EnhancedImageViewing
        images={[{ uri: image }]}
        imageIndex={0}
        visible={isFullScreen}
        onRequestClose={() => setIsFullScreen(false)}
      />
      <Animated.View
        style={{
          opacity: scrollY.interpolate({
            inputRange: [0, 2], // Change 200 to the desired scroll threshold
            outputRange: [240, 0],
            extrapolate: "clamp",
          }),
          height: scrollY.interpolate({
            inputRange: [0, 2], // Change 200 to the desired scroll threshold
            outputRange: [200, 0],
            extrapolate: "clamp",
          }),
        }}
      >
        <TouchableHighlight onPress={() => setIsFullScreen(true)}>
          <ImageBackground source={{ uri: image }} style={styles.image}>
            <View
              style={{
                width: WINDOW_WIDTH,
                height: 40,
                alignSelf: "flex-end",
                // paddingLeft: 20,
                // paddingRight: 20,
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <Text
                variant="headlineSmall"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                {address}
              </Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
      </Animated.View>
      <Tabs
        style={{
          backgroundColor: 'rgb(15, 107, 245)',
          shadowRadius: 10,
          borderWidth: 0,
        }}
        theme={{colors: {primary:'white'},}}
        
      >
        <TabScreen label="Form">
          <ScrollView
            style={styles.scrollView}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: false }
            )}
          >
            <View style={{ height: 10 }} />
            <View style={{ marginBottom: 10 }}>
              {
                form_data.flatMap((formDaata) => {
                  const component = formDaata.formData
                  switch (component.type) {
                    case 'Linear Scale':
                      return (
                        <LinearScale question={component.question} />
                      );
                      break;
                    case 'Multiple Choice':
                      return (<RadioOption question={component.question} options={component.options} />);
                      break;
                    case 'Checkboxes':
                      return (<CheckBoxs question={component.question} options={component.options} />);
                      break;
                    case 'Short Answer':
                      return (<ShortAnswer question={component.question} />);
                      break;
                  }
                })
              }
            </View>
          </ScrollView>
        </TabScreen>
        <TabScreen label="Details" >
          <ScrollView style={styles.scrollView}>
            <View style={{ height: 10 }} />
            <View style={{ marginBottom: 10 }}>
              {voter_info.map((res: any, ind: any) => (
                <View key={ind} style={styles.formBox}>
                  <Text
                    style={{
                      marginLeft: 5,
                      marginRight: 5,
                      marginTop: 5,
                      fontWeight: "bold",
                    }}
                    variant="titleLarge"
                  >
                    {res.name}
                  </Text>
                  <Text
                    style={{ marginLeft: 5, marginRight: 5, marginBottom: 5 }}
                    variant="titleSmall"
                  >
                    {res.age + " years old"}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </TabScreen>
      </Tabs>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({  
  formBox: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    borderColor: "lightgray",
    marginVertical: 5,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
    height: WINDOW_HEIGHT,
  },
  row: {
    padding: 16,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    resizeMode: "contain",
    flexDirection: "row",
    maxHeight: WINDOW_HEIGHT,
    aspectRatio: 2,
    // borderBottomWidth: 5,
    // borderBottomColor: "#fff",
  },
});
export default HouseDetails;





