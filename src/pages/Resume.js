import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useRef, useState, useEffect } from "react";
import PdfViewer from "../components/PdfViewer";

export default function ResumePage() {

  return (
    <Container id="resumeContainer" sx={{ bgcolor: "#ffffff"}} >
      <Box sx={{ bgcolor: "#ffffff", height: "85vh", width: "100%" }}>
        {/* link below obtained by Sharing doc and clicking Copy Link, then removing the tail and adding export?format=pdf */}
        <a href="https://docs.google.com/document/d/12sOP6A8IdRy3toRJuibt7NKWLJpLkD-B/export?format=pdf">
          Download PDF
        </a><br />
        {/* link below created by opening doc in Google docs, then File menu/ Share/ Publish to Web / Copy Embed Link 
        src="https://docs.google.com/document/d/e/2PACX-1vSTUeuF3Nzfr7aQYji6m3DBh0uWZIx_J0AQzgo3SQyFBIr2fjkN7BkNxgtjJ5k3Pg/pub?embedded=true" */}
        <iframe title="My Resume"
          src = "https://docs.google.com/document/d/e/2PACX-1vSTUeuF3Nzfr7aQYji6m3DBh0uWZIx_J0AQzgo3SQyFBIr2fjkN7BkNxgtjJ5k3Pg/pub?embedded=true"
          width="100%"
          height="100%"

        ></iframe>
      </Box>
    </Container>
  );
}
