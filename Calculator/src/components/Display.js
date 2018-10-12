import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Display extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="screen" id="display">
                {this.props.display}
            </div>
        )
    }
}
