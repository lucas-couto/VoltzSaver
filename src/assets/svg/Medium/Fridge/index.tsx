import { Pressable } from 'react-native'

import { FridgeOn } from './On'
import { FridgeOff } from './Off'

import { useGame } from '../../../../hooks/useGame'
import { IEnergyItems } from '../../../../interface/EnergyItems'


export function Fridge({ isLightOn, setIsLightsOn, isPersonHere }: IEnergyItems) {

  const { score, setScore } = useGame()

  const disableEnergy = () => {
    if (!isPersonHere) {
      setScore(score + 1)
      setIsLightsOn(false)
    }
  }

  if (isLightOn) return (
    <Pressable onPress={disableEnergy}>
      <FridgeOn />
    </Pressable>
  )

  return <FridgeOff />

}