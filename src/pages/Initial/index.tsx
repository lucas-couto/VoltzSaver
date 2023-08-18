import { Alert, BackHandler, Dimensions } from "react-native";

import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

import { useGame } from "../../hooks/useGame";

import {
  Container,
  Content,
  Top,
  Title,
  GameButton,
  HistoricButton,
  ButtonText,
  Buttons,
  SignoutButton,
  Body,
} from "./styles";

export function Initial() {
  const navigation: any = useNavigation();
  const { setRound, setScore, setIsGameStarted, setIsGameFinished } = useGame();

  function startGame() {
    navigation.navigate("Game");
    setIsGameStarted(false);
    setIsGameFinished(false);
    setScore(0);
    setRound(0);
  }

  function exitGame() {
    Alert.alert("Sair", "Gostaria de sair do jogo?", [
      { text: "Sim", onPress: () => BackHandler.exitApp() },
      { text: "Não", style: "cancel" },
    ]);
  }

  return (
    <Container>
      <Content>
        <Top>
          <Title>Bem vindo ao VoltzSaver</Title>
        </Top>
        <Body>
          <Lottie
            source={require("../../assets/json/initalPageVideo.json")}
            autoPlay
            loop
          />
        </Body>
        <Buttons>
          <GameButton onPress={startGame}>
            <ButtonText>Iniciar jogo</ButtonText>
          </GameButton>
          <HistoricButton onPress={() => navigation.navigate("HowToPlay")}>
            <ButtonText>Como jogar?</ButtonText>
          </HistoricButton>
          <HistoricButton onPress={() => navigation.navigate("Historic")}>
            <ButtonText>Ver Histórico</ButtonText>
          </HistoricButton>
          <SignoutButton onPress={exitGame}>
            <ButtonText>Sair</ButtonText>
          </SignoutButton>
        </Buttons>
      </Content>
    </Container>
  );
}
