import * as React from "react";
import { useRef, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Platform,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Route } from "../ExampleList";
import { bearing, House } from "../Geo";
import CarouselItem from "./CarouselItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import storageKeys from "../constants/AppDefault";
import { createCompleteEmptyJson, getCompletJson } from "../constants/AppData";

const { height, width } = Dimensions.get("window");

const NavigationScreen = ({
  route,
  navigation,
}: {
  route: { params: { walkRoute: Route; scanData: string } };
  navigation: any;
}) => {
  const { walkRoute, scanData } = route.params;
  // console.log("scan DATA;- ",scanData)
  const [HousesSlide, setHousesSlide] = useState([]);
  const [Nodes, setNodes] = useState([]);
  const [FormData, setFormData] = useState([]);
  const [DataUrl, setDataUrl] = useState("");

  let HouseData = [];



  React.useEffect(() => {

  

    const emptyArry = getCompletJson();
    console.log("check data  all keys:-",emptyArry)

    // Retrieve a value from AsyncStorage
    AsyncStorage.getItem(storageKeys.DATABASE_URL)
      .then((value) => {
        // console.log("asynch data fech url: " + value);
        setDataUrl(value);
      })
      .catch((error) => console.log(error));

    // console.log("***1st Select data DataUrl:- ",DataUrl);
  }, [DataUrl]);

  React.useEffect(() => {
    // console.log("*** scanData:- ", scanData);

    const fetchData = async () => {
      const response = await fetch(scanData);
      const data = await response.json();

      //setting 'house' variable array of house's data.
      HouseData = data.blocks.flatMap((segment: any) =>
        segment.houses.map((house: any) => {
          return {
            address: house.address,
            //for creating coordinates object manually to matching key lat = latitude and lon = longitude for Api data Inside 'return'.
            coordinates: {
              latitude: house.coordinates.lat,
              longitude: house.coordinates.lon,
            },
            nodes: segment.nodes.map((res: any, indx: number) => ({
              coordinates: {
                latitude: res.lat,
                longitude: res.lon,
              },
            })),
            voter_info: house.voter_info,
          };
        })
      );

      setHousesSlide(HouseData);

      // setting 'nodes' variable array of nodes's coordinates.
      const nodesData = data.blocks.flatMap((segment: any) =>
        segment.nodes.map((res: any) => {
          return {
            coordinates: {
              latitude: res.lat,
              longitude: res.lon,
            },
          };
        })
      );

      setNodes(nodesData);

      const FormObj = data.form.flatMap((fData) => {
        return {
          formData: fData,
        };
      });

      setFormData(FormObj);
    };

    fetchData();
  }, [DataUrl]);
  //END.

  const mapView = useRef(null);
  const markerOffset = useSharedValue(0);

  const markerStyle = useAnimatedStyle(() => {
    // console.log("Running on the UI thread");
    return {
      paddingBottom: 0,
    };
  });
  const [carouselIndex, setCarouselIndex] = useState(0);

  let houseOutside = HousesSlide;

  // console.log(" **Platform Test :- ",Platform.OS === "android" ? "its Android @": "its Iphone #");

  return (
    <PaperProvider theme={DefaultTheme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <MapView
        //followsUserLocation

        mapType="standard"
        showsUserLocation
        maxZoomLevel={20}
        //minZoomLevel={12}
        showsPointsOfInterest={false}
        userInterfaceStyle="light"
        showsBuildings
        style={styles.map}
        ref={mapView}
        onRegionChange={async () => {
          const camera = await mapView.current.getCamera();
          markerOffset.value = 100 / (camera.altitude / 100);
          // console.log(camera);
        }}
      >
        {/* make overall route */}
        <Polyline
          strokeWidth={15}
          strokeColor="skyblue"
          coordinates={Nodes.map((node) => node.coordinates)}
        />
        <Polyline
          strokeWidth={10}
          strokeColor="dodgerblue"
          coordinates={Nodes.map((node) => node.coordinates)}
        />
        {/* highlight current segment */}
        <Polyline
          strokeWidth={15}
          strokeColor="cyan"
          coordinates={
            HousesSlide.length
              ? HousesSlide[carouselIndex].nodes.map(
                  (node: any) => node.coordinates
                )
              : Nodes.map((node) => node.coordinates)
          }
        />
        {HousesSlide.map((house, index) => {
          return (
            <Marker key={house.address} coordinate={house.coordinates}>
              <Animated.View style={markerStyle}>
                <Icon
                  name="map-marker-outline"
                  size={index === carouselIndex ? 60 : 30}
                  color={index === carouselIndex ? "blue" : "skyblue"}
                />
              </Animated.View>
            </Marker>
          );
        })}
      </MapView>
      <SafeAreaView style={styles.carouselStyle}>
        <GestureHandlerRootView>
          <Carousel
            // loop={false}
            vertical={false}
            height={width / 2.5}
            width={width}
            style={{ width }}
            data={HousesSlide}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 70,
            }}
            renderItem={({ item }) => {
              // console.log("-------------------------------------------");
              // console.log("Item::- ",item);
              return (
                <CarouselItem
                  key={item.address}
                  image={`https://picsum.photos/seed/${
                    Math.floor(Math.random() * 1000) + 1
                  }/300`}
                  address={item.address}
                  voter_info={item.voter_info}
                  form_data={FormData}
                  navigation={navigation}
                />
              );
            }}
            pagingEnabled
            onSnapToItem={(index) => {
              // console.log(" @# onSnap houseOutside::- ",houseOutside);
              // console.log(" ## test Turnary ::- ",!HousesSlide ? HouseData[index] : HousesSlide[index]);
              setCarouselIndex(index);
              const house =
                Platform.OS === "android"
                  ? HouseData[index]
                  : HousesSlide[index];
              const firstNode = house.nodes[0];
              const lastNode = house.nodes[house.nodes.length - 1];

              const angle = bearing(
                firstNode.coordinates,
                lastNode.coordinates
              );
              mapView.current.animateCamera({
                center:
                  Platform.OS === "android"
                    ? HouseData[index].coordinates
                    : HousesSlide[index].coordinates,
                altitude: 250,
                pitch: 60,
                heading: angle,
              });
            }}
          />
        </GestureHandlerRootView>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  map: {
    width,
    height,
  },
  carouselStyle: {
    paddingTop: StatusBar.currentHeight,
    flex: 0,
    height: "20%",
    position: "absolute",
    bottom: 50,
    flexDirection: "column",
    justifyContent: "flex-end",
    elevation: 5,
  },
});

export default NavigationScreen;
