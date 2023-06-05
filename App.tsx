import { AppRouter } from "./src/routes/AppRouter";
import { GameProvider } from "./src/context/GameContext";

export default function App() {
  return (
    <GameProvider>
      <AppRouter />
    </GameProvider>
  );
}