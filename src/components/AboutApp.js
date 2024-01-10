import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { resumeThemes } from "./Theme";
import { SnackbarProvider } from "notistack";

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
      <Grid xs={12} container spacing={2}>
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
              <li>Links to live resume</li>
              <li>React Router -- SPA plus routing</li>
              <li>
                Material UI -- AppBar, grid, typography, dynamic themes, etc.{" "}
              </li>
              <li>notistack -- imperative snackbar component</li>
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
              <li>Fully configuration controlled</li>
              <li>Docker container deployment</li>
              <li>Native (Mobile) App</li>
            </Box>
          </Item>
        </Grid>
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
            <Item>GitHub link</Item>
          </Grid>
          <Grid>
            <Item>Link B</Item>
          </Grid>
          <Grid>
            <Item>Link C</Item>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
