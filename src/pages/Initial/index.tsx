import Lottie from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Content,
  Top,
  Title,
  Body,
  GameButton,
  HistoricButton,
  ButtonText,
  Buttons
} from "./styles";
import { useGame } from '../../hooks/useGame';

export function Initial() {

  const navigation: any = useNavigation()
  const {
    setRound,
    setScore,
    setIsGameStarted,
    setIsGameFinished
  } = useGame()

  function startGame() {
    navigation.navigate('Game')
    setIsGameStarted(false)
    setIsGameFinished(false)
    setScore(0)
    setRound(0)
  }

  return (
    <Container>
      <Content>
        <Lottie
          source={require('../../assets/json/initalPageVideo.json')}
          autoPlay loop
        />
        <Top>
          <Title>Bem vindo ao VoltzSaver</Title>
        </Top>
        <Body>
          <Buttons>
            <GameButton onPress={startGame}>
              <ButtonText>Iniciar jogo</ButtonText>
            </GameButton>
            <HistoricButton onPress={() => navigation.navigate('HowToPlay')}>
              <ButtonText>Como jogar?</ButtonText>
            </HistoricButton>
            <HistoricButton onPress={() => navigation.navigate('Historic')}>
              <ButtonText>Ver Histórico</ButtonText>
            </HistoricButton>
          </Buttons>
        </Body>
      </Content>
    </Container>
  )

}