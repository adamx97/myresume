import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBarzzzz";
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
  // const navigation = useNavigation();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <ResponsiveAppBar MuiAppBar={{ color: "primary" }}></ResponsiveAppBar>
      <Container component="main" >
        <Box sx={{ m: 2, mb: 2 }} >
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
        </Box>
      </Container>
    </>
  );
}

export default RootLayout;
