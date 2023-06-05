import { Dispatch, SetStateAction } from "react";

import { informations } from "../configs";
import { IComponentPerson } from "../interface";
import { speedTime, sleep, setPersonLocalization } from "./index";

interface IGameLogic {
  componentsPerson: IComponentPerson[];
  setRound: Dispatch<SetStateAction<number>>;
  setIsGameStarted: Dispatch<SetStateAction<boolean>>;
  setIsGameFinished: Dispatch<SetStateAction<boolean>>;
}

export async function gameLogic(componentFunctionParams: IGameLogic) {
  const { amountRounds, timePerRound, speedPerRound } = informations;
  const { componentsPerson, setRound, setIsGameStarted, setIsGameFinished } =
    componentFunctionParams;

  let time = 0;
  let round = 0;

  // FAZENDO CONTAGEM DO TEMPO DE CADA ROUND
  setInterval(() => {
    time++;
  }, 1000);

  // CONTAGEM DOS ROUNDS QUE JA PASSARAM
  while (round != amountRounds) {
    let speed = speedTime(speedPerRound[round]);

    // MUDAR DE CENARIO QUANDO ACABAR O TEMPO DO ROUND
    while (time < timePerRound) {
      await sleep(speed);
      setPersonLocalization(componentsPerson);
    }

    time = 0;
    round++;
    setRound(round);
  }

  setIsGameStarted(false);
  setIsGameFinished(true);
}
