import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const defaultText = require('./defaultText');

export default class Editor extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            value: defaultText
        }
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(e) {
        this.setState({
            value: e.target.value
        })
        this.props.handleChange(e.target.value);
    }

    render() {
        return (
            <div>
                <textarea id='editor' onChange={this.changeValue} value={this.state.value}> </textarea>
            </div>
        )
    }
}
