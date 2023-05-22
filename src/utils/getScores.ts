import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getScores() {

  let scores = await AsyncStorage.getItem("@scores")
  if(!scores) return null

  const allScores =  JSON.parse(scores) || []
  return allScores
}