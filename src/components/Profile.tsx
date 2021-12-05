import React from "react";
import styled from "styled-components";
import { ProfilePageLink, ProfileType } from "../common/types";
import ProfileLink from "./ProfileLink";
import ShareModalButton from "./ShareModalButton";

const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;

  a,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`;

const ProfileImageStyle = styled.img`
  padding-top: 20px;
  width: 100px;
  height: 100px;
  border-radius: ${(props) =>
    props.theme.profileImageShapeType === "circle" ? "50%" : "0%"};
`;

type ProfileTypes = {
  profile: ProfileType;
  displayInGrid: boolean;
};

export default function Profile({ profile, displayInGrid }: ProfileTypes) {
  return (
    <ProfileStyle>
      {profile.share && !displayInGrid ? (
        <ShareModalButton shortUrl={profile.shortUrl} />
      ) : null}

      <ProfileImageStyle
        theme={profile.theme}
        src={profile.profileImage}
        alt={profile.displayName}
      ></ProfileImageStyle>
      <h2>{profile.displayName}</h2>
      <h2>{profile.caption}</h2>
      {profile.links.map((link: ProfilePageLink) => (
        <ProfileLink key={link.id} link={link} displayInGrid={displayInGrid} />
      ))}
    </ProfileStyle>
  );
}
