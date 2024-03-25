import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        p: 1,
        borderRadius: 2,
        fontSize: "0.875rem",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function AboutApp() {
  return (
    <>
      <Grid xs={12} container spacing={2} id="AboutGrid">
        <Grid item xs={12}>
          <Item>
            <Box id="FeaturesTitle" sx={{ textTransform: "uppercase", mb: 1 }}>
              Implemented Features
            </Box>
            <li>
              A React portfolio app meant to demonstrate some simple features
              and interactivity
            </li>
            <li>React Router -- SPA plus routing</li>
            <li>Automatic Vercel deployment triggered GitHub check-in</li>
            <li>
              Material UI -- AppBar, grid, typography, dynamic themes, etc.{" "}
            </li>
            <li>notistack -- 3rd party imperative snackbar component</li>
            <li>
              Default resume theme, user overridable via Preferences page.
            </li>
            <li>
              Fully configuration controlled, multiple job seekers supported and
              new ones easily added.
            </li>
            <li>Live resume display and PDF download.</li>
            <li>Links to: LinkedIn, blog, and GitHub</li>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Box
              id="EnhancmentsTitle"
              sx={{ textTransform: "uppercase", mb: 1 }}
            >
              Future enhancements, added as time allows
            </Box>
            <li>Full test coverage</li>

            <li>Docker container deployment</li>
            <li>Native (Mobile) App</li>
            <li>Free custom wallpaper feature</li>
            <li>Blog entries: how I fixed pytests for use with WSL</li>
            <li>Blog entries: React Native app for random numbers</li>
            <li>Future enhancements: CICD support, etc.</li>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Grid container spacing={1} sx={{ flexGrow: 5 }}>
              {/* <Grid xs>© Copyright {new Date().getFullYear()}</Grid> */}
              <Box xs={{ display: "flex" }}>
                © Copyright {new Date().getFullYear()}
              </Box>
              <Grid xs></Grid>
              <Box xs={{ display: "flex" }}>
                <a
                  href="https://github.com/adamx97/myresume/tree/master"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code for this Site
                </a>
              </Box>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
