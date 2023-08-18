import { Pressable, Dimensions } from "react-native";

import { FridgeOn as LargeFridgeOn } from "../../assets/svg/Large/Fridge/On";
import { FridgeOff as LargeFridgeOff } from "../../assets/svg/Large/Fridge/Off";
import { FridgeOn as MediumFridgeOn } from "../../assets/svg/Medium/Fridge/On";
import { FridgeOff as MediumFridgeOff } from "../../assets/svg/Medium/Fridge/Off";

import { useGame } from "../../hooks/useGame";
import { chooseSVG } from "../../utils/chooseSVG";

import { IEnergyItems } from "../../interface/EnergyItems";
import { IScreenSize } from "../../interface/ScreenSize";

function FridgeOn({ width, height }: IScreenSize) {
  const size = chooseSVG(width, height)

  switch (size) {
    case "Large": return <LargeFridgeOn />
    case "Medium": return <MediumFridgeOn/>
    case "Small": return  <MediumFridgeOn/>
    default: return <LargeFridgeOn />
  }
}

function FridgeOff({ width, height }: IScreenSize) {
  const size = chooseSVG(width, height)

  switch (size) {
    case "Large": return <LargeFridgeOff />
    case "Medium": return <MediumFridgeOff/>
    case "Small": return  <MediumFridgeOff/>
    default: return <LargeFridgeOff />
  }
}

export function Fridge({
  isLightOn,
  setIsLightsOn,
  isPersonHere,
}: IEnergyItems) {
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
        <FridgeOn width={width} height={height} />
      </Pressable>
    );

  return <FridgeOff width={width} height={height} />;
}
