import * as React from "react";
import Layout from "./../layouts/main";
import ArticleContainer from "./../containers/ArticleContainer";

interface IProps {
    url: {
        pathname: string;
        query: any;
    };
}

export default ({ url: { query: { article } } }: IProps) =>
    <Layout>
        <ArticleContainer article={article} />
    </Layout>;
