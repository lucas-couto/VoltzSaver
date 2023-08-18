import { Pressable, Dimensions } from "react-native";

import { LampOn as LargeLampOn } from "../../assets/svg/Large/Lamp/On";
import { LampOff as LargeLampOff } from "../../assets/svg/Large/Lamp/Off";
import { LampOn as MediumLampOn } from "../../assets/svg/Medium/Lamp/On";
import { LampOff as MediumLampOff } from "../../assets/svg/Medium/Lamp/Off";

import { useGame } from "../../hooks/useGame";
import { chooseSVG } from "../../utils/chooseSVG";

import { IEnergyItems } from "../../interface/EnergyItems";
import { IScreenSize } from "../../interface/ScreenSize";

function LampOn({ width, height }: IScreenSize) {
  const size = chooseSVG(width, height)

  switch (size) {
    case "Large": return <LargeLampOn />
    case "Medium": return <MediumLampOn/>
    case "Small": return  <MediumLampOn/>
    default: return <LargeLampOn />
  }
}

function LampOff({ width, height }: IScreenSize) {
  const size = chooseSVG(width, height)

  switch (size) {
    case "Large": return <LargeLampOff />
    case "Medium": return <MediumLampOff/>
    case "Small": return  <MediumLampOff/>
    default: return <LargeLampOff />
  }
}

export function Lamp({ isLightOn, setIsLightsOn, isPersonHere }: IEnergyItems) {
  const { score, setScore } = useGame();

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const disableEnergy = () => {
    if (!isPersonHere) {
      setScore(score + 1);
      setIsLightsOn(false);
    }
  };

  if (isLightOn)
    return (
      <Pressable onPress={disableEnergy}>
        <LampOn width={width} height={height}/>
      </Pressable>
    );

  return <LampOff width={width} height={height}/>;
}
