import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { View } from "react-native";

import { Lamp } from '../../../../components/Lamp'
import { Fridge } from '../../../../components/Fridge'

import { Container, Image, Lamp1, Lamp2, Fridge1 } from './styles'

interface IGarage{
  isPersonHere: boolean
  setIsPersonHere: Dispatch<SetStateAction<boolean>> 
}

export function Garage({ isPersonHere, setIsPersonHere }: IGarage) {

  const [hasLightLamp1, setHasLightLamp1] = useState(isPersonHere)
  const [hasLightLamp2, setHasLightLamp2] = useState(isPersonHere)
  const [hasLightFridge, setHasLightFridges] = useState(isPersonHere)

  useEffect(() => {
    setHasLightLamp1(isPersonHere)
    setHasLightLamp2(isPersonHere)
    setHasLightFridges(isPersonHere)
  }, [isPersonHere])

  useEffect(() => {
    if (!hasLightLamp1 && !hasLightLamp2 && !hasLightFridge)
      setIsPersonHere(false)
  }, [hasLightLamp1, hasLightLamp2, hasLightFridge])


  return (
    <Container>
      <Image source={require('../../../../assets/garageBackground.png')}>
        <View>
          <Lamp1>
            <Lamp isLightOn={hasLightLamp1} setIsLightsOn={setHasLightLamp1} />
          </Lamp1>
          <Lamp2>
            <Lamp isLightOn={hasLightLamp2} setIsLightsOn={setHasLightLamp2} />
          </Lamp2>
          <Fridge1>
            <Fridge isLightOn={hasLightFridge} setIsLightsOn={setHasLightFridges} />
          </Fridge1>
        </View>
      </Image>
    </Container>
  )
}