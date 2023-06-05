import { useState, useEffect } from 'react'
import { FlatList, ActivityIndicator } from 'react-native'

import { getScores } from '../../utils/getScores'

import { Score } from './components/Score'

import { Container, Content, Title } from './styles'

export function Historic() {

  const [scores, setScores] = useState([])

  async function getAllScores() {
    const allScores = await getScores()
    setScores(allScores)
  }

  useEffect(() => {
    getAllScores()
  }, [])

  return (
    <Container>
      <Content>
        {scores && scores.length ? (
          <FlatList
            data={scores}
            renderItem={Score} />
        ) : <Title>Não existe histórico de jogos anteriores</Title>}
      </Content>
    </Container>
  )
}