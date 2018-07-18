import React from 'react';
import './AddList.css';

export default class AddList extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            disabledB: true,
            disabledN: true,
            disabledV: true,
            disabledMA: true,
            disabledMV: true
        };
        this.motiB = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.enableBranco = this.enableBranco.bind(this);
        this.enableNantu = this.enableNantu.bind(this);
        this.enableVerde = this.enableVerde.bind(this);
        this.enableMA = this.enableMA.bind(this);
        this.enableMV = this.enableMV.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            name: ""
        });
        this.props.list(this.state.name);
    }

    handleName(e) {
        this.setState({
            name : e.target.value
        });
    }

    enableBranco(click) {
        this.setState({
            disabledB : !this.state.disabledB
        });
    }

    enableNantu(click) {
        this.setState({
            disabledN : !this.state.disabledN
        });
    }

    enableVerde(click) {
        this.setState({
            disabledV : !this.state.disabledV
        });
    }

    enableMA(click) {
        this.setState({
            disabledMA : !this.state.disabledMA
        });
    }

    enableMV(click) {
        this.setState({
            disabledMV : !this.state.disabledMV
        });
    }

    render() {
        return(
            <div className="AddList">
                <h2> Fixar Pedido </h2>
                <form onSubmit={this.handleSubmit} className="AddList_form-request">
                    <div className="client-request flexBox flexBox--column">
                        <label> Nome: </label>
                        <input className="input-client" type="text" value={this.state.name} onChange={this.handleName} required/>
                    </div>
                    <div className="moti-request moti-font flexBox">
                        <label> Moti: </label> 
                        <div className="flexBox flexBox--column space-itens"> 
                              <div className="flexBox input-margin">
                                  <input type="checkbox" id="moti-branco" onClick={this.enableBranco} /> 
                                  <label className="flexBox--center"> Branco </label>
                                  <input type="number" id="num-branco" disabled={(this.state.disabledB ? "disabled" : "")} onChange={this.props.B} required /> 
                              </div>
                              <div className="flexBox marginR-auto input-margin">
                                  <input type="checkbox" id="moti-nantu" onClick={this.enableNantu} />
                                  <label className="flexBox--center"> Nantu </label>
                                  <input type="number" id="num-nantu" disabled={(this.state.disabledN ? "disabled" : "")} onChange={this.props.N} required/> 
                              </div>
                              <div className="flexBox marginR-auto input-margin">
                                  <input type="checkbox" id="moti-verde" onClick={this.enableVerde} />
                                  <label className="flexBox--center"> Verde </label> 
                                  <input type="number" id="num-verde" disabled={(this.state.disabledV ? "disabled" : "")} onChange={this.props.V} required/> 
                              </div>
                        </div>
                    </div>
                    <div className="mandju-request moti-font flexBox flexBox--start">
                        <label> Mandju: </label> 
                        <div className="flexBox--column flexBox--col-start space-itens"> 
                                <div className="flexBox marginR-auto input-margin">
                                <input type="checkbox" id="madju-assado" onClick={this.enableMA}/> 
                                <label className="flexBox--center"> Assado </label>
                                <input type="number" disabled={(this.state.disabledMA ? "disabled" : "")} onChange={this.props.MA} required/> 
                            </div>
                            <div className="flexBox marginR-auto input-margin">
                                <input type="checkbox" id="mandju-vapor" onClick={this.enableMV}/>
                                <label className="flexBox--center" id="vapor-label"> Vapor </label> 
                                <input type="number" disabled={(this.state.disabledMV ? "disabled" : "")} onChange={this.props.MV} required /> 
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="button button--submit"> Submit </button>
                </form>
            </div>
        );
    }
}
