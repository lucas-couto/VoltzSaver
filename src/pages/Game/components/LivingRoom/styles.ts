import styled from 'styled-components/native';

import { Dimensions } from "react-native";
import { chooseSVG } from "../../../../utils/chooseSVG";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

let topLamp = -39;
let topTV = 20

const size = chooseSVG(width, height);
switch (size) {
  case "Large":
    topLamp = -39;
    topTV = 20
    break;
  case "Medium":
    topLamp = -27;
    topTV = 49
    break;
  case "Small":
    topLamp = -27;
    topTV = 49
    break;
  default:
    topLamp = -39;
    topTV = 20
    break;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.ImageBackground`
  width: 100%;
  height: 220px;
`;

export const Lamp1 = styled.View`
  position: absolute;
  top: ${topLamp}px;
  left: 10%;
`

export const Tv1 = styled.View`
  position: absolute;
  top: ${topTV}px;
  right: 8%;
`


