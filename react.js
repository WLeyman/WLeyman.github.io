import React from 'react'
import ReactDOM from 'react-dom'

class CalculatorData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            commandLine: '',
            display: ''
        };
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(button){
        if(button == "AC"){
            this.setState({
                commandLine: '',
                display: ''
            });
        } else if(button == "="){
            let exprEval = eval(this.state.commandLine); 
            this.setState({
                commandLine: this.state.commandLine + "=" + exprEval,
                display: exprEval,
            })
        } else {
            this.setState({
                commandLine: this.state.commandLine + button,
                display: button
            })
        }
    }

    render(){
        return (
            <div>
                <div id="display">
                    <p id="command-display">{this.state.commandLine}</p>
                    <p id="main-display">{this.state.display}</p>
                </div>
                <button id="AC" class="AC button" onClick={this.handleButton("AC")}>AC</button>
                <button id="/" class="operation button" onClick={this.handleButton("/")}>/</button>
                <button id="*" class="operation button" onClick={this.handleButton("*")}>*</button>
                <button id="7" class="value button" onClick={this.handleButton("7")}>7</button>
                <button id="8" class="value button" onClick={this.handleButton("8")}>8</button>
                <button id="9" class="value button" onClick={this.handleButton("9")}>9</button>
                <button id="-" class="operation button" onClick={this.handleButton("-")}>-</button>
                <button id="4" class="value button" onClick={this.handleButton("4")}>4</button>
                <button id="5" class="value button" onClick={this.handleButton("5")}>5</button>
                <button id="6" class="value button" onClick={this.handleButton("6")}>6</button>
                <button id="+" class="operation button" onClick={this.handleButton("+")}>+</button>
                <button id="1" class="value button" onClick={this.handleButton("1")}>1</button>
                <button id="2" class="value button" onClick={this.handleButton("2")}>2</button>
                <button id="3" class="value button" onClick={this.handleButton("3")}>3</button>
                <button id="=" class="evaluate button" onClick={this.handleButton("=")}>=</button>
                <button id="0" class="value button" onClick={this.handleButton("0")}>0</button>
                <button id="." class="value button" onClick={this.handleButton(".")}>.</button>
            </div>
        )
    }
};

ReactDOM.render(
    <CalculatorData />,
    document.getElementById("calculator")
);
const parser = new DOMParser();
parser.parseFromString(html, 'text/html');
