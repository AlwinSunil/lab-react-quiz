import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { QuizStateContext } from "../../App";
import "./Quiz.css";

function Quiz(props) {
  const { indexState, question, length } = props;
  const { currIndex, setCurrIndex } = indexState;

  const { quizState, setQuizState } = useContext(QuizStateContext);

  const navigate = useNavigate();

  const handleOptionClick = (selected) => {
    const selectedOption =
      selected === "A"
        ? question.optionA
        : selected === "B"
        ? question.optionB
        : selected === "C"
        ? question.optionC
        : selected === "D"
        ? question.optionD
        : null;

    handleQuizState(selectedOption, question);

    if (selectedOption === question.answer) alert("Correct Answer!");
    else alert("Wrong Answer!");

    handleNextQues();
  };

  const handleQuizState = (selectedOption, question) => {
    const isCorrect = selectedOption === question.answer;
    const updatedAttemptedQuestions = [...quizState];

    const existingAttempt = updatedAttemptedQuestions.find(
      (attempted) => attempted.question === question.question
    );

    if (existingAttempt) {
      existingAttempt.selectedOption = selectedOption;
    } else {
      updatedAttemptedQuestions.push({
        question: question.question,
        selectedOption,
        isCorrect,
      });
    }

    setQuizState(updatedAttemptedQuestions);
  };

  const handleNextQues = () => {
    setCurrIndex((currIndex + 1) % length);
  };

  const handlePrevQues = () => {
    setCurrIndex((currIndex - 1 + length) % length);
  };

  return (
    <div className="quiz">
      <div className="container">
        <h2>Question</h2>
        <p className="track">
          <span>{currIndex + 1}</span> of <span>{length}</span>
        </p>
        <span className="ques">{question.question}</span>
        <div className="options">
          <div className="option" onClick={() => handleOptionClick("A")}>
            {question.optionA}
          </div>
          <div className="option" onClick={() => handleOptionClick("B")}>
            {question.optionB}
          </div>
          <div className="option" onClick={() => handleOptionClick("C")}>
            {question.optionC}
          </div>
          <div className="option" onClick={() => handleOptionClick("D")}>
            {question.optionD}
          </div>
        </div>
        <div className="action">
          <button className="prev" onClick={handlePrevQues}>
            Previous
          </button>
          <button className="next" onClick={handleNextQues}>
            Next
          </button>
          <button
            className="quit"
            onClick={() => {
              if (window.confirm("Are you sure you want to quit ?"))
                navigate("/");
              else console.log("Continue your quiz");
            }}
          >
            Quit
          </button>
          <Link to="/result" className="finish">
            Finish
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
