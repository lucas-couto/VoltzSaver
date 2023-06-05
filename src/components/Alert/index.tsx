import React from "react";
import { Text } from "react-native";

import { Container, Content, Lighting, LightingText } from "./styles";

interface IAlert {
  showAlert: boolean;
}

export const Alert = ({ showAlert }: IAlert) => {

  if(!showAlert) return null

  return (
    <Container>
      <Content>
        <Lighting>⚡️</Lighting>
        <LightingText>Gastando Energia</LightingText>
      </Content>
    </Container>
  );
};
