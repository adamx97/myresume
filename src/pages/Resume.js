import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { JobSeekerContext } from "../App";
import { useContext } from "react";
import Link from "@mui/material/Link";

export default function ResumePage() {
  const { jobSeeker } = useContext(JobSeekerContext);
  const urlDownload  = jobSeeker.ResumeDownloadPDFLink;
  const ResumeDisplayLink = jobSeeker.ResumeDisplayLink;
  return (
    <Container id="resumeContainer" sx={{ bgcolor: "#ffffff" }}>
      <Box sx={{ bgcolor: "#ffffff", height: "85vh", width: "100%" }}>
        {/* link below obtained by Sharing doc and clicking Copy Link, then removing the tail and adding export?format=pdf */}
        <Link href={urlDownload}>Download PDF</Link>
        <br />
        {/* link below created by opening doc in Google docs, then File menu/ Share/ Publish to Web / Copy Embed Link 
        src="https://docs.google.com/document/d/e/2PACX-1vSTUeuF3Nzfr7aQYji6m3DBh0uWZIx_J0AQzgo3SQyFBIr2fjkN7BkNxgtjJ5k3Pg/pub?embedded=true" */}
        <iframe
          title="My Resume"
          src={ResumeDisplayLink}
          width="100%"
          height="100%"
        ></iframe>
      </Box>
    </Container>
  );
}
