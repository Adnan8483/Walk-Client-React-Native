import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { exampleList } from "./ExampleList";
import HouseDetails from "./components/HouseDetails";
import NavigationScreen from "./components/NavigationScreen";
import { Button, IconButton } from "react-native-paper";
import { Scanner } from "./components/Scanner";
import AsyncStorage from "@react-native-async-storage/async-storage";
import storageKeys from "./constants/AppDefault";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { height, width } = Dimensions.get("window");


const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerTitle: "", headerTransparent: true }}
      >
        <Stack.Screen
          name="scanner"
          component={Scanner}
          options={({ navigation, route }) => ({
            // headerTitle: (props) => <LogoTitle {...props} />,
            // Add a placeholder button without the `onPress` to avoid flicker
            headerLeft: () => <Button children="back" />,
            headerRight: () => <Button children="skip" />,
          })}
        />
        <Stack.Screen
          name="navigation"
          component={NavigationScreen}
          initialParams={{ walkRoute: exampleList }}
          options={({ navigation }) => ({
            headerRight: () => (
              <>
                <Button
                  labelStyle={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: 20,
                    textAlignVertical: "center",
                  }}
                  icon="share-variant"
                  children="Export"
                  onPress={ async() => {
                    await AsyncStorage.removeItem(storageKeys.DATABASE_URL).then(
                      navigation.navigate("scanner")
                    )

                  }
                  }
                  buttonColor="#fff"
                />
              </>
            ),
            headerLeft: () => (
              <Button
                labelStyle={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: 20,
                  textAlignVertical: "center",
                }}
                icon="chevron-left"
                children="Back"
                onPress={() => navigation.goBack()}
                buttonColor="#fff"
              />
            ),
          })}
        />
        <Stack.Screen
          name="details"
          component={HouseDetails}
          options={{ headerShown: false }}
          // options={({ navigation, route }) => ({
          //   // headerTitle: (props) => <LogoTitle {...props} />,
          //   // Add a placeholder button without the `onPress` to avoid flicker
          //   headerLeft: () => <Button children="back" />,
          //   headerRight: () => <Button children="skip" />,
          // })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
