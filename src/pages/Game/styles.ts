import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #DEB887;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

export const Top = styled.View`
  margin: 4px;
  flex: 0.2;
  flex-direction: row;
`

export const Body = styled.View`
  flex: 0.8;
  justify-content: space-around;
`

export const Informations = styled.View`
  flex: 0.7;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const InformationTitle = styled.Text`
  font-size: 24px;
  margin: 5px;
  color: #fff;
`

export const Back = styled.View`
  flex-direction: column;
  flex: 0.15;
  height: 100%;
`

export const BackButton = styled.Pressable`
  height: 100%;
  background-color: #ff0000;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`

export const BackTitle = styled.Text`
  font-size: 15px;
  color: #fff;
`

export const Scenarios = styled.View`
  flex: 0.9;
`

export const Divider = styled.View`
  width: 100%;
  height: 20px;
  background-color: brown;
`

