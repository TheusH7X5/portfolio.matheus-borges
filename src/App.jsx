import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
        <Header colorMode={colorMode} toggleColorMode={toggleColorMode} />
        <Outlet />
    </div>
  );
}

export default App;
