import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Top = styled.View`
  margin-bottom: 50px;
`

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
`

export const Body = styled.View`
  flex: 0.15;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`

export const GameButton = styled.Pressable`
  width: 60%;
  height: 40px;
  background-color: blue;
  color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`

export const HistoricButton = styled.Pressable`
  width: 60%;
  height: 40px;
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
