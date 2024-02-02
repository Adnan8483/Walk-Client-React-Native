import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import OutlineButton from "./design_component/OutlineButtonQrCode";
import { Button, Dialog, IconButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import { Image } from "react-native";
import OutlineButtonQrCode from "./design_component/OutlineButtonQrCode";
import OutlineButtonUrl from "./design_component/OutlineButtonUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import storageKeys from "../constants/AppDefault";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Scanner = ({ navigation }) => {
  // const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [EnterUrl, setEnterUrl] = useState("");

  console.log("** EnterUrl value :- ", EnterUrl);

  const handleSkipButton = async () => {
    //get data URL in DATABASE_URL key.

    try {
      const urlGetValu = await AsyncStorage.getItem(storageKeys.DATABASE_URL);
      return urlGetValu != null
        ? navigation.navigate("navigation", { scanData: urlGetValu })
        : alert("Dont have Data URL");
    } catch (error) {
      // error reading value
      console.log("Skip Error: ", error);
    }

    // navigation.navigate("navigation", { scanData: data });
  };

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerLeft: () =>
        scanned ? (
          <Button
            labelStyle={{
              fontWeight: "bold",
              color: "black",
              fontSize: 20,
              textAlignVertical: "center",
            }}
            icon="chevron-left"
            children="Back"
            onPress={() => setScanned(false)}
            buttonColor="#fff"
          />
        ) : null,
      headerRight: () => (
        <>
          <Button
            labelStyle={{
              fontWeight: "bold",
              color: "black",
              fontSize: 20,
              textAlignVertical: "center",
            }}
            onPress={() => handleSkipButton()}
            buttonColor="#fff"
          >
            Skip
            <Ionicons
              name="chevron-forward"
              size={20}
              color="black"
              style={{ marginRight: 10 }}
            />
          </Button>
        </>
      ),
    });
  }, [navigation, scanned]);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  useEffect(() => {
    if (isFocused) {
      setScanned(false);
    }
  }, [isFocused]);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(false);

    //set data URL in DATABASE_URL key.
    AsyncStorage.setItem(storageKeys.DATABASE_URL, data);
    navigation.navigate("navigation", { scanData: data });
  };

  const handleBarCodeScanError = (error) => {
    console.error(error);
    alert("An error occurred while scanning the barcode. Please try again.");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleSubmitInputURL = () => {
    AsyncStorage.setItem(storageKeys.DATABASE_URL, EnterUrl);
    navigation.navigate("navigation", { scanData: EnterUrl });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.topImage}
        source={require("../assets/VoteFalcon_logo.png")}
      />
      <OutlineButtonQrCode
        title="Scan QR Code"
        onPress={() => setScanned(true)}
      />
      <OutlineButtonUrl
        onPress={() => setModalVisible(true)}
        title="Enter URL"
      />
      {/* <TouchableOpacity style={styles.box} onPress={() => setScanned(false)}><Text style={styles.text}>Enter URL</Text></TouchableOpacity> */}

      {scanned && (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          onError={handleBarCodeScanError}
          style={StyleSheet.absoluteFillObject}
        />
      )}

      {modalVisible && (
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                {/* <Text style={styles.modalText}>Enter URL</Text> */}
                <TextInput
                  value={EnterUrl}
                  placeholder="Enter URL"
                  onChangeText={(e) => {
                    setEnterUrl(e);
                  }}
                  style={{ marginBottom: 10 }}
                />

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={handleSubmitInputURL}
                  >
                    <Text style={styles.textStyle}>Submit</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>

    // <View style={styles.container}>
    //   <Image
    //     source={require("../assets/VoteFalcon_logo.png")}
    //     style={styles.image}
    //   />
    //   <OutlineButtonQrCode
    //     title="Scan QR Code"
    //     onPress={() => setScanned(true)}
    //   />
    //   <OutlineButtonUrl title="Enter URL" />
    //   {/* <Button title={'Tap to Scan Again'} onPress={() => setScanned(true)} /> */}
    //   {scanned && (
    //     <BarCodeScanner
    //       onBarCodeScanned={handleBarCodeScanned}
    //       onError={handleBarCodeScanError}
    //       style={StyleSheet.absoluteFillObject}
    //     />
    //   )}
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  outerCircle: {
    backgroundColor: "#ffffff",
    flexDirection: "column",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  topImage: {
    width: 200,
    height: 200,
    alignItems: "center",
    resizeMode: "contain",
    marginBottom: 80,
  },
  box: {
    padding: 5,
    borderWidth: 1,
    // borderRadius: "50%",
    borderColor: "gray",
    height: 60,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    marginBottom: 20,
  },
  text: {
    color: "rgb(15, 107, 245)",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    letterSpacing: 1.1,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  button: {
    borderRadius: 10,
    margin: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
