import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import WeatherAhead from "./WeatherAhead";
import styles from "./Styles/WeatherScroll.style";
// date/time converter. it can Parse and display dates in any timezone.
import moment from "moment";

function WeatherScroll({ weatherData }) {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <CurrentTemp
        data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}
      />
      <WeatherAhead data={weatherData} />
    </ScrollView>
  );
}

const CurrentTemp = ({ data }) => {
  if (data && data.weather) {
    const img = {
      uri:
        "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png",
    };
    return (
      <View style={styles.currentTempContainer}>
        <Image source={img} style={styles.weatherIcon} />
        <View style={styles.innerContainer}>
          <Text style={styles.day}>
            {moment(data.dt * 1000).format("dddd")}
          </Text>
          <Text style={styles.temp}>Night {" " + data.temp.night}&#176;C</Text>
          <Text style={styles.temp}>Day {" " + data.temp.day}&#176;C</Text>
        </View>
      </View>
    );
  } else {
    return <View></View>;
  }
};

export default WeatherScroll;
