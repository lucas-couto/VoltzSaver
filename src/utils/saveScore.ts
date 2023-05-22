import AsyncStorage from '@react-native-async-storage/async-storage';
import { getScoreDate } from './getScoreDate';

export async function saveScore(score: number) {

  let values = await AsyncStorage.getItem("@scores")

  let date = getScoreDate()
  let data = { date, score }

  if (!values) {
    const stringData = JSON.stringify([data])
    await AsyncStorage.setItem("@scores", stringData)
    return
  }

  let arrayOfScores = JSON.parse(values)

  if (arrayOfScores.length < 10) arrayOfScores.push(data)
  else
    for (let i = 0; i < arrayOfScores.length; i++)
      if (arrayOfScores[i].score < score) arrayOfScores[i] = data


  arrayOfScores = JSON.stringify(arrayOfScores)
  await AsyncStorage.setItem("@scores", arrayOfScores)

}