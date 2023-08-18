import { Pressable, Dimensions } from "react-native";

import { ComputerOn as LargeComputerOn } from "../../assets/svg/Large/Computer/On";
import { ComputerOff as LargeComputerOff } from "../../assets/svg/Large/Computer/Off";
import { ComputerOn as MediumComputerOn } from "../../assets/svg/Medium/Computer/On";
import { ComputerOff as MediumComputerOff } from "../../assets/svg/Medium/Computer/Off";

import { useGame } from "../../hooks/useGame";
import { chooseSVG } from "../../utils/chooseSVG";

import { IEnergyItems } from "../../interface/EnergyItems";
import { IScreenSize } from "../../interface/ScreenSize";

function ComputerOn({ width, height }: IScreenSize) {
  const size = chooseSVG(width, height)

  switch (size) {
    case "Large": return <LargeComputerOn />
    case "Medium": return <MediumComputerOn/>
    case "Small": return  <MediumComputerOn/>
    default: return <LargeComputerOn />
  }
}

function ComputerOff({ width, height }: IScreenSize) {
  const size = chooseSVG(width, height)

  switch (size) {
    case "Large": return <LargeComputerOff />
    case "Medium": return <MediumComputerOff/>
    case "Small": return  <MediumComputerOff/>
    default: return <LargeComputerOff />
  }
}

export function Computer({
  isLightOn,
  setIsLightsOn,
  isPersonHere,
}: IEnergyItems) {
  const { score, setScore } = useGame();

  const width = Dimensions.get("window").width
  const height = Dimensions.get("window").height

  const disableEnergy = () => {
    if (!isPersonHere) {
      setScore(score + 1);
      setIsLightsOn(false);
    }
  };

  if (isLightOn)
    return (
      <Pressable onPress={disableEnergy}>
        <ComputerOn width={width} height={height}/>
      </Pressable>
    );

  return <ComputerOff width={width} height={height}/>;
}
