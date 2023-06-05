import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import Lottie from "lottie-react-native";

import { Lamp } from "../../../../components/Lamp";
import { Fridge } from "../../../../components/Fridge";

import { Container, Image, Lamp1, Lamp2, Fridge1 } from "./styles";
import { useGame } from "../../../../hooks/useGame";
import { Alert } from "../../../../components/Alert";

interface IGarage {
  isPersonHere: boolean;
}

export function Garage({ isPersonHere }: IGarage) {
  const { isGarageHasAlert, setIsGarageHasAlert, setIsGarageHasLight } =
    useGame();

  const [hasLightLamp1, setHasLightLamp1] = useState(isPersonHere);
  const [hasLightLamp2, setHasLightLamp2] = useState(isPersonHere);
  const [hasLightFridge, setHasLightFridges] = useState(isPersonHere);

  useEffect(() => {
    if (isPersonHere) {
      setHasLightLamp1(isPersonHere);
      setHasLightLamp2(isPersonHere);
      setHasLightFridges(isPersonHere);
      setIsGarageHasLight(true);
    }
  }, [isPersonHere]);

  useEffect(() => {
    if (!hasLightLamp1 && !hasLightLamp2 && !hasLightFridge)
      setIsGarageHasLight(false);
  }, [hasLightLamp1, hasLightLamp2, hasLightFridge]);

  useEffect(() => {
    if (isGarageHasAlert) setTimeout(() => setIsGarageHasAlert(false), 3000);
  }, [isGarageHasAlert]);

  return (
    <Container>
      <Alert showAlert={isGarageHasAlert} />
      <Image
        source={require("../../../../assets/images/garageBackground.png")}
      >
        {isPersonHere ? (
          <Lottie
            source={require("../../../../assets/json/person.json")}
            autoPlay
            loop
            style={{
              position: "absolute",
              top: 30,
              left: 50,
              width: 120,
              height: 120,
              zIndex: 10000,
            }}
          />
        ) : null}
        <View>
          <Lamp1>
            <Lamp
              isLightOn={hasLightLamp1}
              setIsLightsOn={setHasLightLamp1}
              isPersonHere={isPersonHere}
            />
          </Lamp1>
          <Lamp2>
            <Lamp
              isLightOn={hasLightLamp2}
              setIsLightsOn={setHasLightLamp2}
              isPersonHere={isPersonHere}
            />
          </Lamp2>
          <Fridge1>
            <Fridge
              isLightOn={hasLightFridge}
              setIsLightsOn={setHasLightFridges}
              isPersonHere={isPersonHere}
            />
          </Fridge1>
        </View>
      </Image>
    </Container>
  );
}
