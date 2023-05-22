import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { View } from "react-native";

import { Computer } from '../../../../components/Computer/index'
import { Lamp } from "../../../../components/Lamp";

import { Container, Image, Lamp1, Computer1 } from './styles'

interface IRoom{
  isPersonHere: boolean
  setIsPersonHere: Dispatch<SetStateAction<boolean>> 
}

export function Room({ isPersonHere, setIsPersonHere }: IRoom) {

  const [hasLightLamp, setHasLightLamp] = useState(isPersonHere)
  const [hasLightComputer, setHasLightComputer] = useState(isPersonHere)

  useEffect(() => {
    setHasLightLamp(isPersonHere)
    setHasLightComputer(isPersonHere)
  }, [isPersonHere])

  useEffect(() => {
    if (!hasLightLamp && !hasLightComputer)
      setIsPersonHere(false)
  }, [hasLightLamp, hasLightComputer])

  return (
    <Container>
      <Image source={require('../../../../assets/roomBackground.jpg')}>
        <View>
          <Lamp1>
            <Lamp isLightOn={hasLightLamp} setIsLightsOn={setHasLightLamp} />
          </Lamp1>
          <Computer1>
            <Computer isLightOn={hasLightComputer} setIsLightsOn={setHasLightComputer} />
          </Computer1>
        </View>
      </Image>
    </Container>
  )
}