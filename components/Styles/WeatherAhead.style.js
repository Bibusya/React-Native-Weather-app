import { StyleSheet } from "react-native";

export default StyleSheet.create({
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherAheadItemContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00000033",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    padding: 20,
    marginLeft: 10,
  },
  day: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#3c3c44",
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
    fontWeight: "200",
    marginBottom: 15,
  },
  temp: {
    fontSize: 16,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
  wrapper: {
    flexDirection: "row",
    display: "flex",
    alignItems: "flex-end",
  },
});
