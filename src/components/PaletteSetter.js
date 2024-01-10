import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import { useSnackbar } from 'notistack';


export default function PaletteSetter({ customTheme, ThemeName,  children, props }) {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [exited, setExited] = useState(true);
  
  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = (ThemeName) => {
    console.log("changing theme to " + ThemeName);
    setOpen(true);
  };

  const handleOnEnter = () => {
    setExited(false);
  };

  const handleOnExited = () => {
    setExited(true);
  };

  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  return (
    <>   
      <Button 
        theme={customTheme}
        color='primary'
        
        // style={{ backgroundColor: customTheme.palette.primary[500], color: customTheme.palette.primary.contrastText, }}
        onClick={() => handleClick(ThemeName)}
        sx={{ textTransform: "none", m: 1, backgroundColor: `$customTheme.palette.primary[500]}`  }} 
        
      >
        customTheme.palette.primary= {JSON.stringify(customTheme.palette.primary)} <br /> 
        ThemeName: {ThemeName}
        {children}
      </Button>
      <Snackbar
        key={ThemeName}
        palette={customTheme.palette}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        autoHideDuration={6000}
        message= {`Palette changed to ${ThemeName}`}
        // action={action}
        exited={exited}
        TransitionComponent={TransitionLeft}
      />
    </>
  );
}

