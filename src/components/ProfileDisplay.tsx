import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";
import NotFound from "./NotFound";
import { getProfileBySlugName } from "../api";
import { ProfilePage } from "../common/types";

const ProfileDisplayStyle = styled.div`
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  font-size: 1.5rem;
  position: relative;
  background-color: ${(props) =>
    props.theme.backgroundColor !== null
      ? props.theme.backgroundColor
      : "grey"};
`;

const ProfileWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export default function ProfileDisplay() {
  const { slugName } = useParams<{ slugName: string }>();

  const { isLoading, error, data } = useQuery<ProfilePage | null>(
    ["getProfileBySlugName", slugName],
    () => getProfileBySlugName(slugName)
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {data ? (
        <ProfileDisplayStyle theme={data.pages[0].theme}>
          <ProfileWrapperStyle>
            <Profile profile={data.pages[0]} displayInGrid={false} />
          </ProfileWrapperStyle>
        </ProfileDisplayStyle>
      ) : (
        <NotFound text={"Profile"} />
      )}
    </>
  );
}
