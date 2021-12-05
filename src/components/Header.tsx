import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  background-color: black;
  color: white;
  height: 3rem;
  border-bottom: 10px solid black;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
`;

const LogoStyle = styled.h2`
  font-size: 2rem;
  margin: 1rem 1rem auto;
`;

export default function Header() {
  return (
    <HeaderStyle>
      <LogoStyle>TEMPLATE</LogoStyle>
    </HeaderStyle>
  );
}
