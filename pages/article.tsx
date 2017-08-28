import * as React from "react";
import Layout from "./../layouts/main";
import ArticleContainer from "./../containers/ArticleContainer";

interface IProps {
    url: {
        pathname: string;
        query: {
            article?: string;
        };
    };
}

export default ({ url }: IProps) =>
    <Layout>
        <ArticleContainer article={url.query.article} />
    </Layout>;
