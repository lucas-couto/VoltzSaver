import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { chooseSVG } from "../../../../utils/chooseSVG";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

let topLamp = -39;

const size = chooseSVG(width, height);
switch (size) {
  case "Large":
    topLamp = -39;
    break;
  case "Medium":
    topLamp = 15;
    break;
  case "Small":
    topLamp = 15;
    break;
  default:
    topLamp = -39;
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
  width: 90%;
  position: absolute;
  top: ${topLamp}px;
  left: 40%;
`;

export const Computer1 = styled.View`
  position: absolute;
  top: 80px;
  right: 5%;
`;
