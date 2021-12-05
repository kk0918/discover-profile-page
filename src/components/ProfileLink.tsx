import React from "react";
import styled from "styled-components";
import rocketIcon from "../static/rocket-outline.svg";
import { ProfilePageLink } from "../common/types";

type ProfileLinkStyle = {
  displayInGrid: boolean;
};

const ProfileLinkDetailStyle = styled.div<ProfileLinkStyle>`
  display: flex;
  align-items: center;
  width: ${(props) => (props.displayInGrid ? "180px" : "480px")};
  background-color: white;
  padding: 10px;
  margin: 10px 0;

  img {
    height: ${(props) => (props.displayInGrid ? "20px" : "50px")};
    height: ${(props) => (props.displayInGrid ? "20px" : "50px")};
  }

  h3 {
    padding-left: 20px;
  }
`;

type ProfileLinkProps = {
  key: string;
  link: ProfilePageLink;
  displayInGrid: boolean;
};

export default function ProfileLink({ link, displayInGrid }: ProfileLinkProps) {
  const thumbNailImgUrl = link.thumbNailImgUrl
    ? link.thumbNailImgUrl
    : rocketIcon;

  return (
    <a href={link.actionData.link}>
      <ProfileLinkDetailStyle displayInGrid={displayInGrid}>
        <img src={thumbNailImgUrl} alt="Link"></img>
        <h3>
          {link.title}
          <br />
        </h3>
      </ProfileLinkDetailStyle>
    </a>
  );
}
