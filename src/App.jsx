import "./App.css";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";

function App() {
  return (
    <div className="app">
      <Home />
      <Quiz />
      <Result />
    </div>
  );
}

export default App;
