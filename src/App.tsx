import React, { useEffect, useState } from "react";
import { CssBaseline } from "@material-ui/core";
import Container from "./components/Container";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <CssBaseline />
      {loading ? (
        <SplashScreen />
      ) : (
        <Container>
          <>to jest screen</>
        </Container>
      )}
    </>
  );
}

export default App;
