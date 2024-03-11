import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AboutApp() {
  return (
    <>
      <Grid xs={12} container spacing={4} sx={{ mt: 2, height: "95vh" }}>
        <Grid item xs={12}>
          <Item>
            <Box
              id="Features"
              sx={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              Features Demonstrated in this App
            </Box>
            <Box
              component="ul"
              aria-labelledby="Features"
              sx={{ pl: 2, textAlign: "left" }}
            >
              <li>
                Fully configuration controlled, multiple job seekers supported
                and new ones easily added.
              </li>
              <li>Live resume display and PDF download.</li>
              <li>
                Default resume theme, user overridable via preferences page.
              </li>
              <li>Links to: LinkedIn, blog, and GitHub</li>

              <li>React Router -- SPA plus routing</li>
              <li>
                Material UI -- AppBar, grid, typography, dynamic themes, etc.{" "}
              </li>
              <li>
                notistack -- imperative snackbar component, triggered by theme
                change.
              </li>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Box
              id="enhancements"
              sx={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              Future enhancements, added as time allows
            </Box>
            <Box
              component="ul"
              aria-labelledby="enhancements"
              sx={{ pl: 2, textAlign: "left" }}
            >
              <li>Full test coverage</li>

              <li>Docker container deployment</li>
              <li>Native (Mobile) App</li>
              <li>
                Add a blog and a way to get the blog entries when offline via
                API{" "}
              </li>
              <li>blog entries: how I fixed pytests for use with WSL</li>
              <li>blog entries: React Native app for random numbers</li>
              <li>future enhancements: CICD support, etc.</li>
            </Box>
          </Item>
        </Grid>
        <Grid
          mt={2}
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ fontSize: "12px" }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item>© Copyright {new Date().getFullYear()}</Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item>
                <a
                  href="https://github.com/adamx97/myresume/tree/master"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code for this app
                </a>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
