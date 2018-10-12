import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Display from "./Display";
import Lights from "./Lights";


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            display: "0",
            result: "0",
            prevNum: "0",
            currNum: "0",
            signal: "+"
        }
        this.changeDisplay = this.changeDisplay.bind(this);
        this.operation = this.operation.bind(this);
        this.printResult = this.printResult.bind(this);
    }

    changeDisplay(e) {
        let display = this.state.display;
        let result = this.state.result;
        if (e.target.textContent.trim() == "Clear") {
            this.setState({
                display: "0",
                result: "0",
                prevNum: "0",
                currNum: "0",
                signal: "+"
            });
        } else if (result == display) {
            this.setState({
                display: e.target.textContent.trim(),
                currNum: e.target.textContent.trim()
            });
        } else {
            this.setState({
                display: display + e.target.textContent.trim(),
                currNum: this.state.currNum + e.target.textContent.trim()
            })
        }
    }

    operation(e) {
        let display = this.state.display;
        let length = display.length - 1;
        let signal = e.target.textContent.trim();
        let expression = `${this.state.prevNum}${signal}${this.state.currNum}`;
        if (display[length] == this.state.signal) {
            this.setState({
                display: display,
            })
        } else if (display.split("").find(symbol => symbol === signal ? true : false)) {
            this.setState({
                display: eval(expression).toString(),
                result: eval(expression).toString(),
                currNum: eval(expression).toString(),
            })
        } else {
            this.setState({
                display: display + e.target.textContent.trim(),
                prevNum: this.state.currNum,
                currNum: "",
                signal: signal
            })
        }
    }

    printResult() {
        let display = this.state.display;
        let expression = `${this.state.prevNum}${this.state.signal}${this.state.currNum}`;
        this.setState({
            display: eval(expression).toString(),
            result: eval(expression).toString(),
            currNum: eval(expression).toString()
        });
    }

    render() {
        return (
            <div> 
                <div className="header">
                    <div className="title">
                        <h1> Javascript Calculator </h1>
                        <p> by Bruno Nakayabu </p>
                    </div>
                    <Lights />
                </div>
                <div className="calculator" id="calculator">
                    <Display display={this.state.display} />
                    <div className="numbers">
                        <Button id="zero" symbol="0" handleClick={this.changeDisplay} />
                        <Button id="one" symbol="1" handleClick={this.changeDisplay} />
                        <Button id="two" symbol="2" handleClick={this.changeDisplay} />
                        <Button id="three" symbol="3" handleClick={this.changeDisplay} />
                        <Button id="four" symbol="4" handleClick={this.changeDisplay} />
                        <Button id="five" symbol="5" handleClick={this.changeDisplay} />
                        <Button id="six" symbol="6" handleClick={this.changeDisplay} />
                        <Button id="seven" symbol="7" handleClick={this.changeDisplay} />
                        <Button id="eight" symbol="8" handleClick={this.changeDisplay} />
                        <Button id="nine" symbol="9" handleClick={this.changeDisplay} />
                        <Button id="equals" symbol="=" handleClick={this.printResult}/>
                        <Button id="decimal" symbol="." handleClick={this.changeDisplay} />
                    </div>
                    <div className="operators">
                        <Button id="add" symbol="+" handleClick={this.operation} />
                        <Button id="subtract" symbol="-" handleClick={this.operation} />
                        <Button id="multiply" symbol="*" handleClick={this.operation} />
                        <Button id="divide" symbol="/" handleClick={this.operation} />
                    </div>
                    <div className="clear-btn">
                        <Button id="clear" symbol="Clear" handleClick={this.changeDisplay} />
                    </div>
                </div>
            </div>
        )
    }
}

const container = document.getElementById("app");

ReactDOM.render(
    <App />,
    container
);
