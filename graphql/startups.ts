import { gql } from "react-apollo";

export const getStartupById = gql`
    query($id: String!) {
        getStartupById(id: $id) {
            name
            category
        }
    }
`;

export const getStartups = gql`
    query {
        getStartups {
            name
            category
        }
    }
`;
