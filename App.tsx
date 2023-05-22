import { Game } from "./src/pages/Game";
import { Initial } from "./src/pages/Initial";
import { Historic } from "./src/pages/Historic";

import { GameProvider } from "./src/context/GameContext";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <GameProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName='Initial'>
          <Stack.Group>
            <Stack.Screen name='Initial' component={Initial} options={{ headerShown: false }} />
            <Stack.Screen name='Game' component={Game} options={{ headerShown: false }} />
            <Stack.Screen name='Historic' component={Historic} options={{ title: 'Histórico', headerBackTitleVisible: false }} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  )
}

