import "./App.css";
import { useState, createContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import Theme from "../src/components/Theme";
import Navigation from "../src/components/Navigation";
import { ThemeProvider } from "@mui/material/styles";
import { getJobSeeker } from "./data/UserData";

export const JobSeekerContext = createContext(null);

function App() {
  const jobSeeker = getJobSeeker("Adam Davis");
  const router = Navigation();

  let initialTheme = jobSeeker.theme;
  const [themeName, setThemeName] = useState(null);
  const [objTheme, setObjTheme] = useState(null); // the default theme
  useEffect(() => {
    var PreferredTheme = localStorage.getItem("PreferredTheme");
    if (PreferredTheme) {
      console.log("Found Cookie: " + PreferredTheme);
    }
    PreferredTheme = PreferredTheme || initialTheme;
    setThemeName(PreferredTheme);
    setObjTheme(Theme(PreferredTheme));
  }, [themeName, initialTheme]);
  console.log("after setThemeName: " + themeName);

  if (!objTheme) {
    return;
  }

  return (
    <JobSeekerContext.Provider
      value={{
        jobSeeker: jobSeeker,
        objTheme: objTheme,
        setOTheme: setObjTheme,
      }}
    >
      <ThemeProvider theme={objTheme}>
        <title>{jobSeeker.name}</title>
        <RouterProvider router={router} />
      </ThemeProvider>
    </JobSeekerContext.Provider>
  );
}

export default App;
