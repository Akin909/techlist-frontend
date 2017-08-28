import * as React from "react";
import { Component } from "react";
import { graphql, MutationFunc } from "react-apollo";
import * as startupQueries from "./../graphql/startups";

interface IProps {
    article?: string;
    id: string;
    mutate?: MutationFunc<{}>;
    data: any;
    children: any;
}

class ArticleContainer extends Component<IProps> {
    render() {
        return (
            <h2>
                {this.props.article}
            </h2>
        );
    }
}

const ArticlesWithQuery = graphql(startupQueries.getStartups)(ArticleContainer);

/* const ArticlesWithQuery = graphql(startupQueries.getStartups, { */
/*     options: ({ id }: IProps) => ({ variables: { id } }), */
/* })(ArticleContainer); */
export default ArticlesWithQuery;
