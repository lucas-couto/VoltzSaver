import { Dispatch, SetStateAction } from "react";

export interface IEnergyItems {
  isLightOn: boolean
  setIsLightsOn: Dispatch<SetStateAction<boolean>>
  isPersonHere: boolean
}