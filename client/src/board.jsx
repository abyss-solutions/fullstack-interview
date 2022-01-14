import React from "react";

const Board = ({ board }) => {
  return (
    <ul>
      {board.map((row, r) => (
        <li key={r}>
          {row.map((cell, c) => (
            <span key={[r, c]}>{cell}</span>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default Board;
