import React from "react";
import GlobalStyles from "./config/globalStyle";
import { UserProvider } from "./contexts/User";
import Routes from "./routes";

function App() {
  return (
    <UserProvider>
      <Routes />
      <GlobalStyles />
    </UserProvider>
  );
}

export default App;
