import { StyleSheet } from "react-native";

let Styles = StyleSheet.create({
  previewSearchersCard: {
    backgroundColor: "#D4D5D6",
    flexDirection: "row",
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
  },
  infoPositionCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  divisor: {
    backgroundColor: "#dc3545",
    width: 5,
    height: "auto",
    marginRight: 5,
  },
  textCityName: {
    fontSize: 18,
    fontWeight: "700",
  },
});

export default Styles;
