import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Editor from './Editor';
import Preview from './Preview';
const defaultText = require('./defaultText');

require('../main.scss');

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            text: defaultText
        };
        this.handleInputText = this.handleInputText.bind(this);
    }

    handleInputText(input) {
        this.setState({
            text: input
        });
    }

    render() {
        return(
            <div className='container'>
                <div className='title'>
                    <h1> Markdown Previewer - FCC Project </h1>
                    <p> by Bruno Nakayabu </p>
                </div>
                <div className='editor'>
                    <div className='toolbar'> 
                        <p> Input </p>
                        <div className='fbx'>
                            <div className='circle red'> </div>
                            <div className='circle yellow'> </div>
                            <div className='circle green'> </div>
                        </div>
                    </div>
                    <Editor handleChange={this.handleInputText}/>
                </div>
                <div className='preview'>
                    <div className='toolbar'>
                        <p> Output </p>
                        <div className='fbx'>
                            <div className='circle red'> </div>
                            <div className='circle yellow'> </div>
                            <div className='circle green'> </div>
                        </div>
                    </div>
                    <Preview text={this.state.text} />
                </div>
            </div>
        )
    }
}

const container = document.getElementById('app');
ReactDOM.render(<App />, container);
