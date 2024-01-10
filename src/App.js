import "./App.css";
import { useState, useContext, createContext } from "react";

import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";

import Theme from "../src/components/Theme";
import Navigation from "../src/components/Navigation";
import { ThemeProvider } from "@mui/material/styles";

export const myResumeContext = createContext(null);

function App() {
  const router = Navigation();
  const myTheme = Theme();
  const [theme, setTheme] = useState(myTheme); // the default theme

  //console.log("In App: Theme: " + JSON.stringify(myTheme));

  return (
    <StrictMode>
      <myResumeContext.Provider value={{ theme: theme, setTheme: setTheme }}  >
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </myResumeContext.Provider>
    </StrictMode>
  );
}

export default App;
