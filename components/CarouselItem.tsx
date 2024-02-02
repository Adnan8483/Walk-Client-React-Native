import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { Dimensions, Image, StyleSheet, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import { RectButton, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { height, width } = Dimensions.get("window");

const CarouselItem = ({ address, image, voter_info, form_data, navigation }) => {
  const number = address.slice(0, address.indexOf(" "));
  const street = address.slice(address.indexOf(" ") + 1);

  const getFormDetails = async (address) => {
    try {
      const jsonValue = await AsyncStorage.getItem(address);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      return null;
    }
    
  };
  return (
    <RectButton  
      onPress={() => {
        const details = getFormDetails(address);
        console.log(`Details: ${details}`);
        navigation.navigate("details", { address, image, voter_info, form_data });
      }}
      style={styles.item}
      underlayColor='#e6e6e6' 
    >
      <>
      <Image source={{ uri: image }} style={styles.image} />
      <View
        style={{
          flex: 2,
          paddingLeft: 20,
          paddingRight: 20,
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Text variant="displayMedium" style={{ fontWeight: "bold" }}>
          {number}
        </Text>

        <Text
          variant="headlineSmall"
          adjustsFontSizeToFit
          minimumFontScale={0.5}
          numberOfLines={1}
          style={{}}
        >
          {street}
        </Text>
      </View>
      </>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: width - 40,
    borderColor: "white",
    //borderWidth: 10,
    borderRadius: 25,
    margin: 20,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    borderWidth: StyleSheet.hairlineWidth,
    marginLeft: 15,
    borderRadius: 15,
    borderColor: "steelblue",
    maxHeight: "100%",
    aspectRatio: 1,
    margin: 5,
  },
});

export default CarouselItem;
