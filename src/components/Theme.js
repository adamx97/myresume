import { createTheme } from "@mui/material/styles";
import {
  lime,
  purple,
  green,
  blue,
  red,
  pink,
  blueGrey,
  orange,
  deepPurple,
} from "@mui/material/colors";

export const resumeThemes = [
  {
    name: "Lime",
    baseTheme: {
      palette: {
        primary: lime, // { main: lime[500] },
        secondary: blueGrey, //  { main: purple[500] },
      },
    },
  },
  {
    name: "Green",
    baseTheme: {
      palette: {
        primary: green, // { main: green[500] },
        secondary: blue, // { main: blue[500] },
        contrastText: "#fff",
      },
    },
  },
  {
    name: "Deep Purple",
    baseTheme: {
      palette: {
        primary: { main: deepPurple[500] },
        secondary: { main: "#bdbdbd", contrastText: "#222" },
      },
    },
  },
  {
    name: "Purple",
    baseTheme: {
      palette: {
        primary: purple, // { main: purple[500] },
        secondary: pink, //  { main: blue[500] },
      },
    },
  },
  {
    name: "Pink and Purple",
    baseTheme: {
      palette: {
        primary: pink, //  {  main: pink[500] },
        secondary: purple, // { main: purple[500] },
        contrastText: "#fff",
      },
    },
  },
  { name: "Red", baseTheme: { palette: { primary: red, secondary: blue } } },
  {
    name: "Blue",
    baseTheme: { palette: { primary: blue, secondary: orange } },
  },
  {
    name: "Navy",
    baseTheme: {
      palette: {
        primary: { main: "#1a237e" },
        secondary: { main: "#c5cae9", contrastText: "#222" },
      },
    },
  },
];

function Theme(themeName) {
  const foundTheme = resumeThemes.find(theme => theme.name === themeName);
  console.log("Sought: " + themeName + " Creating theme: " + foundTheme.name);
  return createTheme(foundTheme.baseTheme);
}
export default Theme;
