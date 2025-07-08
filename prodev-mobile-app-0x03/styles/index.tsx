import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    position: "relative",
  },
  navGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 11,
  },
  largeText: {
    fontSize: 40,
    fontWeight: 700,
  },
  smallText: {
    fontSize: 12,
    color: "#7E7B7B",
  },
  placeholderText: {
    fontSize: 18,
    color: "#7E7B7B",
    marginBottom: 7,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    borderColor: "#7E7B7B",
    paddingHorizontal: 10,
  },
  passwordGroup: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: "#7E7B7B",
  },
  formGroup: {
    marginTop: 40,
  },
});
