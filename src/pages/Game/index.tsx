import { useEffect, useState } from "react";
import { Alert, Button, Pressable } from "react-native";
import { Audio } from 'expo-av';
import { ArrowLeft } from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

import { Room } from "./components/Room";
import { Garage } from "./components/Garage";
import { GameStart } from "./components/GameStart";
import { LivingRoom } from "./components/LivingRoom";

import { useGame } from "../../hooks/useGame";
import { saveScore, gameLogic } from "../../utils";

import audio from '../../assets/audios/audio.m4a'

import {
  Container,
  Content,
  Body,
  Scenarios,
  Divider
} from "./styles";

const AsyncAlert = async () => new Promise((resolve) => {
  Alert.alert(
    "Atenção!", "Existem comodos gastando energia sem ninguem la dentro!",
    [
      {
        text: 'OK',
        onPress: () => {
          resolve('YES');
        },
      },
    ],
    { cancelable: false },
  );
});

export function Game() {

  const navigation: any = useNavigation()
  const {
    setRound,
    round,
    score,
    setScore,
    isGameStarted,
    setIsGameStarted,
    isGameFinished,
    setIsGameFinished,
    isRoomHasLight,
    isGarageHasLight,
    isLivingRoomHasLight,
    setIsGarageHasAlert,
    setIsLivingRoomHasAlert,
    setIsRoomHasAlert,
  } = useGame()

  const [sound, setSound] = useState<Audio.Sound>();
  const [verifyRooms, setVerifyRooms] = useState(false)
  const [isRoomHasPerson, setIsRoomHasPerson] = useState(false)
  const [isGarageHasPerson, setIsGarageHasPerson] = useState(false)
  const [isLivingRoomHasPerson, setIsLivingRoomHasPerson] = useState(false)

  async function verify() {
    if (isRoomHasPerson && (isGarageHasLight && isLivingRoomHasLight)){
      setIsRoomHasAlert(false)
      setIsGarageHasAlert(true)
      setIsLivingRoomHasAlert(true)
    }
    else if (isLivingRoomHasPerson && (isGarageHasLight && isRoomHasLight)){
      setIsRoomHasAlert(true)
      setIsGarageHasAlert(true)
      setIsLivingRoomHasAlert(false)
    }
    else if (isGarageHasPerson && (isLivingRoomHasLight && isRoomHasLight)){
      setIsRoomHasAlert(true)
      setIsGarageHasAlert(false)
      setIsLivingRoomHasAlert(true)
    }

    setVerifyRooms(false)
  }

  async function finishGame() {
    Alert.alert("Fim de jogo!", `Você fez ${score} pontos!`)
    await clearSound()
    if (score) await saveScore(score)
    setIsGameFinished(true)
    setIsGameStarted(false)
    setRound(0)
    setScore(0)
    navigation.navigate('Initial')
  }

  function backToMenu() {
    Alert.alert(
      'Sair do jogo',
      'Tem serteza que quer sair do jogo?',
      [
        {
          text: 'Sim', onPress: async () => {
            await clearSound()
            setIsGameFinished(true)
            setIsGameStarted(false)
            setRound(0)
            setScore(0)
          }
        },
        { text: 'Cancelar' }
      ]
    )
  }

  let componentFunctionParams = {
    componentsPerson: [
      {
        value: isRoomHasPerson,
        useStateFunction: setIsRoomHasPerson,
        hasLight: isRoomHasLight
      },
      {
        value: isLivingRoomHasPerson,
        useStateFunction: setIsLivingRoomHasPerson,
        hasLight: isGarageHasLight
      },
      {
        value: isGarageHasPerson,
        useStateFunction: setIsGarageHasPerson,
        hasLight: isLivingRoomHasLight
      }
    ],
    setRound,
    setIsGameStarted,
    setIsGameFinished,
  }

  async function playSound(round: number) {
    const { sound } = await Audio.Sound.createAsync(audio);
    setSound(sound);
    await sound.setStatusAsync({ isLooping: true })
    await sound.playAsync();
  }

  async function clearSound() {
    await sound?.stopAsync()
    await sound?.unloadAsync();
  }

  async function audioLogic() {
    if (round !== 0)
      await clearSound()
    await playSound(round)
  }

  async function audioSpeed(){
    const rate = 1 + (round * 0.1)
    await sound?.setStatusAsync({ rate })
  }


  useEffect(() => {
    const seconds = 10
    const miliseconds = seconds * 1000

    const interval = setInterval(() => {
      setVerifyRooms(true)
    }, miliseconds)

    return () => clearInterval(interval)
  }, [])
  
  useEffect(() => {
    setRound(0)
    setScore(0)
  }, [])

  useEffect(() => {
    if (isGameStarted){
      gameLogic(componentFunctionParams)
      audioLogic()
    }
  }, [isGameStarted])

  useEffect(() => {
    if (isGameFinished){
      finishGame()
      clearSound()
    }
  }, [isGameFinished])

  useEffect(() => {
    audioSpeed()
  }, [round])

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={backToMenu}>
          <ArrowLeft
            style={{
              alignSelf: "flex-start",
            }}
            width={70}
            height={30}
            color="#000" />
        </Pressable>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    if (verifyRooms) verify()
  }, [verifyRooms])

  return (
    <Container>
      <Content>
        {isGameStarted ? null : <GameStart setIsGameStarted={setIsGameStarted} />}
        <Body>
          <Scenarios>
            <Room isPersonHere={isRoomHasPerson} />
            <Divider />
            <LivingRoom isPersonHere={isLivingRoomHasPerson} />
            <Divider />
            <Garage isPersonHere={isGarageHasPerson} />
          </Scenarios>
        </Body>
      </Content>
    </Container>
  )
}