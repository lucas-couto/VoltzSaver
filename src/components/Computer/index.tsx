import { Dispatch, SetStateAction, useContext } from 'react'
import { Pressable } from 'react-native'

import { ComputerOn } from './On'
import { ComputerOff } from './Off'

import { useGame } from '../../hooks/useGame'

interface IComputer{
  isLightOn: boolean
  setIsLightsOn: Dispatch<SetStateAction<boolean>>
}

export function Computer({ isLightOn, setIsLightsOn }: IComputer) {

  const { score, setScore } = useGame()

  if (isLightOn) return (
    <Pressable onPress={() => {
      setScore(score + 1)
      setIsLightsOn(false)
    }}>
      <ComputerOn />
    </Pressable>
  )

  return <ComputerOff />



}