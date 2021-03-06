import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      turn: 'X',
      gameEnded: false, 
      board: Array(9).fill('')

    }
  }

  clicked(event) {

    this.state.board[event.target.dataset.square] = this.state.turn;

    event.target.innerText = this.state.turn;
    this.setState({
      turn: this.state.turn == 'X' ? '0' : 'X',
      board: this.state.board,
    })
    console.log(this.state.board);
  }
/*  constructor(props) {
    super(props);

    this.state = {
      board: [
      ]
    }
    for (let i = 0; i < 9; i++) {
      this.state.board.push(
        {
          idx: i,
          val: ""
        }
      )
    }
    }
    */
  
  render() {
    return (
      <div id="game">
        <div id="head">
            tic tac toe 
        </div>
        <div id="board" onClick={(e)=>this.clicked(e)}>
          <div className="square" data-square="0"></div>
          <div className="square" data-square="1"></div>
          <div className="square" data-square="2"></div>
          <div className="square" data-square="3"></div>
          <div className="square" data-square="4"></div>
          <div className="square" data-square="5"></div>
          <div className="square" data-square="6"></div>
          <div className="square" data-square="7"></div>
          <div className="square" data-square="8"></div>
        </div>

      </div>
    );
  }
}

export default App;


/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */