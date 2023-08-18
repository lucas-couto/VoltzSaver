import { NativeBaseProvider } from "native-base";

import { AppRouter } from "./src/routes/AppRouter";
import { GameProvider } from "./src/context/GameContext";

export default function App() {
  return (
    <NativeBaseProvider>
      <GameProvider>
        <AppRouter />
      </GameProvider>
    </NativeBaseProvider>
  );
}
