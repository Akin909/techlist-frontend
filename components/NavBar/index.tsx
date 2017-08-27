import * as React from "react";
import { NavContainer, Input, SearchButton, Label, Category, CategoryContainer } from "./styles";
import { Title } from "./../Common/styles";

interface Props {
    value?: string;
    handleChange: (val: string) => void;
    handleSelectChange?: (val: string) => void;
}

const categories = ["AI", "startups", "robotics"];
export default ({ value, handleChange, handleSelectChange }: Props) =>
    <NavContainer>
        <Title>MedTechList</Title>
        <Label>
            <Input onChange={e => handleChange(e.currentTarget.value)} value={value} />
            <SearchButton>Search</SearchButton>
        </Label>
        <CategoryContainer>
            {categories.map(category =>
                <Category key={category}>
                    {category}
                </Category>,
            )}
        </CategoryContainer>
    </NavContainer>;
