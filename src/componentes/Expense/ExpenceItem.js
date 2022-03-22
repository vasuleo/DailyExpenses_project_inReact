import React, { useState } from "react";
import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";

function Expence(props) {
  const [title, setTitle] = useState(props.title);

  const clickable = () => {
    setTitle("updated@");
    console.log(title);
  };
  return (
    <div className="expense-item">
      <ExpenceDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickable}>demoButton</button>
    </div>
  );
}

export default Expence;
