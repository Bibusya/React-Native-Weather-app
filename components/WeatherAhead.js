import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from "./Styles/WeatherAhead.style";
// date/time converter. it can Parse and display dates in any timezone.
import moment from "moment-timezone";

function WeatherAhead({ data }) {
  return (
    <View style={styles.wrapper}>
      {data && data.length > 0 ? (
        data.map(
          (data, idx) =>
            idx !== 0 && <WeatherAheadItem key={idx} forecastItem={data} />
        )
      ) : (
        <View />
      )}
    </View>
  );
}

const WeatherAheadItem = ({ forecastItem }) => {
  const img = {
    uri:
      "http://openweathermap.org/img/wn/" +
      forecastItem.weather[0].icon +
      "@2x.png",
  };
  return (
    <View style={styles.weatherAheadItemContainer}>
      <Text style={styles.day}>
        {moment(forecastItem.dt * 1000).format("ddd")}
      </Text>
      <Image source={img} style={styles.weatherIcon} />
      <Text style={styles.temp}>
        Night {" " + forecastItem.temp.night}&#176;C
      </Text>
      <Text style={styles.temp}>Day {" " + forecastItem.temp.day}&#176;C</Text>
    </View>
  );
};

export default WeatherAhead;
