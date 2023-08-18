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
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  /* background-color: yellow; */
`

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
`

export const Buttons = styled.View`
  flex: 0.25;
  /* margin-bottom: 30px; */
  /* background-color: red; */
  width: 100%;
  align-items: center;
  justify-content: space-around;
`

export const Body = styled.View`
  flex: 0.6;
  width: 100%;
`

export const GameButton = styled.Pressable`
  width: 60%;
  height: 20%;
  background-color: blue;
  color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`

export const HistoricButton = styled.Pressable`
  width: 60%;
  height: 20%;
  background-color: orange;
  color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`

export const SignoutButton = styled.Pressable`
  width: 60%;
  height: 20%;
  background-color: red;
  color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`


export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`
