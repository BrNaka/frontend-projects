import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Button extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <a className="button" id={this.props.id} href="#" onClick={this.props.handleClick}> {this.props.symbol} </a>
        )
    }
}
