import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { chooseSVG } from "../../../../utils/chooseSVG";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

let topLamp = 10;
let topFridge = 110;

const size = chooseSVG(width, height);
switch (size) {
  case "Large":
    topLamp = 10;
    topFridge = 110;
    break;
  case "Medium":
    topLamp = 7;
    topFridge = 56;
    break;
  case "Small":
    topLamp = 7;
    topFridge = 56;
    break;
  default:
    topLamp = 10;
    topFridge = 110;
    break;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const Lamp1 = styled.View`
  width: 100%;
  top: ${topLamp}px;
  left: 20%;
`;

export const Lamp2 = styled.View`
  position: absolute;
  top: ${topLamp}px;
  right: 20%;
`;

export const Fridge1 = styled.View`
  position: absolute;
  top: ${topFridge}px;
  left: 10%;
`;
