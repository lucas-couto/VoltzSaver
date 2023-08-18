import { Pressable } from 'react-native'

import { TVOn } from './On'
import { TVOff } from './Off'

import { useGame } from '../../../../hooks/useGame'
import { IEnergyItems } from '../../../../interface/EnergyItems'

export function TV({ isLightOn, setIsLightsOn, isPersonHere }: IEnergyItems) {
  const { score, setScore } = useGame()

  const disableEnergy = () => {
    if (!isPersonHere) {
      setScore(score + 1)
      setIsLightsOn(false)
    }
  }

  if (isLightOn) return (
    <Pressable onPress={disableEnergy}>
      <TVOn />
    </Pressable>
  )

  return <TVOff />

}