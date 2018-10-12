import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class DrumPad extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="drum-pad" id={this.props.id}> 
                {this.props.keys}
                <audio src={this.props.sound} id={this.props.keys} className="clip"> </audio>
            </div>  
        );
    }
}
