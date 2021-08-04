import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import MediaCard from "./MediaCard";

interface Image {
  Id: number;
  MediaId: number;
  PlatformCode: string;
  ImageTypeCode: string;
  Url: string;
  Width: number;
  Height: number;
}

interface Product {
  Id: number;
}

interface Entity {
  Id: number;
  Guid: string;
  MediaTypeCode: string;
  MediaTypeDisplayName: string;
  MediaAgeRestrictionValueMin: number;
  MediaAgeRestrictionImageUrl: string;
  Title: string;
  Description: string;
  Year?: number;
  Duration: number;
  IsTrialContentAvailable: boolean;
  AvailableFrom: string;
  StartDateTime?: string;
  Images: Image[];
  Products: Product[];
}

export interface MediaListObj {
  CacheDataValidTo: string;
  SourceType: string;
  Entities: Entity[];
  PageSize: number;
  PageNumber: number;
  TotalCount: number;
}

interface Props {
  mediaList: MediaListObj;
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
            {videos.map((video) => (
              <MediaCard
                key={video.Id}
                title={video.Title}
                images={video.Images}
              />
            ))}
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom component="h2" align="center">
              list 2
            </Typography>
            {videos.map((video) => (
              <MediaCard
                key={video.Id}
                title={video.Title}
                images={video.Images}
              />
            ))}
          </Grid>
        </Grid>
      </Box>

      <pre>{JSON.stringify(props.mediaList, null, 2)}</pre>
    </>
  );
}

export default Home;
