import React from 'react';
import './List.css';
import AddItem from './AddItem.js';

export default class List extends React.Component {
    constructor() {
        super();
        this.state = { 
            item : "",  
        };
    }

    render() {
        const nameslist = this.props.listTitle;
        if (nameslist.length > 0) {
            return(
                <div className="ListStyle">
                    {nameslist.map(key => 
                        <AddItem key={key} listName={key} list={this.props.list} /> 
                    )}
                </div>
            );
        }
        return(
            <div> </div>
        );
    }
}

