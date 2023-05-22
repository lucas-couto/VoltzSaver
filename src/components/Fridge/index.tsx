import { Dispatch, SetStateAction } from 'react'
import { Pressable } from 'react-native'

import { FridgeOn } from './On'
import { FridgeOff } from './Off'

import { useGame } from '../../hooks/useGame'

interface IFridge{
  isLightOn: boolean
  setIsLightsOn: Dispatch<SetStateAction<boolean>>
}

export function Fridge({ isLightOn, setIsLightsOn }: IFridge) {

  const { score, setScore } = useGame()

  if (isLightOn) return (
    <Pressable onPress={() => {
      setScore(score + 1)
      setIsLightsOn(false)
    }}>
      <FridgeOn />
    </Pressable>
  )

  return <FridgeOff />

}