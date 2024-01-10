import { useState, useContext } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { resumeThemes } from "../components/Theme";
import PaletteSetter from "../components/PaletteSetter";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { stringAvatar } from "./ResponsiveAppBar.js";
import Checkbox from "@mui/material/Checkbox";
import { myResumeContext } from "../App.js";

function ThemeSample({ resumeTheme }) {
  //useContext(ThemeContext);
  const { theme, setTheme } = useContext(myResumeContext);
  console.log(JSON.stringify(resumeTheme.name));
  const oTheme = createTheme(resumeTheme.baseTheme);
  const themeName = resumeTheme.name;
  const handleThemeSelection = () => {
    const newTheme = resumeThemes.filter(resumeTheme => resumeTheme.name === themeName)[0];
    console.log("new Theme Selected: " + newTheme.name); //const newTheme = createTheme(resumeTheme.baseTheme);
    let oTheme = createTheme(newTheme.baseTheme);
    setTheme(oTheme);
    enqueueSnackbar(themeName + " theme set.");
  };
  return (
    <ThemeItem key={themeName}>
      <ThemeProvider theme={oTheme}>
        <SampleAppBar JobSeeker={"Qres Ephraim"} />
        <Grid xs={12} container spacing={1}>
          <Grid item xs={12} mt={2} align={"center"}>
            <Typography variant="body1" textAlign={"center"}>
              {themeName} theme.
            </Typography>

            {/* The primary color is {JSON.stringify(oTheme.palette.primary.main)} */}

            {/* <Checkbox defaultChecked color="secondary" />
            <Checkbox defaultChecked /> */}
            <Button
              color="secondary"
              variant="contained"
              onClick={handleThemeSelection}
            >
              Select this theme{" "}
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </ThemeItem>
  );
}

export default function Preferences() {
  return (
    <>
      <SnackbarProvider maxSnack={resumeThemes.length}>
        <ThemeItem>
          <Grid container xs={12} spacing={2} mt={2}>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                color={"text.secondary"}
                sx={{
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                Select a Color Scheme
              </Typography>
            </Grid>
            {resumeThemes.map((theTheme) => {
              return (
                <Grid item xs={6}>
                  <ThemeSample resumeTheme={theTheme} />
                </Grid>
              );
            })}
          </Grid>
        </ThemeItem>
      </SnackbarProvider>
    </>
  );
}

export function IntegrationNotistack({ children }) {
  return (
    <SnackbarProvider maxSnack={resumeThemes.length}>
      {children}
    </SnackbarProvider>
  );
}

function SampleAppBar({ JobSeeker, children, ...props }) {
  const settings = ["Profile", "Logout", "Preferences", "About This App"];
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  return (
    // <Box>
    <AppBar position="relative">
      <Toolbar variant="dense">
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "primary",
            textDecoration: "none",
          }}
        >
          {JobSeeker.toUpperCase()}
        </Typography>

        <Button color="inherit">Resume</Button>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title={"Open settings"}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 0 }}>
              <Avatar
                {...stringAvatar("Qres Milan Ephraim")}
                sx={{
                  typography: "body1",
                  bgcolor: "secondary.main",
                  color: "secondary.contrastText",
                }}
              />{" "}
              {/*  */}
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={false}
          >
            {settings.map((setting) => (
              <MenuItem key={setting}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
    // </Box>
  );
}
const ThemeItem = styled(Paper)(({ theme, sx, xs }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  sx: sx,
  xs: xs,
}));
