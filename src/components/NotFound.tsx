import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type NotFoundProps = {
  text: string;
};

const NotFoundStyle = styled.div`
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  font-size: 1.5rem;
  position: relative;
  background-color: white;

  h2 {
    margin: 0;
    padding: 10px 0;
  }
`;

export default function NotFound({ text }: NotFoundProps) {
  return (
    <NotFoundStyle>
      <h2>404 - {text} Not Found!</h2>
      <Link to="/">Go Home</Link>
    </NotFoundStyle>
  );
}
