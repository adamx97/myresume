import { useRef, Fragment } from "react";
import { Outlet,  } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function RootLayout() {
  const rootContainerRef = useRef(null);
  console.log("In RootLayout");
  return (
    <Fragment >
      <ResponsiveAppBar MuiAppBar={{ color: "primary" }}></ResponsiveAppBar>
      <Container  ref={rootContainerRef}  >
        <Box sx={{ m: 2 }} >
        <Outlet />
        </Box>
      </Container>
    </Fragment>
  );
}

export default RootLayout;
