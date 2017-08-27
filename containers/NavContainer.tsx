import * as React from "react";
import NavBar from "./../components/NavBar";

interface State {
    searchTerm: string;
    selected: string;
}

interface Props {}

export default class SearchContainer extends React.Component<Props, State> {
    state = {
        searchTerm: "",
        selected: "",
    };

    private handleChange = (searchTerm: string): void => {
        this.setState({ searchTerm });
    };

    private handleSelectChange = (selected: string): void => {
        this.setState({ selected });
    };

    public render() {
        return (
            <NavBar
                handleChange={this.handleChange}
                value={this.state.searchTerm}
                handleSelectChange={this.handleSelectChange}
            />
        );
    }
}
