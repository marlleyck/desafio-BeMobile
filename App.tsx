import { AppContextProvider } from "./src/contexts/AppContext";
import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
}
