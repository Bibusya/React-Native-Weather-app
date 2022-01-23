import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    marginTop: 15,
  },
  time: {
    fontSize: 45,
    color: "white",
    fontWeight: "100",
  },
  date: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "300",
    color: "#eee",
  },
  location: {
    fontSize: 20,
    color: "white",
    fontWeight: "100",
  },
  weatherItemContainer: {
    backgroundColor: "#18181b99",
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
  },
  weatherItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weatherItemTitleValue: {
    color: "#eee",
    fontSize: 14,
    fontWeight: "100",
  },
});
