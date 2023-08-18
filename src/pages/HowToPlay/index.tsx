import React from 'react';

import {
  Container,
  Content,
  Information,
  InformationContent,
  InformationTitle,
  Informations,
} from './styles';

export const HowToPlay: React.FC = () => {
  return (
    <Container>
      <Content>
        <Informations>
          <Information>
            <InformationTitle>Introdução</InformationTitle>
            <InformationContent>
              Watson é um menino que gosta de se divertir em varios lugares da casa,
              porém ele não se atenta em desligar as luzes e os aparelhos eletrônicos quando sai do cômodo.
            </InformationContent>
          </Information>
          <Information>
            <InformationTitle>Objetivo</InformationTitle>
            <InformationContent>
              O objetivo desse jogo é evitar o consumo desnecessário de energia
              nos cômodos da casa, ou seja, quando as luzes e aparelhos estiverem ligados e ninguem
              estiver no cômodo.
            </InformationContent>
          </Information>
          <Information>
            <InformationTitle>Jogo</InformationTitle>
            <InformationContent>
              1- Desligar as luzes e aparelhos dos cômodos que estiverem sem ninguém.
              {`\n`}
              2- A cada luz/aparelho desligado, você ganha 1 ponto.
              {`\n`}
              3- A cada rodada a velocidade do Watson vai aumentando.
              {`\n`}
              4- O jogo acaba quando acabarem as rodadas.
            </InformationContent>
          </Information>
        </Informations>
      </Content>
    </Container>
  )
}