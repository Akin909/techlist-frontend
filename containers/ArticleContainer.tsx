import React, { Component } from "react";

interface IProps {
    article: string;
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

export default ArticleContainer;
