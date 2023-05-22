import { Dispatch, SetStateAction, useContext } from 'react'
import { Pressable } from 'react-native'

import { LampOn } from './On'
import { LampOff } from './Off'

import { useGame } from '../../hooks/useGame'

interface ILamp{
  isLightOn: boolean
  setIsLightsOn: Dispatch<SetStateAction<boolean>>
}

export function Lamp({ isLightOn, setIsLightsOn }: ILamp) {
  
  const { score, setScore } = useGame()

  if (isLightOn) return (
    <Pressable onPress={() => {
      setScore(score + 1)
      setIsLightsOn(false)
    }}>
      <LampOn />
    </Pressable>
  )

  return <LampOff />

}