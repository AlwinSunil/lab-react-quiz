import { Component } from "react";
import "./Quiz.css";

export default class Quiz extends Component {
  render() {
    return (
      <div className="quiz">
        <div className="container">
          <h2>Question</h2>
          <p className="track">
            <span>1</span> of <span>15</span>
          </p>
          <span className="ques">Which is the only mammal that can jump?</span>
          <div className="options">
            <div className="option">Dog</div>
            <div className="option">Elephant</div>
            <div className="option">Goat</div>
            <div className="option">Lion</div>
          </div>
          <div className="action">
            <button className="prev">Previous</button>
            <button className="next">Next</button>
            <button className="quit">Quit</button>
          </div>
        </div>
      </div>
    );
  }
}
