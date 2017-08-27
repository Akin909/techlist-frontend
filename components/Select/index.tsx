import * as React from "react";

import { Select, Option } from "./styles";

interface Props {
    categories: string[];
    handleChange: (selected: string) => void;
}

export default ({ categories, handleChange }: Props) =>
    <Select onChange={({ currentTarget: { value } }) => handleChange(value)}>
        {categories.map((category, index) =>
            <Option key={index}>
                {category}
            </Option>,
        )}
    </Select>;
