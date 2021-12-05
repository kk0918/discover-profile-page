import React from "react";
import styled from "styled-components";
import ProfileCardGrid from "./ProfileCardGrid";
import CategoryFilter from "./CategoryFilter";

const DiscoverProfilesStyle = styled.div`
  position: absolute;
  top: 10%;
  bottom: 20%;
  left: 15%;
  right: 5%;
  margin-top: calc(90px - 10vh);

  span {
    display: flex;
    font-size: 2rem;
    text-align: left;
  }
`;

type DiscoverProfilesProps = {
  category: string;
  categories: string[];
  handleCategoryChange: (category: string) => void;
};

export default function DiscoverProfiles(props: DiscoverProfilesProps) {
  const { categories, category, handleCategoryChange } = props;

  return (
    <DiscoverProfilesStyle>
      <span>
        <strong>See how influencers, brands and more are using TEMPLATE</strong>
      </span>
      <CategoryFilter
        selectedCategory={category}
        categories={categories}
        handleCategoryChange={handleCategoryChange}
      />
      <ProfileCardGrid category={category} />
    </DiscoverProfilesStyle>
  );
}
