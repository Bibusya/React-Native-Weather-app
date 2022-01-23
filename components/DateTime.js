import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./Styles/DateTime.style";
// date/time converter. it can Parse and display dates in any timezone.
import moment from "moment-timezone";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const WeatherItem = ({ title, value, unit }) => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemTitleValue}>{title}</Text>
      <Text style={styles.weatherItemTitleValue}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

function DateTime({ current, timezone }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? "pm" : "am";

      setTime(
        (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes) +
          " " +
          ampm
      );

      setDate(days[day] + ", " + date + " " + months[month]);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.time}>{time}</Text>
        </View>
        <View>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.weatherItemContainer}>
          <WeatherItem
            title="Humidity"
            value={current ? current.humidity : "Not Available"}
            unit="%"
          />
          <WeatherItem
            title="Pressure"
            value={current ? current.pressure : "Not Available"}
            unit=" hPa"
          />
          <WeatherItem
            title="Sunrise"
            value={
              current
                ? moment.tz(current.sunrise * 1000, timezone).format("HH.mm")
                : "Not Available"
            }
            unit="am"
          />
          <WeatherItem
            title="Sunset"
            value={
              current
                ? moment.tz(current.sunset * 1000, timezone).format("HH:mm")
                : "Not Available"
            }
            unit="pm"
          />
        </View>
      </View>
    </View>
  );
}

export default DateTime;
