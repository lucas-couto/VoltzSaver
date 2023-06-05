import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #777;
  z-index: 1px;
  opacity: 0.9;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: #fff;
`
