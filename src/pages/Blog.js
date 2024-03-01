import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";

export default function Blog() {
  const url = "https://dynamicsoftwaremd.blogspot.com/";
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    fetch("https://www.googleapis.com/blogger/v3/blogs/byurl")
      .then((response) => response.json())
      .then((data) => {
        setBlog(data[0]);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container id="blogContainer" sx={{ bgcolor: "#ffffff" }}>
      <Box sx={{ bgcolor: "#ffffff", height: "85vh", width: "100%" }}>
        {/* link below obtained by Sharing doc and clicking Copy Link, then removing the tail and adding export?format=pdf */}
        <iframe title="My Blog"
          src = "https://dynamicsoftwaremd.blogspot.com/"
          width="100%"
          height="100%"

        ></iframe>
      </Box>
    </Container>
  );
}
