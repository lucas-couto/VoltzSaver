import { useNavigation } from "@react-navigation/native";

import { 
  Container, 
  Content, 
  Top, 
  Title, 
  Body, 
  GameButton, 
  HistoricButton, 
  ButtonText 
} from "./styles";

export function Initial() {

  const navigation: any = useNavigation()

  return (
    <Container>
      <Content>
        <Top>
          <Title>Bem vindo ao VoltzGame</Title>
        </Top>
        <Body>
          <GameButton onPress={() => navigation.navigate('Game')}>
            <ButtonText>Iniciar jogo</ButtonText>
          </GameButton>
          <HistoricButton onPress={() => navigation.navigate('Historic')}>
            <ButtonText>Ver Histórico</ButtonText>
          </HistoricButton>
        </Body>
      </Content>
    </Container>
  )

}