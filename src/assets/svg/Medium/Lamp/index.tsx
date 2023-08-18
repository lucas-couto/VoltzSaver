import { Pressable } from 'react-native'

import { LampOn } from './On'
import { LampOff } from './Off'

import { useGame } from '../../../../hooks/useGame'
import { IEnergyItems } from '../../../../interface/EnergyItems'


export function Lamp({ isLightOn, setIsLightsOn, isPersonHere }: IEnergyItems) {

  const { score, setScore } = useGame()

  const disableEnergy = () => {
    if (!isPersonHere) {
      setScore(score + 1)
      setIsLightsOn(false)
    }
  }

  if (isLightOn) return (
    <Pressable onPress={disableEnergy}>
      <LampOn />
    </Pressable>
  )

  return <LampOff />

}