import { StyleSheet } from "react-native";

let Styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingRight: 10,
    // paddingBottom: 300,
    backgroundColor: "#FFF",
  },
  loading: {
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  titleInput: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  boxInputCityOfName: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#FFF",
    borderColor: "#D4D5D6",
    marginTop: 10,
    marginBottom: 10,
  },
  inputCityOfName: {
    paddingLeft: 5,
    paddingRight: 5,
    margin: 10,
    fontSize: 20,
  },
  boxButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  textButtonSubmit: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#dc3545",
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  textTitlePreviews: {
    fontSize: 25,
    fontWeight: "700",
  },
});

export default Styles;
