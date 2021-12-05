import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";
import { ProfilePage, ProfileTheme } from "../common//types";

type ProfileCardStyleProps = {
  theme: ProfileTheme;
};

const ProfileCardStyle = styled.div<ProfileCardStyleProps>`
  border-radius: 20px;
  height: 547px;
  color: black;
  background-color: ${(props) =>
    props.theme.backgroundColor !== null
      ? props.theme.backgroundColor
      : "grey"}; ;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

type ProfileCardTypes = {
  profile: ProfilePage;
};

export default function ProfileCard({ profile }: ProfileCardTypes) {
  const { slugName, theme } = profile.pages[0];
  return (
    <StyledLink to={`/page/${slugName}`}>
      <ProfileCardStyle theme={theme}>
        <Profile profile={profile.pages[0]} displayInGrid={true} />
      </ProfileCardStyle>
    </StyledLink>
  );
}
