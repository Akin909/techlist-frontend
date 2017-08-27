import styled from "styled-components";
import { Button, shadowing } from "./../Common/styles";

export const SearchButton = Button.extend`
    height: 1.4em;
    background-color: #1976d2;
    display: flex;
    justify-content: center;
    padding: 0;
`;

export const NavContainer = styled.nav`
    width: 100%;
    background-color: #2196f3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    ${shadowing};
`;

export const Input = styled.input`
    height: 1.4em;
    width: 100%;
    padding-left: 1em;
    border-radius: 0.03em;
    border: none;
    margin: 0.5em;
    ${shadowing};
`;

export const Label = styled.label`
    width: 70%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CategoryContainer = styled.section`
    width: 100%;
    height: 1.3em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #115dd2;
`;

export const Category = styled.article`
    flex: 1;
    height: 1.2em;
    border-right: 1px white solid;
    color: white;
    text-align: center;

    &: hover {
        background-color: #26fffa;
        color: black;
    }
`;
