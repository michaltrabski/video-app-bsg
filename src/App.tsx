import React, { useEffect, useState } from "react";
import { CssBaseline } from "@material-ui/core";
import Container from "./components/Container";
import SplashScreen from "./components/SplashScreen";
import axios from "axios";
import jwt_decode from "jwt-decode";

function App() {
  const [loading, setLoading] = useState(true);
  const [res, setRes] = useState({});

  useEffect(() => {
    console.log(11111111111111);

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    };

    axios
      .post("https://thebetter.bsgroup.eu/Authorization/SignIn", {
        ...config,
        data: {},
      })
      .then((res: any) => {
        setRes(res);
        // console.log(res);

        const { Token } = res.data.AuthorizationToken;
        // console.log(Token);

        localStorage.setItem("token", Token);
        console.log("AUTH DONE");
        // const decoded = jwt_decode(Token);
        // console.log(decoded);
      })
      .catch((err) => setRes(err))
      .finally(() => {});
  }, []);

  useEffect(() => {
    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

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
      .catch((err) => console.log(err))
      .finally(() => {});
  };

  return (
    <>
      <CssBaseline />
      {localStorage.getItem("token")}
      <div>
        <button onClick={getMediaList}>getMedia</button>
      </div>

      <pre>{JSON.stringify(res, null, 2)}</pre>
      {/* {loading ? (
        <SplashScreen />
      ) : (
        <Container>
          <>to jest screen</>
        </Container>
      )} */}
    </>
  );
}

export default App;
