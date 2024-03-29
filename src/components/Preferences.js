import { useState, useContext } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { resumeThemes } from "../components/Theme";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { stringAvatar } from "./ResponsiveAppBar.js";
import { JobSeekerContext} from "../App.js";


function ThemeSample({ resumeTheme }) {
  console.log("ThemeSample "+ resumeTheme.name);
  const {jobSeeker, setOTheme} = useContext(JobSeekerContext);
  const oTheme = createTheme(resumeTheme.baseTheme);
  const themeName = resumeTheme.name;

  const handleThemeSelection = () => {
    const newTheme = resumeThemes.filter(resumeTheme => resumeTheme.name === themeName)[0];
    console.log("new Theme Selected: " + newTheme.name); 
    let oTheme = createTheme(newTheme.baseTheme);
    setOTheme(oTheme);
    localStorage.setItem("PreferredTheme", newTheme.name);
    enqueueSnackbar(newTheme.name + " theme set.");
    return true;
  };
  
  return (
    <ThemeItem key={themeName}>
      <ThemeProvider theme={oTheme}>
        <ColorSwatchAppBar JobSeeker={jobSeeker.name} />
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
          <Grid container xs={12} spacing={1} mt={1}>
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
                <Grid item xs={6} key={theTheme.name}>
                  <ThemeSample resumeTheme={theTheme} key={theTheme.name}/>
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

function ColorSwatchAppBar({ JobSeeker: JobSeekerName, children, ...props }) {
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
          {JobSeekerName.toUpperCase()}
        </Typography>

        <Button color="inherit">Resume</Button>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title={"Open settings"}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 0 }}>
              <Avatar
                {...stringAvatar(JobSeekerName)}
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
