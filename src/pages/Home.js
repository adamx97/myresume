import PageContent from "../components/PageContent";
import { JobSeekerContext } from "../App";
import { useContext } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        p: 1,
        borderRadius: 2,
        fontSize: "0.875rem",
        ...sx,
      }}
      {...other}
    />
  );
}

function HomePage() {
  const { jobSeeker } = useContext(JobSeekerContext);
  return (
    <PageContent>
      <Grid container id="GridContainer">
        <Grid item xs={12} sx={{ mt: 1 }}>
          {/* a spacer below the top header */}
            </Grid>
        <Grid item xs={12}>
          <Item
            // blurb title and blurb
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            {jobSeeker.blurbTitle ? jobSeeker.blurbTitle : null}
            {jobSeeker.blurbBody ? (
              <Grid
                sx={{
                  textAlign: "left",
                  fontWeight: "normal",
                  mt:1
                  
                }}
              >
                {jobSeeker.blurbBody}{" "}
              </Grid>
            ) : null}
          </Item>
        </Grid>
        <Grid item sx= {{ mt: 1 }}>
          <Item sx= {{ px: 3 }}>
            <ul>
              {jobSeeker.email && (
                <li>
                  Email:{" "}
                  <a href={`mailto:${jobSeeker.email}`}>{jobSeeker.email}</a>
                </li>
              )}
              {jobSeeker.gitHubLink && (
                <li>
                  GitHub:{" "}
                  <a href={`${jobSeeker.gitHubLink}`}>{jobSeeker.gitHubLink}</a>
                </li>
              )}
            {jobSeeker.linkedInLink && (
              <li>
                LinkedIn:{" "}
                <a href={`${jobSeeker.linkedInLink}`}>
                  {jobSeeker.linkedInLink}
                </a>
              </li>
            )}
            </ul>
          </Item>
        </Grid>

      </Grid>
    </PageContent>
  );
}

export default HomePage;
