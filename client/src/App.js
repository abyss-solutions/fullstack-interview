import "./App.css";
import { useEffect, useState } from "react";
import Board from "./board";

function App() {
  const [board, setBoard] = useState([[]]);
  useEffect(() => {
    fetch("http://localhost:8080/board", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setBoard(data);
      });
  }, []);
  return (
    <div className="App">
      <Board board={board} />
    </div>
  );
}

export default App;
