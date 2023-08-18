import { Pressable, Dimensions } from "react-native";

import { TVOn as LargeTVOn } from "../../assets/svg/Large/TV/On";
import { TVOff as LargeTVOff } from "../../assets/svg/Large/TV/Off";
import { TVOn as MediumTVOn } from "../../assets/svg/Medium/TV/On";
import { TVOff as MediumTVOff } from "../../assets/svg/Medium/TV/Off";

import { useGame } from "../../hooks/useGame";
import { chooseSVG } from "../../utils/chooseSVG";

import { IScreenSize } from "../../interface/ScreenSize";
import { IEnergyItems } from "../../interface/EnergyItems";

function TVOn({ width, height }: IScreenSize) {
  const size = chooseSVG(width, height)

  switch (size) {
    case "Large": return <LargeTVOn />
    case "Medium": return <MediumTVOn/>
    case "Small": return  <MediumTVOn/>
    default: return <LargeTVOn />
  }
}

function TVOff({ width, height }: IScreenSize) {
  const size = chooseSVG(width, height)

  switch (size) {
    case "Large": return <LargeTVOff />
    case "Medium": return <MediumTVOff/>
    case "Small": return  <MediumTVOff/>
    default: return <LargeTVOff />
  }
}

export function TV({ isLightOn, setIsLightsOn, isPersonHere }: IEnergyItems) {
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
        <TVOn width={width} height={height} />
      </Pressable>
    );

  return <TVOff width={width} height={height} />;
}
