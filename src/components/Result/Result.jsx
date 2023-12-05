import { Component } from "react";
import "./Result.css";

export default class Result extends Component {
  render() {
    return (
      <div className="result">
        <h1>Result</h1>
        <div className="details">
          <p className="feedback">You need more practice!</p>
          <span className="score">
            Your score is <span className="percent">20%</span>
          </span>
          <div className="other">
            <p className="detail">
              <span>Total number of questions</span>
              <span>15</span>
            </p>
            <p className="detail">
              <span>Number of attempted questions</span>
              <span>9</span>
            </p>
            <p className="detail">
              <span>Number of correct answers</span>
              <span>3</span>
            </p>
            <p className="detail">
              <span>Number of wrong answers</span>
              <span>6</span>
            </p>
          </div>
        </div>

        <div className="action">
          <button className="btn-playagain">Play Again</button>
          <button className="btn-backhome">Back to home</button>
        </div>
      </div>
    );
  }
}
