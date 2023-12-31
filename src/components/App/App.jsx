import React from "react";
import Header from "../Header/Header";
import './App.css';
import SearchBox from "../SearchBox/SearchBox";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const name = require('@rstacruz/startup-name-generator')

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            headerText: 'Name it!',
            headerExpanded: true,
            suggestedNames: [],
        }
    }

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        })

    }

    render() {

        return (
            <div><Header headerExpanded={this.state.headerExpanded}
                headtitle={this.state.headerText} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}


export default App