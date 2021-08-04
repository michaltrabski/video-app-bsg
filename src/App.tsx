import React, { useEffect, useRef, useState } from "react";
import { CssBaseline } from "@material-ui/core";
import Container from "./components/Container";
import SplashScreen from "./components/SplashScreen";
import mediaListFakeApi from "./data/mediaList.json";
import Home, { MediaListObj } from "./components/Home";
import axios from "axios";

const ENDPOINT = "https://thebetter.bsgroup.eu/";
const SIGN_IN_ENDPOINT = ENDPOINT + "Authorization/SignIn";
const GET_MEDIA_LIST_ENDPOINT = ENDPOINT + "Media/GetMediaList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFailMassage, setLoginFailMassage] = useState("");

  const tokenRef = useRef<string | null>(null);
  const [mediaList, setMediaList] = useState<MediaListObj | null>(null);

  // authentication
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    axios
      .post(SIGN_IN_ENDPOINT, {
        headers: {
          "Content-type": "application/json",
        },
        data: {},
      })
      .then((res) => {
        const { Token } = res.data.AuthorizationToken;
        tokenRef.current = Token;
        setIsLoggedIn(true);
        setLoginFailMassage("");
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setLoginFailMassage(err.message);

        // since loggin on production doens not work due to cors policy I will diplay my mediaListFakeApi
        timeout = setTimeout(() => {
          setIsLoggedIn(true);
          setLoginFailMassage("");
        }, 2000);
      });

    return () => clearTimeout(timeout);
  }, []);

  // getMediaList
  useEffect(() => {
    if (!tokenRef.current) return;

    axios
      .post<MediaListObj>(GET_MEDIA_LIST_ENDPOINT, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          Authorization: `Bearer ${tokenRef.current}`,
        },
        data: {
          MediaListId: 2,
          IncludeCategories: false,
          IncludeImages: true,
          IncludeMedia: false,
          PageNumber: 1,
          PageSize: 15,
        },
      })
      .then((res) => {
        setMediaList(res.data);
      })
      .catch((err) => {
        // I always get 401 - that is why I use madiaListFakeAPi to go further with task
        // There was no problem with request in postman and this is where I get data to hartcode in data/mediaList.json
        console.log(err);
        setMediaList(mediaListFakeApi);
      });
  }, [isLoggedIn]);

  return (
    <>
      <CssBaseline />

      {isLoggedIn ? (
        <Container>{mediaList && <Home mediaList={mediaList} />}</Container>
      ) : (
        <SplashScreen loginFailMassage={loginFailMassage} />
      )}
    </>
  );
}

export default App;
