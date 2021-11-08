import "./App.css";
import OutputDisplay from "./componets/OutputDisplay";
import InputKeys from "./componets/InputKeys";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const setIntputValue = (value) => {
    if(value !== "="){
      setOutput('')
      setError('')
    }


    if (value === "All Clear") {
      setInput("");
    } else if (value === "Clear") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      genertateOutput();
      setInput('')
    } else {
      setInput(input + value);
    }
  };

  const genertateOutput = () => {
    try {
      const out = evaluate(input);
      setOutput(out);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <div>X</div>
      <div>+</div>
      <div>%</div>
      <div>=</div>
      <h1>Calcutor app</h1>

      <OutputDisplay input={input} output={output} error={error} />
      <InputKeys setIntputValue={setIntputValue} />
    </div>
  );
}

export default App;
