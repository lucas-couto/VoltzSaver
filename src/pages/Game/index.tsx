import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Room } from "./components/Room";
import { Garage } from "./components/Garage";
import { GameStart } from "./components/GameStart";
import { LivingRoom } from "./components/LivingRoom";


import { useGame } from "../../hooks/useGame";
import { saveScore, gameLogic } from "../../utils";

import {
  Container,
  Content,
  Top,
  Back,
  BackButton,
  BackTitle,
  Informations,
  InformationTitle,
  Body,
  Scenarios,
  Divider
} from "./styles";

export function Game() {

  const navigation: any = useNavigation()
  const { round, setRound, score, setScore } = useGame()

  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isGameFinished, setIsGameFinished] = useState(false)
  const [isRoomHasPerson, setIsRoomHasPerson] = useState(false)
  const [isGarageHasPerson, setIsGarageHasPerson] = useState(false)
  const [isLivingRoomHasPerson, setIsLivingRoomHasPerson] = useState(false)

  async function finishGame() {
    alert(`O jogo acabou! Você fez ${score} pontos!`)
    await saveScore(score)
    navigation.navigate('Initial')
  }

  function backToMenu() {
    Alert.alert(
      'Sair do jogo',
      'Tem serteza que quer sair do jogo?',
      [
        {
          text: 'Sim', onPress: async () => {
            setIsGameFinished(true)
            setIsGameStarted(false)
            navigation.navigate('Initial')
          }
        },
        { text: 'Cancelar' }
      ]
    )
  }

  const componentFunctionParams = {
    componentsPerson: [
      { value: isRoomHasPerson, useStateFunction: setIsRoomHasPerson },
      { value: isLivingRoomHasPerson, useStateFunction: setIsLivingRoomHasPerson },
      { value: isGarageHasPerson, useStateFunction: setIsGarageHasPerson }
    ],
    setRound,
    setIsGameStarted,
    setIsGameFinished,
  }
  

  useEffect(() => {
    setRound(0)
    setScore(0)
  }, [])

  useEffect(() => {
    if (isGameStarted)
      gameLogic(componentFunctionParams)
  }, [isGameStarted])

  useEffect(() => {
    if (isGameFinished)
      finishGame()
  }, [isGameFinished])

  return (
    <Container>
      <Content>
        {isGameStarted ? null : <GameStart setIsGameStarted={setIsGameStarted} />}
        <Top>
          <Back>
            <BackButton onPress={backToMenu}>
              <BackTitle>Menu</BackTitle>
            </BackButton>
          </Back>
          <Informations>
            <InformationTitle>Round: {round}</InformationTitle>
            <InformationTitle>Pontuação: {score}</InformationTitle>
          </Informations>
        </Top>
        <Body>
          <Scenarios>
            <Room
              isPersonHere={isRoomHasPerson}
              setIsPersonHere={setIsRoomHasPerson} />
            <Divider />
            <LivingRoom
              isPersonHere={isLivingRoomHasPerson}
              setIsPersonHere={setIsLivingRoomHasPerson} />
            <Divider />
            <Garage
              isPersonHere={isGarageHasPerson}
              setIsPersonHere={setIsGarageHasPerson} />
          </Scenarios>
        </Body>
      </Content>
    </Container>
  )
}