import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from "react-player";
import ShakaPlayer from "shaka-player-react";

type Image = {
  Id: number;
  MediaId: number;
  PlatformCode: string;
  ImageTypeCode: string;
  Url: string;
  Width: number;
  Height: number;
};
interface Props {
  images: Image[];
  title: string;
}
export default function MediaCard(props: Props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Card sx={{ mb: 2 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={props.images[0].Url}
          title={props.title}
        />
        {show && (
          <ShakaPlayer
            autoPlay
            src="https://cd-stream-od.telenorcdn.net/tnfbaod/SF/585db4b3e4b09db0cf348a64/dash_a1.ism/playlist.mpd"
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setShow((p) => !p)}>
            Play Video
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
