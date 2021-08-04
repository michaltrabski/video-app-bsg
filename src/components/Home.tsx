import { Box, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import MediaCard from "./MediaCard";

interface Props {
  mediaList: any;
}
function Home(props: Props) {
  const videos = props.mediaList.Entities;
  return (
    <>
      <Typography variant="h4" gutterBottom component="h1" align="center">
        Home screen
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom component="h2" align="center">
              list 1
            </Typography>
            {videos.map((video: any) => (
              <MediaCard title={video.Title} images={video.Images} />
            ))}
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom component="h2" align="center">
              list 2
            </Typography>
            {videos.map((video: any) => (
              <MediaCard title={video.Title} images={video.Images} />
            ))}
          </Grid>
        </Grid>
      </Box>

      <pre>{JSON.stringify(props.mediaList, null, 2)}</pre>
    </>
  );
}

export default Home;
