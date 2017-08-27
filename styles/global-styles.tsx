import { injectGlobal } from "styled-components";

export default injectGlobal`
    body,html {
        margin: 0;
        padding: 0;
        font-family: Helvetica;
    }

    a {
        text-decoration: none;
        color: black;
        font-weight: 800;
    }
`;
