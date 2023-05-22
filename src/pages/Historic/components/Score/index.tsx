import { View, Text } from "react-native";

import styles from './styles'

interface IScore{
  item: {
    date: string,
    score: number
  }
}

export function Score({ item }: IScore) {
  let { date, score } = item

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.date}>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.scoreText}>Pontuação: {score}</Text>
        </View>
      </View>
    </View>
  )

}