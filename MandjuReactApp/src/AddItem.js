import React from 'react';
import './AddItem.css';
import ItensList from './itensList.js';

export default class AddItem extends React.Component {
    constructor() {
        super();
        this.state = { 
        };
    }

    render() {
        return(
            <div className="title-list">
                <h4> {this.props.listName} </h4>
                <ItensList itemName={this.props.list} listName={this.props.listName} />
            </div>
        );
    }
}
