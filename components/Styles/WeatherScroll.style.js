import { StyleSheet } from "react-native";

export default StyleSheet.create({
  weatherIcon: {
    width: 150,
    height: 150,
  },
  scrollView: {
    flex: 0.4,
    backgroundColor: "#18181bcc",
    padding: 30,
  },
  currentTempContainer: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#00000033",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#eee",
    borderRadius: 10,
    borderWidth: 1,
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
  innerContainer: {
    paddingRight: 40,
  },
});
