import React, { Component } from "react";
import ReactDOM from "react-dom";
import DrumPad from "./DrumPad";
import Display from "./Display";

export default class App extends React.Component { 
    constructor() {
        super();
    }
    
    render() {
        return (
            <div id="drum-machine"> 
                <Display />
                <DrumPad id="Bass" keys="Q" sound="http://billor.chsh.chc.edu.tw/sound/bass4.wav"/> 
                <DrumPad id="Snare" keys="W" sound="https://www.myinstants.com/media/sounds/snare.mp3"/> 
                <DrumPad id="Bass_Drum" keys="E" sound="https://www.myinstants.com/media/sounds/bass-drum.mp3"/> 
                <DrumPad id="High_Hat" keys="A" sound="http://www.denhaku.com/r_box/tr707/closed.wav"/> 
                <DrumPad id="Closed_HH" keys="S" sound="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"/> 
                <DrumPad id="Side_Stick" keys="D" sound="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"/> 
                <DrumPad id="Chord_1" keys="Z" sound="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"/> 
                <DrumPad id="Chord_2" keys="X" sound="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"/> 
                <DrumPad id="Chord_3" keys="C" sound="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"/> 
            </div>
        )
    };
}

const container = document.getElementById("app");

ReactDOM.render(
    <App />,
    container
);
