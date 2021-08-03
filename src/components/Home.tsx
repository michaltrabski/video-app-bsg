import React, { useEffect, useRef, useState } from "react";
import MediaCard from "./MediaCard";

interface Props {
  mediaList: any;
}
function Home(props: Props) {
  const videos = props.mediaList.Entities;
  return (
    <>
      {videos.map((video: any) => (
        <MediaCard title={video.Title} images={video.Images} />
      ))}

      <pre>{JSON.stringify(props.mediaList, null, 2)}</pre>
    </>
  );
}

export default Home;
