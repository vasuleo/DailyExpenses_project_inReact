import React from "react";
import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";

function Expence(props) {
  return (
    <div className="expense-item">
      <ExpenceDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default Expence;
