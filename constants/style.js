import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 2,
    color: "black",
    justifyContent: "flex-start"
  },
  header: {
    flex: 1,
    margin: 18,
    textAlign: 'center',
  },

  txtInput: {
    width: 250,
    height: 48,
    margin: 12,
    paddingLeft: 20,
    backgroundColor: "#fff",
    borderRadius: 25,
    ...elevationShadowStyle(5),
  },
  inputGroup: {
    flexDirection: 'row',
    width: '100%',
  },
  input: {
    height: 48,
    width: '90%',
    backgroundColor: 'gray',
    padding: 6,
  },
  brand: {
    fontSize: 60,
    color: "green",
    textAlign: 'center',
  },
  button: {
    ...elevationShadowStyle(5),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    width: 250,
    height: 48,
    margin: 25,
    padding: 2,
    borderRadius: 25
  },
  card: {
    ...elevationShadowStyle(2),
    backgroundColor: '#fff',
    marginLeft: 18,
    marginRight: 18,
    marginTop: 18,
    marginBottom: 6,
    padding: 12,
    borderRadius: 6,
    flexDirection: 'row'
  },
  image: {
    margin: 18,
  },
  doctorName: {
    fontSize: 24,
    color: 'green',
  },
  wText: {
    color: '#fff'
  }
});


function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}