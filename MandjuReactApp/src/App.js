import React, { Component } from 'react';
import './App.css';
import AddList from './AddList.js';
import List from './List.js';

export default class App extends React.Component {
  constructor() {
      super();
      this.state = {
        listname : [],
        listitems: {},
        motiBranco : null,
        motiVerde : null,
        motiNantu : null,
        MA : null,
        MV : null,
      };
      this.handleListName = this.handleListName.bind(this);
      this.upB = this.upB.bind(this);
      this.upN = this.upN.bind(this);
      this.upV = this.upV.bind(this);
      this.upMA = this.upMA.bind(this);
      this.upMV = this.upMV.bind(this);
  }

  handleListName(name) {
      let listitems = {...this.state.listitems};
      listitems[name] = [this.state.motiBranco, this.state.motiNantu, this.state.motiVerde, this.state.MA, this.state.MV];
      this.setState({
          listname: [...this.state.listname, name],
          listitems : listitems
      });
  }

  upB(b) {
    this.setState({
      motiBranco: b.target.value
    });
  }

  upN(n) {
    this.setState({
      motiNantu: n.target.value
    });
  }

  upV(v) {
    this.setState({
      motiVerde: v.target.value
    });
  }

  upMA(ma) {
    this.setState({
      MA: ma.target.value
    });
  }

  upMV(mv) {
    this.setState({
      MV: mv.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Mandju </h1>
        <div>
            <AddList list={this.handleListName} B={this.upB} N={this.upN} V={this.upV} MA={this.upMA} MV={this.upMV}/>
        </div>
        <div className="grid">
            <List listTitle={this.state.listname} list={this.state.listitems}/>
        </div>
      </div>
    );
  }
}

