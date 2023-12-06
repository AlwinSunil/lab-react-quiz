import { Component } from "react";
import "./Quiz.css";

export default class Quiz extends Component {
  render() {
    const { state, question, index, length } = this.props;

    return (
      <div className="quiz">
        <div className="container">
          <h2>Question</h2>
          <p className="track">
            <span>{index + 1}</span> of <span>{length}</span>
          </p>
          <span className="ques">{question.question}</span>
          <div className="options">
            <div className="option">{question.optionA}</div>
            <div className="option">{question.optionB}</div>
            <div className="option">{question.optionC}</div>
            <div className="option">{question.optionD}</div>
          </div>
          <div className="action">
            <button
              className="prev"
              onClick={() => {
                state.setState({
                  currQues: (state.state.currQues - 1 + length) % length,
                });
              }}
            >
              Previous
            </button>
            <button
              className="next"
              onClick={() => {
                state.setState({
                  currQues: (state.state.currQues + 1) % length,
                });
              }}
            >
              Next
            </button>
            <button
              className="quit"
              onClick={() => {
                if (window.confirm("Are you sure you want to quit ?"))
                  console.log("Quit");
                else console.log("Continue your quiz");
              }}
            >
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
