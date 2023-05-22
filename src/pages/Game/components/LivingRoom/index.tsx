import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { View } from "react-native";

import { TV } from "../../../../components/TV";
import { Lamp } from "../../../../components/Lamp";

import { Container, Image, Lamp1, Tv1 } from './styles'

interface ILivingRoom{
  isPersonHere: boolean
  setIsPersonHere: Dispatch<SetStateAction<boolean>> 
}

export function LivingRoom({ isPersonHere, setIsPersonHere }: ILivingRoom) {

  const [hasLightTV, setHasLightTV] = useState(isPersonHere)
  const [hasLightLamp, setHasLightLamp] = useState(isPersonHere)
  const [hasLightLamp2, setHasLightLamp2] = useState(isPersonHere)

  useEffect(() => {
    setHasLightTV(isPersonHere)
    setHasLightLamp(isPersonHere)
  }, [isPersonHere])

  useEffect(() => {
    if (!hasLightLamp && !hasLightLamp2 && !hasLightTV)
      setIsPersonHere(false)
  }, [hasLightLamp, hasLightLamp2, hasLightTV])


  return (
    <Container>
      <Image source={require('../../../../assets/livingRoomBackground.png')}>
        <View>
          <Lamp1>
            <Lamp isLightOn={hasLightLamp} setIsLightsOn={setHasLightLamp} />
          </Lamp1>
          <Tv1>
            <TV isLightOn={hasLightTV} setIsLightsOn={setHasLightTV} />
          </Tv1>
        </View>
      </Image>
    </Container>
  )
}