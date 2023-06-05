import { Pressable } from 'react-native'

import { ComputerOn } from './On'
import { ComputerOff } from './Off'

import { useGame } from '../../hooks/useGame'
import { IEnergyItems } from '../../interface/EnergyItems'


export function Computer({ isLightOn, setIsLightsOn, isPersonHere }: IEnergyItems) {

  const { score, setScore } = useGame()

  const disableEnergy = () => {
    if (!isPersonHere) {
      setScore(score + 1)
      setIsLightsOn(false)
    }
  }

  if (isLightOn) return (
    <Pressable onPress={disableEnergy}>
      <ComputerOn />
    </Pressable>
  )

  return <ComputerOff />



}