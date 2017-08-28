import * as React from "react";
import Head from "next/head";
import styled from "styled-components";

import Wrapper from "./Wrapper";
import Nav from "./../containers/NavContainer";
import WithData from "./../lib/WithData";

interface ILayoutProps {
    title?: string;
    children?: any;
}

const Main = styled.main`
    width: 100%;
    height: auto;
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default WithData(({ children, title = "MedTechList" }: ILayoutProps) =>
    <Wrapper>
        <Head>
            <title>
                {title}
            </title>
        </Head>
        <header>
            <Nav />
        </header>
        <Main>
            {children}
        </Main>
    </Wrapper>,
);
