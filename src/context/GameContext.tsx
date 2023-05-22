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
}

export const GameContext = createContext({} as IGameContext)

export const GameProvider = ({ children }: PropsWithChildren) => {

  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)

  return (
    <GameContext.Provider value={{
      round, setRound,
      score, setScore
    }}>
      {children}
    </GameContext.Provider>
  )
}