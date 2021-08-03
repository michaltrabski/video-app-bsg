import React, { useEffect, useRef, useState } from "react";
import { CssBaseline } from "@material-ui/core";
import Container from "./components/Container";
import SplashScreen from "./components/SplashScreen";
import { AuthData, login } from "./utils/utils";
import mediaListFakeApi from "./data/mediaList.json";
import Home from "./components/Home";
import axios, { AxiosResponse, AxiosError } from "axios";

const SIGN_IN_ENDPOINT = "https://thebetter.bsgroup.eu/Authorization/SignIn";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFailMassage, setLoginFailMassage] = useState("");

  const [res, setRes] = useState({});
  const [videos, setVideos] = useState({});
  const tokenRef = useRef<string | null>(null);

  const [mediaList, setMediaList] = useState(mediaListFakeApi);

  useEffect(() => {
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
      });
  }, []);

  //   const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
  //     setIsLoggedIn(false);
  //   }, 1000);

  //   return () => clearTimeout(timeout);
  // }, []);

  const getMediaList = () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    // axios.defaults.headers.common["Authorization"] = token;
    // console.log(1, axios.defaults.headers);

    axios
      .post("https://thebetter.bsgroup.eu/Media/GetMediaList", {
        ...config,
        data: {
          MediaListId: 2,
          IncludeCategories: false,
          IncludeImages: true,
          IncludeMedia: false,
          PageNumber: 1,
          PageSize: 15,
        },
      })
      .then((res: any) => {
        console.log(res);
        console.log("getMediaList DONE SUCCESS");
      })
      .catch((err) => {
        console.log(err);
        // setRes(err);
      });
  };

  return (
    <>
      <CssBaseline />
      {/* {localStorage.getItem("token")}
      <div>
        <button onClick={getMediaList}>getMedia</button>
      </div>

      <pre>{JSON.stringify(res, null, 2)}</pre> */}
      {isLoggedIn ? (
        <Container>
          <>
            <Home mediaList={mediaList} />
            {/* tokenRef.current = <br /> <br />
            {tokenRef.current}
            <br />
            <br />
            <pre>{JSON.stringify(videos, null, 2)}</pre> */}
          </>
        </Container>
      ) : (
        <SplashScreen loginFailMassage={loginFailMassage} />
      )}
    </>
  );
}

export default App;
