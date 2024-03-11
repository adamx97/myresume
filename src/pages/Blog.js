import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { JobSeekerContext } from "../App";

export default function Blog() {
  const {jobSeeker} = useContext(JobSeekerContext);
  const url = jobSeeker.blog;
  return (
    <Container id="blogContainer" sx={{ bgcolor: "#ffffff" }}>
      <Box sx={{ bgcolor: "#ffffff", height: "85vh", width: "100%" }}>
        <iframe title="My Blog" src={url} width="100%" height="100%"></iframe>
      </Box>
    </Container>
  );
}
