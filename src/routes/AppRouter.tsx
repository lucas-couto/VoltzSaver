import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { informations } from '../configs';
import { useGame } from '../hooks/useGame';

import { Game } from "../pages/Game";
import { Initial } from "../pages/Initial";
import { Historic } from "../pages/Historic";
import { HowToPlay } from '../pages/HowToPlay';

const Stack = createNativeStackNavigator()

export const AppRouter: React.FC = () => {
  const { amountRounds } = informations
  const { round, score } = useGame()

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Initial'>
        <Stack.Group>
          <Stack.Screen
            name='Initial'
            component={Initial}
            options={{ headerShown: false }} />
          <Stack.Screen
            name='Game'
            component={Game}
            options={{
              title: `Pontuação: ${score}     Rodada: ${round}/${amountRounds}`,
            }} />
          <Stack.Screen
            name='Historic'
            component={Historic}
            options={{ title: 'Histórico', headerBackTitleVisible: false }} />
          <Stack.Screen
            name='HowToPlay'
            component={HowToPlay}
            options={{ title: 'Como jogar?', headerBackTitleVisible: false }} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}