import React, { Component } from "react";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import Head from "next/head";
import initRedux from "./InitRedux";
import initApollo from "./InitApollo";

interface context {
    query: any;
    pathname: string;
}

interface IProps {
    serverState?: any;
}

interface IServerState {
    apollo?: any;
}

function getComponentDisplayName(Component: any) {
    return Component.displayName || Component.name || "Unknown";
}

export default (ComposedComponent: any) => {
    return class WithData extends Component<IProps, {}> {
        static displayName = `WithData(${getComponentDisplayName(ComposedComponent)})`;

        static async getInitialProps(ctx: context) {
            let serverState: IServerState = {};
            let composedInitialProps = {};
            if (ComposedComponent.getInitialProps) {
                composedInitialProps = await ComposedComponent.getInitialProps(ctx);
            }

            if (!process["browser"]) {
                const apollo = initApollo();
                const redux = initRedux(apollo);
                const url = { query: ctx.query, pathname: ctx.pathname };

                try {
                    await getDataFromTree(
                        <ApolloProvider client={apollo} store={redux}>
                            <ComposedComponent url={url} {...composedInitialProps} />
                        </ApolloProvider>,
                    );
                } catch (error) {
                    //Error handling
                    console.warn("Apollo Error: ", error);
                    return error;
                }
                Head.rewind();
                const { apollo: { data } }: any = redux.getState();

                serverState = {
                    apollo: {
                        data,
                    },
                };
            }
            return {
                serverState,
                ...composedInitialProps,
            };
        }
        apollo = initApollo();
        redux = initRedux(this.apollo, this.props.serverState);
        render() {
            return (
                <ApolloProvider client={this.apollo} store={this.redux}>
                    <ComposedComponent {...this.props} />
                </ApolloProvider>
            );
        }
    };
};
