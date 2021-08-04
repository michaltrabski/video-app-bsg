import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  return (
    <Card sx={{ mb: 2 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={props.images[0].Url}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Play Video</Button>
      </CardActions>
    </Card>
  );
}
