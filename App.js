import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import DateTime from "./components/DateTime";
import WeatherScroll from "./components/WeatherScroll";
const API_KEY = "ed22376acc12f19fa4609c54bd815dab";
import { Picker } from "@react-native-picker/picker";
//Background Pic
const img = {
  uri: "https://images.unsplash.com/photo-1548268770-66184a21657e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80",
};

export default function App() {
  const [data, setData] = useState({});
  const [pickerValue, setPickerValue] = useState("Tbilisi");

  const cityPickerHandler = (event) => {
    if (event == "Tbilisi") {
      fetchDataFromApi("41.7234944", "44.7840256");
    }
    if (event == "Batumi") {
      fetchDataFromApi("41.6168", "41.6367");
    }
    if (event == "Kutaisi") {
      fetchDataFromApi("42.2662", "42.7180");
    }
  };

  //Getting Weather Data from API
  //Default is set to Tbilisi
  useEffect(() => {
    fetchDataFromApi("41.7234944", "44.7840256");
  }, []);

  const fetchDataFromApi = (latitude, longitude) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={img}>
        <Picker
          style={styles.dropDown}
          selectedValue={pickerValue}
          onValueChange={(itemValue) => {
            setPickerValue(itemValue);
            cityPickerHandler(itemValue);
          }}
        >
          <Picker.Item label="Tbilisi" value="Tbilisi" />
          <Picker.Item label="Batumi" value="Batumi" />
          <Picker.Item label="Kutaisi" value="Kutaisi" />
        </Picker>
        <DateTime current={data.current} timezone={data.timezone} />
        <WeatherScroll weatherData={data.daily} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  dropDown: {
    width: 300,
    height: 60,
    marginTop: 30,
    marginLeft: 5,
    color: "white",
    backgroundColor: "#81bee3",
    borderRadius: 10,
  },
});
