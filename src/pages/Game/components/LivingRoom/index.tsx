import { useState, useEffect } from "react";
import { View } from "react-native";
import Lottie from "lottie-react-native";

import { TV } from "../../../../components/TV";
import { Lamp } from "../../../../components/Lamp";
import { AlertComponent } from "../../../../components/AlertComponent";

import { useGame } from "../../../../hooks/useGame";

import { Container, Image, Lamp1, Tv1 } from "./styles";

interface ILivingRoom {
  isPersonHere: boolean;
}

export function LivingRoom({ isPersonHere }: ILivingRoom) {
  const {
    isLivingRoomHasAlert,
    setIsLivingRoomHasAlert,
    setIsLivingRoomHasLight,
  } = useGame();

  const [hasLightTV, setHasLightTV] = useState(isPersonHere);
  const [hasLightLamp, setHasLightLamp] = useState(isPersonHere);

  useEffect(() => {
    if (isPersonHere) {
      setHasLightTV(isPersonHere);
      setHasLightLamp(isPersonHere);
      setIsLivingRoomHasLight(true);
    }
  }, [isPersonHere]);

  useEffect(() => {
    if (!hasLightLamp && !hasLightTV)
      setIsLivingRoomHasLight(false);
  }, [hasLightLamp, hasLightTV]);

  useEffect(() => {
    if (isLivingRoomHasAlert)
      setTimeout(() => setIsLivingRoomHasAlert(false), 3000);
  }, [isLivingRoomHasAlert]);

  return (
    <Container>
      <AlertComponent showAlert={isLivingRoomHasAlert} />
      <Image
        resizeMode="stretch"
        source={require("../../../../assets/images/livingRoomBackground.png")}
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
        ) : (
          false
        )}
        <View>
          <Lamp1>
            <Lamp
              isLightOn={hasLightLamp}
              setIsLightsOn={setHasLightLamp}
              isPersonHere={isPersonHere}
            />
          </Lamp1>
          <Tv1>
            <TV
              isLightOn={hasLightTV}
              setIsLightsOn={setHasLightTV}
              isPersonHere={isPersonHere}
            />
          </Tv1>
        </View>
      </Image>
    </Container>
  );
}
