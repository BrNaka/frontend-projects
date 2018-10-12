import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Lights extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="lights">
                <img src={'http://www.jmkxyy.com/sun-icon-png/sun-icon-png-26.jpg'} id="icon"/>
                <div className="btn-container" id="btn-lights">
                    <div className="btn sun" id="btn"> </div>
                </div>
            </div>
        )
    }
}
