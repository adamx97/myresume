import { useEffect, useRef, Fragment } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { getTokenDuration } from "../util/auth";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function RootLayout() {
  //const { theme, setTheme } = useThemeContext();
  //console.log("In RootLayout: Theme from useThemeContext: " + JSON.stringify(theme));
  //theme = useContext(ThemeContext);
  //console.log("In RootLayout: Theme from useContext: " + JSON.stringify(theme));
  const token = useLoaderData();
  const submit = useSubmit();
  const rootContainerRef = useRef(null);
  // const navigation = useNavigation();


  return (
    <Fragment >
      <ResponsiveAppBar MuiAppBar={{ color: "primary" }}></ResponsiveAppBar>
      <Container  ref={rootContainerRef}  >
        <Box sx={{ m: 2 }} >
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
        </Box>
      </Container>
    </Fragment>
  );
}

export default RootLayout;
