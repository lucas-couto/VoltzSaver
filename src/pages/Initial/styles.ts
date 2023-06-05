import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`

export const Top = styled.View`
  flex: 0.15;
  justify-content: flex-end;
`

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
`

export const Body = styled.View`
  flex: 0.2;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Buttons = styled.View`
  flex: 0.8;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`

export const GameButton = styled.Pressable`
  width: 60%;
  height: 30%;
  background-color: blue;
  color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`

export const HistoricButton = styled.Pressable`
  width: 60%;
  height: 30%;
  background-color: orange;
  color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`
