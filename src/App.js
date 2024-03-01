import "./App.css";
import { useState, createContext } from "react";

import { RouterProvider } from "react-router-dom";

import Theme from "../src/components/Theme";
import Navigation from "../src/components/Navigation";
import { ThemeProvider } from "@mui/material/styles";

export const myResumeContext = createContext(null);

function App() {
  const router = Navigation();
  const myTheme = Theme();
  const [theme, setTheme] = useState(myTheme); // the default theme

  return (
    <myResumeContext.Provider value={{ theme: myTheme, setTheme: setTheme }}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </myResumeContext.Provider>
  );
}

export default App;
