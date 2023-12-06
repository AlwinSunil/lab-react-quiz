import { Component } from "react";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";
import questions from "./data/quizQuestion.json";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currQues: 0,
    };
  }

  render() {
    return (
      <div className="app">
        <Home />
        <Quiz
          state={this}
          question={questions[this.state.currQues]}
          index={this.state.currQues}
          length={questions.length}
        />
        <Result />
      </div>
    );
  }
}
