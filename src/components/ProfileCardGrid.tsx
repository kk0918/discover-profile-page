import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import { getProfilePages } from "../api";
import { Pages } from "../common/types";
// import testJson from '../mock/test';

const ProfileCardGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: left;
  font-size: 0.5rem;
  grid-column-gap: 75px;
  grid-row-gap: 60px;
  max-width: 1250px;
`;

type ProfileGridProps = {
  category: string;
};

export default function ProfileCardGrid(props: ProfileGridProps) {
  const { isLoading, data } = useQuery<Pages>(
    "getProfilePages",
    getProfilePages
  );

  let filteredProfiles;

  if (isLoading) return <p>Loading...</p>;

  if (data) {
    filteredProfiles = data.pages;
    if (props.category.toLowerCase() !== "all") {
      filteredProfiles = filteredProfiles.filter((profile) => {
        return (
          profile.category &&
          profile.category.toLowerCase() === props.category.toLowerCase()
        );
      });
    }
  }
  return (
    <ProfileCardGridStyle>
      {filteredProfiles &&
        filteredProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
    </ProfileCardGridStyle>
  );
}
