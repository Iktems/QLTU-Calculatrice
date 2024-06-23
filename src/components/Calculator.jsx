import { useReducer } from "react";
import OneButton from "./OneButton";
import Calculateur from "../tests/TDD/calculatrice.jsx";

const initialState = {
  numbers: [],
  memory: [],
  total: "",
  type: "",
  display: ""
};

// Un reducer pour gérer les actions de la calculatrice
const reducer = (state, action) => {
  let total = 0, memory, number;

  switch (action.type) {
    case "SET_NUMBER":
      return {
        ...state,
        numbers: [...state.numbers, action.number],
        display: state.display + action.number
      };

    case "SUB":
    case "MULT":
    case "ADD":
    case "DIV":
      number = parseInt(state.numbers.join(""));
  
      if (!isNaN(number)) {
        memory = [...state.memory, number];
      } else {
        memory = [...state.memory];
      }

      return {
        ...state,
        numbers: [],
        memory,
        type: action.type,
        display: state.display + action.symbol
      };

    case "RESET":
      return {
        ...state,
        numbers: [],
        memory: [],
        total: "",
        display: ""
      };

    case "TOTAL":
      total = calculateTotal(state);
      return {
        ...state,
        numbers: [],
        memory: [total],
        total: total,
        display: total.toString()
      };

    default:
      throw new Error();
  }
};

// Fonction pour calculer le total en fonction de l'opération
const calculateTotal = (state) => {
  const currentNumber = parseInt(state.numbers.join(""));
  const previousNumber = state.memory[0];
  const calculateur = new Calculateur();

  switch (state.type) {
    case "ADD":
      return calculateur.add(previousNumber, currentNumber);
    case "MULT":
      return calculateur.multiply(previousNumber, currentNumber);
    case "SUB":
      return calculateur.substract(previousNumber, currentNumber);
    case "DIV":
      return calculateur.divide(previousNumber, currentNumber);
    default:
      return 0;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <p>
        <input
          style={{ height: "30px", width: "300px" }}
          type="text"
          value={state.display}
          readOnly
        />
      </p>
      <p className="numbers">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number, i) => (
          <OneButton key={i} number={number} dispatch={dispatch} />
        ))}
      </p>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "ADD", symbol: "+" })}>+</button>
        <button onClick={() => dispatch({ type: "SUB", symbol: "-" })}>-</button>
        <button onClick={() => dispatch({ type: "MULT", symbol: "x" })}>x</button>
        <button onClick={() => dispatch({ type: "DIV", symbol: "/" })}>/</button>
      </div>
      <p>
        <button onClick={() => dispatch({ type: "TOTAL" })}>=</button>
      </p>
    </div>
  );
}

export default Calculator;
