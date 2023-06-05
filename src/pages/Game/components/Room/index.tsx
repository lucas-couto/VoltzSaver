import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import Lottie from "lottie-react-native";

import { Lamp } from "../../../../components/Lamp";
import { Alert } from "../../../../components/Alert";
import { Computer } from "../../../../components/Computer";

import { useGame } from "../../../../hooks/useGame";

import { Container, Image, Lamp1, Computer1 } from "./styles";

interface IRoom {
  isPersonHere: boolean;
}

export function Room({ isPersonHere }: IRoom) {
  const { isRoomHasAlert, setIsRoomHasAlert, setIsRoomHasLight } = useGame();

  const [hasLightLamp, setHasLightLamp] = useState(isPersonHere);
  const [hasLightComputer, setHasLightComputer] = useState(isPersonHere);

  useEffect(() => {
    if (isPersonHere) {
      setHasLightLamp(isPersonHere);
      setHasLightComputer(isPersonHere);
      setIsRoomHasLight(true);
    }
  }, [isPersonHere]);

  useEffect(() => {
    if (!hasLightLamp && !hasLightComputer) setIsRoomHasLight(false);
  }, [hasLightLamp, hasLightComputer]);

  useEffect(() => {
    if (isRoomHasAlert) setTimeout(() => setIsRoomHasAlert(false), 3000);
  }, [isRoomHasAlert]);

  return (
    <Container>
      <Alert showAlert={isRoomHasAlert} />
      <Image
        source={require("../../../../assets/images/roomBackground.jpg")}
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
          <Computer1>
            <Computer
              isLightOn={hasLightComputer}
              setIsLightsOn={setHasLightComputer}
              isPersonHere={isPersonHere}
            />
          </Computer1>
        </View>
      </Image>
    </Container>
  );
}
