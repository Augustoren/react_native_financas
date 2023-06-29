import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#FFF"
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },
  date: {
    color: "#aaaaaa",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
  },
  income: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "bold",
  },
  expenses: {
    fontSize: 16,
    color: "#e74c3c",
    fontWeight: "bold",
  },
  skeleton: {
    marginTop: 6,
    width: 90,
    height: 15,
    backgroundColor: "#aaaaaa",
    borderRadius: 8
  },
});
