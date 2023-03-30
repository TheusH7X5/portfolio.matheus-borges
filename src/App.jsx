import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store";
import { useState } from "react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [lenguage, setLanguage] = useState(false);

  return (
    <>
      <Provider store={store}>
        <Header lenguage={lenguage} setLanguage={setLanguage} colorMode={colorMode} toggleColorMode={toggleColorMode} />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
