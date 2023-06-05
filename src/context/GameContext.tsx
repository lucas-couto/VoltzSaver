import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState
} from 'react';


interface IGameContext {
  round: number
  setRound: Dispatch<SetStateAction<number>>

  score: number
  setScore: Dispatch<SetStateAction<number>>

  isGameStarted: boolean
  setIsGameStarted: Dispatch<SetStateAction<boolean>>

  isGameFinished: boolean
  setIsGameFinished: Dispatch<SetStateAction<boolean>>

  isRoomHasLight: boolean 
  setIsRoomHasLight: Dispatch<SetStateAction<boolean>>

  isGarageHasLight: boolean 
  setIsGarageHasLight: Dispatch<SetStateAction<boolean>>

  isLivingRoomHasLight: boolean
  setIsLivingRoomHasLight: Dispatch<SetStateAction<boolean>>

  isRoomHasAlert: boolean 
  setIsRoomHasAlert: Dispatch<SetStateAction<boolean>>

  isGarageHasAlert: boolean 
  setIsGarageHasAlert: Dispatch<SetStateAction<boolean>>

  isLivingRoomHasAlert: boolean
  setIsLivingRoomHasAlert: Dispatch<SetStateAction<boolean>>
}

export const GameContext = createContext({} as IGameContext)

export const GameProvider = ({ children }: PropsWithChildren) => {

  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isGameFinished, setIsGameFinished] = useState(false)

  const [isRoomHasLight, setIsRoomHasLight] = useState(false)
  const [isGarageHasLight, setIsGarageHasLight] = useState(false)
  const [isLivingRoomHasLight, setIsLivingRoomHasLight] = useState(false)

  const [isRoomHasAlert, setIsRoomHasAlert] = useState(false)
  const [isGarageHasAlert, setIsGarageHasAlert] = useState(false)
  const [isLivingRoomHasAlert, setIsLivingRoomHasAlert] = useState(false)

  return (
    <GameContext.Provider value={{
      round, setRound,
      score, setScore,
      isGameStarted, setIsGameStarted,
      isGameFinished, setIsGameFinished,
      isRoomHasLight, setIsRoomHasLight,
      isGarageHasLight, setIsGarageHasLight,
      isLivingRoomHasLight, setIsLivingRoomHasLight,
      isRoomHasAlert, setIsRoomHasAlert,
      isGarageHasAlert, setIsGarageHasAlert,
      isLivingRoomHasAlert, setIsLivingRoomHasAlert
    }}>
      {children}
    </GameContext.Provider>
  )
}