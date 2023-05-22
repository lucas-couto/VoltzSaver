import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: '10%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  content: {
    height: 70,
    width: '75%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
  date: {
    width: '100%',
    flex: 0.5,
    justifyContent: 'flex-start',
    padding: 10
  },
  score: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  dateText:{
    fontSize: 14,
    fontWeight:'bold',
    color: '#fff'
  }

});