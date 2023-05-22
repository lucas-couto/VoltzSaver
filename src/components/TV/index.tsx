import { Dispatch, SetStateAction, useContext } from 'react'
import { Pressable } from 'react-native'

import { TVOn } from './On'
import { TVOff } from './Off'

import { useGame } from '../../hooks/useGame'

interface ITV{
  isLightOn: boolean
  setIsLightsOn: Dispatch<SetStateAction<boolean>>
}

export function TV({ isLightOn, setIsLightsOn }: ITV) {
  const { score, setScore } = useGame()

  if (isLightOn) return (
    <Pressable onPress={() => {
      setScore(score + 1)
      setIsLightsOn(false)
    }}>
      <TVOn />
    </Pressable>
  )

  return <TVOff />

}