import React from "react";
import Container from "@material-ui/core/Container";

interface Props {
  children: React.ReactNode;
}
export default function SimpleContainer(props: Props) {
  return (
    <React.Fragment>
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        {props.children}
      </Container>
    </React.Fragment>
  );
}
