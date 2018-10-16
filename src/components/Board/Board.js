import React, { Component } from "react";
import Box from "../Box/Box";
import "./Board.css";

class Board extends Component {
  state = {
    boxes: Array(9).fill(null),
    xPlaysNext: true
  };

  reset = () => {
    this.setState({
      boxes: this.state.boxes.map(x => null),
      xPlaysNext: true
    });
  };

  findWinner = boxes => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        return boxes[a];
      }
    }
    return null;
  };

  clickHandler = i => {
    console.log(i);
    const boxes = [...this.state.boxes];
    if (boxes[i] || this.findWinner(boxes)) return;
    boxes[i] = this.state.xPlaysNext ? "X" : "O";
    this.setState({
      boxes: boxes,
      xPlaysNext: !this.state.xPlaysNext
    });
  };

  render = () => {
    const winner = this.findWinner(this.state.boxes);
    let status;
    let winStyle = {};

    if (winner) {
      status = `${winner} WINS`;
      winStyle = {
        backgroundColor: "#48ff0081"
      };
    } else {
      status = `${this.state.xPlaysNext ? "X" : "O"} Plays Now`;
    }

    return (
      <div className="gameBoard">
        <div className="gameBoard__status">
          {status}
          <button className="gameBoard__reset" onClick={() => this.reset()}>
            &#8634;
          </button>
        </div>

        <div className="gameBoard__field" style={winStyle}>
          <Box
            value={this.state.boxes[0]}
            clicked={this.clickHandler.bind(this, 0)}
          />
          <Box
            value={this.state.boxes[1]}
            clicked={this.clickHandler.bind(this, 1)}
          />
          <Box
            value={this.state.boxes[2]}
            clicked={this.clickHandler.bind(this, 2)}
          />

          <Box
            value={this.state.boxes[3]}
            clicked={this.clickHandler.bind(this, 3)}
          />
          <Box
            value={this.state.boxes[4]}
            clicked={this.clickHandler.bind(this, 4)}
          />
          <Box
            value={this.state.boxes[5]}
            clicked={this.clickHandler.bind(this, 5)}
          />

          <Box
            value={this.state.boxes[6]}
            clicked={this.clickHandler.bind(this, 6)}
          />
          <Box
            value={this.state.boxes[7]}
            clicked={this.clickHandler.bind(this, 7)}
          />
          <Box
            value={this.state.boxes[8]}
            clicked={this.clickHandler.bind(this, 8)}
          />
        </div>
      </div>
    );
  };
}

export default Board;
