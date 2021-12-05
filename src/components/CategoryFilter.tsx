import React from "react";
import styled from "styled-components";

const CategoryFilterStyle = styled.ul`
    display: flex;
    flex-wrap; nowrap;
    align-items: flex-end;
    padding: 0px;
    list-style-type: none;

    li {
        padding-right: 2rem;
    }  
`;

type CategoryStyleProps = {
  selected: boolean;
};

const CategoryStyle = styled.a<CategoryStyleProps>`
  background: transparent;
  border: none !important;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  font-size: 1rem;

  font-weight: ${(props) => (props.selected ? "bold" : "normal")}; ;
`;

type CategoryFilterProps = {
  selectedCategory: string;
  categories: string[];
  handleCategoryChange: (category: string) => void;
};

export default function CategoryFilter({
  selectedCategory,
  categories,
  handleCategoryChange,
}: CategoryFilterProps) {
  return (
    <CategoryFilterStyle>
      {categories.map((category: string) => (
        <li key={category}>
          <CategoryStyle
            selected={category === selectedCategory}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </CategoryStyle>
        </li>
      ))}
      <hr />
    </CategoryFilterStyle>
  );
}
