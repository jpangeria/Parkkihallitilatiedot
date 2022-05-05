import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 5
  },
  flex: {
    flexDirection: "row"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 5
  },
  searchTime: {
    marginLeft: 15
  },
  cards: {
    marginLeft: 5
  },
  name: {
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5
  },
  space: {
    marginLeft: 10
  },
  hrLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    width: "95%",
  },
});